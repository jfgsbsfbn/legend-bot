const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
       إلللللللحححق مآ تلحق :flushed::flushed:, !
آقوآ سيرفر عربي ينشر آكوآد مميزة و آكوآد جبآره :smirk: , !
آبسط كود منع آلجحفله و إلخخ :two_hearts:, !
مآ تخسر شيء فقط خش آلسيرفر :kissing_heart:, !
و آتحدآك مآ يعجبك :wink:, !
رآبط آلسيرفر:arrow_down_small::arrow_down_small::arrow_down_small:
https://discord.gg/tzmTrZD
الدعووة خاصة لك ي قلبي ... [ ${member}  ]`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`).then(() => {
})}).catch(console.error)
}, timer)
})




client.on("message", message => {
    if (message.content === ( "وعليكم السلام")) {
     const embed = new Discord.RichEmbed()
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
       إلللللللحححق مآ تلحق :flushed::flushed:, !
آقوآ سيرفر عربي ينشر آكوآد مميزة و آكوآد جبآره :smirk: , !
آبسط كود منع آلجحفله و إلخخ :two_hearts:, !
مآ تخسر شيء فقط خش آلسيرفر :kissing_heart:, !
و آتحدآك مآ يعجبك :wink:, !
رآبط آلسيرفر:arrow_down_small::arrow_down_small::arrow_down_small:
https://discord.gg/tzmTrZD
الدعووة خاصة لك ي قلبي ... [   ]`)

   }
   });
client.on('message', message => {
     if (message.content === ( "وعليكم السلام")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " شيك على الخاص")
    }
});
   client.login("NDYwNzkyNzQ0ODM1Njc4MjA4.DhcHXA.dhDtWqxw5Mbrkx3MMiTjcUsm0Kk");const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
       إلللللللحححق مآ تلحق :flushed::flushed:, !
آقوآ سيرفر عربي ينشر آكوآد مميزة و آكوآد جبآره :smirk: , !
آبسط كود منع آلجحفله و إلخخ :two_hearts:, !
مآ تخسر شيء فقط خش آلسيرفر :kissing_heart:, !
و آتحدآك مآ يعجبك :wink:, !
رآبط آلسيرفر:arrow_down_small::arrow_down_small::arrow_down_small:
https://discord.gg/tzmTrZD
الدعووة خاصة لك ي قلبي ... [ ${member}  ]`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`).then(() => {
})}).catch(console.error)
}, timer)
})




client.on("message", message => {
    if (message.content === ( "وعليكم السلام")) {
     const embed = new Discord.RichEmbed()
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
       إلللللللحححق مآ تلحق :flushed::flushed:, !
آقوآ سيرفر عربي ينشر آكوآد مميزة و آكوآد جبآره :smirk: , !
آبسط كود منع آلجحفله و إلخخ :two_hearts:, !
مآ تخسر شيء فقط خش آلسيرفر :kissing_heart:, !
و آتحدآك مآ يعجبك :wink:, !
رآبط آلسيرفر:arrow_down_small::arrow_down_small::arrow_down_small:
https://discord.gg/tzmTrZD
الدعووة خاصة لك ي قلبي ... [   ]`)

   }
   });
client.on('message', message => {
     if (message.content === ( "وعليكم السلام")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " شيك على الخاص")
    }
});
client.login(process.env.BOT_TOKEN);
