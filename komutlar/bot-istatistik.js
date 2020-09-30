


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/avatars/760820409091883049/243f14108871354c3512919dd94dc78f.webp`)
.addField("__**Bot Verileri**__", `<a:hypesquad1:760825684305510410> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:hypesquad1:760825684305510410> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:hypesquad1:760825684305510410> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:hypesquad1:760825684305510410> **Bot Sahibi**  <@750740742825181195> \n **Ayzhén#0001** \n\n <a:hypesquad1:760825684305510410>\ **Bot Geliştiricisi**  <@750740742825181195> \n **Ayzhén#0001** \n\n`)
.addField("__**Sürümler**__", `<a:hypesquad1:760825684305510410> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:hypesquad1:760825684305510410> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:hypesquad1:760825684305510410> **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:hypesquad1:760825684305510410> " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://cdn.discordapp.com/attachments/750743820781486272/760830920038678568/Lendy.png`)
.setColor("#ffd100")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}