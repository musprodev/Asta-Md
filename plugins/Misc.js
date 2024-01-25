//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                            𝚅.𝟷.𝟸.𝟽                                                   // 
//                                                                                                      //
//              ███████╗██╗ ██████╗ ███╗   ███╗ █████╗     ███╗   ███╗██████╗                           //
//              ██╔════╝██║██╔════╝ ████╗ ████║██╔══██╗    ████╗ ████║██╔══██╗                          //
//              ███████╗██║██║  ███╗██╔████╔██║███████║    ██╔████╔██║██║  ██║                          //
//              ╚════██║██║██║   ██║██║╚██╔╝██║██╔══██║    ██║╚██╔╝██║██║  ██║                          //
//              ███████║██║╚██████╔╝██║ ╚═╝ ██║██║  ██║    ██║ ╚═╝ ██║██████╔╝                          //
//              ╚══════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                          BY:MAHER-ZUBAIR                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
 
 const {tlang, getAdmin, prefix, name, sck,sck1, fetchJson,getBuffer, runtime,Module_Exports } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')
 const fetch = require("node-fetch");

  //---------------------------------------------------------------------------
 Module_Exports({
    kingcmd: "welcome",
    shortcut:["setwelcome","swel"],
    infocmd: "sets welcome message in specific group.",
    kingclass: "group",
 kingpath: __filename
},
async(Void, citel, text,{ isCreator }) => {

        let grp =citel.chat;
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)	
        const isAdmins = groupAdmins.includes(citel.sender) 
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
 
      let Group = await sck.findOne({ id: citel.chat });
      if (!text)  {  return await citel.reply ("*_Your Wellcome Message Is_ :* "+Group.welcome)  }
      await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
      let metadata = await Void.groupMetadata(citel.chat);
      var ppuser;
      let num = citel.sender;
  
      var welcome_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc);
      try {  ppuser = await Void.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }
      return await Void.sendMessage(citel.chat, { image: { url: ppuser }, caption: welcome_messages,} )


       /*if (!Group) {
                await new sck({ id: citel.chat, welcome: text,events:'true' }).save()
                return citel.reply('Welcome added for this group.\n *Wellcome Message :* '+text )
            } else {
                await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
                return citel.reply('Welcome updated successfully.\n *New Wellcome Message Is :* '+text)
                
            }      */
  
}
)
 //---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "goodbye",
    shortcut: ["setgoodbye","setbye"],
    infocmd: "sets goodbye message in specific group.",
    kingclass: "group",
 kingpath: __filename
},
async(Void, citel, text,{ isCreator }) => {

    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel)	
    const isAdmins = groupAdmins.includes(citel.sender) 
    if (!isAdmins && !isCreator) return citel.reply(tlang().admin);

    let Group = await sck.findOne({ id: citel.chat })
    if (!text)  {  return await citel.reply ("*_Your Goodbye Message Is:_* "+Group.goodbye)  }
    await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' }) 
 
    let metadata = await Void.groupMetadata(citel.chat);
    var ppuser;
    let num = citel.sender;
    var goodbye_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc);
    try {  ppuser = await Void.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }

        return await Void.sendMessage(citel.chat, { image: { url: ppuser }, caption: goodbye_messages, })

         /*   if (!Group) {
                await new sck({ id: citel.chat, goodbye: text,events:'true' }).save()
                return citel.reply('Goodbye added for this group.\n *New Googbye Message Is :* '+text)
            } else {
                await await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' })
                return citel.reply('Goodbye updated successfully.\n *New GoodBye Message Is :* '+text)    
            }      
           */
})
 //---------------------------------------------------------------------------
 //---------------------------------------------------------------------------

 //---------------------------------------------------------------------------
 Module_Exports({
        kingcmd: "quoted",
        infocmd: "get reply Message from Replied Message",
        kingclass: "user",
        kingpath: __filename
    },
    async(Void, citel, text) => {
        if(!citel.quoted) return await citel.send("*_Reply to a Message_*")
        var quote
        try {
             quote = await Void.serializeM(await citel.getQuotedObj())
        } catch (error) {return console.log("error while geting Quoted Message : " , error )}

        if (!quote.quoted) return await citel.replay('*_Message you replied Does Not Contain Any Reply Message_*')
        else await Void.sendMessage(citel.chat, { react: { text: '', key: citel.key }}); 
        try {        
            let quote2 = await Void.serializeM(await quote.getQuotedObj())
            return await Void.copyNForward(citel.chat, quote2 , false ,)
        } catch (error) 
        {       
            const contextInfo = {}
            Void.forward(citel.chat ,quote.quoted, contextInfo , citel ); 
        }
        // attp | Void.sendMessage(citel.chat, { sticker: {url: `https://api.xteam.xyz/attp?file&text=${encodeURI(text)}`}}, {quoted: citel })
    })

     //---------------------------------------------------------------------------
     Module_Exports({
        kingcmd: "blocklist",
        shortcut:["blist"],
        infocmd: "get list of all Blocked Numbers",
        kingclass: "user",
        kingpath: __filename,
        use: '',
    },
    async(Void, citel, text , {isCreator}) => {
        if(!isCreator) return await citel.reply(tlang().owner);
        try {
            const data = await Void.fetchBlocklist();
            if (data.length === 0) return await citel.reply(`*_Sorry, But You don't have any Blocked Numbers._*`);
            let txt = `${name.ownername}'s *_Block List_*\n\n*_Total Blocked Users_: ${data.length}* \n\n┏━❏\t*𝘉𝘭𝘰𝘤𝘬𝘦𝘥 𝘕𝘶𝘮𝘣𝘦𝘳𝘴*━❏\n`;
            for (let i = 0; i < data.length; i++) {      txt += `┃ ${i + 1}: wa.me/${data[i].split("@")[0]}\n`;    }
            txt += "┗━━━━━━━━━━━⦿";
            return await Void.sendMessage(citel.chat, { text: txt });
          } catch (err) {
            console.error(err);
            return await citel.send('*Error while getting Blocked Numbers.\nError: *' + err);
          }
    }
    )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "location",
             infocmd: "get location by cordinates",
             kingclass: "user",
             kingpath: __filename
         },
         async(Void, citel, text) => {
          if (!text) return await citel.reply(`Give Coordinates To Send Location\n *Example:* ${prefix}location 24.121231,55.1121221`);
         let cord1 = parseFloat(text.split(',')[0]) || ''
         let cord2 = parseFloat(text.split(',')[1]) || ''
         if(!cord1 || isNaN(cord1) ||  !cord2 || isNaN(cord2)) return await  citel.reply("```Cordinates Not In Format, Try Again```") 

let txt  = "*----------LOCATION------------*"
   txt +="``` \n Sending Location Of Given Data: ";
   txt +="\n Latitude     :  "+cord1;
   txt +="\n Longitude  :  "+cord2 +"```\n"+name.caption;

await citel.reply (txt);


      return await Void.sendMessage(citel.chat, { location: { degreesLatitude : cord1, degreesLongitude : cord2 } } ,{quoted : citel} )
 }
     )
     //---------------------------------------------------------------------------

     //---------------------------------------------------------------------------

 Module_Exports({
             kingcmd: "getpp",
             infocmd: "Get Profile Pic For Given User",
             kingclass: "user",
             kingpath: __filename
         },
         async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (`*_Please Reply To A User To Get Profile Picture_*`)
    let pfp;
     try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
     catch (e) {  return citel.reply("```Error While Getting Profile Pic```") } 
//const ppUrl = await Void.profilePictureUrl(citel.quoted.sender, 'image')
  
                let buttonMessaged = {

                            //quoted: "923184474176@s.whatsapp.net", 
                            //contextInfo: { forwardingScore: 1999999, isForwarded: false },
                            image: { url: pfp },
                            caption: '  *★Profile Picture is Here★*',
                            footer: tlang().footer,
                            headerType: 4,
                   
                };
                return await Void.sendMessage(citel.chat, buttonMessaged,{quoted:citel});


         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "readmore",
             shortcut:["rmore",'readmor'],
             infocmd: "Adds *readmore* in given text.",
             kingclass: "misc",
             kingpath: __filename
         },
         async(Void, citel, text) => {
            if(!text) {text = `*Give Text, Eg: _${prefix}readmore text1 readmore text2_*`; }
            else { text += " " }
            text.includes("readmore")?await citel.reply(text.replace(/readmore/, (String.fromCharCode(8206)).repeat(4001))) : await citel.reply(text.replace(" ", (String.fromCharCode(8206)).repeat(4001)))
         }
     )
  //---------------------------------------------------------------------------
  Module_Exports({
    kingcmd: "whois",
    infocmd: "Get info about replied person",
    kingclass: "user",
    use: 'reply to any person',

},
async(sigma, person, memo) => { 

   if (!person.quoted) return person.reply(`*_Please reply any User_*`);
    var bio = await sigma.fetchStatus(person.quoted.sender);
    var bioo = bio.status;
    var setAt = bio.setAt.toString();
    
    var words = setAt.split(" ");
    if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
     
    var num = person.quoted.sender.split('@')[0];
    let pfp;
    try  {  pfp = await sigma.profilePictureUrl(person.quoted.sender, "image"); } 
    catch (e) { pfp = await sigma.profilePictureUrl(person.sender, "image") ||  'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ; }    //|| 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ;  }
    
    let username = await sck1.findOne({ id: person.quoted.sender });
    var tname = username.name;

    
    let Maher = `
┏━━⟪⟪ ${mztit} ⟫━⦿
┃✗ *•ᴘᴇʀsᴏɴ's ɪɴғᴏʀᴍᴀᴛɪᴏɴ•*
┃✗ *•ɴᴀᴍᴇ•* ${tname}
┃✗ *•ɴᴜᴍ•* ${num}
┃✗ *•ʙɪᴏ•*  ${bioo}
┃✗ *•sᴇᴛ-ᴀᴛ•* ${setAt}
┃✗   *•ᴋᴇᴇᴘ ᴄᴀʟᴍ ᴅᴜᴅᴇ•*
┗━━━━━━━━━━⦿
`
    let king = {            
    image: { url: pfp},
    caption: Maher,
    footer: tlang().footer,
    headerType: 4,
    contextInfo: {
        externalAdReply: {
            title: `${name.ownername}`,
            body: `${name.botname}`,
            thumbnail: log0,
            mediaType: 4,
            mediaUrl: '',
            sourceUrl: `${Gname}`,}}}
  
return await sigma.sendMessage(person.chat, king,{quoted:person});
}
)
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "vcard",
             infocmd: "Create Contact by given name.",
             kingclass: "user",
             kingpath: __filename
         },
         async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (`*Please Reply to User With Name*`);
if ( !text ) return citel.reply( `*_Please Reply User With Name_*\n *Example: ${prefix}vcard Astro*`)
var words = text.split(" ");
if (words.length >3) {   text= words.slice(0, 3).join(' ')  }
// citel.reply(text);

const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + text + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + citel.quoted.sender.split('@')[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: text, contacts: [{ vcard }] },
            
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
 
})
     //---------------------------------------------------------------------------

     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "take",
             infocmd: "Makes sticker of replied image/video.",
             kingclass: "sticker",
             kingpath: __filename
         },
         async(Void, citel, text) => {
             if (!citel.quoted) return citel.reply(`*_Reply to a Sticker_*`);
             let mime = citel.quoted.mtype
             if ( mime !="stickerMessage") return await citel.reply("```Please, Reply To A Sticker```") 
             var pack;
             var author;
             if (text) {
                let anu = text.split("|");
                 pack = anu[0] !== "" ? anu[0] : citel.pushName + '♥️';
                 author = anu[1] !== "" ? anu[1] : name.packname;
             } else {
                 pack = citel.pushName;
                 author =name.packname;
             }
                 let media = await citel.quoted.download();
                let sticker = new Sticker(media, {
                    pack: pack,
                    author: author,
                    type:  StickerTypes.FULL,
                    categories: ["🤩", "🎉"], 
                    id: "12345", 
                    quality: 100,
                    background: "transparent", 
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer }, {quoted: citel });
         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "uptime",
             shortcut: ["runtime","um"],
             infocmd: "Tells runtime/uptime of bot.",
             kingclass: "tools",
             kingpath: __filename
         },
         async(Void, citel, text) => {
             const upt = runtime(process.uptime())
             citel.reply(`*_Uptime of ${name.botname} is:_*\n${upt}`)
         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "wa",
             infocmd: "Makes wa me of quoted or mentioned user.",
             kingclass: "user",
             kingpath: __filename
         },
         async(Void, citel, text) => {
             if(!citel.quoted && !citel.mentionedJid) return await citel.reply(`*_Please Reply Or Mention A User_*`);
             let users = citel.mentionedJid ? citel.mentionedJid[0].split('@')[0] : citel.quoted ? citel.quoted.sender.split('@')[0] : text.replace('@')[0]
            return await  citel.reply(`https://wa.me/${users}`);
 
         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "mee",
             infocmd: "Makes wa me for user.",
             kingclass: "user",
             kingpath: __filename
         },
         async(Void, citel, text) => {
              let user = citel.sender.split('@')[0]  ; return await citel.reply( `https://wa.me/${user}` ); })
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "pick",
             infocmd: "Pick random user from Group",
             kingclass: "group",
             kingpath: __filename
         },
         async(Void, citel, match) => {
             if (!match) return citel.reply("*_Which type of User you want?_*");
             const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                 .catch((e) => {}) : "";
             const participants = citel.isGroup ? await groupMetadata.participants : "";
             let member = participants.map((u) => u.id);
             let me = citel.sender;
             let pick = member[Math.floor(Math.random() * member.length)];
             Void.sendMessage(citel.chat, {
                 text: `*_The most ${match} around us is_* *@${pick.split("@")[0]}*`,
                 mentions: [pick],
             }, {
                 quoted: citel,
             });
         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "cnsfw",
             infocmd: "activates and deactivates nsfw.\nuse buttons to toggle.",
             kingclass: "misc",
             kingpath: __filename
         },
         async(Void, citel, text,{isCreator}) => {
             let checkgroup = await sck.findOne({ id: citel.chat })
             if (!citel.isGroup) return citel.reply(tlang().group);
             const groupAdmins = await getAdmin(Void, citel)
             //const botNumber = await Void.decodeJid(Void.user.id)
            // const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
             const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
             if(isCreator){}
  else if (!isAdmins) return citel.reply(tlang().admin)
             //if (!isBotAdmins) return citel.reply(tlang().botadmin)
            
  
  
             if (checkgroup.nsfw == "true") return citel.reply(`*_NSFW is Enabled in This Current Chat_*\n*_To Deactive 18+ Commands type ${prefix}deact nsfw_*`);
             else return citel.reply(`*_NSFW is Disabled in This Current Chat_*\n*_To Active 18+ Commands type ${prefix}act nsfw_*`);
 }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "npm",
             infocmd: "download mp4 from url.",
             kingclass: "search",
             use: 'fb Downloader',
             kingpath: __filename
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('Please give me package name...')
             axios.get(`https://api.npms.io/v2/search?q=${text}`).then(({ data }) => {
                 let txt = data.results.map(({ package: pkg }) => `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`).join('\n\n')
                 citel.reply(txt)
             }).catch(e => console.log(e))
         }
     )
     //---------------------------------------------------------------------------
     Module_Exports({
        kingcmd: "fliptext",
        shortcut: ["ftext"],
        infocmd: "Flips given text.",
        kingclass: "misc",
        use: 'Astro',
        kingpath: __filename,
    },
    async(sigma, person, memo) => {
        if (!memo) return person.reply(`*_Ex: ${prefix}fliptext I am SIGMA Male_*`)
        flipe = memo.split('').reverse().join('')
        person.reply(`┏━━⟪⟪ ${mztit} ⟫━⦿\n┃✗ \`\`\`  •ᴛᴇxᴛ ғʟɪᴘᴘᴇʀ ᴛᴏᴏʟ•   \`\`\`\n┃✗ *•ɢɪᴠᴇɴ ᴛᴇxᴛ•*\n┃✗ ${memo}\n┃✗ *•ғʟɪᴘᴇᴅ ᴛᴇxᴛ•*\n┃✗ ${flipe}\n┗━━━━━━━━━━⦿`)
    
    }
    )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "downmp4",
  
             shortcut:['mp4down','mp4fromurl'],
             infocmd: "download mp4 from url.",
             kingclass: "downloader",
             use: 'url',
             kingpath: __filename
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply(`_give me Video Link ?_`);
             Void.sendMessage(citel.chat, {
                 video: {
                     url: text.split(" ")[0],
                 },
                 caption: ``,
                 contextInfo: {
                     externalAdReply: {
                         title: `${name.ownername}`,
                         body: `${name.botname}`,
                         mediaType: 2,
                         mediaUrl: ``,
                         sourceUrl: ``,
                     },
                 },
             }, {
                 quoted: citel,
             });
 
         }
     )
     //---------------------------------------------------------------------------
     Module_Exports({
        kingcmd: "events",
        infocmd: "activates and deactivates events.\nuse buttons to toggle.",
        kingclass: "group",
        kingpath: __filename
    },
    async(bot, person, write,{isCreator}) => {
        let checkgroup = await sck.findOne({ id: person.chat })
        if (!person.isGroup) return person.reply(tlang().group);
        const groupAdmins = await getAdmin(bot, person)
        //const botNumber = await bot.decodeJid(bot.user.id)
        //const isBotAdmins = person.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = person.isGroup ? groupAdmins.includes(person.sender) : false;
        
    if(isCreator){}
    else if (!isAdmins) return person.reply(tlang().admin)
        //if (!isBotAdmins) return person.reply(tlang().botadmin)
    
        if (checkgroup.events == "true") return person.reply(`*_Events are Enabled in Current Group_*\n*_To Deactivate Welcome Message_*\n*_TYPE ${prefix}deact events_*`);
        else return person.reply(`*_Events are Disabled in Current Group_*\n*_To Activate Welcome Message_*\n*_TYPE ${prefix}act events_*`);
    
    }
    )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "emix",
             infocmd: "Mixes two emojies.",
             kingclass: "sticker",
             use: '<query>',
             kingpath: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!text) return citel.reply(`Example : ${prefix}emix 😅,🤔`);
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
             let emoji1 = text.split(",")[0] ;
             let emoji2 = text.split(",")[1];

  const response = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${emoji1}_${emoji2}`);
  const data = await response.json();
  if(data.locale=="") return citel.reply(`Can't Create Mixture, Please Try Other Emojies`)
  else {
let media =await getBuffer(data.results[0].url)

let sticker = new Sticker(media, {
                    pack: name.packname, 
                    author: name.author, 
                    type: StickerTypes.FULL ,
                    categories: ["🤩", "🎉"], 
                    id: "12345", 
                    quality: 100,
                });
const buffer = await sticker.toBuffer();
 return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
}
   
  
         }
     )
     //---------------------------------------------------------------------------

 

 Module_Exports({
             kingcmd: "sigmabot",
             shortcut : ["chatbot","sbot","sigmachatbot"],
             infocmd: "activates and deactivates chatbot.\nuse buttons to toggle.",
             kingclass: "misc",
             kingpath: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!isCreator) return citel.reply(tlang().owner)
             const { chatbot } = require('../lib');
             let chatbott= await chatbot.findOne({ id: 'chatbot' }) ||  await new chatbot({ id: 'chatbot', worktype: "true" }).save()
             switch (text.split(" ")[0])
             {
                 case "on":
                     {
                         if (chatbott.worktype == "true") return citel.reply("*_SIGMA Chatbot is Already Enabled_*")
                         await chatbot.updateOne({ id: 'chatbot' }, { worktype: "true" })
                         return await citel.reply('*_SIGMA Chatbot Activated successfully._*')   
                     }
                     break
                 case "off":
                     {
                                if (chatbott.worktype == "false") return citel.reply("*_SIGMA ChatBot is Already Disabled._*")
                                await chatbot.updateOne({ id: 'chatbot' }, { worktype: "false" })
                                return await citel.reply('*_SIGMA Chatbot Deactivated Successfully._*')
                     }
                     break
                 default:
                     {
                        if (chatbott.worktype == "false") return await citel.reply(`*_SIGMA Chatbot Status: Disabled_* \n*_To Enable Type: ${prefix}sbot on_*`)
                        else return await citel.reply(`*SIGMA Chatbot Status: Enabled* \n*_To Disable Type : ${prefix}sbot off_*`)
                        
                     }
             }
 
 
      })
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "ebinary",
             infocmd: "encode binary",
             kingclass: "misc",
             use: 'hi',
             kingpath: __filename
         },
         async(Void, citel, text) => {
             try {
                 if (!text) return citel.reply(`Send text to be encoded.\nEx: ${prefix}ebinary hi My I am Astro`);
 
                 let textt = text || citel.quoted.text
                 let eb = await eBinary(textt);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )
     //---------------------------------------------------------------------------
 Module_Exports({
             kingcmd: "dbinary",
             infocmd: "decode binary",
             kingclass: "misc",
             use: 'hi',
             kingpath: __filename
         },
         async(Void, citel, text) => {
             try {
                 if (!text) return citel.reply(`Send text to be Decoded.\nEx: ${prefix}dbinary hi My I am Astro`);
                 let eb = await dBinary(text);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )

//-----------------------------------------------------------------------------------

if(name.WORKTYPE != 'private')
{
 
Module_Exports({
  kingcmd: "bot",
  infocmd: "activates and deactivates bot.\nuse buttons to toggle.",
  kingclass: "misc",
  kingpath: __filename
},
async(Void, citel, text,{isCreator}) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  if(!isCreator) return citel.reply(tlang().owner)
  switch (text.split(" ")[0]) {
            case 'on':{
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, botenable: "true" }).save()
                        return citel.reply(`*_Successfully Enabled ${name.botname}_*`)
                    } else {
                        if (checkgroup.botenable == "true") return citel.reply("*_Bot was Already Enabled_*")
                        await sck.updateOne({ id: citel.chat }, { botenable: "true" })
                        return citel.reply(`*_Successfully Enabled ${name.botname}_*`)
                    }
                }

            break
           case 'off':{
                       {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, botenable: "false" })
                                .save()
                            return citel.reply(`*_Successfully disabled ${name.botname}_*`)
                        } else {
                            if (checkgroup.botenable == "false") return citel.reply("*_Bot Was Already Disabled_*")
                            await sck.updateOne({ id: citel.chat }, { botenable: "false" })
                            return citel.reply(`*_Successfully disabled ${name.botname}_*`)
                        }
                    }
           }
           break
           default:
           {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   let buttons = [{
                             buttonId: `${prefix}bot on`,
                             buttonText: {
                                 displayText: "Turn On",
                             },
                             type: 1,
                         },
                         {
                             buttonId: `${prefix}bot off`,
                             buttonText: {
                                 displayText: "Turn Off",
                             },
                             type: 1,
                         },
                     ];
                     await Void.sendButtonText(citel.chat, buttons, `*_Bot Status in Current Group: ${checkgroup.botenable}_*`, Void.user.name, citel);
           }
       }
})   
} // if Statements
     //---------------------------------------------------------------------------
 /*
 Module_Exports({
             kingcmd: "antispam",
             infocmd: "Kick Spamers From Group.\nuse buttons to toggle.",
             kingclass: "group",
             kingpath: __filename
         },
         async(Void, citel, text , {isCreator}) => {
             if (!citel.isGroup) return citel.reply(tlang().group);
           let check = text ? text : '';
             let checkgroup = await sck.findOne({ id: citel.chat }) || await new sck({id : citel.chat , antispam : 'true'  }) .save();
             const groupAdmins = await getAdmin(Void, citel)
             const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
             if (!isAdmins && !isCreator) return citel.reply(tlang().admin)     
             if (check.startsWith("on") || check.startsWith("enable") || check.startsWith("act"))
             { 
                 try 
                 {
                  await sck.updateOne({ id: citel.chat }, { antispam: "true" })
                   return await citel.reply("*_Antispam Enabled Successfuly in Group_*")
                 } catch (error) {   return await citel.reply("*_There's an Error, Antispam Not Enable in Group_*")    }
             }
             else if (check.startsWith("off") || check.startsWith("disable") || check.startsWith("deact") ) 
             {
                 try 
                 {
                    await sck.updateOne({ id: citel.chat }, { antispam: "false" })
                    return await citel.reply("*_Antispam Disabled Successfuly in Group_*")
                 } catch (error) {   return await citel.reply("*_There's an Error, Antispam Not Disable in Group_*")    }
             }      
if (checkgroup.antispam == "true") return citel.reply(`Antispam : kick Users Who Spamming in Group\n\nAntispam is enabled in this Group \n *_For Disabling : ${prefix}antispam off_*`);
else return citel.reply(`Antispam : kick Users Who Spamming in Groupn\n\nAntispam is Disabled in this Group \n *_For Enablling Antispam : ${prefix}antispam on_*`);
         
 })
 */
     //---------------------------------------------------------------------------
     Module_Exports({
        kingcmd: "antilink",
        infocmd: "activates and deactivates antilink.\nuse buttons to toggle.",
        kingclass: "group",
        kingpath: __filename
    },
    async(Void, citel, text , {isCreator}) => {
          function _0x1dd1(_0x190e77,_0x3842b6){const _0x3a2918=_0x3a29();return _0x1dd1=function(_0x1dd110,_0xc0890d){_0x1dd110=_0x1dd110-0x12f;let _0x2f3ec3=_0x3a2918[_0x1dd110];return _0x2f3ec3;},_0x1dd1(_0x190e77,_0x3842b6);}const _0x537363=_0x1dd1;(function(_0x2a498c,_0xe9d7f2){const _0x20fff1=_0x1dd1,_0x275af4=_0x2a498c();while(!![]){try{const _0x1bf60a=-parseInt(_0x20fff1(0x135))/0x1+-parseInt(_0x20fff1(0x14a))/0x2*(-parseInt(_0x20fff1(0x14b))/0x3)+parseInt(_0x20fff1(0x12f))/0x4*(parseInt(_0x20fff1(0x14e))/0x5)+-parseInt(_0x20fff1(0x139))/0x6+parseInt(_0x20fff1(0x13b))/0x7+-parseInt(_0x20fff1(0x136))/0x8+-parseInt(_0x20fff1(0x13c))/0x9*(parseInt(_0x20fff1(0x148))/0xa);if(_0x1bf60a===_0xe9d7f2)break;else _0x275af4['push'](_0x275af4['shift']());}catch(_0x96c32a){_0x275af4['push'](_0x275af4['shift']());}}}(_0x3a29,0xebdc8));if(!citel['isGroup'])return citel['reply'](tlang()[_0x537363(0x141)]);const groupAdmins=await getAdmin(Void,citel),isAdmins=citel[_0x537363(0x130)]?groupAdmins[_0x537363(0x143)](citel[_0x537363(0x131)]):![];if(!isAdmins&&!isCreator)return citel[_0x537363(0x149)](tlang()[_0x537363(0x137)]);let checkinfo=await sck['findOne']({'id':citel[_0x537363(0x142)]})||await new sck({'id':citel[_0x537363(0x142)]})[_0x537363(0x13f)](),textt=text?text[_0x537363(0x151)]()['trim']():![],action=textt?textt[_0x537363(0x13e)]('\x20')[0x0]:![];function _0x3a29(){const _0x5d7267=['3041848KwfWrd','admin','delete','3314166wTfUba','antilink\x20kick/delete/off_*','3559514diYetN','9CvvJaC','*_Antilink\x20','split','save','updateOne','group','chat','includes','send','deact','off','*_Uhh\x20Dear,\x20Please\x20Provide\x20Valid\x20Instruction_*\x0a*Eg:\x20_','1361390agAqTj','reply','26518zyirsz','237MuHrUF','\x0a\x0a*Antilink\x20Modes:*\x0a\x20\x20.antilink\x20kick\x20(Delete\x20Links\x20&\x20Kick\x20Senders)\x0a\x20\x20.antilink\x20delete\x20(Delete\x20Links\x20Only)\x0a\x20\x20.antilink\x20off\x20(Disable\x20Antilink\x20in\x20chat)\x0a\x0a\x0a','disable','126675qiyDRV','*_Anti_Link\x20Succesfully\x20set\x20to\x20kick\x20link\x20senders!_*','kick','toLowerCase','caption','Disabled','startsWith','antilink','196ZzhnRb','isGroup','sender','false','*_Anti_Link\x20Disabled\x20Succesfully!_*','*Current\x20Mode:*\x20_','762559wgiCsM'];_0x3a29=function(){return _0x5d7267;};return _0x3a29();}if(!action)return await citel[_0x537363(0x144)](_0x537363(0x13d)+(checkinfo[_0x537363(0x155)]===_0x537363(0x132)?_0x537363(0x153):'Enabled')+'\x20in\x20this\x20Group!_*\x20\x0a\x20'+(checkinfo[_0x537363(0x155)]==='false'?'':_0x537363(0x134)+checkinfo[_0x537363(0x155)]+'_')+_0x537363(0x14c)+name[_0x537363(0x152)]);else{if(action[_0x537363(0x154)](_0x537363(0x146))||action[_0x537363(0x154)](_0x537363(0x145))||action['startsWith'](_0x537363(0x14d)))return await sck[_0x537363(0x140)]({'id':citel['chat']},{'antilink':_0x537363(0x132)}),await citel['send'](_0x537363(0x133));else{if(action[_0x537363(0x154)]('kick'))return await sck[_0x537363(0x140)]({'id':citel[_0x537363(0x142)]},{'antilink':_0x537363(0x150)}),await citel[_0x537363(0x144)](_0x537363(0x14f));else{if(action['startsWith']('delete'))return await sck['updateOne']({'id':citel['chat']},{'antilink':_0x537363(0x138)}),await citel[_0x537363(0x144)]('*_Anti_Link\x20Succesfully\x20set\x20to\x20delete\x20links\x20from\x20chat!_*');else return await citel[_0x537363(0x144)](_0x537363(0x147)+prefix+_0x537363(0x13a));}}}


}) 
     //---------------------------------------------------------------------------
 Module_Exports({ on: "body" }, async(Void, citel) => {
   if (!name.autoreaction) return 
   else if (name.autoreaction === 'true' && citel.text.startsWith(prefix)) {
         const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: emokis,
                 key: citel.key
             }
         })
     }
  
  else if (name.autoreaction === 'all') {
         const mojis = ['💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','❤️‍','🔥','❤️‍','🩹','💯','♨️','💢','💬','👁️‍🗨️','🗨️','🗯️','💭','💤','🌐','♠️','♥️','♦️','♣️','🃏','🀄️','🎴','🎭️','🔇','🔈️','🔉','🔊','🔔','🔕','🎼','🎵','🎶','💹','🏧','🚮','🚰','♿️','🚹️','🚺️','🚻','🚼️','🚾','🛂','🛃','🛄','🛅','⚠️','🚸','⛔️','🚫','🚳','🚭️','🚯','🚱','🚷','📵','🔞','☢️','☣️','⬆️','↗️','➡️','↘️','⬇️','↙️','⬅️','↖️','↕️','↔️','↩️','↪️','⤴️','⤵️','🔃','🔄','🔙','🔚','🔛','🔜','🔝','🛐','⚛️','🕉️','✡️','☸️','☯️','✝️','☦️','☪️','☮️','🕎','🔯','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','⛎','🔀','🔁','🔂','▶️','⏩️','⏭️','⏯️','◀️','⏪️','⏮️','🔼','⏫','🔽','⏬','⏸️','⏹️','⏺️','⏏️','🎦','🔅','🔆','📶','📳','📴','♀️','♂️','⚧','✖️','➕','➖','➗','♾️','‼️','⁉️','❓️','❔','❕','❗️','〰️','💱','💲','⚕️','♻️','⚜️','🔱','📛','🔰','⭕️','✅','☑️','✔️','❌','❎','➰','➿','〽️','✳️','✴️','❇️','©️','®️','™️','#️⃣','*️⃣','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔠','🔡','🔢','🔣','🔤','🅰️','🆎','🅱️','🆑','🆒','🆓','ℹ️','🆔','Ⓜ️','🆕','🆖','🅾️','🆗','🅿️','🆘','🆙','🆚','🈁','🈂️','🈷️','🈶','🈯️','🉐','🈹','🈚️','🈲','🉑','🈸','🈴','🈳','㊗️','㊙️','🈺','🈵','🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫️','⚪️','🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛️','⬜️','◼️','◻️','◾️','◽️','▪️','▫️','🔶','🔷','🔸','🔹','🔺','🔻','💠','🔘','🔳','🔲','🕛️','🕧️','🕐️','🕜️','🕑️','🕝️','🕒️','🕞️','🕓️','🕟️','🕔️','🕠️','🕕️','🕡️','🕖️','🕢️','🕗️','🕣️','🕘️','🕤️','🕙️','🕥️','🕚️','🕦️','*️','#️','0️','1️','2️','3️','4️','5️','6️','7️','8️','9️','🛎️','🧳','⌛️','⏳️','⌚️','⏰','⏱️','⏲️','🕰️','🌡️','🗺️','🧭','🎃','🎄','🧨','🎈','🎉','🎊','🎎','🎏','🎐','🎀','🎁','🎗️','🎟️','🎫','🔮','🧿','🎮️','🕹️','🎰','🎲','♟️','🧩','🧸','🖼️','🎨','🧵','🧶','👓️','🕶️','🥽','🥼','🦺','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','🥻','🩱','🩲','🩳','👙','👚','👛','👜','👝','🛍️','🎒','👞','👟','🥾','🥿','👠','👡','🩰','👢','👑','👒','🎩','🎓️','🧢','⛑️','📿','💄','💍','💎','📢','📣','📯','🎙️','🎚️','🎛️','🎤','🎧️','📻️','🎷','🎸','🎹','🎺','🎻','🪕','🥁','📱','📲','☎️','📞','📟️','📠','🔋','🔌','💻️','🖥️','🖨️','⌨️','🖱️','🖲️','💽','💾','💿️','📀','🧮','🎥','🎞️','📽️','🎬️','📺️','📷️','📸','📹️','📼','🔍️','🔎','🕯️','💡','🔦','🏮','🪔','📔','📕','📖','📗','📘','📙','📚️','📓','📒','📃','📜','📄','📰','🗞️','📑','🔖','🏷️','💰️','💴','💵','💶','💷','💸','💳️','🧾','✉️','💌','📧','🧧','📨','📩','📤️','📥️','📦️','📫️','📪️','📬️','📭️','📮','🗳️','✏️','✒️','🖋️','🖊️','🖌️','🖍️','📝','💼','📁','📂','🗂️','📅','📆','🗒️','🗓️','📇','📈','📉','📊','📋️','📌','📍','📎','🖇️','📏','📐','✂️','🗃️','🗄️','🗑️','🔒️','🔓️','🔏','🔐','🔑','🗝️','🔨','🪓','⛏️','⚒️','🛠️','🗡️','⚔️','💣️','🏹','🛡️','🔧','🔩','⚙️','🗜️','⚖️','🦯','🔗','⛓️','🧰','🧲','⚗️','🧪','🧫','🧬','🔬','🔭','📡','💉','🩸','💊','🩹','🩺','🚪','🛏️','🛋️','🪑','🚽','🚿','🛁','🪒','🧴','🧷','🧹','🧺','🧻','🧼','🧽','🧯','🛒','🚬','⚰️','⚱️','🏺','🕳️','🏔️','⛰️','🌋','🗻','🏕️','🏖️','🏜️','🏝️','🏟️','🏛️','🏗️','🧱','🏘️','🏚️','🏠️','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏭️','🏯','🏰','💒','🗼','🗽','⛪️','🕌','🛕','🕍','⛩️','🕋','⛲️','⛺️','🌁','🌃','🏙️','🌄','🌅','🌆','🌇','🌉','🗾','🏞️','🎠','🎡','🎢','💈','🎪','🚂','🚃','🚄','🚅','🚆','🚇️','🚈','🚉','🚊','🚝','🚞','🚋','🚌','🚍️','🚎','🚐','🚑️','🚒','🚓','🚔️','🚕','🚖','🚗','🚘️','🚙','🚚','🚛','🚜','🏎️','🏍️','🛵','🦽','🦼','🛺','🚲️','🛴','🛹','🚏','🛣️','🛤️','🛢️','⛽️','🚨','🚥','🚦','🛑','🚧','⚓️','⛵️','🛶','🚤','🛳️','⛴️','🛥️','🚢','✈️','🛩️','🛫','🛬','🪂','💺','🚁','🚟','🚠','🚡','🛰️','🚀','🛸','🎆','🎇','🎑','🗿','⚽️','⚾️','🥎','🏀','🏐','🏈','🏉','🎾','🥏','🎳','🏏','🏑','🏒','🥍','🏓','🏸','🥊','🥋','🥅','⛳️','⛸️','🎣','🤿','🎽','🎿','🛷','🥌','🎯','🪀','🪁','🎱','🎖️','🏆️','🏅','🥇','🥈','🥉','🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥥','🥑','🍆','🥔','🥕','🌽','🌶️','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🥙','🧆','🥚','🍳','🥘','🍲','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕️','🍵','🍶','🍾','🍷','🍸️','🍹','🍺','🍻','🥂','🥃','🥤','🧃','🧉','🧊','🥢','🍽️','🍴','🥄','🔪','🐵','🐒','🦍','🦧','🐶','🐕️','🦮','🐕‍','🦺','🐩','🐺','🦊','🦝','🐱','🐈️','🐈‍','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇','🐿️','🦔','🦇','🐻','🐻‍','❄️','🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦️','🐧','🕊️','🦅','🦆','🦢','🦉','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🐟️','🐠','🐡','🦈','🐙','🦑','🦀','🦞','🦐','🦪','🐚','🐌','🦋','🐛','🐜','🐝','🐞','🦗','🕷️','🕸️','🦂','🦟','🦠','💐','🌸','💮','🏵️','🌹','🥀','🌺','🌻','🌼','🌷','🌱','🌲','🌳','🌴','🌵','🎋','🎍','🌾','🌿','☘️','🍀','🍁','🍂','🍃','🌍️','🌎️','🌏️','🌑','🌒','🌓','🌔','🌕️','🌖','🌗','🌘','🌙','🌚','🌛','🌜️','☀️','🌝','🌞','🪐','💫','⭐️','🌟','✨','🌠','🌌','☁️','⛅️','⛈️','🌤️','🌥️','🌦️','🌧️','🌨️','🌩️','🌪️','🌫️','🌬️','🌀','🌈','🌂','☂️','☔️','⛱️','⚡️','❄️','☃️','⛄️','☄️','🔥','💧','🌊','💥','💦','💨','😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐️','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','😮‍','💨','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','😶‍','🌫️','🥴','😵‍','💫','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽️','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','👋','🤚','🖐️','✋','🖖','👌','🤏','✌️','🤞','🤟','🤘','🤙','👈️','👉️','👆️','🖕','👇️','☝️','👍️','👎️','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂️','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','👄','💋','👶','🧒','👦','👧','🧑','👨','👩','🧔','🧔‍♀️','🧔‍♂️','🧑','👨‍','🦰','👩‍','🦰','🧑','👨‍','🦱','👩‍','🦱','🧑','👨‍','🦳','👩‍','🦳','🧑','👨‍','🦲','👩‍','🦲','👱','👱‍♂️','👱‍♀️','🧓','👴','👵','🙍','🙍‍♂️','🙍‍♀️','🙎','🙎‍♂️','🙎‍♀️','🙅','🙅‍♂️','🙅‍♀️','🙆','🙆‍♂️','🙆‍♀️','💁','💁‍♂️','💁‍♀️','🙋','🙋‍♂️','🙋‍♀️','🧏','🧏‍♂️','🧏‍♀️','🙇','🙇‍♂️','🙇‍♀️','🤦','🤦‍♂️','🤦‍♀️','🤷','🤷‍♂️','🤷‍♀️','🧑‍⚕️','👨‍⚕️','👩‍⚕️','🧑‍🎓','👨‍🎓','👩‍🎓','🧑‍🏫','👨‍🏫','👩‍🏫','🧑‍⚖️','👨‍⚖️','👩‍⚖️','🧑‍🌾','👨‍🌾','👩‍🌾','🧑‍🍳','👨‍🍳','👩‍🍳','🧑‍🔧','👨‍🔧','👩‍🔧','🧑‍🏭','👨‍🏭','👩‍🏭','🧑‍💼','👨‍💼','👩‍💼','🧑‍🔬','👨‍🔬','👩‍🔬','🧑‍💻','👨‍💻','👩‍💻','🧑‍🎤','👨‍🎤','👩‍🎤','🧑‍🎨','👨‍🎨','👩‍🎨','🧑‍✈️','👨‍✈️','👩‍✈️','🧑‍🚀','👨‍🚀','👩‍🚀','🧑‍🚒','👨‍🚒','👩‍🚒','👮','👮‍♂️','👮‍♀️','🕵️','🕵️‍♂️','🕵️‍♀️','💂','💂‍♂️','💂‍♀️','👷','👷‍♂️','👷‍♀️','🤴','👸','👳','👳‍♂️','👳‍♀️','👲','🧕','🤵','🤵‍♂️','🤵‍♀️','👰','👰‍♂️','👰‍♀️','🤰','🤱','👩‍','🍼','👨‍','🍼','🧑‍','🍼','👼','🎅','🤶','🧑‍','🎄','🦸','🦸‍♂️','🦸‍♀️','🦹','🦹‍♂️','🦹‍♀️','🧙','🧙‍♂️','🧙‍♀️','🧚','🧚‍♂️','🧚‍♀️','🧛','🧛‍♂️','🧛‍♀️','🧜','🧜‍♂️','🧜‍♀️','🧝','🧝‍♂️','🧝‍♀️','🧞','🧞‍♂️','🧞‍♀️','🧟','🧟‍♂️','🧟‍♀️','💆','💆‍♂️','💆‍♀️','💇','💇‍♂️','💇‍♀️','🚶','🚶‍♂️','🚶‍♀️','🧍','🧍‍♂️','🧍‍♀️','🧎','🧎‍♂️','🧎‍♀️','🧑‍','🦯','👨‍','🦯','👩‍','🦯','🧑‍','🦼','👨‍','🦼','👩‍','🦼','🧑‍','🦽','👨‍','🦽','👩‍','🦽','🏃','🏃‍♂️','🏃‍♀️','💃','🕺','🕴️','👯','👯‍♂️','👯‍♀️','🧖','🧖‍♂️','🧖‍♀️','🧗','🧗‍♂️','🧗‍♀️','🤺','🏇','⛷️','🏂️','🏌️','🏌️‍♂️','🏌️‍♀️','🏄️','🏄‍♂️','🏄‍♀️','🚣','🚣‍♂️','🚣‍♀️','🏊️','🏊‍♂️','🏊‍♀️','⛹️','⛹️‍♂️','⛹️‍♀️','🏋️','🏋️‍♂️','🏋️‍♀️','🚴','🚴‍♂️','🚴‍♀️','🚵','🚵‍♂️','🚵‍♀️','🤸','🤸‍♂️','🤸‍♀️','🤼','🤼‍♂️','🤼‍♀️','🤽','🤽‍♂️','🤽‍♀️','🤾','🤾‍♂️','🤾‍♀️','🤹','🤹‍♂️','🤹‍♀️','🧘','🧘‍♂️','🧘‍♀️','🛀','🛌','🧑‍','🤝‍','🧑','👭','👫','👬','💏','👩‍❤️‍💋‍👨','👨‍❤️‍💋‍👨','👩‍❤️‍💋‍👩','💑','👩‍❤️‍👨','👨‍❤️‍👨','👩‍❤️‍👩','👪️','👨‍👩‍👦','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👦','👨‍👦‍👦','👨‍👧','👨‍👧‍👦','👨‍👧‍👧','👩‍👦','👩‍👦‍👦','👩‍👧','👩‍👧‍👦','👩‍👧‍👧','🗣️','👤','👥','👣']
         const mokis = mojis[Math.floor(Math.random() * (mojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: mokis,
                 key: citel.key
             }
         })
     }
 
 })

 // All These Misc Commamnds Are Developed By @Astropeda
 // Whatsapp +2348039607375
 // Usage And CopyRights Are Reserved