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
const { Module_Exports,sck,sck1, getAdmin, tlang, prefix,name } = require('../lib')

    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "act",
        shortcut:['activate','active'],
        infocmd: "Switches for varios works.",
        kingclass: "general",
        kingpath: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)
        const botNumber = await Void.decodeJid(Void.user.id)
       //const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :false;
        //-----------------------------------------
        if (!citel.isGroup) return citel.reply(tlang().group)
        if (!text) return citel.reply(`*_Please provide me term like like_*\n1-events\n2-antilink\n3-nsfw\n4-bot`)
        if (isCreator){console.log("this is a Bot Number in Act Functions")}
        else if (!isAdmins) return citel.reply(tlang().admin)
        switch (text.split(" ")[0]) {
            case 'antilink':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, antilink: "true" })
                            .save()
                        return citel.reply('*_Antilink Enabled Successfully_*')
                    } else {
                        if (checkgroup.antilink == "true") return citel.reply("*_Antilink Was Already Enabled Here._*")
                        await sck.updateOne({ id: citel.chat }, { antilink: "true" })
                        citel.reply('*_Enabled antilink in current chat._*')
                        return
                    }
                }
                break
          
                      case 'economy':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, economy: "true" })
                            .save()
                        return citel.reply(' *_Economy Enabled Successfully_*')
                    } else {
                        if (checkgroup.economy == "true") return citel.reply("*_Economy Was Already Enabled._*")
                        await sck.updateOne({ id: citel.chat }, { economy: "true" })
                        citel.reply('_Economy enabled in current chat._')
                        return
                    }
                }
                break
            case 'events':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, events: "true" })
                            .save()
                        return citel.reply("Successfully Enabled *Events*")
                    } else {
                        if (checkgroup.events == "true") return citel.reply("_*Events are Already Enabled_*")
                        await sck.updateOne({ id: citel.chat }, { events: "true" })
                        return citel.reply("Successfully Enabled *Events*")
                    }
                }
                break
            case 'cardgame':
                {
                    let checkgroup = sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, cardgame: "active" })
                            .save()
                        return citel.reply("Successfully Enabled *Card Game*")
                    } else {
                        if (checkgroup.cardgame == "active") return citel.reply("*Card Game* was already enabled")
                        await sck.updateOne({ id: citel.chat }, { cardgame: "active" })
                        return citel.reply("Successfully Enabled *Card Game.*")
                    }
                }
                break
            case 'nsfw':
                {
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, nsfw: "true" })
                            .save()
                        return citel.reply("*_Successfully Enabled NSFW_*")
                    } else {
                        if (checkgroup.nsfw == "true") return citel.reply("*NSFW* is already enabled")
                        await sck.updateOne({ id: citel.chat }, { nsfw: "true" })
                        citel.reply("Successfully Enabled *NSFW*")
                        return
                    }
                }
                break
            default:
                {
                    citel.reply("Please provide me term like.\n1-events\n2-antilink\n3-nsfw\n4-economy")
                }
        }
    }
) 
