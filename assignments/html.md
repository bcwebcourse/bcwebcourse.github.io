--- 

layout: default
title: bcwebcourse.github.io

---

# <img src="../assets/images/logo.png" width="30px"> CSCI2254 Web Application Development

In this assignment, you need to create HTML only web pages for your portfolio website. The outcome should be similar to what we did in the HTML class.

## Create a Github repository

Please accept the following invitation from Github Classroom:

* [https://classroom.github.com/a/g7suQwiw](https://classroom.github.com/a/g7suQwiw)


Once you accept the invitation, it will create a repository using your Github username under [our course organization](https://github.com/bcwebcourse) on Github. This will help us manage your assignments. 

You will continually work on the same repository for all portfolio-related assignments. At the end, please feel free to move code to your personal repository (e.g., username.github.io)

To work on the code in your local machine, you first need to [clone](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone) the repository. You can find a simple instruction how to clone within VSCode: [here](https://code.visualstudio.com/docs/editor/versioncontrol#_cloning-a-repository).


## Create Index Page

This index page will provide an overview of your portfolio.

While it is up to you to decide what information to put in the page, we ask you to follow the structure below:

1. Navigation menu
2. About (describe who you are)
3. News (provide recent updates or travels)
4. Projects (explain **at least 3** class or personal projects)

Please feel free to add more information as necessary.

### Requirements
* Create `index.html`
* Use `<nav`>, `<ul>`, `<a>` for the navigation
* Use `<section>` for each item (e.g., about, news, projects)
* Include at least the following info for each title
   * Title
   * Date or period
* Include at least some of the following info for each project
   * Title
   * People involved (especially if it is a group project)
   * Source (which class?)
   * Teaser image
   * Textual description
   * Tags or keywords (class or personal project?)
   * Materials (e.g., report, video etc.)
   
   The rest of the information should go to the detail page.


## Create Project Detail Pages

The detail page can provide additional information about each project without overloading the index page. 

### Requirements
* Create a separate html page for each project
* Link the project page from the index page.
* Include full project information using a similar structure as in `index.html`. 


## Launching the Website


### Push your code to the remote Repository
Please push your completed website to the remote repository. You can do this in VSCode as you have seen in the pre-reading. For instance, click the Source Control icon on the left and you will see changes you made, similar to the following:

![Git](https://code.visualstudio.com/assets/docs/editor/versioncontrol/overview.png)

You will then need **add** the changes to the working index (click '+' icon) and put the message to describe the changes and **commit** (click '✓') and **push** using the dropdown menu on the top right.  

### Testing Online

Github provides a hosting service called [Github Pages](https://pages.github.com/), that allows for hosting a website directly from the repository. To do so, it only requires a few steps. First go to the Settings page on your Github repository. 

![Settings1](https://help.github.com/assets/images/help/repository/repo-actions-settings.png)

Scroll below until you see "Github Pages". Change the source to "master branch". 

![Settings2](https://pages.github.com/images/source-setting@2x.png)

Github Pages will automatically host the HTML file in your master branch (where you pushed your code) on a url name like this: ```https://bcwebcourse.github.io/portfolio-[username]/```. Put your user name in the placeholder. It may take a few minutes for the hosting to work.

## Submission

On your Github repository page, you can download your code into a **zip file**:

![Settings2](https://help.github.com/assets/images/help/repository/https-url-clone.png)


Please submit the **ZIP file** on Canvas. Please also submit the online url through a comment; Canvas does not allow multiple submission types at this point.

