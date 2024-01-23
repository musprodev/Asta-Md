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

 ⛥
 **/

  const moment = require("moment-timezone")
  const Config = require('../config')
  let { fancytext, tlang, tiny, botpic ,prefix,cmd } = require("../lib");
  const long = String.fromCharCode(8206)
  const readmore = long.repeat(4001)
  let sᴜʜᴀɪʟ_ᴍᴅ ;
  



async function forwardMessage(jid, Void, citel, cmd='' ){
const _0x3c0522=_0x2ab3;(function(_0x42e49e,_0x4e2d41){const _0x1434b0=_0x2ab3,_0x3008e6=_0x42e49e();while(!![]){try{const _0x339e5a=parseInt(_0x1434b0(0xe6))/0x1+parseInt(_0x1434b0(0xeb))/0x2*(parseInt(_0x1434b0(0xdb))/0x3)+parseInt(_0x1434b0(0xe0))/0x4+parseInt(_0x1434b0(0xda))/0x5*(-parseInt(_0x1434b0(0xd6))/0x6)+parseInt(_0x1434b0(0xe8))/0x7*(-parseInt(_0x1434b0(0xe4))/0x8)+-parseInt(_0x1434b0(0xe5))/0x9*(-parseInt(_0x1434b0(0xdc))/0xa)+-parseInt(_0x1434b0(0xe1))/0xb;if(_0x339e5a===_0x4e2d41)break;else _0x3008e6['push'](_0x3008e6['shift']());}catch(_0x147fd6){_0x3008e6['push'](_0x3008e6['shift']());}}}(_0x5d35,0x66d09));function _0x5d35(){const _0x3a283c=['mtype','*Error,\x20Request\x20not\x20be\x20proceed*','documentMessage','270695uTSNmQ','2418510Iffpec','10DCBpiz','save','log','send','906280npzxwg','2436412bgsfYC','quoted','imageMessage','63608cveTAW','934947kHphkG','793264fnJIbn','conversation','609aBETxq','videoMessage','ptv','2fVbfhc','extendedTextMessage','audioMessage','66SxJVPa'];_0x5d35=function(){return _0x3a283c;};return _0x5d35();}let mtype=citel[_0x3c0522(0xe2)][_0x3c0522(0xd7)],message;if(mtype===_0x3c0522(0xe9)&&cmd===_0x3c0522(0xea))message={'ptvMessage':{...citel['quoted']}};else{if(mtype===_0x3c0522(0xe9))message={'videoMessage':{...citel[_0x3c0522(0xe2)]}};else{if(mtype===_0x3c0522(0xe3))message={'imageMessage':{...citel[_0x3c0522(0xe2)]}};else{if(mtype===_0x3c0522(0xd5))message={'audioMessage':{...citel['quoted']}};else{if(mtype===_0x3c0522(0xd9))message={'documentMessage':{...citel[_0x3c0522(0xe2)]}};else{if(mtype===_0x3c0522(0xe7)||mtype===_0x3c0522(0xd4))return await citel[_0x3c0522(0xdf)](citel[_0x3c0522(0xe2)]['text']);}}}}}function _0x2ab3(_0x3f21c7,_0x57cc24){const _0x5d3507=_0x5d35();return _0x2ab3=function(_0x2ab3f1,_0x391603){_0x2ab3f1=_0x2ab3f1-0xd4;let _0x3290e8=_0x5d3507[_0x2ab3f1];return _0x3290e8;},_0x2ab3(_0x3f21c7,_0x57cc24);}if(message){sᴜʜᴀɪʟ_ᴍᴅ=Void;try{await sᴜʜᴀɪʟ_ᴍᴅ['relayMessage'](jid,message,{'messageId':citel['key']['id']});}catch(_0x272ed5){(cmd==='ptv'||cmd===_0x3c0522(0xdd))&&await citel['send'](_0x3c0522(0xd8)),console[_0x3c0522(0xde)]('Error\x20in\x20'+cmd+'-cmd\x20in\x20forwardMessage\x20\x0a',_0x272ed5);}}
}
///============================================================================================
cmd({ pattern: "ptv", desc: "send ptv Message of video", category: "whatsapp",filename: __filename},async(Void, citel, text,{cmdName , isCreator}) => {
    if(!citel.quoted) return await citel.send("*Uhh please, reply to a video Message*")
    let mtype = citel.quoted.mtype 
    if(mtype !== "videoMessage") return await citel.send("*Replied Message is not a video, Idiot.*")
    return await forwardMessage(citel.chat, Void, citel, cmdName )
})////------------------------------------------------------------
cmd({pattern: "#", desc: "Save whatsapp status",category: "whatsapp",filename: __filename},async(Void, citel, text,{cmdName , isCreator}) => {
    if(!citel.quoted) return await citel.send("*Uhh Please, reply to whatsapp status*")
    let sᴜʜᴀɪʟ_ᴍᴅ_num = await Void.decodeJid(Void.user.id)
    return await forwardMessage(sᴜʜᴀɪʟ_ᴍᴅ_num, Void, citel, cmdName )
})//--------------------------------------------------------------------
cmd({pattern: "save",desc: "Save Message to log number",category: "whatsapp",filename: __filename},async(Void, citel, text,{cmdName , isCreator}) => {
    if(!isCreator) return await citel.send(tlang().owner)
    if(!citel.quoted) return await citel.send("*Uhh Please, reply to a Message*")
    let sᴜʜᴀɪʟ_ᴍᴅ_num = await Void.decodeJid(Void.user.id)
    return await forwardMessage(sᴜʜᴀɪʟ_ᴍᴅ_num, Void, citel, cmdName )
})///================================================================================
cmd({ on: "text" }, async (Void,citel,text)=> {
    if(citel.quoted && citel.text.toLowerCase().includes("send") ){
        let sᴜʜᴀɪʟ_ᴍᴅ_num = await Void.decodeJid(Void.user.id)
        if(citel.quoted.sender === sᴜʜᴀɪʟ_ᴍᴅ_num && citel.quoted.chat === 'status@broadcast' ){ return await forwardMessage(citel.chat, Void, citel, 'send' ); }
    }
})//==================================================================