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
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.0.1 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/

 



const { formatp , formatDate , tlang, botpic,cmd, prefix, runtime,Config , parsedJid ,sleep } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch');
const speed = require('performance-now')
const API_KEY = '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'





//===============================================
      async function getDateTime() {
        const now = new Date();
        const date = now.toISOString().slice(0, 10);
        const time = now.toLocaleTimeString();
        return { date, time };
      }
///=============================================


/////-------------=========================================-------------------------------
cmd({
        pattern: "advt",
        alias : ["advertisement"],
        category: "Advertisements",
        desc: "Advertise of your Message, by sending it to provided nmbr range.",
        use: '9231844741xx,Your_text_here',
        filename: __filename,
  },
  async(Void, citel, text , { isCreator }) => {
    
    var _0x546b66=_0x6d99;(function(_0x4aedf6,_0x85645){var _0x5de56c=_0x6d99,_0x1fc0a5=_0x4aedf6();while(!![]){try{var _0x1887b5=-parseInt(_0x5de56c(0x126))/0x1*(parseInt(_0x5de56c(0x13b))/0x2)+parseInt(_0x5de56c(0x133))/0x3+-parseInt(_0x5de56c(0x12c))/0x4*(-parseInt(_0x5de56c(0x130))/0x5)+parseInt(_0x5de56c(0x13d))/0x6*(-parseInt(_0x5de56c(0x137))/0x7)+parseInt(_0x5de56c(0x127))/0x8*(-parseInt(_0x5de56c(0x141))/0x9)+-parseInt(_0x5de56c(0x12b))/0xa*(-parseInt(_0x5de56c(0x138))/0xb)+-parseInt(_0x5de56c(0x12e))/0xc*(-parseInt(_0x5de56c(0x136))/0xd);if(_0x1887b5===_0x85645)break;else _0x1fc0a5['push'](_0x1fc0a5['shift']());}catch(_0x23cb67){_0x1fc0a5['push'](_0x1fc0a5['shift']());}}}(_0x3269,0x80b58));function _0x3269(){var _0x1013d3=['7796aOCJuI','\x20chats_*\x0a\x09Last_User:\x20','54924iTqsnG','send','1395ZHSrEo','sendMessage','\x0a\x0a\x0a','93lnXNPN','split','*You\x20did\x20not\x20add\x20x\x20in\x20number.*\x0a*Ex:\x20','3263CzGzQA','2136309CczQyf','11njyZoM','reply','onWhatsApp','482186mkVxwm','*Only\x203(x)\x20are\x20Allowed\x20in\x20number*','18qbbJwg','*Advertise\x20of\x20your\x20Message*\x0a*by\x20sending\x20it\x20to\x20provided\x20nmbr\x20range.*\x0a','*Invalid\x20format.\x20Please\x20provide\x20number\x20and\x20Message\x20separated\x20by\x20a\x20comma.*','@s.whatsapp.net','2332305jbDqMa','caption','*_Advertisement\x20of\x20your\x20Message\x20is\x20Done,_*\x0a\x0a*_Message\x20Succesfully\x20sent\x20to\x20','length','\x20number\x20seached\x0a\x0a\x0a','trim','advt\x209231844741xx,Your_Message_here*\x20\x20\x0a\x20','*Sending\x20message\x20to\x20given\x20number\x20range.!*\x0a*It\x20may\x20take\x20some\x20time,\x20so\x20wait\x20please*\x0a\x0a','3fcvhXf','16iPuEMV','slice','advt\x209231844741xx,Your_text_here','owner','9916930xuFSft'];_0x3269=function(){return _0x1013d3;};return _0x3269();}if(!isCreator)return citel[_0x546b66(0x139)](tlang()[_0x546b66(0x12a)]);if(!text)return await citel[_0x546b66(0x139)](_0x546b66(0x13e)+prefix+_0x546b66(0x129));const commaIndex=text['indexOf'](',');if(commaIndex===-0x1)return await citel['send'](_0x546b66(0x13f));let inputnumber=''+text['slice'](0x0,commaIndex)[_0x546b66(0x123)](),msg=text[_0x546b66(0x128)](commaIndex+0x1)[_0x546b66(0x123)]()+_0x546b66(0x132)+Config['caption'];if(!inputnumber['includes']('x'))return citel[_0x546b66(0x12f)](_0x546b66(0x135)+prefix+_0x546b66(0x124)+Config['caption']);await citel[_0x546b66(0x12f)](_0x546b66(0x125)+Config[_0x546b66(0x142)]);function countInstances(_0x7c80f4,_0x1b4edc){var _0x3be017=_0x546b66;return _0x7c80f4[_0x3be017(0x134)](_0x1b4edc)[_0x3be017(0x144)]-0x1;}var number0=inputnumber['split']('x')[0x0],number1=inputnumber[_0x546b66(0x134)]('x')[countInstances(inputnumber,'x')]?inputnumber[_0x546b66(0x134)]('x')[countInstances(inputnumber,'x')]:'',random_length=countInstances(inputnumber,'x'),randomxx;if(random_length==0x1)randomxx=0xa;else{if(random_length==0x2)randomxx=0x64;else{if(random_length==0x3)randomxx=0x3e8;else{if(random_length>0x3)return await citel[_0x546b66(0x12f)](_0x546b66(0x13c));}}}let count=0x0,sents='';var last_user='';function _0x6d99(_0x3cfdc9,_0x4be972){var _0x3269f3=_0x3269();return _0x6d99=function(_0x6d9996,_0x2ee1a1){_0x6d9996=_0x6d9996-0x123;var _0x183fea=_0x3269f3[_0x6d9996];return _0x183fea;},_0x6d99(_0x3cfdc9,_0x4be972);}for(let i=0x0;i<randomxx;i++){var anu=await Void[_0x546b66(0x13a)](''+number0+i+number1+_0x546b66(0x140));if(anu[0x0]){last_user=anu[0x0]['jid'];if(sents['includes'](last_user))continue;await sleep(0x5dc),await Void[_0x546b66(0x131)](last_user,{'text':msg}),sents=sents+','+last_user,count+=0x1;}}return await citel[_0x546b66(0x12f)](_0x546b66(0x143)+count+_0x546b66(0x12d)+last_user[_0x546b66(0x134)]('@')[0x0]+'\x0a\x09Search_No:\x20'+randomxx+_0x546b66(0x145)+Config['caption']);
  
})




////=======================================================
const sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg = {}
let isAnnonyMsgAlive = '';
let cmdName = 'rcg';



const _0x2b42ca=_0x59a4;function _0x5b2c(){const _0x16b3fd=['info','2945100QotfTw','sᴜʜᴀɪʟ-ᴍᴅ\x20•\x20ᴀɴɴᴏɴʏᴍᴏᴜs\x20ᴍsɢ','length','replace','sender','senderMsg','includes','startsWith','31444MIFEel','1522605QPSiUe','floor','\x27\x20public\x20Whatsapp\x20bot_\x0a_User\x20not\x20wants\x20to\x20expose\x20itself\x20to\x20send\x20that\x20msg_\x0a\x20\x20\x0a\x20\x20\x0a*if\x20you\x20wanna\x20reply\x20to\x20that\x20user,*\x0a*Send\x20msg\x20by\x20replying\x20to\x20above\x20message*\x0a*Type\x20like:*\x20reply,\x20Type_your_Message_Here\x0a*Example:*\x20reply,\x20Can\x20you\x20text\x20me\x20from\x20your\x20number\x0a\x20\x20\x0a\x20\x20\x0a\x20\x20','*Basically,\x20Its\x20an\x20Annonymous\x20Message*\x0a\x0a_Msg_Id:\x20','*Anonymous\x20Chat\x20Recivers*\x0a_','_*\x0a*_Msg_Id:\x20','random','trim','reply','\x0a*you\x20can\x20reply\x201\x20more\x20time*','3SsxRgk','_\x0a_Sended\x20by\x20\x27','toLowerCase','msgStatus','_\x0a\x0a*Message:*\x20','Msg_Id','@s.whatsapp.net','9097794XOzmqH','tellinfo','*Theres\x20no\x20Anonymous\x20Chat\x20created\x20yet*','caption','*provide\x20number\x20with\x20msg\x20to\x20send\x20Anonymously.*\x20\x0a*Example\x20','slice','text','reciever','\x0a\x0a\x0a','2894712HIKBoT','15VWZtwe','_Provided\x20number\x20is\x20not\x20valid,\x20please\x20give\x20in\x20format_','sendMessage','*_Anonymous\x20message\x20sent\x20succesfully_*','<Hii,\x20Suhail\x20Tech\x20Info>','title','*Msg_Id:*\x20','anony-msg-','10FocMEF','quoted','split','indexOf','_\x0a*Time:*\x20_','howmanyreply','610532nghubX','3233304mRjUXi','error\x20:\x20','_*\x0a\x0a*Message:*\x20','anonychat'];_0x5b2c=function(){return _0x16b3fd;};return _0x5b2c();}function _0x59a4(_0x4caf13,_0x33d87c){const _0x5b2c29=_0x5b2c();return _0x59a4=function(_0x59a4b4,_0x548955){_0x59a4b4=_0x59a4b4-0x11e;let _0x3b9705=_0x5b2c29[_0x59a4b4];return _0x3b9705;},_0x59a4(_0x4caf13,_0x33d87c);}(function(_0x1c8d7b,_0x2ad074){const _0x65db7a=_0x59a4,_0x21012a=_0x1c8d7b();while(!![]){try{const _0x14d41a=parseInt(_0x65db7a(0x13b))/0x1*(parseInt(_0x65db7a(0x11f))/0x2)+-parseInt(_0x65db7a(0x12a))/0x3*(-parseInt(_0x65db7a(0x149))/0x4)+-parseInt(_0x65db7a(0x14f))/0x5+-parseInt(_0x65db7a(0x13a))/0x6+-parseInt(_0x65db7a(0x120))/0x7+parseInt(_0x65db7a(0x14a))/0x8+-parseInt(_0x65db7a(0x131))/0x9*(-parseInt(_0x65db7a(0x143))/0xa);if(_0x14d41a===_0x2ad074)break;else _0x21012a['push'](_0x21012a['shift']());}catch(_0xed0401){_0x21012a['push'](_0x21012a['shift']());}}}(_0x5b2c,0x7d9c9));class AnonymousMsg{constructor(){const _0x60dc7e=_0x59a4;this['id']='',this[_0x60dc7e(0x153)]='',this[_0x60dc7e(0x138)]='',this[_0x60dc7e(0x154)]='',this[_0x60dc7e(0x132)]=0x0,this[_0x60dc7e(0x148)]=0x0;}}cmd({'pattern':'anonymsg','alias':['recognition','anonymous',_0x2b42ca(0x14d)],'desc':'send message to a number through bot number anonimously','category':'AI','use':_0x2b42ca(0x13f),'filename':__filename},async(_0x3f3bd3,_0x53872c,_0x3a968f,{cmdName:_0x4f405,isCreator:_0x32056c})=>{const _0x1f8060=_0x2b42ca;if(!_0x3a968f)return await _0x53872c[_0x1f8060(0x128)](_0x1f8060(0x135)+(prefix+_0x4f405)+'\x20923184474176,your_Message*');if(_0x32056c&&_0x3a968f===_0x1f8060(0x14e))return await _0x53872c[_0x1f8060(0x128)](isAnnonyMsgAlive==''?_0x1f8060(0x133):_0x1f8060(0x124)+isAnnonyMsgAlive+'_');const _0x21b6ef=_0x3a968f[_0x1f8060(0x146)](',');if(_0x21b6ef===-0x1)return await _0x53872c[_0x1f8060(0x128)]('*Invalid\x20format.\x20Please\x20provide\x20both\x20number\x20and\x20Message\x20separated\x20by\x20a\x20comma.*');let _0x1ebb12=_0x3a968f[_0x1f8060(0x136)](0x0,_0x21b6ef)['trim']()+_0x1f8060(0x130),_0x41b958=_0x3a968f['slice'](_0x21b6ef+0x1)[_0x1f8060(0x127)](),_0x1b5497=await parsedJid(_0x1ebb12);if(_0x1b5497[0x0]){if(_0x1b5497[0x0]===_0x53872c[_0x1f8060(0x153)])return await _0x53872c[_0x1f8060(0x128)]('*Provide\x20another\x20number\x20instead\x20of\x20yours,\x20Idiot*');const {date:_0x2faccb,time:_0x4c9c08}=await getDateTime(),_0x3fc014=_0x1f8060(0x142)+Math[_0x1f8060(0x121)](0x186a0+Math[_0x1f8060(0x126)]()*0xdbba0);sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x3fc014]=new AnonymousMsg();let _0x4a7cbd=sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x3fc014];return _0x4a7cbd['id']=_0x3fc014,_0x4a7cbd[_0x1f8060(0x153)]=_0x53872c[_0x1f8060(0x153)],_0x4a7cbd['reciever']=_0x1b5497[0x0],_0x4a7cbd[_0x1f8060(0x12d)]=!![],_0x4a7cbd[_0x1f8060(0x154)]=_0x53872c,_0x41b958='*sᴜʜᴀɪʟ-ᴍᴅ\x20•\x20ᴀɴɴᴏɴʏᴍᴏᴜs\x20ᴍsɢ*\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a*Msg_Id:*\x20'+_0x4a7cbd['id']+'\x0a*Date:*\x20_'+_0x2faccb+_0x1f8060(0x147)+_0x4c9c08+_0x1f8060(0x12e)+_0x41b958+_0x1f8060(0x139)+Config[_0x1f8060(0x134)],isAnnonyMsgAlive=isAnnonyMsgAlive+','+_0x4a7cbd[_0x1f8060(0x138)],await _0x3f3bd3['sendMessage'](_0x4a7cbd['reciever'],{'text':_0x41b958}),await _0x53872c[_0x1f8060(0x128)](_0x1f8060(0x13e));}else return await _0x53872c[_0x1f8060(0x128)](_0x1f8060(0x13c));}),cmd({'on':_0x2b42ca(0x137)},async(_0x26c792,_0x4e9817,_0x4c2c89)=>{const _0x483f8e=_0x2b42ca;if(_0x4e9817[_0x483f8e(0x144)]&&isAnnonyMsgAlive['includes'](_0x4e9817[_0x483f8e(0x153)])&&_0x4e9817[_0x483f8e(0x137)][_0x483f8e(0x151)]>0x2){const _0x2c63ae=_0x4e9817[_0x483f8e(0x144)]['text'][_0x483f8e(0x145)]('\x0a');if(_0x2c63ae[_0x483f8e(0x151)]<0x3)return;if(_0x4e9817[_0x483f8e(0x144)][_0x483f8e(0x137)][_0x483f8e(0x155)](_0x483f8e(0x150))&&_0x2c63ae[0x0][_0x483f8e(0x155)](_0x483f8e(0x150))&&_0x2c63ae[0x2][_0x483f8e(0x155)](_0x483f8e(0x12f))){let _0x4ec172=''+_0x2c63ae[0x2][_0x483f8e(0x152)](_0x483f8e(0x141),'')['trim'](),_0xf03dfb=sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x4ec172];if(!_0xf03dfb)return;try{if(_0xf03dfb){let _0x4d7eeb=_0x4e9817['text'][_0x483f8e(0x145)](',')[0x0][_0x483f8e(0x127)]();if(_0x4d7eeb[_0x483f8e(0x12c)]()[_0x483f8e(0x11e)](_0x483f8e(0x128))){_0xf03dfb[_0x483f8e(0x148)]+=0x1;const _0x13c455=_0x4e9817['text'][_0x483f8e(0x146)](',');let _0x76f73d='*sᴜʜᴀɪʟ-ᴍᴅ\x20•\x20ʏᴏᴜʀ\x20ᴀɴᴏɴʏ-ᴍsɢ\x20ʀᴇᴘʟʏ*\x0a\x0a*_From\x20@'+_0xf03dfb[_0x483f8e(0x138)][_0x483f8e(0x145)]('@')[0x0]+_0x483f8e(0x125)+_0xf03dfb['id']+_0x483f8e(0x14c)+_0x4e9817['text']['slice'](_0x13c455+0x1)['trim']()+'\x0a\x0a\x0a\x0a'+Config[_0x483f8e(0x134)];return _0xf03dfb[_0x483f8e(0x148)]>=0x2&&(isAnnonyMsgAlive=isAnnonyMsgAlive[_0x483f8e(0x152)](','+_0x4e9817[_0x483f8e(0x153)],'')),await _0x26c792['sendMessage'](_0xf03dfb[_0x483f8e(0x153)],{'text':_0x76f73d,'mentions':[_0xf03dfb['reciever']]},{'quoted':_0xf03dfb[_0x483f8e(0x154)]}),_0xf03dfb[_0x483f8e(0x148)]>=0x2&&(isAnnonyMsgAlive=isAnnonyMsgAlive['replace'](','+_0x4e9817[_0x483f8e(0x153)],''),delete sᴜʜᴀɪʟ_ᴍᴅ_AnonyMsg[_0x4ec172]),await _0x4e9817['reply']('*_Your\x20Message\x20succesfully\x20deliver\x20to\x20User_*\x20'+(_0xf03dfb[_0x483f8e(0x148)]==0x1?_0x483f8e(0x129):'')+'\x20');}else{if(_0xf03dfb[_0x483f8e(0x132)]===0x0){_0xf03dfb[_0x483f8e(0x132)]=0x1;let _0x4175f0=_0x483f8e(0x123)+_0xf03dfb['id']+_0x483f8e(0x12b)+tlang()[_0x483f8e(0x140)]+_0x483f8e(0x122)+Config[_0x483f8e(0x134)];return await _0x26c792[_0x483f8e(0x13d)](_0xf03dfb[_0x483f8e(0x138)],{'text':_0x4175f0},{'quoted':_0x4e9817});}else{if(_0xf03dfb[_0x483f8e(0x132)]===0x1)return _0xf03dfb[_0x483f8e(0x132)]=0x2,_0x4e9817[_0x483f8e(0x128)]('*Please\x20follow\x20the\x20format\x20if\x20reply\x20to\x20msg*\x0a*Type\x20like:\x20_reply,\x20Type_your_Message_Here_*');else return;}}}}catch(_0x1ecb74){console['log'](_0x483f8e(0x14b),_0x1ecb74);}}}});
//---------------------------------------------------------------------------
//                  AI  CHAT  COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "chat",
        desc: "chat with an AI",
        category: "AI",
        use: '<Hii, Suhail Tech Info>',
        filename: __filename,
    },
    async(Void, citel,text) => 
    {
      //  let zx = text.length;
        //if (zx < 300) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=175685&key=Pg8Wu8mrDQjfr0uv&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
   // }
	
        /*
	if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`); // for null text 
	
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration
				({
           				apiKey:Config.OPENAI_API_KEY ,
				});
	
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
	
	*/
    }
)


//---------------------------------------------------------------------------
cmd({
        pattern: "gpt",
        desc: "chat with an AI",
        category: "AI",
        use: '<Hii, Suhail Tech Info>',
        filename: __filename,
    },
    async(Void, citel,text) => 
    {
  if (!Config.OPENAI_API_KEY || Config.OPENAI_API_KEY=='' ||  !Config.OPENAI_API_KEY.startsWith('sk') ) return citel.reply('You Dont Have OPENAI API KEY \nPlease Create OPEN API KEY from Given Link \nhttps://platform.openai.com/account/api-keys\nAnd Set Key in Heroku OPENAI_API_KEY Var  ')
  if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`); 
	
const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Config.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", // Specify the desired model here
      messages: [{ role: "system", content: "You" }, { role: "user", content: text }],
    }),
  });

  const data = await response.json();
  //console.log("GPT REPONCE : ",data); 
  if (!data.choices || data.choices.length === 0) {citel.reply("*Invalid ChatGPT API Key, Please Put New Key*"); }
  return await  citel.reply(data.choices[0].message.content)
	
	

	
    /*
    const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration
				({
           				apiKey:Config.OPENAI_API_KEY ,
				});
	
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
*/
    }
)


//---------------------------------------------------------------------------
cmd({
        pattern: "dalle",
	alias : ['dall','dall-e'],
        desc: "chat with an AI",
        category: "AI",
        use: '<Hii, Suhail Tech Info>',
        filename: __filename,
    },
    async(Void, citel,text) => 
    {
      function _0x59a8(){const _0x1d63b7=['26881RiBTzD','POST','9FEXiSq','url','786249lJnBYr','Bearer\x20','5986580TDkKVm','783582jHPgfy','json','chat','reply','https://api.openai.com/v1/images/generations','70580pKHfkI','application/json','19518LWDQXM','caption','108QGlYIu','data','512x512','147IgJvgn','OPENAI_API_KEY','stringify','1565864LubHcG'];_0x59a8=function(){return _0x1d63b7;};return _0x59a8();}function _0x30d9(_0x4c83f1,_0x5f57db){const _0x59a899=_0x59a8();return _0x30d9=function(_0x30d9f4,_0x41b649){_0x30d9f4=_0x30d9f4-0x18a;let _0x361331=_0x59a899[_0x30d9f4];return _0x361331;},_0x30d9(_0x4c83f1,_0x5f57db);}const _0x4eaba9=_0x30d9;(function(_0x337e7f,_0x46f7cb){const _0x2fd393=_0x30d9,_0x37b782=_0x337e7f();while(!![]){try{const _0x2a2bb3=parseInt(_0x2fd393(0x190))/0x1+parseInt(_0x2fd393(0x197))/0x2+-parseInt(_0x2fd393(0x194))/0x3+parseInt(_0x2fd393(0x1a0))/0x4*(-parseInt(_0x2fd393(0x19c))/0x5)+parseInt(_0x2fd393(0x19e))/0x6*(parseInt(_0x2fd393(0x18c))/0x7)+-parseInt(_0x2fd393(0x18f))/0x8*(parseInt(_0x2fd393(0x192))/0x9)+parseInt(_0x2fd393(0x196))/0xa;if(_0x2a2bb3===_0x46f7cb)break;else _0x37b782['push'](_0x37b782['shift']());}catch(_0x120f23){_0x37b782['push'](_0x37b782['shift']());}}}(_0x59a8,0x3c3a7));if(Config[_0x4eaba9(0x18d)]=='')return citel['reply']('You\x20Dont\x20Have\x20OPENAI_API_KEY\x20\x0aPlease\x20Create\x20OPEN\x20API\x20KEY\x20from\x20Given\x20Link\x20\x0ahttps://platform.openai.com/account/api-keys');if(!text)return citel[_0x4eaba9(0x19a)]('*Give\x20Me\x20A\x20Query\x20To\x20Get\x20Dall-E\x20Reponce\x20?*');const OPENAI_API_KEY=Config[_0x4eaba9(0x18d)],imageSize=_0x4eaba9(0x18b),apiUrl=_0x4eaba9(0x19b),response=await fetch(apiUrl,{'method':_0x4eaba9(0x191),'headers':{'Content-Type':_0x4eaba9(0x19d),'Authorization':_0x4eaba9(0x195)+OPENAI_API_KEY},'body':JSON[_0x4eaba9(0x18e)]({'model':'image-alpha-001','prompt':text,'size':imageSize,'response_format':_0x4eaba9(0x193)})}),data=await response[_0x4eaba9(0x198)]();let buttonMessage={'image':{'url':data[_0x4eaba9(0x18a)][0x0][_0x4eaba9(0x193)]},'caption':'*---Your\x20DALL-E\x20Result---*\x0a'+Config[_0x4eaba9(0x19f)]};Void['sendMessage'](citel[_0x4eaba9(0x199)],{'image':{'url':data['data'][0x0][_0x4eaba9(0x193)]}});
    }
)


//---------------------------------------------------------------------------
//                  RREPOSITORY  COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SuhailTechInfo/Secktor-bot')
        let cap = `
*⭐ Total Stars:* ${data.stargazers_count} stars
*🍽️ Forks:* ${data.forks_count} forks
*🍁 Repo:* _https://github.com/SuhailTechInfo/Secktor-bot_
*🧩 Scan:* _https://replit.com/@SuhailTechInfo/Secktor-Bot_
\n*Visit For Tutorial :-*
 _https://www.Youtube.com/c/SuhailTechInfo_
\n\n${Config.caption}`
	
        let buttonMessaged = {   image: { url: await botpic() },    caption: cap,  };   
        return await Void.sendMessage(citel.chat, buttonMessaged, {   quoted: citel, });
  });


cmd({
        pattern: "link",
        alias: ["ytube", "yt", "myyt"],
        desc: "Sends info about My Ytube Channel __CheckOut :_ www.Youtube.com/c/SuhailTechInfo",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
       
	let cap = `
╔══════════════════════════╗
  ☞𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐂𝐇𝐀𝐍𝐍𝐄𝐋☜
╚══════════════════════════╝\n
*⭐ Youtube Content :* How To Create Whatsapp Bot
*🍽️ Total Subscriber:* 36 Subscribers
*🍁 Channel Link:* _https://youtube.com/suhailtechinfo?sub_confirmation=1_\n
╭━━━━━━━━━━━━━━━━━━━━╮
┇  ╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗
┇  ║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣
┇  ╠╗║╚╝║║╠╗║╚╣║║║║║═╣
┇  ╚═╩══╩═╩═╩═╩╝╚╩═╩═╝
╰━━━━━━━━━━━━━━━━━━━━╯
𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐌𝐘 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐂𝐇𝐀𝐍𝐍𝐄𝐋*`
	
	
        let buttonMessaged = 
            {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4
            };
           
        return await Void.sendMessage(citel.chat, buttonMessaged, {   quoted: citel, });

    }
)

//---------------------------------------------------------------------------
//                  BOT STATUS COMMAND
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about" , "info"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
 
 
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
🔰 *${tlang().title}* 🔰

*🌟Description:* A WhatsApp bot with rich features, Created By *Suhail Tech Info*.\n
*⚡Speed:* ${latensie.toFixed(4)} ms
*🚦Uptime:* ${runtime(process.uptime())}
*🕸Version:* 1.0.0
*👤Owner:*  ${Config.ownername}\n\n
*Powered by 'Suhail Tech Info'*
*Youtube :* _youtube.com/c/SuhailTechInfo_
\n\n${Config.caption}`;
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: ter,
            footer: tlang().footer,
            headerType: 4
            
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//========================================================================

cmd({
  pattern: "cpu",
  desc: "To check bot status",
  category: "general",
  filename: __filename,
},
async(Void, citel) => {
  const os = require('os')
  const speed = require('performance-now')
      const used = process.memoryUsage()
      const cpus = os.cpus().map(cpu => {
          cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
          return cpu
      })
      const cpu = cpus.reduce((last, cpu, _, { length }) => 
      {
          last.total += cpu.total
          last.speed += cpu.speed / length
          last.times.user += cpu.times.user
          last.times.nice += cpu.times.nice
          last.times.sys += cpu.times.sys
          last.times.idle += cpu.times.idle
          last.times.irq += cpu.times.irq
          return last
      },{ speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0 } }
      )
    let timestamp = speed()
    let latensi = speed() - timestamp
    neww = performance.now()
    oldd = performance.now()
                  
    respon = `
  Response Speed ${latensi.toFixed(1)}Sec / ${(oldd - neww).toFixed(1)}ms
  Runtime : ${runtime(process.uptime())}`
  

  let resp2 = `💻 Info Server
  RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
  NodeJS Memory Usaage
  ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
  
  ${cpus[0] ? `Total CPU Usage
  ${cpus[0].model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
  CPU Core(s) Usage (${cpus.length} Core CPU)
  ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)
  ${Object.keys(cpu.times).map(type => `- ${(type + '').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
      `.trim()

      return await citel.reply(respon+resp2 )
})
 