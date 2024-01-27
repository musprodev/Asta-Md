const { cmd } = require('../lib');
const { updateProfilePicture, forwardMessage } = require("../lib");
const Config = require('../config')

global.AFK = {
	isAfk: false,
	reason: false,
	lastseen: 0,
};

var _0x378902=_0x287a;(function(_0x4680ec,_0x4d5d0a){var _0x246608=_0x287a,_0x5649b9=_0x4680ec();while(!![]){try{var _0x518f28=-parseInt(_0x246608(0x184))/0x1*(parseInt(_0x246608(0x178))/0x2)+-parseInt(_0x246608(0x175))/0x3*(parseInt(_0x246608(0x18f))/0x4)+parseInt(_0x246608(0x17b))/0x5*(-parseInt(_0x246608(0x183))/0x6)+parseInt(_0x246608(0x182))/0x7*(-parseInt(_0x246608(0x181))/0x8)+-parseInt(_0x246608(0x179))/0x9*(-parseInt(_0x246608(0x170))/0xa)+-parseInt(_0x246608(0x172))/0xb+parseInt(_0x246608(0x187))/0xc*(parseInt(_0x246608(0x17a))/0xd);if(_0x518f28===_0x4d5d0a)break;else _0x5649b9['push'](_0x5649b9['shift']());}catch(_0x54172c){_0x5649b9['push'](_0x5649b9['shift']());}}}(_0x82f6,0x95d36),cmd({'pattern':_0x378902(0x176),'fromMe':!![],'desc':_0x378902(0x186),'category':_0x378902(0x173)},async(_0x55d0ce,_0x288e9e,_0x39c6d0)=>{var _0x3b30d6=_0x378902;if(!global['AFK'])global[_0x3b30d6(0x188)]={};if(!global[_0x3b30d6(0x188)]['isAfk']&&!_0x39c6d0)return await _0x288e9e[_0x3b30d6(0x177)](_0x3b30d6(0x16f));if(!global[_0x3b30d6(0x188)]['isAfk']){if(_0x39c6d0)global['AFK'][_0x3b30d6(0x18c)]=_0x39c6d0;return global[_0x3b30d6(0x188)][_0x3b30d6(0x17e)]=!![],global[_0x3b30d6(0x188)][_0x3b30d6(0x18e)]=Math[_0x3b30d6(0x16d)](new Date()[_0x3b30d6(0x18a)]()/0x3e8),await _0x288e9e[_0x3b30d6(0x177)](_0x39c6d0['replace'](_0x3b30d6(0x180),Math[_0x3b30d6(0x16d)](new Date()['getTime']()/0x3e8)-global[_0x3b30d6(0x188)]['lastseen']));}}),cmd({'pattern':_0x378902(0x17f),'fromMe':!![],'desc':_0x378902(0x185),'category':_0x378902(0x173)},async(_0x155ecc,_0x4fce3e)=>{var _0x286c6e=_0x378902;if(!global[_0x286c6e(0x188)]||!global[_0x286c6e(0x188)][_0x286c6e(0x17e)])return await _0x4fce3e[_0x286c6e(0x177)](_0x286c6e(0x17c));return global[_0x286c6e(0x188)][_0x286c6e(0x17e)]=![],global['AFK'][_0x286c6e(0x18c)]=![],global[_0x286c6e(0x188)][_0x286c6e(0x18e)]=0x0,await _0x4fce3e[_0x286c6e(0x177)](_0x286c6e(0x189));}),cmd({'on':_0x378902(0x16e),'fromMe':![]},async(_0x23f24e,_0x481618,_0x47b467)=>{var _0x34f4c4=_0x378902;if(global[_0x34f4c4(0x188)]&&global['AFK'][_0x34f4c4(0x17e)]){if(_0x481618[_0x34f4c4(0x18d)]&&_0x47b467[_0x34f4c4(0x17d)]('@'+_0x481618[_0x34f4c4(0x171)]()[_0x34f4c4(0x174)]))await _0x481618[_0x34f4c4(0x177)](_0x34f4c4(0x18b)+global[_0x34f4c4(0x188)][_0x34f4c4(0x18c)]);else!_0x481618['isGroup']&&await _0x481618[_0x34f4c4(0x177)](_0x34f4c4(0x18b)+global[_0x34f4c4(0x188)][_0x34f4c4(0x18c)]);}}));function _0x287a(_0x449d12,_0x3f07fd){var _0x82f6d2=_0x82f6();return _0x287a=function(_0x287aef,_0x4e8f46){_0x287aef=_0x287aef-0x16d;var _0x3a43d3=_0x82f6d2[_0x287aef];return _0x3a43d3;},_0x287a(_0x449d12,_0x3f07fd);}function _0x82f6(){var _0xce0be2=['Example:\x20My\x20owner\x20is\x20AFK\x0aLast\x20seen\x20before\x20#lastseen\x0aTo\x20turn\x20off\x20AFK,\x20send\x20a\x20message\x20again.','10UBuREx','getBotInfo','10505341himWUw','watsusi','username','3PIyfun','afk','reply','10964fmvqbW','547389hncKQD','111189zxeKIm','2544935cPaKrC','I\x20am\x20not\x20AFK.','includes','isAfk','delafk','#lastseen','2920552PkKwdt','21wEgrja','6yraRtH','127aQUhkr','turn\x20off\x20away\x20from\x20keyboard','away\x20from\x20keyboard','6156rauQkk','AFK','I\x20am\x20back!','getTime','I\x27m\x20currently\x20AFK.\x20Reason:\x20','reason','isGroup','lastseen','2317540Hrxsnf','round','text'];_0x82f6=function(){return _0xce0be2;};return _0x82f6();}

const antideleteOwners = new Set();

cmd({
  pattern: 'antidelete',
  fromMe: true,
  desc: 'Configure Anti-Delete preferences',
  category: 'admin',
}, async (Void, citel, text) => {
  const args = text.split(' | ');

  if (args.length === 1 && args[0].toLowerCase() === 'off') {
    antideleteOwners.delete(citel.sender.jid);
    return await citel.reply('Anti-Delete turned off.');
  }

  if (args.length === 1 && args[0].toLowerCase() === 'on') {
    antideleteOwners.add(citel.sender.jid);
    return await citel.reply('Anti-Delete turned on. Deleted messages will be sent to you.');
  } else {
    return await citel.reply('Invalid format. Example: antidelete on');
  }
});

cmd({
  on: 'message',
  fromMe: false,
}, async (Void, citel, message) => {
  if (antideleteOwners.size > 0 && citel.key.fromMe === false) {
    antideleteOwners.forEach(async ownerJID => {
      const deletedBy = citel.key.fromMe ? 'you' : citel.key.participant;
      const sentBy = citel.key.fromMe ? 'you' : citel.key.remoteJid;

      const messageText = message.hasOwnProperty('text') ? message.text : 'Non-text message';

      const deletedMessageID = citel.message.id;
      const deletedMessageContent = await Void.getMessageById(deletedMessageID);

      const report = ` *Someone deleted a message!!*\n\n * Deleted by:* _${deletedBy}_\n *✉️ Sent by:* _${sentBy}_\n * *Message text:* \`\`\`${messageText}\`\`\``;

      if (message.hasOwnProperty('image') || message.hasOwnProperty('video') || message.hasOwnProperty('audio')) {
        report += `\n\n*Message media:*\n`;
        for (const media of Object.values(message)) {
          if (media.hasOwnProperty('mimetype')) {
            report += `- ${media.mimetype}\n`;
          }
        }
      }

      await Void.sendMessage(ownerJID, report, citel.message);
    });
  }
});



cmd({
  pattern: "gjid",
  fromMe: true,
  desc: "Get the JID of the current group",
  category : "watsusi",
}, async (Void, citel) => {
  if (!citel.isGroup) {
    await citel.reply("This command can only be used in a group.");
    return;
  }

  const groupJID = citel.chat;
  await citel.reply(`The JID of this group is: ${groupJID}`);
});

cmd({
  pattern: "archive",
  desc: "Archives a chat to hide it from your chat list",
  category: "watsusi",
  use: "<reply to chat>",
}, async (Void, citel, text) => {
  if (!citel.quoted) return citel.reply("Please reply to the chat you want to archive.");
  const chatId = citel.quoted.chat;
  try {
    const lastMessage = await getLastMessageInChat(chatId);
    await Void.chatModify({
      archive: true,
      lastMessages: [lastMessage],
    }, chatId);
    citel.reply("Chat successfully archived!");
  } catch (error) {
    console.error(error);
    citel.reply("Failed to archive chat.");
  }
});


cmd({
  pattern: "groupbroad",
  fromMe: true,
  desc: "Send a broadcast message to the group",
  catergory: "owner",
}, async (Void, citel, text) => {
  if (!text) return await citel.reply("_Please provide a message to broadcast_");

  const groupJid = "120363193106986276@g.us"; 

  await Void.sendMessage(groupJid, text);

  return await citel.reply("_Broadcast sent successfully_");
});


cmd({
    pattern: "teddyy",    
    catergory: "fun",    
    dear: "cute teddy",   
    filename: __filename,
},async(Void,citel ,text) => {
      let teddy = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈']
      const { key } = await Void.sendMessage(citel.chat,{text :  `(\\_/)\n( •.•)\n/>🤍` })
      for (let i = 0; i < teddy.length; i++) {
        await sleep(500);
        await Void.sendMessage(citel.chat,{text:`(\\_/)\n( •.•)\n/>${teddy[i]}`,  edit: key })             
      }

})