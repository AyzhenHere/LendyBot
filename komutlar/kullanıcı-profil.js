
const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "iBot"

exports.run = async (bot, msg, args) => {

        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar= user.avatarURL();
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `<:rahatsizetmeyin:760843479609507890>  | **Rahatsız Etmeyin**`)
        .replace("online", `<:cevrimici:760843480112168970>  | **Çevrimiçi**`)
        .replace("idle", `<:bosta:760843480515215400>  | **Boşta**`)
        .replace("offline", `<:cevrimdisi:760843480627937331>  | **Çevrimdışı**`)

        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)

        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')

        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
 
        const uembed = new Discord.MessageEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .setTitle('Kullanıcı Hakkında Bilgiler')
        .addField(`Durum`, userinfo.status, false)
        .setColor('#6278c5')
        .addField(`Katılım Tarihi (Sunucu)`, userinfo.dctarihkatilma, false)
        .addField(`Katılım Tarihi (Discord)`, userinfo.dctarih, false)
        .addField(`Kimlik`, userinfo.id, true)
        .addField(`Bot mu?`, userinfo.bot, true)
        .setFooter(`Lendy Bot | Kullanıcı Bilgi Sistemi`)
        msg.channel.send(uembed)
    }

exports.config = {
  name: 'profil',
  aliases: []
};



