let dayMap = {'Sun':0, 'Mon':1, 'Tue':2, 'Wed':3, 'Thu':4, 'Fri':5, 'Sat': 6};
let revDayMap = Object.entries(dayMap).reduce((acc, [k,v])=>Object.assign({}, acc, {[v]:k}), {})
document.querySelector('#copyright-year').innerHTML = (new Date()).getFullYear()

document.querySelector('.mobilenavbar').addEventListener('click', function(){
   let navbar = document.querySelector('.navbar');
   navbar.classList.toggle('show')
//    if (navbar.style.opacity == 0) {
//     navbar.style.opacity = 1;
//     navbar.style.height = 'auto';
//   } else {
//     navbar.style.opacity = 0;
//     navbar.style.height = 0;
//   }
});
let syllabus;
fetch('assets/syllabus.json').then(resp=>resp.json()).then(course=>{
    syllabus = course;
    syllabus.weeks = groupByWeek(syllabus);
    renderSchedule(syllabus.weeks);
    

});
let formatDate = (d)=>`${revDayMap[d.getDay()]}, ${d.getMonth()+1}/${d.getDate()}`
function groupByWeek(syllabus){
    let days = syllabus.info.days.split('/');

    let delta = dayMap[days[1]] - dayMap[days[0]];
    let startDay = new Date(Date.parse(syllabus.info.start_date));
    let lecture = 1;
    let lab = 1;
    let groupped = syllabus.schedule.map((classDay,i)=>{
        
        let move = i%2? (7*(i-1)/2+delta):7*i/2;
        let curDay = new Date(startDay.valueOf());
        curDay.setDate(startDay.getDate() + move);
        classDay.week = `Week ${parseInt(i/2+1)}`;
        classDay.date = curDay;
        
        if (classDay.type==="lab"){
            classDay.index = lab;
            lab+=1;
        }else if (classDay.type==="lecture"){
            classDay.index = lecture
            lecture+=1;
        }    

        return classDay;
    }).reduce((acc,d,i)=>{
        if (acc[d.week]){
            acc[d.week].push(d);
        }else{
            acc[d.week] = [d];
        }
        return acc;
    },{});
    return Object.entries(groupped).map(([name,schedule])=>({name, schedule}));
}
function renderSchedule(weeks){
    let container = document.querySelector('.schedule');
    container.innerHTML='';
    weeks.forEach((week,i)=>{
       
        let weekElm = document.createElement('h3');
        weekElm.id = week.name
        weekElm.classList.add('week');
        weekElm.classList.add('title');
        weekElm.innerHTML = week.name;
        container.appendChild(weekElm);

        week.schedule.map(day=>{
            let child = renderDaySchedule(day);
            container.appendChild(child);
        });
        // let move = i%2? (7*(i-1)/2+delta):7*i/2;
        // let curDay = new Date(startDay.valueOf());
        // curDay.setDate(startDay.getDate() + move);
        // let child = renderDaySchedule(classDay, curDay);
        // container.appendChild(child);

    });
}


function renderDaySchedule(d){
    let div = document.createElement('div');
    div.classList.add('class');
    div.innerHTML =  `
        <div class="header" id="${d.title.toLowerCase().replace(/ /g,'-')}">
            <span class="date">${formatDate(d.date)}</span>
            <strong>${d.type==="lab"? '⚒ Lab':(d.type==="lecture"?'📖 Lecture':'')} ${d.index?d.index+'.':''} ${d.title}</strong>
            &nbsp;<span>${d.slides?`(<a href="${d.slides}" target="_blank">Slides</a>)`:''}</span>
        </div>
        <div class="content">
            <p class="desc">${d.desc}</p>
            <p class="readings">
                ${d.readings.length>0?renderReadings(d.readings):'<ul><li><strong>No Readings!</strong></li></ul>'}
            </p>
        </div>
        `;
    return div;
}

function renderReadings(d){
    //    ${(reading.required?'<strong>Required</strong>':'Optional')}:
    return `<ul> ${d.reduce((output, reading, i)=>{
        output+=`<li><a class='reading-title' target='_blank' href='${reading.link}'>${reading.title}</a>
            
        </li>`
        return output;
    },'')}</ul>`
}

let newsSearch = document.querySelector('.search input[name="schedule"');

newsSearch.addEventListener('input', function(event){
    // renderNews(allNews.filter(''))
    if (this.value!=''){
        let filtered = [];
        syllabus.weeks.forEach((week,i)=>{
            if (week.name.toLowerCase().includes(this.value.toLowerCase())){
                filtered.push(week);
            }else{// filter individual schedule
                let copy = {...week};
                copy.schedule = copy.schedule.filter(d=>{
                    let type = `${d.type==="lab"? 'Lab':(d.type==="lecture"?'Lecture':'')} ${d.index?d.index+'. ':''}`
                    return (formatDate(d.date) + ' ' + type + d.title).toLowerCase().includes(this.value.toLowerCase());
                })
                filtered.push(copy);
            }
        })
        renderSchedule(filtered);
    }else{
        renderSchedule(syllabus.weeks);
    }
});

let conds = document.querySelectorAll('.filter .chip');

conds.forEach(cond=>cond.addEventListener('click', function(event){
    if (this.classList.contains('selected')==false){
        let selected = document.querySelector('.chip.selected');
        selected.classList.remove('selected');
        this.classList.add('selected');   
        let dataCond = this.dataset.cond;
        let filtered = [];
        switch (dataCond){
            case 'all-schedule':
                filtered= syllabus.weeks;
                break;
            case 'next-schedule':
                let now = new Date();
                syllabus.weeks.find((week,i)=>{
                    let copy = {...week};
                    copy.schedule = copy.schedule.filter(d=>d.date>now);
                    filtered.push(copy);
                    return copy.schedule.length>0? true:false;
                })
                break;
            case 'lecture-schedule':
                syllabus.weeks.forEach((week,i)=>{
                    let copy = {...week};
                    copy.schedule = copy.schedule.filter(d=>d.type==='lecture');
                    filtered.push(copy);
                })
                break;
            case 'lab-schedule':
                syllabus.weeks.forEach((week,i)=>{
                    let copy = {...week};
                    copy.schedule = copy.schedule.filter(d=>d.type==='lab');
                    filtered.push(copy);
                })
                break;
            
        }
        renderSchedule(filtered);

    }
}));

