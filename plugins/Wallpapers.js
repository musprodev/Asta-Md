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


const sigma_config = require('../Setting')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1, Module_Exports, GIFBufferToVideoBuffer } = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');
let gis = '' // require("g-i-s")
const { Anime, Manga } = require("@shineiichijo/marika");
const {  fetchJson, getBuffer} = require('../lib')

//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "aesthetic",
    infocmd: "To get asthetic wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/Aesthetic.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "bike",
    infocmd: "To get bike wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/Bike_Pics.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "blackpink",
    infocmd: "To get blackpink wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/blackpink_pics.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "car",
    infocmd: "To get car wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/Car_Pics.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "cat",
    infocmd: "To get cat wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/Cat_Pics.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "cr7",
    infocmd: "To get cr7 wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/CR7.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIMGA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "dog",
    infocmd: "To get dog wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/Dog_Pics.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "hororwalp",
    infocmd: "To get horror wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/Horror_Pics.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "justina",
    infocmd: "To get justina pics",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/Justina_Pics.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "messi",
    infocmd: "To get messi wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/Messi.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "mobilelegnd",
    infocmd: "To get mobile legend wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/Mobile_Legend_Pics.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "pubg",
    infocmd: "To get pubg wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/PUBG_Pics.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})
//----------------------------------------------------------------------
Module_Exports({
    kingcmd: "random",
    infocmd: "To get random wallpapers",
    kingclass: "wallpapers",
},
async(Void, man,text) =>
{
    let anu = await fetchJson('https://raw.githubusercontent.com/Maher-Zubair/SIGMA-MD/main/Media/WallPapers/Random_Pics.json')
    let random = anu[Math.floor(Math.random() * anu.length)]
    return await Void.sendMessage(man.chat,{image :{url : random.SIGMA_MD } , caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${sigma_config.botname}*`  }, { quoted: man })
})

// All These Wallpapers Are Developed By @Maher-Zubair
// Whatsapp +2348039607375
// Usage and copyRights are Reserved