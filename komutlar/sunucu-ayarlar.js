const Discord = require('discord.js'); 
const db = require('quick.db'); 
const ayarlar = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => { 
let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
if (!message.guild) return;


const sayfa = [`**${message.guild.name} | Sunucu Ayarları**\n**Botun Prefixi :** \ ${p}\n**Reklam Engel:** ${db.fetch(`reklamengel_${message.guild.id}`) ? `<:acik:760840866570305607>` : `<:kapali:760840865928970282>` }\n**Küfür Engel:** ${db.fetch(`kufurE_${message.guild.id}`) ? `<:acik:760840866570305607> ` : `<:kapali:760840865928970282>` }`] 
const ayarReis = new Discord.MessageEmbed() 
.setColor(0xffd100) 
.setDescription(sayfa)
.setTimestamp() 
message.channel.send(ayarReis) 
}; 


exports.config = { 
name: "ayarlar",
aliases: ["sunucu-ayarları"]
}