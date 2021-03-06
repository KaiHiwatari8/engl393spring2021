import { Client } from "discord.js";
import { Util } from "discord.js";
import * as RR from "./bot-modules/reactionRole.js";

const ggBot = new Client();
const BOT_PREFIX = "gg!";

ggBot.on("ready", () => {
	console.log(`Logged in as ${ggBot.user.tag}`);
	ggBot.user.setStatus(`available`);
	ggBot.user.setPresence({
		status: "idle",
		activity: {
			name: "gg!",
			type: "LISTENING",
		}
	});
	RR.run(ggBot);
});

ggBot.on("message", (mes) => {
	if (mes.author.bot) return;
	if (mes.content === `hello`) {
		mes.reply("Hello!");
	}
	if (mes.content === `rr`) {
		RR.run(ggBot, mes);
	}
	//console.log(`Replying to message ID ${mes.id}`);
});

ggBot.login(process.env.BOT_TOKEN);
