 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Lendy Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:hypesquad1:760825684305510410> Lendy botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:partner:760825830577537044> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:setting:760825739632181258> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:hypesquad1:760825684305510410> \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:partner:760825830577537044> \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:setting:760825739632181258> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:hypesquad1:760825684305510410> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad1:760825684305510410> \`${prefix}davet\` | Lendy'yi Sunucunuza Davet Edersiniz\n<a:hypesquad1:760825684305510410> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hypesquad1:760825684305510410> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/750743820781486272/760830920038678568/Lendy.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}