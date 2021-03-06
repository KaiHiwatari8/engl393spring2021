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

* **Beginners' JavaScript Knowledge**: <br>Basic JavaScript familiarity including events, Arrow functions and Promises. In case you are not familiar with JavaScript:
  * **YouTube tutorial**: A [YouTube JavaScript](https://www.youtube.com/watch?v=PkZNo7MFNFg) tutorial by FreeCodeCamp
  * **W2Schools tutorial**: A [W3Schools Javascript](https://www.w3schools.com/js/default.asp) tutorial.
  * **Events**: A [Mozilla Developers Doc](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) about events.
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

9. Under the `Token`, clink `Copy` to copy the token to be used later.

10. Go to `OAuth2` from the left pane. Under `Scopes`, check the `bot` scope. This will create an invitation link below the `scopes`. Click on this invitation link to invite the bot to your Discord guild.

  **Note:** If you want other people to add your bot to their servers, enable the `Public Bot` option.

### B. Setup Development Environment

Now that we created a bot application, we will program our bot to have it our desired function, reaction roles.

1. Install `node.js` and `npm` package manager for JavaScript projects. `npm` is served in `Node.js` framework. Install `Node.js` from [here](https://nodejs.org/en/).

  * Run `node -v` to confirm that `Node.js` has been installed successfully.

  * Run `npm -v` to confirm that `npm` has been installed successfully.

2. Create an `npm` project.

  * Open a specific directory in terminal where you would like develop your bot.

  * Run `npm init` to a initialize a JavaScript project.

    Answer a series of questions to initialize your project. You can also keep pressing `enter` to accept the default values.

3. Install the `discord.js` framework. This framework provides libraries that helps to develop apps for Discord.

  * Run `npm install discord.js`.


4. Enable `Developer Mode` in Discord.

  * Go to `User Settings -> Appearance` in the Discord App.

  * Scroll down to locate `Developer Mode` under `ADVANCED` category and enable it.

### C. Program the bot

Now is the time to program out bot. In the `npm init` step, if you have `index.js` as `entry point`, then create a `index.js` file in the current directory. If you have chosen some other file, create a new `.js` with that name. Now, the tutorial will guide you line-by-line through the code, assuming the file is named `index.js`.

1. Open `index.js` in a text editor.

2. Import the `discord` framework.

    `const discord = require("discord.js")`

3. Instantiate a Discord client that will be our bot.

    `const bot = new Discord.Client()`

Now that we have a bot initialized, we can add behaviors to our bot. Every action on Discord emits events such as a new message, a new reaction, a new guild member, etc. The bot listens to those events to reciprocate programmed behaviors. A complete list of events can be found [here](https://discord.js.org/#/docs/main/stable/class/Client).

4. Add an event listener to our bot to listen to such events. For testing purpose, listen to a new message. If the new message contains `"ping"`, the bot will reply with `"pong"` in that channel using adding a handler function for that event.

    ```
    client.on("message", (message) => {
        if (message.content === "ping") {
          message.reply("pong");
        }
    });
    ```

5. Add the copied token in **Part A** to `index.js`.

    `const BOT_TOKEN = "paste the copied bot token here"`

6. Let the bot login using that token.

    `bot.login(BOT_TOKEN)`

7. Run `index.js` to start the bot by typing the following command in the terminal.

    `node index.js`

You should see that the bot is now online in the Discord guild. Message `ping` on that server and the bot will reply with `pong`.

### D. Add Reaction Role feature to the bot

It is time to add the main feature of our bot, _Reaction Roles_. For this, the bot will listen to the reactions being added to a particular message in a channel of the server. All functions in `Discord.js` works with `Promises`. So, the code will use `then()` to nest callback functions.

1. Grasp the channel in which the message to be used for reaction roles is present.

    * Right-click on the channel and click on `Copy ID` at the bottom of the menu.

    * Fetch the channel from the guild using the bot. Then, feed the fetched channel into the callback function, the callback functions are conventionally defined as arrow functions. But if you want to use any function already defined, just pass the function. Here, an arrow function will used as a callback function.

    ```
    client.channels.fetch("paste the copied channel ID here").then((channel) => {
        /* callback function body */
    });
    ```

2. Grasp the message in the grasped channel.

    * Right-click on the message and click on `Copy ID` at the bottom of the menu.

    * Fetch the message from the channel using the bot. Then, feed the fetched message into another callback function. This code would make the body of the callback in the step D.1. Then, extract the guild of the message to be used later.

    ```
    channel.messages.fetch("paste the copied message ID here").then((message) => {
      const { guild } = message;
      /* callback function body */
    });
    ```

3. Create a [reaction collector](https://discord.js.org/#/docs/main/stable/class/ReactionCollector) for the message. The reaction collector will collect all the reactions that added to a message and emit events.

    * Create a filter that would filter users who have reacted based on if they are bots or not.

      `const filter = (reaction, user) => !user.bot`

    * Create a reaction collector attached to the message in D.2 using the filter above.

    ```
    const collector = message.createReactionCollector(filter, { dispose: true});
    ```

4. Give a role to the user by the reaction collected by the collector.

    * Add an event handler to the `collect` event emitted whenever a message is reacted to.

      ```
      collector.on("collect", (reaction, user) => {
        /* handler function body */
      })
      ```

    * Obtain the role ID of the role to be assigned. Go to `Server Settings -> Roles`, right click on the role and click `Copy ID`.

    * Obtain the [guildMember](https://discord.js.org/#/docs/main/stable/class/GuildMember) of the user that reacted to the message. Then, fetch the role by its ID from the guild. Add this role to the guildUser.

    ```
    guild.members.fetch(user.id).then((guildMember) => {
        guild.roles.fetch("the role ID").then((role) => {
            guildMember.add(role).then((success) => {
              console.log("role assigned successfully");
            });
        });
    });
    ```
    * You can listen to the `remove` event and use `guildMember.remove` to remove the role.

The final bot script should look something like this in this [file](./index,js).
