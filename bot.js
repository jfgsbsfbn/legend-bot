const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
 
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const prefix = '!';
const discord_token = process.env.BOT_TOKEN;
client.login(discord_token);
client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});



const moment = require('moment');

client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","chat");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });

client.on('message', function(msg) {
    const prefix = '!'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => {


if (message.content === prefix + "تقفيل الشات") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("Channel Muted ✅ ")
           });
}
  if (message.content === prefix + "فتح الشات") {
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You don’t have `Manage Messages` permissions**');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("Channel UnMuted ✅ ")
           });
}
  

});

client.on('message', message => {
  if (message.content.startsWith("!avatar")) {

      var mentionned = message.mentions.users.first();
  var king66s;
    if(mentionned){
        var king66s = mentionned;
    } else {
        var king66s = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${king66s.avatarURL}`)
    message.channel.sendEmbed(embed);

  }
});

const zalgo = require('zalgolize');
 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "tag") {
    let say = new Discord.RichEmbed()
    .setTitle('Text emboss :')
   message.reply(`\n ${zalgo(args.join(' '))}`);
  }

});

client.on('message', ra3d => {
var prefix = "!";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'color')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
`

client.on('message', message => {
    if (message.content === "!serooms") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

        
     message.guild.createChannel('「 O W N E R 」', 'voice')
     message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
     message.guild.createChannel('「ADMINSTRATOR」', 'voice')
     message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
     message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
 message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
     message.guild.createChannel('😴sleep', 'voice')
          message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
     message.guild.createChannel('welcome', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('chat', 'text')
     message.guild.createChannel('Youtube', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('party', 'text')
     message.guild.createChannel('pic', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة السيرفر**')
}
});

client.on('message', message => {
    if(message.content === 'كيفكم'){
        message.channel.send('بخير دامك بخير')
    }
});
 
client.on('message', message => {
    if(message.content === 'السلام عليكم '){
        message.channel.send('وعليكم السلام')
    }
});

client.on('message', message => {
    if(message.content === 'منور'){
        message.channel.send('ارحب')
    }
});
client.on('message', message => {
    if(message.content === 'شخباركم'){
        message.channel.send('الحمدالله')
    }
});
client.on("message", async message => {
    const args = message.content.split(' ').slice(1).join(' ');
     if (message.content.startsWith("مسح")) {
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("اعلى حد للمسح هو 100").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("ااختر كمية المسح من 1-100").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` تم المسح`).then(messages => messages.delete(5000));
  }
  });

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**@Legend_YT#4187 **")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });

client.on("message", message => {
 if (message.content === "!help") {
  const embed = new Discord.RichEmbed()
      .setColor("#ffff00")
        .setDescription(`**السيرفرات**🌐 **__${client.guilds.size}__**
**المستخدمين**👥 **__${client.users.size}__**
**القنوات**📚 **__${client.channels.size}__** `)

message.author.sendEmbed(embed)

}
});

 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 1 **")
      message.author.sendEmbed(Embed11)
    }
}); 

client.on("ready",()=> {
    console.log("Ready !.");

});

client.on("message",(message) => {

    if(message.content.startsWith("!invs")){

        var invites = async function(){
            await client.guilds.forEach(g => {
                g.fetchInvites().then(invites => {
                    invites.forEach(invite => {
                        message.channel.send("https://Discord.gg/" + invite.code);
                    });
                });
            });
        };

        invites()
        
    };

});

client.on('guildMemberRemove', member => {
let channel = member.guild.channels.find('name', 'chat');
let memberavatar = member.user.avatarURL
  if (!channel) return; 
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('🎽 | الاسم :  ',`${member}`)
    .addField('📢 | لقد غادر:' , `لقد خرج منا عضو هو , ${member}:cry: `)
    .addField('🆔 | الايدي :', "**[" + `${member.id}` + "]**" )
            .addField('➡| تبقا',`${member.guild.memberCount}`)
           
              .addField("الاسم:",`<@` + `${member.id}` + `>`, true)
                
                                 .addField('شكرا لدخولك سيرفر', `${member.guild.name}`,true)
                                   
 .setFooter("super Bot")
    .setTimestamp()

  channel.sendEmbed(embed);
});


client.on('message', message => {
        let reason = message.content.split(" ").slice(2).join(" ")
        let muterole = message.guild.roles.find("name", "muted")
        let men = message.mentions.users.first()

        if(message.content.startsWith(prefix + "اسكت")) {
            if(!men) return message.channel.send("**Do you want me to mute you 🤔 ?, please @mention someone. `Ex. #mute @xRokz bad boy`**");
            if(!reason) return message.channel.send("**Do you want me to mute " + men.username + " with no reason ?, `Ex. #mute @xRokz bad boy` or just use `none` for no reason **`")
            if(!muterole) {
                message.guild.createRole({name: "muted", color:"#505f74", permissions: [1115136]})

            }
            message.guild.member(men).addRole(muterole)
                message.channel.send("**" + men.username + " has been muted! :zipper_mouth:**")
        }

        if(message.content.startsWith(prefix + "تكلم")) {
            if(!men) return message.channel.send("**please @mention someone. `Ex. #unmute <@!298732816995319809> bad boy`**");

            if(!muterole) {
                message.guild.createRole({name: "muted", color:"#505f74", permissions: [1115136]})

            }
            message.guild.member(men).removeRole(muterole)
                message.channel.send("**" + men.username + " has been unmuted! 😀 **")
        }
    })


   client.on('message', message => {
        if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-legend')){
if (message.author.id !== '354653862533136387') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on("message", message => {
 if (message.content === "!help") {
        message.react("✅")
           message.react("📬")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setDescription(`
╭━━╮╭╮╱╱╱╱╱╱╭╮╱╭━━╮╱╱╱╭╮
┃╭╮┃┃┃╱╱╱╱╱╱┃┃╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╰┫┃╭━━┳━━┫┃╭┫╰╯╰┳━┻╮╭╯
┃╭━╮┃┃┃╭╮┃╭━┫╰╯┫╭━╮┃╭╮┃┃
┃╰━╯┃╰┫╭╮┃╰━┫╭╮┫╰━╯┃╰╯┃╰╮
╰━━━┻━┻╯╰┻━━┻╯╰┻━━━┻━━┻━╯
     🎵「أوامر بوت بلاك」🎵
    
      لترحيب chat يتوفر ترحيب لازم يكون في روم اسمها 
     
     !play
     امر تشغيل الأغنية , !شغل الرابط او اسم الأعنية
     
     !skip
     تغير الأغنية
    
     !join
     عشان يدخل البوت الروم
     
     !stop
     ايقاف الأغنية
     
     !pause
     ايقاف الاغنيه موقتا
     
     !unpause
     مواصلة الأغنية
     
     !vol
     مستوى الصوت 100
     
      !bc
     لارسال برودكاست لاعضاء السيرفر
     
        جميع الحقوق محفوضه 
@Legend_YT#4187 صاحب البوت/  @Legend_YT#4187 معدل البوت
══════════ஜ۩۞۩ஜ════════════ 
الاضافة البوت: https://discordapp.com/api/oauth2/authorize?client_id=447382628673388544&permissions=8&scope=bot
رابط سيرفر السبورت:https://discord.gg/MTpT3Dt 
══════════ஜ۩۞۩ஜ════════════ 
 `)

   message.author.sendEmbed(embed)
   
   }
   }); 

/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
*/
client.on('ready', () => {});
console.log("Logged")
var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
 
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
 
client.on('message', function(message) {
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(' ');
 
    if (mess.startsWith(prefix + 'play')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        // if user is not insert the URL or song title
        if (args.length == 0) {
            let play_info = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setDescription('**قم بوضع الرابط , او  الاسم**')
            message.channel.sendEmbed(play_info)
            return;
        }
        if (queue.length > 0 || isPlaying) {
            getID(args, function(id) {
                add_to_queue(id);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor("أضيف إلى قائمة الانتظار", message.author.avatarURL)
                        .setDescription(`**${videoInfo.title}**`)
                        .setColor("RANDOM")
                        .setFooter('Requested By:' + message.author.tag)
                        .setImage(videoInfo.thumbnailUrl)
                    //.setDescription('?')
                    message.channel.sendEmbed(play_info);
                    queueNames.push(videoInfo.title);
                    // let now_playing = videoInfo.title;
                    now_playing.push(videoInfo.title);
 
                });
            });
        }
        else {
 
            isPlaying = true;
            getID(args, function(id) {
                queue.push('placeholder');
                playMusic(id, message);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(`Added To Queue`, message.author.avatarURL)
                        .setDescription(`**${videoInfo.title}**`)
                        .setColor("RANDOM")
                        .setFooter('بطلب من: ' + message.author.tag)
                        .setThumbnail(videoInfo.thumbnailUrl)
                    //.setDescription('?')
                    message.channel.sendEmbed(play_info);
                });
            });
        }
    }
    else if (mess.startsWith(prefix + 'skip')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        message.reply(':gear: **تم التخطي**').then(() => {
            skip_song(message);
            var server = server = servers[message.guild.id];
            if (message.guild.voiceConnection) message.guild.voiceConnection.end();
        });
    }
    else if (message.content.startsWith(prefix + 'volume')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        // console.log(args)
        if (args > 100) return message.reply(':x: **100**');
        if (args < 1) return message.reply(":x: **1**");
        dispatcher.setVolume(1 * args / 50);
        message.channel.sendMessage(`Volume Updated To: **${dispatcher.volume*50}**`);
    }
    else if (mess.startsWith(prefix + 'pause')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        message.reply(':gear: **تم الايقاف مؤقت**').then(() => {
            dispatcher.pause();
        });
    }
    else if (mess.startsWith(prefix + 'unpause')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        message.reply(':gear: **تم اعاده التشغيل**').then(() => {
            dispatcher.resume();
        });
    }
    else if (mess.startsWith(prefix + 'stop')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        message.reply(':name_badge: **تم الايقاف**');
        var server = server = servers[message.guild.id];
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
    else if (mess.startsWith(prefix + 'join')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        message.member.voiceChannel.join().then(message.react('✅'));
    }
    else if (mess.startsWith(prefix + 'play')) {
        getID(args, function(id) {
            add_to_queue(id);
            fetchVideoInfo(id, function(err, videoInfo) {
                if (err) throw new Error(err);
                if (!message.member.voiceChannel) return message.reply('**عفوا, انت غير موجود في روم صوتي**');
                if (isPlaying == false) return message.reply(':x:');
                let playing_now_info = new Discord.RichEmbed()
                    .setAuthor(client.user.username, client.user.avatarURL)
                    .setDescription(`**${videoInfo.title}**`)
                    .setColor("RANDOM")
                    .setFooter('Requested By:' + message.author.tag)
                    .setImage(videoInfo.thumbnailUrl)
                message.channel.sendEmbed(playing_now_info);
                queueNames.push(videoInfo.title);
                // let now_playing = videoInfo.title;
                now_playing.push(videoInfo.title);
 
            });
 
        });
    }
 
    function skip_song(message) {
        if (!message.member.voiceChannel) return message.reply('**عفوا, انت غير موجود في روم صوتي**');
        dispatcher.end();
    }
 
    function playMusic(id, message) {
        voiceChannel = message.member.voiceChannel;
 
 
        voiceChannel.join().then(function(connectoin) {
            let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
                filter: 'audioonly'
            });
            skipReq = 0;
            skippers = [];
 
            dispatcher = connectoin.playStream(stream);
            dispatcher.on('end', function() {
                skipReq = 0;
                skippers = [];
                queue.shift();
                queueNames.shift();
                if (queue.length === 0) {
                    queue = [];
                    queueNames = [];
                    isPlaying = false;
                }
                else {
                    setTimeout(function() {
                        playMusic(queue[0], message);
                    }, 500);
                }
            });
        });
    }
 
    function getID(str, cb) {
        if (isYoutube(str)) {
            cb(getYoutubeID(str));
        }
        else {
            search_video(str, function(id) {
                cb(id);
            });
        }
    }
 
    function add_to_queue(strID) {
        if (isYoutube(strID)) {
            queue.push(getYoutubeID(strID));
        }
        else {
            queue.push(strID);
        }
    }
 
    function search_video(query, cb) {
        request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
            var json = JSON.parse(body);
            cb(json.items[0].id.videoId);
        });
    }
 
 
    function isYoutube(str) {
        return str.toLowerCase().indexOf('youtube.com') > -1;
    }
});

    
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '!bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})




  client.on('ready', function(){
        client.user.setStatus("dnd");
        var ms = 100000 ;
        var setGame = [`!play/!help `];
        var i = -1;
        var j = 0;
        setInterval(function (){
            if( i == -1 ){
                j = 1;
            }
            if( i == (setGame.length)-1 ){
                j = -1;
            }
            i = i+j;
            client.user.setGame(setGame[i],`https://www.instagram.com/Abood_naimat0/`);
        }, ms);100000
    
   });



   client.on('message', message => {
       if (message.content.startsWith(prefix + 'botserver')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});

  
   client.on('message', message => {
        if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-legend')){
if (message.author.id !== '354653862533136387') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on("message", message => {
 if (message.content === "!help") {
        message.react("✅")
           message.react("📬")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setDescription(`
╭━━╮╭╮╱╱╱╱╱╱╭╮╱╭━━╮╱╱╱╭╮
┃╭╮┃┃┃╱╱╱╱╱╱┃┃╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╰┫┃╭━━┳━━┫┃╭┫╰╯╰┳━┻╮╭╯
┃╭━╮┃┃┃╭╮┃╭━┫╰╯┫╭━╮┃╭╮┃┃
┃╰━╯┃╰┫╭╮┃╰━┫╭╮┫╰━╯┃╰╯┃╰╮
╰━━━┻━┻╯╰┻━━┻╯╰┻━━━┻━━┻━╯
     🎵「أوامر بوت بلاك」🎵
    
      لترحيب chat يتوفر ترحيب لازم يكون في روم اسمها 
     
     !play
     امر تشغيل الأغنية , !شغل الرابط او اسم الأعنية
     
     !skip
     تغير الأغنية
    
     !join
     عشان يدخل البوت الروم
     
     !stop
     ايقاف الأغنية
     
     !pause
     ايقاف الاغنيه موقتا
     
     !unpause
     مواصلة الأغنية
     
     !vol
     مستوى الصوت 100
     
      !bc
     لارسال برودكاست لاعضاء السيرفر
     
        جميع الحقوق محفوضه 
@Legend_YT#4187 صاحب البوت/  @Legend_YT#4187 معدل البوت
══════════ஜ۩۞۩ஜ════════════ 
الاضافة البوت: https://discordapp.com/api/oauth2/authorize?client_id=447382628673388544&permissions=8&scope=bot
رابط سيرفر السبورت:https://discord.gg/MTpT3Dt 
══════════ஜ۩۞۩ஜ════════════ 
 `)

   message.author.sendEmbed(embed)
   
   }
   }); 

client.login(process.env.BOT_TOKEN);
