# Create your own custom Discord Bot

<p align="center">
<img src="https://discord.com/assets/bb408e0343ddedc0967f246f7e89cebf.svg" height=100 style="vertical-align: bottom"></p>

## Introduction

If you manage or own a Discord guild with numerous members, you probably use bots to automate common functions such as custom welcome message, reaction roles, YouTube notifications, and much more. Even if you have enough funds, you would probably not want to spend them on having custom bots built for your guild. So, use existing bots? You can but you do not have to unless you do not have programming background. Nevertheless, you can learn to program for free on YouTube anytime. [FreeCodeCamp](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ) is what I would personally recommend.

This tutorial will guide you to program a bot from scratch, add several paid features for free, and host it 24/7 for free.

Wondering why you should learn to create a Discord bot?
* **Custom bot branding**: <br>You can get rid of third-party bots that need you to vote for them to keep using their bot.

* **All features in just one bot**: <br>Instead of managing tons of bots, keep is simple and multi-functioning with just one bot.

* **Personal Project**: <br>Show it off as your personal projects on resume or LinkedIn to demonstrate your skills.

* **Freelance**: <br>Monetize your skills by creating custom bots for people who cannot code on [Fiverr](https://www.fiverr.com), [Upwork](https://www.upwork.com), [Freelancer](https://www.freelancer.com), etc.

* **Keep Practicing**: <br>Coding is improved only when you keep practicing to write code and solve problems.

* **Keep Learning**: <br>Keep your brain active by learning a new framework.

## Before you start

Before you start, following are the resources assumed you have gathered before diving into instructions.

* **Text Editor**: <br>A text editor of your choice such as [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text 3](https://www.sublimetext.com/), and [Atom](https://atom.io/).

* **A Discord Account**: <br>An active Discord account is required. If you do not have one, click [here](https://discord.com/register).

* **Beginners' JavaScript Knowledge**: <br>Basic JavaScript familiarity including Arrow functions and Promises. In case you are not familiar with JavaScript:
  * **YouTube tutorial**: A [YouTube JavaScript](https://www.youtube.com/watch?v=PkZNo7MFNFg) tutorial by FreeCodeCamp
  * **W2Schools tutorial**: A [W3Schools Javascript](https://www.w3schools.com/js/default.asp) tutorial.
  * **Arrow Functions**: A [Mozilla Developers Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) about Arrow functions.
  * **Promises**: A [Mozilla Developers Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) about Promises.


## Create a Reaction Role bot

### A. Setup Discord Developers' Portal

You will need to access Discord's Developer's portal to develop a bot. Do it with the following steps:
1. Go to Discord's [Developers Portal](https://discord.com/developers/) and log in with your Discord credentials if asked to.

2. Click on `New Application` on the top right corner.

3. Give your app a name, say Jarvis.
<br>Now, you should be on the `General Information` page on the dashboard.

4. _Optional_: Give your app an icon and a description.

5. Click on `Bot` from the left pane.

6. Click on `Add Bot`. When prompted to confirm, click on `Yes, do it!`.

7. Give your bot a username.

8. _Optional_: Give your bot an icon to make it more attractive.

  **Note:** If you want other people to add your bot to their servers, enable the `Public Bot` option.

### B. Setup Development Environment

Now that we created a bot application, we will program our bot to have it our desired function, reaction roles.

1. Install `node.js` and `npm` package manager for JavaScript projects. `npm` is served in `Node.js` framework. Install `Node.js` from [here](https://nodejs.org/en/).

  * Run `node -v` to confirm that `Node.js` has been installed successfully.

  * Run `npm -v` to confirm that `npm` has been installed successfully.

2. Create an `npm` project.

  * Open a specific directory in terminal where you would like develop your bot.

  * Run `npm init` to a initialize a JavaScript project.

    Answer a series of questions to initialize your project.<br>
    It is encouraged to

2. Install the `discord.js` framework. This framework provides libraries that helps to develop apps for Discord.

  * Run `npm install discord.js`.

### C. Program a bot
