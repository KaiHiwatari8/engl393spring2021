const Discord = require('discord.js');

const bot = new Discord.Client();

const BOT_TOKEN = "YOUR_BOT_TOKEN_HERE";

bot.on("message", (message) => {
    if (message.content === "ping") {
        message.reply("pong");
    }
});

bot.channels.fetch("CHANNEL_ID_HERE").then((channel) => {
    channel.messages.fetch("MESSAGE_ID_HERE").then((message) => {
        const { guild } = message;
        const filter = (reaction, user) => !user.bot;
        const collector = message.createReactionCollector(filter, { dispose: true });
        
        collector.on("collect", (reaction, user) => {
            if (reaction.emoji.name === "😎") {
                guild.members.fetch(user.id).then((guildMember) => {
                    guild.roles.fetch("ROLE_ID_HERE").then((role) => {
                        guildMember.add(role).then((success) => {
                            console.log("role successfully assigned");
                        });
                    });
                });
            }
        });
        collector.on("dispose", (reaction, user) => {
          if (reaction.emoji.name === "😎") {
            guild.members.fetch(user.id).then((guildMember) => {
              guild.roles.fetch("ROLE_ID_HERE").then((role) => {
                guildMember.remove(role).then((success) => {
                  console.log("role successfully removed");
                });
              });
            });
          }
        });
    });
});

bot.login(BOT_TOKEN);