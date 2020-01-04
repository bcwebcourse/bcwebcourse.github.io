--- 

layout: default
title: bcwebcourse.github.io

---

# <img src="img/logo.png" width="30px"> CSCI2254 Web Application Development


There is a variety of ways to setup a web development environment. You are welcomed to use your own familiar setup if you have any.

### Code Editor

For editing the code, we will use **[Microsoft Visual Studio Code](https://code.visualstudio.com/)**, which is [one of the most popular code editors](https://designrevision.com/best-code-editor/); other popular text editors include [Atom](https://atom.io/) and [Sublime Text](https://www.sublimetext.com/).

[[Download VS Code](https://code.visualstudio.com/download)]

### Code Management & Submission

For source code management, we will use [Git](https://git-scm.com/) and [Github](https://github.com/) for a code hosting service. VS Code comes with a Git integration as well as a terminal shell integration, so you can do everything within VS Code.

[[Install Git](https://www.atlassian.com/git/tutorials/install-git)]

You may also want to set up your Github account's [default identity](https://help.github.com/en/articles/setting-your-username-in-git). For instance, open a terminal shell in VS Code (Terminal -> New Terminal) and type the following commands with your own email and name.

```
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
```

Please take a look at the beginning portion of how to use Git in VSCode [here](https://code.visualstudio.com/Docs/editor/versioncontrol) before the section "Branches and Tags" (we are not going to use branches in our class).

### Running & Testing 

For running a web page as well as for grading, we will use Google Chrome. It provides nice development tools for debugging your code and support latest web standards.

[[Download Chrome](https://www.google.com/chrome/)]

In order to run your web page (even in your local machine), you need a web server. The purpose of the web server is to transfer web page content securely to a client machine. For instance, without the server, browsers will not be able to load a data file and thus cannot present the file's content to a client. Even if you are accessing your local files for a development purpose ([More info](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)), the browser would not allow it. 

We will use a VS Code plugin called Live Server to set up a local development server. 

[[Download Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)]

Whenever you open a html file in VSCode, you will now see "Go Live" button as below. 

![Go Live](https://github.com/ritwickdey/vscode-live-server/raw/master/images/Screenshot/vscode-live-server-statusbar-3.jpg?raw=true "Go Live")

In later assignments, you will have an opportunity to build your own web server using Node.js.
