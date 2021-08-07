const Discord = require('discord.js');
const client = new Discord.Client({
  disableMentions: 'everyone'
})
const http = require("http"); // npm i http
const settings = {
  prefix: 'c!',
  token: 'TOKEN'
};
const prefix = 'c!'

client.once("ready", () => {
  console.log("Ready!");
});
