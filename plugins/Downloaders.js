

const { tlang, ringtone, Module_Exports,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, name } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js')
const fbInfoVideo = require('fb-info-video'); 
const googleTTS = require("google-tts-api");
const fetch = require('node-fetch');
const ytdl = require('ytdl-secktor')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "tgs",
            infocmd: "Downloads telegram stickers.",
            kingclass: "downloader",
            kingpath: __filename,
            use: '<add sticker url.>'
        },
        async(Void, citel, text) => {
		if (!text) return await citel.reply("_Enter a tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal\nKeep in mind that there is a chance of ban if used frequently");
		if (!text.includes("addstickers"))  return await citel.reply("_Uhh Please Enter a Valid tg sticker url_\nEg: .tgs https://t.me/addstickers/Oldboyfinal");
		let tgUrl = text.split("|")[0];
		let find = tgUrl.split("/addstickers/")[1];
		let { result } = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(find)} `);
		let check = text.split("|")[1] || "";
		let res = `Total stickers: ${result.stickers.length}\n*Estimated complete in:* ${result.stickers.length * 1.5} seconds\nKeep in mind that there is a chance of a ban if used frequently`.trim()
		if (result.is_animated) return await citel.reply("Animated stickers are not supported");
  		else if (check.startsWith("info")) return await citel.reply(res);
		let limit = parseInt(check.split(",")[0]) || 10;
		let count =  parseInt(check.split(",")[1]) ||  0;
	 	let isCheckText = check.split(";")[1] ||  "Sticker"
		let isSticker = true ;
	        if (isCheckText.includes("photo") ){isSticker = false ;	isCheckText = "Photo"}
		if(limit > result.stickers.length ) {  limit = result.stickers.length  }
	        if(count > result.stickers.length ) {  count = result.stickers.length - 5  }
		if(count > limit ){let temp = limit ;   limit = count;	count = temp ;}
		await citel.reply(`${res}\n\n_Downloading as ${isCheckText} From index *${count}* to *${limit}*._\nIf you wants more to download then use Like \n\n .tgs ${tgUrl} |  10 ,  20 ; photo`)
		for ( count ; count < limit ; count++) 
		{
		 // if (count >= limit) break;
		  let file_path = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${result.stickers[count].file_id}`);
		  let sticUrl = `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${file_path.result.file_path}`;
		  if(isSticker) { let a = await getBuffer(sticUrl); await citel.reply(a, { packname: name.packname, author: "Suhail-Md"  }, "sticker");} 
		  else { await Void.sendMessage(citel.chat,{image : {url : sticUrl } , caption : `*_Telegram Sticker At Index ${count+1} Downloaded_*`}) } 
		  //count++;
		}


 
//function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return citel[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return citel['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');citel[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await Void[__lobC(0x1bf)+__lobC(0x197)](citel[__lobC(0x1cf)],__lobb,citel,{'packname':name['packname'],'author':citel[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        
	
 
 })
//---------------------------------------------------------------------------


Module_Exports({
    kingcmd: "apk",
    infocmd: "Downloads apks.",
    kingclass: "downloader",

    use: 'Whatsapp',
},

async(sigma, person, text) => {
const _0x1fe21c=_0x4962;(function(_0x17f683,_0x44e318){const _0xf31918=_0x4962,_0x207d00=_0x17f683();while(!![]){try{const _0x9e897a=parseInt(_0xf31918(0x96))/(-0x1e36+-0x8a7+-0x3e3*-0xa)+-parseInt(_0xf31918(0x9d))/(0x21f*0xf+0x95*-0x1f+-0x6e2*0x2)*(parseInt(_0xf31918(0xb1))/(-0x1*-0x2257+0x20ea+-0x433e))+-parseInt(_0xf31918(0x80))/(-0x207c+0x14f6+0xb8a)*(-parseInt(_0xf31918(0x95))/(-0x1b40+0x1*0x2cf+0x2*0xc3b))+parseInt(_0xf31918(0xb4))/(0x164c+-0x47*0x3b+-0x5e9)*(-parseInt(_0xf31918(0x85))/(0x88f*-0x4+0x125*0x6+-0x1b65*-0x1))+-parseInt(_0xf31918(0x84))/(0x953+-0x1eeb+0x15a0)+-parseInt(_0xf31918(0x76))/(-0x5c5+-0x1*-0x14cf+-0xf01)+parseInt(_0xf31918(0x89))/(0x200*-0x5+-0x1cee+0x26f8);if(_0x9e897a===_0x44e318)break;else _0x207d00['push'](_0x207d00['shift']());}catch(_0x4c37a0){_0x207d00['push'](_0x207d00['shift']());}}}(_0x47e2,0x2c3d5+-0x499c9+0xc0f60));function _0x4962(_0x5ab930,_0x35ec4a){const _0x2aa0d7=_0x47e2();return _0x4962=function(_0x33239c,_0x1d7e15){_0x33239c=_0x33239c-(-0xb3b+0x1*0x916+0x293);let _0x2b0e96=_0x2aa0d7[_0x33239c];return _0x2b0e96;},_0x4962(_0x5ab930,_0x35ec4a);}if(!text)return person[_0x1fe21c(0x8a)](_0x1fe21c(0xa0)+_0x1fe21c(0x93)+_0x1fe21c(0xb8)+prefix+(_0x1fe21c(0x7d)+'pp'));const getRandom=_0x8c7453=>{const _0x90a8a=_0x1fe21c,_0x49dd3c={'yBtQy':function(_0x403079,_0x4ffd2f){return _0x403079*_0x4ffd2f;}};return''+Math[_0x90a8a(0x77)](_0x49dd3c[_0x90a8a(0xa9)](Math[_0x90a8a(0x91)](),0x20e1+0x4d67+-0x158*0x35))+_0x8c7453;};let randomName=getRandom(_0x1fe21c(0xab));const filePath='./'+randomName,{search,download}=require(_0x1fe21c(0x72)+_0x1fe21c(0x82));let searc=await search(text),data={};function _0x47e2(){const _0x1561c8=['finish','5140GAnNSg','dllink','raper','𝙸𝙾𝙽•*\x20Late','9498520xkhRLV','511IcLEkp','ilPTa','han\x20200MB.','botname','31347520tKhfNf','send','then','TueBg','aZleQ','e-archive','unlink','𝚂𝙸𝚉𝙴•*\x20','random','get','App\x20Name_*','ed\x20success','5050tAyhib','317633HuReXv','*_Apk\x20not\x20','fully','createWrit','𝙽𝙰𝙼𝙴•*\x20','pushName','error','368642gMztmc','data','nMJOt','*_Give\x20me\x20','Found,\x20Try','ᴏᴡɴʟᴏᴀᴅᴇʀ*','log','applicatio','catch','\x20Valid\x20App','Found,\x20Sor','pipe','yBtQy','*_File\x20siz','.apk','𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱','oid.packag','sendMessag','File\x20delet','\x20Name_*','15lZaXBZ','┃┗➛\x20*ᴀᴘᴋ\x20ᴅ','Error\x20dele','86694dtltKC','ry_*','KUHso','𝚈\x20','\x0aEx:\x20','size','length','𝙴𝚂𝚃𝙴𝚁•*\x20\x20','┏━━⟪⟪\x20','\x0a┃✗\x20*•𝙰𝙿𝙿\x20','wmCdj','\x20*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳','name','hOjMN','n/vnd.andr','ting\x20file:','reply','\x0a┃✗\x20*•𝚁𝙴𝚀𝚄','readFileSy','eStream','━━⦿\x0a*╰┈➤\x20𝙶','\x0a┃✗\x20*•𝚅𝙴𝚁𝚂','e\x20bigger\x20t','aptoide-sc','MIPnY','kgYYn','\x20⟫━⦿\x0a┃┏➛\x20*','8248302vlknWW','floor','stream','chat','sɪɢᴍᴀ\x20ᴹᴰ*\x0a','𝙸𝙽𝙶:*\x20','*_APP\x20not\x20','apk\x20Whatsa','\x0a┗━━━━━━━━'];_0x47e2=function(){return _0x1561c8;};return _0x47e2();}if(searc[_0x1fe21c(0xba)])data=await download(searc[-0x18b*-0x13+0x1347+0x184c*-0x2]['id']);else return person[_0x1fe21c(0xc4)](_0x1fe21c(0x7c)+_0x1fe21c(0xa1)+_0x1fe21c(0xa6)+_0x1fe21c(0xb0));const apkSize=parseInt(data[_0x1fe21c(0xb9)]);if(apkSize>0xc38+0x5de+-0x1180)return person[_0x1fe21c(0xc4)](_0x1fe21c(0xaa)+_0x1fe21c(0x71)+_0x1fe21c(0x87)+'_*');const url=data[_0x1fe21c(0x81)];let inf=_0x1fe21c(0xbc)+mztit+(_0x1fe21c(0x75)+_0x1fe21c(0x7a)+_0x1fe21c(0xb2)+_0x1fe21c(0xa2)+_0x1fe21c(0xbd)+_0x1fe21c(0x9a))+data[_0x1fe21c(0xc0)];inf+=_0x1fe21c(0xbd)+_0x1fe21c(0x90)+data[_0x1fe21c(0xb9)],inf+=_0x1fe21c(0x70)+_0x1fe21c(0x83)+'st',inf+=_0x1fe21c(0xc5)+_0x1fe21c(0xbb)+person[_0x1fe21c(0x9b)],inf+=_0x1fe21c(0x7e)+_0x1fe21c(0x6f)+_0x1fe21c(0xac)+_0x1fe21c(0xb7)+name[_0x1fe21c(0x88)]+'*',axios[_0x1fe21c(0x92)](url,{'responseType':_0x1fe21c(0x78)})[_0x1fe21c(0x8b)](_0x5197e8=>{const _0x4aeaa7=_0x1fe21c,_0x5cfbdf={'nMJOt':_0x4aeaa7(0x7f),'ilPTa':_0x4aeaa7(0x9c)},_0x349c1b=fs[_0x4aeaa7(0x99)+_0x4aeaa7(0x6e)](filePath);return _0x5197e8[_0x4aeaa7(0x9e)][_0x4aeaa7(0xa8)](_0x349c1b),new Promise((_0xf7bdbd,_0x1dd310)=>{const _0x1a447a=_0x4aeaa7;_0x349c1b['on'](_0x5cfbdf[_0x1a447a(0x9f)],_0xf7bdbd),_0x349c1b['on'](_0x5cfbdf[_0x1a447a(0x86)],_0x1dd310);});})[_0x1fe21c(0x8b)](()=>{const _0xf58bf2=_0x1fe21c,_0x3d8e61={'KUHso':_0xf58bf2(0xb3)+_0xf58bf2(0xc3),'TueBg':_0xf58bf2(0xaf)+_0xf58bf2(0x94)+_0xf58bf2(0x98),'kgYYn':_0xf58bf2(0xa4)+_0xf58bf2(0xc2)+_0xf58bf2(0xad)+_0xf58bf2(0x8e),'aZleQ':function(_0x1fa9e5,_0x2e7b9a){return _0x1fa9e5+_0x2e7b9a;},'hOjMN':function(_0x2df131,_0x2c1001){return _0x2df131+_0x2c1001;},'wmCdj':_0xf58bf2(0xbf)+_0xf58bf2(0x7b)};let _0x492877={'document':fs[_0xf58bf2(0xc6)+'nc'](filePath),'mimetype':_0x3d8e61[_0xf58bf2(0x74)],'fileName':_0x3d8e61[_0xf58bf2(0x8d)](data[_0xf58bf2(0xc0)],_0xf58bf2(0xab)),'caption':inf};sigma[_0xf58bf2(0xae)+'e'](person[_0xf58bf2(0x79)],_0x492877,{'quoted':person}),person[_0xf58bf2(0x8a)](_0x3d8e61[_0xf58bf2(0xc1)](_0x3d8e61[_0xf58bf2(0xbe)],text)),fs[_0xf58bf2(0x8f)](filePath,_0x2f0cff=>{const _0x5648e3=_0xf58bf2;_0x2f0cff?console[_0x5648e3(0x9c)](_0x3d8e61[_0x5648e3(0xb6)],_0x2f0cff):console[_0x5648e3(0xa3)](_0x3d8e61[_0x5648e3(0x8c)]);});})[_0x1fe21c(0xa5)](_0x395718=>{const _0x2c5d=_0x1fe21c,_0x18f62f={'MIPnY':_0x2c5d(0x97)+_0x2c5d(0xa7)+_0x2c5d(0xb5)};return fs[_0x2c5d(0x8f)](filePath),person[_0x2c5d(0xc4)](_0x18f62f[_0x2c5d(0x73)]);});

}
)
  //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "gdrive",
            infocmd: "Downloads telegram stickers.",
            kingclass: "downloader",
            kingpath: __filename,
            use: 'add sticker url.'
        },

async(Void, citel, text) => {
if (!text) return citel.send('Uhh Please, Give me  Google Drive Url') 
if (!(text && text.match(/drive\.google/i))) citel.send('Uhh Please, Give me Valid Google Drive Url')
let id =(text.match(/\/?id=(.+)/i) || text.match(/\/d\/(.*?)\//))[1]
if (!id) return citel.reply('ID Not Found');
try {
	GDriveDl(id).then(async (res) => 
	{ 
                let data  =  "*File Name :* "+ res.fileName ;
	            data +="\n*File Size :* " + res.size +"Mb" ;
	            data +="\n*File Type :* "+ res.mimetype.split('/')[1] +  "\n" + name.caption;
	        let buttonMessage = 
		{
			document: { url: res.downloadUrl },
			fileName: res.fileName,
			mimetype: res.mimetype,
			caption : "\t  *GOOGLE DRIVE DOWNLOADER*  \n" + data
		}
	        return await Void.sendMessage(citel.chat,buttonMessage, { quoted: citel })
	})
 } catch (error) {  return citel.reply("```File Not Found```" ) }
	
})
//---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "gitclone",
    shortcut: ["gclone","gitc"],
    infocmd: "Downloads github repo",
    kingclass: "downloader",
    kingpath: __filename,
    use: 'https://github.com/Astropeda/Asta-Md',
},
async(sigma, person, tax) => {
function _0xda55(_0x28fa32,_0x5445d5){const _0x52cbbf=_0x405c();return _0xda55=function(_0x74bd91,_0x17ca32){_0x74bd91=_0x74bd91-(-0xd9*0x9+0x1*0x12f0+-0xa27);let _0x2f330a=_0x52cbbf[_0x74bd91];return _0x2f330a;},_0xda55(_0x28fa32,_0x5445d5);}const _0x599afb=_0xda55;(function(_0x251c90,_0x358396){const _0x194cd9=_0xda55,_0x30c3df=_0x251c90();while(!![]){try{const _0x2fef01=-parseInt(_0x194cd9(0x149))/(-0x3ce+0x1179+-0xdaa)*(parseInt(_0x194cd9(0x172))/(-0x5ba*-0x2+-0x14ef+-0x7*-0x15b))+parseInt(_0x194cd9(0x163))/(0x7*0x22a+0x1c07+-0x2b2a)*(parseInt(_0x194cd9(0x167))/(-0x2*-0xde5+0x10a3+-0x2c69))+-parseInt(_0x194cd9(0x15a))/(0x6*0x4f1+-0x1*-0x2608+0x43a9*-0x1)+parseInt(_0x194cd9(0x173))/(0x22c4+-0xdf4+-0x14ca)*(-parseInt(_0x194cd9(0x145))/(-0x1c6c+-0x2*0x311+0x2295))+-parseInt(_0x194cd9(0x133))/(0x21e2+0x1574+0x1ba7*-0x2)*(-parseInt(_0x194cd9(0x129))/(-0xe27*0x2+-0x161f*-0x1+-0x4*-0x18e))+-parseInt(_0x194cd9(0x14e))/(0x15*-0x19c+-0x2*-0x517+0x17a8)*(parseInt(_0x194cd9(0x135))/(-0x9f*-0x3d+0xd55*-0x1+-0x1883))+parseInt(_0x194cd9(0x143))/(0xa93+0xadf+-0x1566);if(_0x2fef01===_0x358396)break;else _0x30c3df['push'](_0x30c3df['shift']());}catch(_0x178600){_0x30c3df['push'](_0x30c3df['shift']());}}}(_0x405c,0x2ad*0x737+0x4fa3e+-0xb037e));if(!tax)return await person[_0x599afb(0x162)](_0x599afb(0x165)+_0x599afb(0x14d)+_0x599afb(0x13b)+prefix+(_0x599afb(0x168)+_0x599afb(0x13d)+_0x599afb(0x14a)+_0x599afb(0x174)+_0x599afb(0x160)+'*'));if(!tax[_0x599afb(0x144)](_0x599afb(0x14b)))return person[_0x599afb(0x162)](_0x599afb(0x153)+_0x599afb(0x13f)+_0x599afb(0x137)+_0x599afb(0x15d));try{const regex=/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;if(!regex[_0x599afb(0x15b)](tax))return await person[_0x599afb(0x12a)](_0x599afb(0x159)+_0x599afb(0x154)+_0x599afb(0x139)+_0x599afb(0x16e));let [_,user,repo]=tax[_0x599afb(0x130)](regex)||[];repo=repo[_0x599afb(0x158)](/.git$/,'');let url=_0x599afb(0x157)+_0x599afb(0x164)+_0x599afb(0x13c)+user+'/'+repo+_0x599afb(0x13e),filename=(await fetch(url,{'method':_0x599afb(0x15f)}))[_0x599afb(0x14f)][_0x599afb(0x16b)](_0x599afb(0x161)+_0x599afb(0x132))[_0x599afb(0x130)](/attachment; filename=(.*)/)[-0x2*0x1003+0xb43+0x14c4];await sigma[_0x599afb(0x128)+'e'](person[_0x599afb(0x134)],{'document':{'url':url},'caption':_0x599afb(0x131)+mztit+(_0x599afb(0x14c)+_0x599afb(0x12c)+_0x599afb(0x136)+_0x599afb(0x170)+_0x599afb(0x152)+_0x599afb(0x151))+user+(_0x599afb(0x12e)+_0x599afb(0x12f))+repo+(_0x599afb(0x13a)+_0x599afb(0x156)+_0x599afb(0x146)+_0x599afb(0x169)+_0x599afb(0x141)+_0x599afb(0x16d))+user+'/'+repo+(_0x599afb(0x138)+_0x599afb(0x16c))+person[_0x599afb(0x150)]+(_0x599afb(0x171)+_0x599afb(0x12d)+_0x599afb(0x155)+_0x599afb(0x166))+name[_0x599afb(0x148)]+'*','fileName':filename,'mimetype':_0x599afb(0x142)+_0x599afb(0x15e)});}catch(_0x38ce15){person[_0x599afb(0x162)](_0x599afb(0x12b)+_0x599afb(0x15c)+_0x599afb(0x147)+_0x599afb(0x16a)+_0x599afb(0x16f)+_0x599afb(0x140)+_0x38ce15);}function _0x405c(){const _0xf68b2c=['\x0a┗━━━━━━━━','86wtyZnO','31338JFEOaV','aher-Zubai','sendMessag','3303WwUNHT','reply','*_The\x20Repo','sɪɢᴍᴀ\x20ᴹᴰ*\x0a','━━⦿\x0a*╰┈➤\x20𝙶','\x0a┃✗\x20*•ʀᴇᴘᴏ','•*\x20','match','┏━━⟪⟪\x20','sposition','1952mmNkwR','chat','11tznjqE','┃┗➛\x20*ʀᴇᴘᴏ\x20','ed\x20is\x20inva','\x0a┃✗\x20*•ʀᴇǫᴜ','lid\x20Reposi','\x0a┃✗\x20*•ꜰɪʟᴇ','*\x0a\x20Ex:\x20','om/repos/','https://gi','/zipball','you\x20provid','*\x0a\x20','ttps://git','applicatio','47696364sQhtrY','includes','763cNYVEH','p\x0a┃✗\x20*•ʀᴇᴘ','e\x20Or\x20It\x20Ma','botname','19769pKbLiY','thub.com/M','github.com','\x20⟫━⦿\x0a┃┏➛\x20*','Repo\x20Url,_','9318810YmqUPM','headers','pushName','ʜᴏʀ•*\x20','*\x0a┃✗\x20*•ᴀᴜᴛ','_The\x20link\x20','Provide\x20Va','𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳\x20𝙱','-ᴛʏᴘᴇ•*\x20zi','https://ap','replace','*_Please,\x20','8405120cpDyYT','test','\x20is\x20Privat','lid_','n/zip','HEAD','r/Asta-Md','content-di','send','167529uXxUdY','i.github.c','*_Provide\x20','𝚈\x20','60yvljDS','gitclone\x20*','ᴏ-ʟɪɴᴋ•*\x20h','y\x20Be\x20Tempo','get','ᴇsᴛᴇʀ•*\x20\x20','hub.com/','try\x20Url_*','rary\x20Down_','ᴅᴏᴡɴʟᴏᴀᴅᴇʀ'];_0x405c=function(){return _0xf68b2c;};return _0x405c();}  
})  

  //---------------------------------------------------------------------------
  Module_Exports({
    kingcmd: "tts",
    infocmd: "text to voice",
    kingclass: "downloader",
    kingpath: __filename,
    use: 'I am king',
},
async(sigma, person, memo) => {
    if (!memo) return person.reply(`_Give me text to change into audio_\nEx: ${prefix}tts i am SIGMA MALE`)
    person.reply("*_Converting Your Text To Voice..._*")
    let memotts = memo
    const ttsurl = googleTTS.getAudioUrl(memotts, {
        lang: "en",
        slow: false,
        host: "https://translate.google.com",
    });
    return sigma.sendMessage(person.chat, {
        audio: {
            url: ttsurl,
        },
        mimetype: "audio/mpeg",
        fileName: `ttspersonsigma.m4a`,
    }, {
        quoted: person,
    });
}

)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "video",
        infocmd: "Downloads video from yt.",
        kingclass: "downloader",
        kingpath: __filename,
        use: 'bella ciao',
    },
    async(bot, citel, tax) => {
        let yts = require("secktor-pack");
    if (!tax) return citel.send(`Example: ${prefix}video Surah Fateh`);
        let search = await yts(tax);
        let anu = search.videos[0];
        let urlYt = anu.url
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
            let infoYt = await ytdl.getInfo(urlYt);
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Video Size too Large!`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp4");
            citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+tax)
            const stream = ytdl(urlYt, {
                    filter: (info) => info.itag == 22 || info.itag == 18,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });
            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let Maher = {
                    video: fs.readFileSync(`./${randomName}`),
                    jpegThumbnail: log0,
        
                    mimetype: 'video/mp4',
                    caption: sgen,
        height: 640,
                    width: 780,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: snam,
                            body: `ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            renderLargerThumbnail: true,
                            mediaType: 4,
                            mediaUrl: ``,
                            sourceUrl: zyt,
                        }
                    }
                }
             bot.sendMessage(citel.chat, Maher, { quoted: citel })
             return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`File Size Bigger Than 100MB..`);
            }
            return fs.unlinkSync(`./${randomName}`);      


    }
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "song",
        infocmd: "Downloads audio from youtube.",
        kingclass: "downloader",
        kingpath: __filename,
        use: 'bella ciao',
    },
    async(bot, citel, tax) => {
        let yts = require("secktor-pack");
    if (!tax) return citel.send(`Example: ${prefix}song My Babe i love Your Voice`);
        let search = await yts(tax);
        let anu = search.videos[0];
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        let infoYt = await ytdl.getInfo(anu.url);
        if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Audio File Too Big!`);
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp3");
        citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+tax)
        const stream = ytdl(anu.url, {
                filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
            })
            .pipe(fs.createWriteStream(`./${randomName}`));
        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });

        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= dlsize) {
            let buttonMessage = {
                audio: fs.readFileSync(`./${randomName}`),
                mimetype: 'audio/mpeg',
                caption: sgen,
                fileName: titleYt + ".mp3",
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: snam,
                        body: `sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                        renderLargerThumbnail: true,
                        thumbnailUrl: search.all[0].thumbnail,
                        mediaUrl: tax,
                        mediaType: 1,
                        thumbnail: await getBuffer(search.all[0].thumbnail),
                        sourceUrl: zyt,
                        
                    },
                },
            }
            await bot.sendMessage(citel.chat, buttonMessage, { quoted: citel })
            return fs.unlinkSync(`./${randomName}`);
        } else {
            citel.reply(`File Size Bigger Then 100MB.`);
        }
        fs.unlinkSync(`./${randomName}`);
        


    }
)
    

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "music",
            infocmd: "Downloads tiktok music.",
            kingclass: "downloader",
            kingpath: __filename,
            use: '78',
        },
        async(bot, citel, tax) => {
            if (!tax) return citel.send(`*Give A Number Example: ${prefix}music 3*`)
            citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+tax)
	const n = parseInt(tax);
	if(n.toString()=="NaN" || n < 1 || n > 160 ) return citel.reply('```Give Number From 1 to 160```');
	   let url = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound${n.toString()}.mp3`
            let anu  = await getBuffer(url)
//await bot.sendMessage(citel.chat, { audio: botzy_buffer, mimetype: 'audio/mp4', ptt: true })
        let buttonMessage = {
		audio: anu,
		fileName: url.toString() ,
		mimetype: 'audio/mp4',
		ptt: true ,
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: snam,
                body: `ᴍᴜsɪᴄ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                //thumbnail: log0,
                mediaType: 2,


                sourceUrl: zyt,
                
            },
        },
		}
	return bot.sendMessage(citel.chat,buttonMessage, { quoted: citel } )
})

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "ringtone",
            infocmd: "Downloads ringtone.",
            kingclass: "downloader",
            kingpath: __filename,
            use: 'apple',
        },
        async(bot, citel, tax) => {
            if (!tax) return citel.send(`Example: ${prefix}ringtone bella ciao`)
            citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+tax)
	    const {ringtone } = require('../lib/scraper')
            let anu = await ringtone(tax)
        let buttonMessage = {
		audio: { url: anu[0].audio },
		caption : `*${anu[0].title}*`,
		fileName: anu[0].title + '.mp3',
		mimetype: 'audio/mpeg',
        headerType: 4,
        contextInfo: {
            externalAdReply: {
                title: snam,
                body: `ʀɪɴɢᴛᴏɴᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                thumbnail: log0,
                mediaType: 2,


                sourceUrl: zyt,
                
            },
        },
		}
	return bot.sendMessage(citel.chat,buttonMessage, { quoted: citel } )
})

    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "pint",
        desc: "Downloads image from pinterest.",
        category: "downloader",
        filename: __filename,
        use: '<text|image name>',
    },
    async(Void, citel, text) => {
        if (!text) return citel.send(`What picture are you looking for?`)
        citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+text)
        try {
            let anu = await pinterest(text)
            let result = anu[Math.floor(Math.random() * anu.length)]
            let buttonMessage = {
                image: { url: result },
                caption: sgen ,
                //footer: tlang().footer,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: snam,
                        body: `ᴘɪɴᴛᴇʀᴇsᴛ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: zyt
                    }
                }
            }
            return Void.sendMessage(citel.chat, buttonMessage, {  quoted: citel })
        } catch (e) {  return citel.reply(`*_Give Me Query_*\n*_Ex ${prefix}pint crown_*`)  }
    })
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "mediafire",
            shortcut :['mf','mfire'],
            infocmd: "Downloads media from Mediafire.",
            kingclass: "downloader",
            kingpath: __filename,
            use: 'url of mediafire',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give link `);
            
            if (!text.includes("mediafire.com")) return citel.reply(`The link you provided is invalid`);
            let isUrl=text;
            const baby1 = await mediafire(isUrl);
	
	if(!baby1.length) return citel.reply(`could not found anything`);
	const apkSize = parseInt(baby1[0].size);
	if(apkSize > 100) return citel.reply(`❌ File size bigger than 150mb.`);
	
let result4 = ` *Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ*
*Nᴀᴍᴇ* : ${baby1[0].nama}
*Sɪᴢᴇ* :${baby1[0].size}
*Mɪᴍᴇ* : ${baby1[0].mime}

`;
	result4 +=name.caption ; 
	
            //citel.reply(`${result4}`);
            
            let buttonMessaged = {
                    document: { url: baby1[0].link, },
                    caption: result4,
                    fileName: baby1[0].nama,
                    mimetype: baby1[0].mime,
                    
                }; 
                
 return await Void.sendMessage(citel.chat, buttonMessaged)
                //.catch((err) => citel.reply(`could not found anything`));

        }
    )
    //---------------------------------------------------------------------------

   
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "audio",
        infocmd: "Downloads audio from youtube.",
        kingclass: "downloader",
        kingpath: __filename,
        use: 'bella ciao',
    },
    async(sigma, citel, tax) => {
        let yts = require("secktor-pack");
    if (!tax) return citel.send(`Example: ${prefix}audio My Babe i love Your Voice`);
        let search = await yts(tax);
        let anu = search.videos[0];
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };
        let infoYt = await ytdl.getInfo(anu.url);
        if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Audio File Too Big!`);
        let titleYt = infoYt.videoDetails.title;
        let randomName = getRandom(".mp3");
        citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+tax)
        const stream = ytdl(anu.url, {
                filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
            })
            .pipe(fs.createWriteStream(`./${randomName}`));
        await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
        });

        let stats = fs.statSync(`./${randomName}`);
        let fileSizeInBytes = stats.size;
        let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        if (fileSizeInMegabytes <= dlsize) {
            let buttonMessage = {
                document: fs.readFileSync(`./${randomName}`),
                mimetype: 'audio/mpeg',
                caption: sgen,
                fileName: titleYt + ".mp3",
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: snam,
                        body: `ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                        renderLargerThumbnail: true,
                        thumbnailUrl: search.all[0].thumbnail,
                        mediaUrl: tax,
                        mediaType: 1,
                        thumbnail: await getBuffer(search.all[0].thumbnail),
                        sourceUrl: zyt,
                        
                    },
                },
            }
            await sigma.sendMessage(citel.chat, buttonMessage, { quoted: citel })
            return fs.unlinkSync(`./${randomName}`);
        } else {
            citel.reply(`File Size Bigger Then 100MB.`);
        }
        fs.unlinkSync(`./${randomName}`);
        


    }
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "yts",
        infocmd: "Sends given text result with all info and media links",
        kingclass: "downloader",
        kingpath: __filename,
        use: 'bella ciao',
    },
    async(sigma, person, memo) => {
        let yts = require("secktor-pack");
        if (!memo) return person.send(`Example: ${prefix}yts surah Rehman`);
        let search = await yts(memo);
        let memot = "*Asta-Md* *ʏᴏᴜ-ᴛᴜʙᴇ sᴇᴀʀᴄʜ*\n\n *_Search Result From_* " + memo + "\n\n*✯────────────────────✯*\n\n";
        let no = 1;
        for (let i of search.all) {
            memot += `*𝚃𝙸𝚃𝙻𝙴* : ${i.title}\n*𝚅𝙸𝙴𝚆𝚂* : ${i.views}\n*𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽* : ${
      i.timestamp
    }\n*𝚄𝚁𝙻* : ${
      i.url
    }\n\n*✯────────────────────✯*\n`;
        }
        return sigma.sendMessage(person.chat, {
            image: {
                url: search.all[0].thumbnail,
            },
            caption: memot,
        }, {
            quoted: person,
        });
    }
)
    //---------------------------------------------------------------------------

Module_Exports({
            kingcmd: "ytmp4",
            shortcut: ["ytv","ytvid" , "ytvideo","yt4"],
            infocmd: "Downloads video from youtube.",
            kingclass: "downloader",
            kingpath: __filename,
            use: 'yt video url',
        },
        async(Void, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
            if (!text) {
                citel.reply("*_Give ME YouTube Link_*");
                return;
            }
            citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+text)
            try {
                let urlYt = text;
                if (!urlYt.startsWith("http")) return citel.reply("*_Plz Give ME YouTube Link_*");
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`Video File Too Big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");

                const stream = ytdl(urlYt, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let yts = require("secktor-pack");
                    let search = await yts(text);
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'video/mp4',
                        caption: sgen,
                        height:640,
                        width:780,
                        fileName: `${titleYt}.mp4`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: snam,
                                body: `ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                                //thumbnailUrl: await getBuffer(search.all[0].thumbnail),
                                //renderLargerThumbnail: true,
                                mediaType: 2,
                                mediaUrl: ``,
                                thumbnail:log0,
                                sourceUrl: zyt
                            }
                        }
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`Video Size IS Larger Than 100MB`);
                }
                return fs.unlinkSync(`./${randomName}`);      
            } catch (e) {
                console.log(e)
            }
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "ytmp3",
	shortcut : ["yta","yt3"],
	infocmd: "Downloads audio by yt link.",
        kingclass: "downloader",
        use: 'yt video url',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.reply('```Please Give Me Link```');
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`_Idiot Give YouTube Link_!`);
                return;
            }
            citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+text)
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`_I can't Download That Long Audio_`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    audio: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    caption: sgen,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: snam,
                            body: `sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                           // renderLargerThumbnail: true,
                            thumbnail: log0,
                            mediaUrl: text,
                            mediaType: 1,
                            //thumbnailUrl: log0,
                            sourceUrl: zyt,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`File Size Bigger Than 100MB.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

    }
)

  //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "ytdoc",
            shortcut: ["ytd"],
        infocmd: "Downloads audio by yt link as document.",
        kingclass: "downloader",
        use: 'ytdoc video url',
    },
    async(Void, citel, text) => {
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.reply('```Please Give Me Link```');
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`_Idiot Give YouTube Link_`);
                return;
            }
            citel.reply('*𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶:* '+text)
            let infoYt = await ytdl.getInfo(urlYt);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) {
                reply(`_I can't Download That Long Audio_!`);
                return;
            }
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = {
                    document: fs.readFileSync(`./${randomName}`),
                    mimetype: 'audio/mpeg',
                    caption: sgen,
                    fileName: titleYt + ".mp3",
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: snam,
                            body: `‌ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`,
                            //renderLargerThumbnail: true,
                            //thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                           // thumbnail: log0,
                            sourceUrl: zyt,
                        },
                    },
                }
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } else {
                citel.reply(`File Size Bigger Than 100MB.`);
            }
            fs.unlinkSync(`./${randomName}`);
        } catch (e) {
            console.log(e)
        }

})

Module_Exports({kingcmd: "play",infocmd: "Downloads Media From Youtube",kingclass: "downloader",kingpath: __filename,use: 'bella ciao', },
        async(bot, man, text) => {
const _0x388d5e=_0xce31;(function(_0x28a1a4,_0x2c4f9a){const _0x4d5398=_0xce31,_0x1a91ca=_0x28a1a4();while(!![]){try{const _0x385898=parseInt(_0x4d5398(0x1b0))/(0xed3+-0x4f*0x3+-0xde5*0x1)+-parseInt(_0x4d5398(0x196))/(0x17*0x1+0x32*0x77+-0x1753*0x1)+-parseInt(_0x4d5398(0x1ae))/(-0xa46*0x2+-0x1*0x22d7+0x3766)*(parseInt(_0x4d5398(0x1a7))/(-0x1b35+0x1ba3+-0x6a))+-parseInt(_0x4d5398(0x1b4))/(-0x1*-0x1291+0x2ed+-0x1579)+-parseInt(_0x4d5398(0x1a1))/(0x29e*-0x4+-0x1*0x262c+0x30aa)*(parseInt(_0x4d5398(0x19f))/(0xa5f+-0x4f5+-0x563))+-parseInt(_0x4d5398(0x19d))/(-0x7d*-0x9+-0x3d*-0x2+-0x15*0x3b)*(parseInt(_0x4d5398(0x1a8))/(-0x1fcd+-0x1e95+0x3e6b))+parseInt(_0x4d5398(0x19a))/(0x139*0x19+-0x5*0x791+0x2*0x3a7);if(_0x385898===_0x2c4f9a)break;else _0x1a91ca['push'](_0x1a91ca['shift']());}catch(_0x259f7e){_0x1a91ca['push'](_0x1a91ca['shift']());}}}(_0x1b93,-0x7*0x1e16b+-0x20e7a*0x5+-0x1f6f8b*-0x1));if(!text)return await man[_0x388d5e(0x1a0)](_0x388d5e(0x18a)+_0x388d5e(0x190)+_0x388d5e(0x1ad)+_0x388d5e(0x189)+prefix+(_0x388d5e(0x193)+_0x388d5e(0x1b2)));let yts=require(_0x388d5e(0x192)+'ck'),search=await yts(text),i=search[_0x388d5e(0x18c)][-0x1d7f+-0x10be*-0x2+0x1fe*-0x2],cap=_0x388d5e(0x1a9)+_0x388d5e(0x18b)+_0x388d5e(0x1aa)+_0x388d5e(0x198)+i[_0x388d5e(0x1ac)]+(_0x388d5e(0x18e)+_0x388d5e(0x18f))+i[_0x388d5e(0x1af)]+(_0x388d5e(0x194)+'\x20')+i[_0x388d5e(0x1a5)]+(_0x388d5e(0x1b5)+_0x388d5e(0x199))+i[_0x388d5e(0x19b)]+(_0x388d5e(0x195)+'*\x20')+i[_0x388d5e(0x1a4)][_0x388d5e(0x19c)]+_0x388d5e(0x1a6)+i[_0x388d5e(0x191)]+(_0x388d5e(0x1b6)+_0x388d5e(0x1b3)+man[_0x388d5e(0x1b1)]+(_0x388d5e(0x18d)+_0x388d5e(0x188)+_0x388d5e(0x1a3)+_0x388d5e(0x1b7)+_0x388d5e(0x197)));function _0xce31(_0x354915,_0x5a9202){const _0x2de75d=_0x1b93();return _0xce31=function(_0x488dfa,_0xbb0535){_0x488dfa=_0x488dfa-(-0x33c+0x23df+0x1f1b*-0x1);let _0x588e36=_0x2de75d[_0x488dfa];return _0x588e36;},_0xce31(_0x354915,_0x5a9202);}function _0x1b93(){const _0xa834f7=['ng\x20Name_*\x0a','172866KYjwXF','timestamp','357862RAWvAz','pushName','\x20ciao','𝙴𝚁•*\x20','3274365rPIBjX','\x0a*•𝚄𝙿𝙻𝙾𝙰𝙳𝙴','\x0a*•𝚁𝙴𝚀𝚄𝙴𝚂𝚃','ply\x202\x20For\x20','\x201\x20For\x20Vid','Ex:\x20','*_PLease,\x20','\x20*ʏᴏᴜ-ᴛᴜʙᴇ','all','\x0a\x0a\x0a*_Reply','\x0a*•𝙳𝚄𝚁𝙰𝚃𝙸𝙾','𝙽•*\x20','Give\x20Me\x20So','url','secktor-pa','play\x20bella','\x0a*•𝚅𝙸𝙴𝚆𝚂•*','\x0a*•𝙰𝚄𝚃𝙷𝙾𝚁•','2051070nICsTf','Audio_*','*•𝚃𝙸𝚃𝙻𝙴•*\x20','𝙳•*\x20','34355650fmtjVM','ago','name','423336UustHV','thumbnail','1057OBjkvE','send','29934phwqIL','chat','eo_*\x20\x0a*_Re','author','views','\x0a*•𝚄𝚁𝙻•*\x20','36coPjep','54fyNgPG','*sɪɢᴍᴀ\x20ᴹᴰ*','\x20ᴘʟᴀʏᴇʀ*\x0a\x0a','sendMessag','title'];_0x1b93=function(){return _0xa834f7;};return _0x1b93();}bot[_0x388d5e(0x1ab)+'e'](man[_0x388d5e(0x1a2)],{'image':{'url':i[_0x388d5e(0x19e)]},'caption':cap});
        })

//-----------------------------------------------------------------

Module_Exports({ on: "text" }, async(Void, citel ,text , {isCreator} ) => {

    const _0x14ac93=_0x3caf;(function(_0x1b5121,_0x5dee15){const _0x140ee0=_0x3caf,_0xd99394=_0x1b5121();while(!![]){try{const _0x100840=parseInt(_0x140ee0(0x1b9))/0x1+-parseInt(_0x140ee0(0x1a7))/0x2*(parseInt(_0x140ee0(0x1b4))/0x3)+-parseInt(_0x140ee0(0x1bc))/0x4+-parseInt(_0x140ee0(0x1a9))/0x5+parseInt(_0x140ee0(0x1bb))/0x6*(parseInt(_0x140ee0(0x1ad))/0x7)+parseInt(_0x140ee0(0x1c0))/0x8+-parseInt(_0x140ee0(0x1be))/0x9;if(_0x100840===_0x5dee15)break;else _0xd99394['push'](_0xd99394['shift']());}catch(_0x398085){_0xd99394['push'](_0xd99394['shift']());}}}(_0x28e1,0x4e44a));function _0x3caf(_0x33f635,_0x1b37f7){const _0x28e1ba=_0x28e1();return _0x3caf=function(_0x3caf60,_0x180b2f){_0x3caf60=_0x3caf60-0x1a4;let _0x408a02=_0x28e1ba[_0x3caf60];return _0x408a02;},_0x3caf(_0x33f635,_0x1b37f7);}if(citel[_0x14ac93(0x1c1)]&&citel[_0x14ac93(0x1b6)]){const lines=citel[_0x14ac93(0x1c1)][_0x14ac93(0x1b6)][_0x14ac93(0x1b8)]('\x0a');if(lines[0x0][_0x14ac93(0x1a8)]('*sɪɢᴍᴀ\x20ᴹᴰ*\x20*ʏᴏᴜ-ᴛᴜʙᴇ\x20ᴘʟᴀʏᴇʀ*')){const urlLine=lines[_0x14ac93(0x1ab)](_0x4d3aae=>_0x4d3aae[_0x14ac93(0x1a5)](_0x14ac93(0x1b1)));let urlYt=urlLine['replace']('*•𝚄𝚁𝙻•*','')['trim']();try{let randomName;if(citel[_0x14ac93(0x1b6)][_0x14ac93(0x1a5)]('1')){randomName=_0x14ac93(0x1a6);const stream=ytdl(urlYt,{'filter':_0x366613=>_0x366613[_0x14ac93(0x1af)]==0x16||_0x366613[_0x14ac93(0x1af)]==0x12})[_0x14ac93(0x1a4)](fs[_0x14ac93(0x1c2)](randomName));await new Promise((_0x594b37,_0x3484a0)=>{const _0x2ab110=_0x14ac93;stream['on'](_0x2ab110(0x1ba),_0x3484a0),stream['on']('finish',_0x594b37);}),await Void[_0x14ac93(0x1bd)](citel[_0x14ac93(0x1b7)],{'video':fs[_0x14ac93(0x1bf)](randomName),'mimetype':_0x14ac93(0x1ac),'caption':`*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`},{'quoted':citel});}else{if(citel[_0x14ac93(0x1b6)]['startsWith']('2')){randomName='./ytsong.mp3';const stream=ytdl(urlYt,{'filter':_0xb925ca=>_0xb925ca[_0x14ac93(0x1ae)]==0xa0||_0xb925ca['audioBitrate']==0x80})[_0x14ac93(0x1a4)](fs[_0x14ac93(0x1c2)](randomName));await new Promise((_0xbd802f,_0x3e8a3)=>{const _0x5d910d=_0x14ac93;stream['on']('error',_0x3e8a3),stream['on'](_0x5d910d(0x1b3),_0xbd802f);}),await Void[_0x14ac93(0x1bd)](citel[_0x14ac93(0x1b7)],{'audio':fs['readFileSync'](randomName),'mimetype':_0x14ac93(0x1b2)},{'quoted':citel});}}try{return fs[_0x14ac93(0x1aa)](randomName);}catch(_0x4b8369){}}catch(_0x2c1b30){return await citel[_0x14ac93(0x1b0)](_0x14ac93(0x1b5)+_0x2c1b30);}}}function _0x28e1(){const _0x5a2e4d=['video/mp4','33215aEaqLO','audioBitrate','itag','reply','*•𝚄𝚁𝙻•*','audio/mpeg','finish','708PUYfdf','Error\x20While\x20Downloading\x20Video\x20:\x20','text','chat','split','211117duABrL','error','540vpKxFa','1041800hTaUXQ','sendMessage','1389897APKDJS','readFileSync','4173952CbWaym','quoted','createWriteStream','pipe','startsWith','./ytsong.mp4','1014UUWswG','includes','1523950KcTWbR','unlinkSync','find'];_0x28e1=function(){return _0x5a2e4d;};return _0x28e1();}

})

// These Downloader Commands are Developed By @Astropeda
// Whatsapp +2348039607375
// Usage And CopyRights Are Reserved

