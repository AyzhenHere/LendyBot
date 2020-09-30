const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


  const db = require('quick.db');
  

  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('<a:setting:760825739632181258> **Gerekli izniniz bulunmuyor**')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<a:setting:760825739632181258> **Mod Log Kanalı Ayarlanmamış Ayarlamak için  | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('<a:setting:760825739632181258> **Lütfen Kicklemek İstediğiniz Kullanıcıyı Etiketleyin**');
  if (reason.length < 1) return message.channel.send('<a:setting:760825739632181258>  **Kickleme Sebebinizi Giriniz**');
  if (user.id === message.author.id) return message.channel.send('<a:setting:760825739632181258> **Kendini Kickleyeceğine Kendin Çıksana ?**');

  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .addField('<a:setting:760825739632181258> İşlem', 'Sunucudan Kickleme')
  .addField('<a:setting:760825739632181258> Kicklenen Üye', `${user.tag} (${user.id})`)
  .addField('<a:setting:760825739632181258> Kickleyen Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:setting:760825739632181258> Kick Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .setDescription(`<a:setting:760825739632181258> **Kullanıcı Başarıyla Kicklendi**`)
  message.channel.send(embed2)
  
};

exports.config = {  
  name: 'at',
  aliases: ['kick']
 
};

