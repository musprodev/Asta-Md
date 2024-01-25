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

 const { sck,sck1,Module_Exports, getAdmin, tlang,prefix ,name} = require('../lib')

  
     //---------------------------------------------------------------------------
 Module_Exports({
         kingcmd: "deact",
  shortcut : ['deactive','deactivate'],
         infocmd: "Switches for varios works.",
         kingclass: "group",
         kingpath: __filename
     },
     async(Void, citel, text,{ isCreator }) => {
         //-----------------------------------------	
         if (!citel.isGroup) return citel.reply(tlang().group);
         const groupAdmins = await getAdmin(Void, citel)
         const botNumber = await Void.decodeJid(Void.user.id)
         const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
         const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
         //-----------------------------------------  
         if (!citel.isGroup) return citel.reply(tlang().group)
         if (!text) return citel.reply(`*_Please provide me term like like_*\n1-events\n2-antilink\n3-nsfw\n4-cardgame\n5-bot`)
         if (isCreator){console.log("this is a Bot Number in Deact Functions")}
        else if (!isAdmins) return citel.reply(tlang().admin)
         switch (text.split(" ")[0]) {
            case 'antilink':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "false" })
                            .save()
                        return citel.reply(' *_Antilink disabled Successfully_*')
                    } else {
                        if (checkgroup.antilink == "false") return citel.reply("_Antilink was already disabled._")
                        await sck.updateOne({ id: citel.chat }, { antilink: "false" })
                        citel.reply('_Disabled antilink in current chat_.')
                        return
                    }
                }
                break
                       case 'economy':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "false" })
                            .save()
                        return citel.reply(' *_Economy disabled Successfully_*')
                    } else {
                        if (checkgroup.economy == "false") return citel.reply("_Economy was already disabled._")
                        await sck.updateOne({ id: citel.chat }, { economy: "false" })
                        citel.reply('*_Disabled Economy in current chat_*')
                        return
                    }
                }
                break
                case 'events':
                    {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, events: "false" })
                                .save()
                            return citel.reply("Successfully disabled *Events*")
                        } else {
                            if (checkgroup.events == "false") return citel.reply("*Events* are already disabled")
                            await sck.updateOne({ id: citel.chat }, { events: "false" })
                            return citel.reply("Successfully disabled *Events*")
                        }
                    }
                    break
                case 'cardgame':
                    {
                        let checkgroup = sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, cardgame: "deactive" })
                                .save()
                            return citel.reply("Successfully disabled *Card Game*")
                        } else {
                            if (checkgroup.cardgame == "deactive") return citel.reply("*Card Game* was already disabled")
                            await sck.updateOne({ id: citel.chat }, { cardgame: "deactive" })
                            return citel.reply("Successfully disabled *Card Game.*")
                        }
                    }
                    break
                case 'nsfw':
                    {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, nsfw: "false" })
                                .save()
                            return citel.reply("*_Successfully disabled NSFW_*")
                        } else {
                            if (checkgroup.nsfw == "false") return citel.reply("*NSFW* is already disabled")
                            await sck.updateOne({ id: citel.chat }, { nsfw: "false" })
                            citel.reply("*_Successfully disabled NSFW_*")
                            return
                        }
                    }
                    break
                default:
                    {
                        citel.reply("Please provide me term like.\n1-events\n2-antilink\n3-nsfw\n4-cardgame")
                    }
         }
     }
 )
