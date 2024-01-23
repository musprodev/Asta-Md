/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo0
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.0.1
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Suhail Tech Info.
   * © 2023 Suhail-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
 **/






 const { cmd, parseJid,getAdmin,tlang } = require("../lib/");
 const eco = require('discord-mongoose-economy')
 const ty = eco.connect(mongodb);


 const stickers = [
  "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-1.webp",
  "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-2.webp",
  "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-3.webp",
  "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-3.webp",
  "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-4.webp",
  "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-4.webp",
  "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-5.webp",
  "https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/ᴅɪᴄᴇ/sᴜʜᴀɪʟ-ᴍᴅ-ᴅɪᴄᴇ-6.webp",
  ];

/**
 * Thanks to @siraj-7
 * For These Dice Stickers
 * @author : Suhail Tech Info
**/

 cmd(
  {
    pattern: "dice",
    desc: "Rolling Dice Game",
    filename: __filename,
    category: "game",
  },
  async (Void,citel,text) => {        
    function _0x1057(){const _0x1197c1=['19265RxwKNW','780DDnVuc','sᴜʜᴀɪʟ-ᴍᴅ','3528awUTID','length','621548LyOqYd','1498381wAYdEg','1612210HskIPI','chat','18aDiqRh','22YBynzo','42384744BVxsBD','6️⃣','5️⃣','4️⃣','sendMessage','7552ClpecV','random','2RtaivP','5267941SjazyO','floor','ᴅɪᴄᴇ','1️⃣'];_0x1057=function(){return _0x1197c1;};return _0x1057();}function _0x42fa(_0x59f5c3,_0x27342d){const _0x105742=_0x1057();return _0x42fa=function(_0x42fa63,_0x296206){_0x42fa63=_0x42fa63-0x189;let _0x13f68a=_0x105742[_0x42fa63];return _0x13f68a;},_0x42fa(_0x59f5c3,_0x27342d);}const _0x3f5752=_0x42fa;(function(_0x515ee8,_0x26c5b6){const _0x24734b=_0x42fa,_0x34fa6f=_0x515ee8();while(!![]){try{const _0x4cca3a=-parseInt(_0x24734b(0x19d))/0x1*(parseInt(_0x24734b(0x192))/0x2)+-parseInt(_0x24734b(0x189))/0x3*(parseInt(_0x24734b(0x19c))/0x4)+parseInt(_0x24734b(0x197))/0x5*(parseInt(_0x24734b(0x198))/0x6)+-parseInt(_0x24734b(0x193))/0x7+-parseInt(_0x24734b(0x190))/0x8*(-parseInt(_0x24734b(0x19a))/0x9)+-parseInt(_0x24734b(0x19e))/0xa*(parseInt(_0x24734b(0x18a))/0xb)+parseInt(_0x24734b(0x18b))/0xc;if(_0x4cca3a===_0x26c5b6)break;else _0x34fa6f['push'](_0x34fa6f['shift']());}catch(_0x430693){_0x34fa6f['push'](_0x34fa6f['shift']());}}}(_0x1057,0xdb10c));try{const randomIndex=Math['floor'](Math[_0x3f5752(0x191)]()*stickers[_0x3f5752(0x19b)]),randomSticker=stickers[randomIndex];return await Void['sendMessage'](citel[_0x3f5752(0x19f)],{'sticker':{'url':randomSticker},'packname':_0x3f5752(0x195),'author':_0x3f5752(0x199)});}catch(_0x141513){const randomNumber=Math[_0x3f5752(0x194)](Math[_0x3f5752(0x191)]()*0x6),diceEmoji=['⚀','⚁','⚂','⚃','⚄','⚅'],reactEmoji=[_0x3f5752(0x196),'2️⃣','3️⃣',_0x3f5752(0x18e),_0x3f5752(0x18d),_0x3f5752(0x18c)];let index=Math[_0x3f5752(0x194)](Math[_0x3f5752(0x191)]()*diceEmoji[_0x3f5752(0x19b)]),msg=await Void['sendMessage'](citel['chat'],{'text':diceEmoji[index]});return await Void[_0x3f5752(0x18f)](citel[_0x3f5752(0x19f)],{'react':{'text':reactEmoji[index],'key':msg['key']}});}
  })
 
cmd(
  {
    pattern: "delttt",
    desc: "deletes TicTacToe running session.",
    filename: __filename,
    category: "game",
  },
  async (Void,citel,text,{isCreator}) => {
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
        const participants = citel.isGroup ? await groupMetadata.participants : "";
        const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if(!isAdmins && !isCreator) return citel.reply('This command is only for Group Admin and my owner.')
         this.game = this.game ? this.game : false
         if (
        Object.values(this.game).find(
          (room) =>
            room.id.startsWith("tictactoe")
        )
      ) {
        delete this.game
        return citel.reply(`_Successfully Deleted running TicTacToe game._`);
        } else {  return citel.reply(`No TicTacToe game🎮 is running.`)}



  })
  
cmd(
  {
    pattern: "ttt",
    desc: "Play TicTacToe",
    filename: __filename,
    category: "game",
  },
  async (Void,citel,text) => {
    if (!citel.isGroup) return citel.reply(tlang().group);
    let {prefix} = require('../lib')
    {
      let TicTacToe = require("../lib/ttt");
      this.game = this.game ? this.game : {};
      if ( Object.values(this.game).find( (room) => room.id.startsWith("tictactoe") && [room.game.playerX, room.game.playerO].includes(citel.sender))) return citel.reply("_A game is already going on_");
      let room = Object.values(this.game).find((room) =>  room.state === "WAITING" && (text ? room.name === text : true)  );
      if (room) {
        room.o = citel.chat;
        room.game.playerO = citel.sender || citel.mentionedJid[0] 
        room.state = "PLAYING";
        let arr = room.game.render().map((v) => {
          return {
            X: "❌",
            O: "⭕",
            1: "1️⃣",
            2: "2️⃣",
            3: "3️⃣",
            4: "4️⃣",
            5: "5️⃣",
            6: "6️⃣",
            7: "7️⃣",
            8: "8️⃣",
            9: "9️⃣", 
          }[v];
        });
        let str = `
Current turn: @${room.game.currentTurn.split("@")[0]}
Room ID: ${room.id}
${arr.slice(0, 3).join("  ")}
${arr.slice(3, 6).join("  ")}
${arr.slice(6).join("  ")}
`;

        return await Void.sendMessage(citel.chat, { text: str, mentions: [room.game.currentTurn], });
      } else {
        room = {
          id: "tictactoe-" + +new Date(),
          x: citel.chat,
          o: "",
          game: new TicTacToe(citel.sender, "o"),
          state: "WAITING",
        };
        if (text) room.name = text;
        citel.reply("_Waiting for player,use .ttt to join this game._ ");
        this.game[room.id] = room;
      }
    }
  }
);

cmd({ on: "text" },
  async (Void,citel,text) => {
    if(!citel.isGroup) return
    let {prefix} = require('../lib')
    this.game = this.game ? this.game : {};
    let room = Object.values(this.game).find(
      (room) =>
        room.id &&
        room.game &&
        room.state &&
        room.id.startsWith("tictactoe") &&
        [room.game.playerX, room.game.playerO].includes(citel.sender) &&
        room.state == "PLAYING"
    );

    if (room) {
      let ok;
      let isWin = !1;
      let isTie = !1;
      let isSurrender = !1;
      if (!/^([1-9]|(me)?give_up|surr?ender|off|skip)$/i.test(citel.text)) return;
      isSurrender = !/^[1-9]$/.test(citel.text);
      if (citel.sender !== room.game.currentTurn) {  if (!isSurrender) return !0;  }
      if (
        !isSurrender &&
        1 >
          (ok = room.game.turn(
            citel.sender === room.game.playerO,
            parseInt(citel.text) - 1
          ))
      ) {
        citel.reply(
          {
            "-3": "The game is over.",
            "-2": "Invalid",
            "-1": "_Invalid Position_",
            0: "_Invalid Position_",
          }[ok]
        );
        return !0;
      }
      if (citel.sender === room.game.winner) isWin = true;
      else if (room.game.board === 511) isTie = true;
      let arr = room.game.render().map((v) => {
        return {
          X: "❌",
          O: "⭕",
          1: "1️⃣",
          2: "2️⃣",
          3: "3️⃣",
          4: "4️⃣",
          5: "5️⃣",
          6: "6️⃣",
          7: "7️⃣",
          8: "8️⃣",
          9: "9️⃣",
        }[v];
      });
      if (isSurrender) {
        room.game._currentTurn = citel.sender === room.game.playerX;
        isWin = true;
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner;
      let str = `Room ID: ${room.id}
      
${arr.slice(0, 3).join("  ")}
${arr.slice(3, 6).join("  ")}
${arr.slice(6).join("  ")}
${ isWin ? `@${winner.split("@")[0]} Won ! and got 2000💎 in wallet🤑` : isTie ? `Game Tied,well done to both of you players.` : `Current Turn ${["❌", "⭕"][1 * room.game._currentTurn]} @${ room.game.currentTurn.split("@")[0]}`  }
⭕:- @${room.game.playerO.split("@")[0]}
❌:- @${room.game.playerX.split("@")[0]}`;

      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== citel.chat)
        room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = citel.chat;
      if(isWin){  await eco.give(citel.sender, "Suhail", 2000);  }
      if (isWin || isTie) { 
        await Void.sendMessage(citel.chat, { text: str, mentions: [room.game.playerO,room.game.playerX], });
        delete this.game[room.id];
      } 
      else {  await Void.sendMessage(citel.chat, {  text: str,   mentions: [room.game.playerO,room.game.playerX], });  }
    }
  }
);

cmd({ pattern: "ship" , category: "fun" }, async(Void, citel, text) => {
    const { tlang } = require('../lib')
   if (!citel.isGroup) return citel.reply(tlang().group);
   const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	 const participants = citel.isGroup ? await groupMetadata.participants : "";
   let members = participants.map(u => u.id)
   const percentage = Math.floor(Math.random() * 100)
    async function couple(percent) {
         var text;
        if (percent < 25) {
            text = `\t\t\t\t\t*ShipCent : ${percentage}%* \n\t\tThere's still time to reconsider your choices`
        } else if (percent < 50) {
            text = `\t\t\t\t\t*ShipCent : ${percentage}%* \n\t\t Good enough, I guess! 💫`
        } else if (percent < 75) {
            text = `\t\t\t\t\t*ShipCent : ${percentage}%* \n\t\t\tStay together and you'll find a way ⭐️`
        } else if (percent < 90) {
            text = `\t\t\t\t\t*ShipCent : ${percentage}%* \n\tAmazing! You two will be a good couple 💖 `
        } else {
            text = `\t\t\t\t\t*ShipCent : ${percentage}%* \n\tYou two are fated to be together 💙`
        }
        return text
        }
       var user = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
       var shiper;
       if (user) {
       shiper = user
       } else {
       shiper = members[Math.floor(Math.random() * members.length)]
       }
       let caption = `\t❣️ *Matchmaking...* ❣️ \n`
        caption += `\t\t✯────────────────────✯\n`
        caption += `@${citel.sender.split('@')[0]}  x  @${shiper.split('@')[0]}\n`
        caption += `\t\t✯────────────────────✯\n`
        caption += await couple(percentage)
        if(citel.sender.split('@')[0]===shiper.split('@')[0]) return citel.reply('```'+'Wait... What!!!,You wanna do matchmaking with yourself'+'```')
        await Void.sendMessage(citel.chat,{text: caption,mentions: [citel.sender,shiper]},{quoted:citel})
   }
)
// IDEA of Shipcent from => https://github.com/iamherok/WhatsApp-Botto-Ruka/blob/master/handler/message.js#L842
