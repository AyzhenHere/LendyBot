const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Lendy Oto Cevap Komutları`, client.user.avatarURL())
.setDescription(`<a:hypesquad1:760825684305510410> Lendy botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Oto Cevap Ekle__`,`<a:ayar:750021160237793311> \`${prefix}otocevap-ekle\` Sunucunuza Özel Komut Eklemenize Yarar.`,true)
.addField(`__Oto Cevap Liste__`,`<a:ayar:750021160237793311> \`${prefix}otocevap-liste\` Sunucunuzdaki Özel Komutların Listesini Gösterir.`,true)
.addField(`__Oto Cevap Sil__`,`<a:ayar:750021160237793311> \`${prefix}otocevap-sil\` unucunuzdaki Özel Komutu Siler.`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:760825684305510410> \`${prefix}davet\` | Lendy'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:760825684305510410> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:760825684305510410> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/750743820781486272/760830920038678568/Lendy.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otocevap",
  aliases: []
}
