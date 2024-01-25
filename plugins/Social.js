//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                           𝚅.𝟷.𝟸.𝟽                                                   // 
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

const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');

Module_Exports({
    kingcmd: "insta",
    shortcut: ["ig","igdl","instagram"],
    infocmd: "download instagram videos",
    kingclass: "downloader",
    use: "paste insta video link"
},
async(sigma,person,memo) => {
const _0x2e1835=_0x1c3e;function _0x1c3e(_0x21d0f8,_0xcde877){const _0x3098c5=_0x4cf6();return _0x1c3e=function(_0x114121,_0x4020c1){_0x114121=_0x114121-(-0x2b*-0x90+0x4b6+-0x6*0x48c);let _0x4380b5=_0x3098c5[_0x114121];return _0x4380b5;},_0x1c3e(_0x21d0f8,_0xcde877);}(function(_0x195f50,_0x56ee39){const _0xe55231=_0x1c3e,_0x575d1a=_0x195f50();while(!![]){try{const _0x4ba0cd=-parseInt(_0xe55231(0x19f))/(-0x1*0xa87+-0x2*-0xe9e+-0x12b4)+-parseInt(_0xe55231(0x1a3))/(-0xf5f+-0x3*0x9c7+0x3b*0xc2)+-parseInt(_0xe55231(0x1b1))/(-0x25a8+0x1*-0x97a+-0x1bf*-0x1b)*(parseInt(_0xe55231(0x1b6))/(-0x3b3*-0x4+0x1025*0x2+-0x2f12))+parseInt(_0xe55231(0x1ab))/(-0xd*-0x38+0xfe+-0x3d1)*(-parseInt(_0xe55231(0x1b4))/(-0x20ae+-0x1*0xd2b+0x2ddf))+parseInt(_0xe55231(0x1a7))/(-0xc22+0x2079*-0x1+0x2ca2)+-parseInt(_0xe55231(0x1b5))/(-0x261e+-0x17*0x57+0x2df7)+parseInt(_0xe55231(0x1be))/(0x212a+0x29*-0xad+0x1*-0x56c);if(_0x4ba0cd===_0x56ee39)break;else _0x575d1a['push'](_0x575d1a['shift']());}catch(_0x3633f4){_0x575d1a['push'](_0x575d1a['shift']());}}}(_0x4cf6,0x8afe2*0x2+0x2*-0xdbe24+-0x184991*-0x1));function _0x4cf6(){const _0x395422=['2252396wgLYPQ','ender.com/','footer','sendMessag','ɪɴsᴛᴀ\x20ᴅᴏᴡɴ','ʟᴏᴀᴅᴇʀ','chat','ink..!_*','44230689eRGuUi','reply','send','insta\x20vide','*_Give\x20me\x20','An\x20error\x20o','1793814xQKOop','am\x20video\x20l','split','test','2836038hnmzzZ','api/insta?','rl-web.onr','url=','8206100ifibNu','ccurred','*_Please\x20g','*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸','7550dhfYMK','id\x20instagr','json','𝙽𝙶:*\x20','https://in','result','3AxpdNo','o\x20link_*','ive\x20me\x20val','4884vXHQEl','1229696DGoNIH'];_0x4cf6=function(){return _0x395422;};return _0x4cf6();}if(!memo)return person[_0x2e1835(0x1bf)](_0x2e1835(0x1c2)+_0x2e1835(0x1c1)+_0x2e1835(0x1b2));let txt=memo?memo[_0x2e1835(0x1a1)]('\x20')[0x103c+-0x1d25+0xce9]:'';if(!/instagram/[_0x2e1835(0x1a2)](txt))return await person[_0x2e1835(0x1bf)](_0x2e1835(0x1a9)+_0x2e1835(0x1b3)+_0x2e1835(0x1ac)+_0x2e1835(0x1a0)+_0x2e1835(0x1bd));person[_0x2e1835(0x1c0)](_0x2e1835(0x1aa)+_0x2e1835(0x1ae)+memo);let data;try{data=await(await fetch(_0x2e1835(0x1af)+_0x2e1835(0x1a5)+_0x2e1835(0x1b7)+_0x2e1835(0x1a4)+_0x2e1835(0x1a6)+memo))[_0x2e1835(0x1ad)]();}catch{return person[_0x2e1835(0x1bf)](_0x2e1835(0x19e)+_0x2e1835(0x1a8));}let SIGMA_INSTA_DOWNLODER={'video':{'url':data[_0x2e1835(0x1b0)][-0x1f1a*0x1+0x83*0x28+0x1*0xaa2]},'caption':sgen,'footer':tlang()[_0x2e1835(0x1b8)],'headerType':0x4,'width':0x258,'height':0x1ea,'contextInfo':{'externalAdReply':{'title':snam,'body':_0x2e1835(0x1ba)+_0x2e1835(0x1bb),'thumbnail':log0,'mediaType':0x4,'mediaUrl':'','sourceUrl':zyt}}};return sigma[_0x2e1835(0x1b9)+'e'](person[_0x2e1835(0x1bc)],SIGMA_INSTA_DOWNLODER,{'quoted':person});

})
    Module_Exports({
        kingcmd: "facebook",
        shortcut: ["fb","fbdl"],
        kingclass: "downloader",
        infocmd: "downloads facebook videos",
        use: "paste fb video link"
        },
       async(sigma, person, memo) => {
           var _0x43ef=["\x72\x65\x70\x6C\x79","\x20","\x73\x70\x6C\x69\x74","","\x63\x68\x61\x74","\x75\x72\x6C","\x72\x65\x73\x75\x6C\x74","\x62\x6F\x74\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x74\x68\x65\x6E","\x66\x61\x63\x65\x62\x6F\x6F\x6B\x64\x6C\x76\x32","\x45\x72\x72\x6F\x72\x20\x77\x68\x69\x6C\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x72\x65\x71\x75\x65\x73\x74"];if(!memo){return person[_0x43ef[0]]("\x2A\x5F\x47\x69\x76\x65\x20\x6D\x65\x20\x66\x61\x63\x65\x62\x6F\x6F\x6B\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B\x5F\x2A")};let txt=memo?memo[_0x43ef[2]](_0x43ef[1])[0]:_0x43ef[3];try{bocil[_0x43ef[10]](memo)[_0x43ef[9]](async (_0x2bacx2)=>{return sigma[_0x43ef[8]](person[_0x43ef[4]],{video:{url:_0x2bacx2[_0x43ef[6]][0][_0x43ef[5]]},caption:("\u2570\u2508\u27A4\x20\uD835\uDE76\uD835\uDE74\uD835\uDE7D\uD835\uDE74\uD835\uDE81\uD835\uDE70\uD835\uDE83\uD835\uDE74\uD835\uDE73\x20\uD835\uDE71\uD835\uDE88\x20"+name[_0x43ef[7]]+_0x43ef[3]),width:550,height:470},{quoted:person})})}catch(e){return person[_0x43ef[0]](_0x43ef[11])}})
   

async function tiktokdl (url) {
    const gettoken = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(gettoken.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = {
        url: url,
        _token: token,
    };
    const { data } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    var getdata = cheerio.load(data.html);
    if (data.status) {
        return {
            status: true,
            thumbnail: getdata("img").attr("src"),
            video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else return { status: false };
};



Module_Exports({
            kingcmd: "tiktok",
	    shortcut :  ['tt','ttdl'],
            infocmd: "Downloads Tiktok Videos Via Url.",
            kingclass: "downloader",
            use: "paste tiktok video link",
},

        async(sigma, person, memo) => {
            if(!memo) return await person.reply(`*_Give me tiktok video link_*`);
            let txt = memo ? memo.split(" ")[0]:'';
            if (!/tiktok/.test(txt)) return await person.reply(`*_Please give me valid tiktok video link..!_*`);
            const { status ,thumbnail, video, audio } = await tiktokdl(txt)
            //console.log("url : " , video  ,"\nThumbnail : " , thumbnail ,"\n Audio url : " , audio )
            if (status) return await sigma.sendMessage(person.chat, {video : {url : video } ,caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`,height: 470,width: 540,  } , {quoted : person });
            else return await person.reply("Error while downloading your video") 
        })           