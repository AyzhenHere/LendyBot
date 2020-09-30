const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:hypesquad1:760825684305510410> **Bu Komutu Kullanmak İçin İzniniz Yok**");
if(!args[0]) return message.channel.send("<a:hypesquad1:760825684305510410>  **Lütfen Silinicek Mesaj Miktarını Yazın!** ");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:hypesquad1:760825684305510410> **${args[0]}** **Adet Mesajı Sildim**`)
})
}

exports.config = {
name: "temizle",
aliases: ["sil"]
};