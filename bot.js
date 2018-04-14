const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", async () => {
    client.user.setActivity("Pong", { type: "PLAYING" }); 
});

client.login(process.env.BOT_TOKEN);