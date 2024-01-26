

const { Module_Exports, parseJid, getAdmin, tlang, prefix,cmd } = require("../lib");
const Maher_Zubair_NumGuess_Game =  {};



const Maher_Zubair_CFG_GAME = {};
const quotes = [
 "Connect Four: Where strategy meets fun!",
"Let the battle of four-in-a-row begin!",
"It's time to connect and conquer!",
"Can you outsmart your opponent in Connect Four?",
"Challenge your mind with Connect Four's strategic gameplay.",
"Connect Four: A game of wits and tactics.",
"Four in a row, that's the way to go!",
"Connect Four: Unleash your strategic genius.",
"Get ready to drop and connect your way to victory!",
"Connect Four: Where every move counts.",
"Prove your skills in the ultimate Connect Four showdown!",
"Connect Four: The classic game of strategy and anticipation.",
"Connect Four: Easy to learn, hard to master.",
"Who will be the first to connect their pieces and claim victory?",
"Prepare for a thrilling battle of strategy in Connect Four.",
"Get ready to connect and win!",
"Who will be the Connect Four champion?",
"Strategize and conquer the board!",
"Let the Connect Four battle begin!",
"Connect Four: The ultimate test of skill!",
];





/*
Module_Exports({
    kingcmd: "games",
    infocmd: "No-Desc"
    kingclass: "No-cat",         
    react: "😐"
  },
*/
////// ------------------- Number guess Game  
const _0x447b6f=_0x38f2;(function(_0x313d58,_0x400e1a){const _0x2073d4=_0x38f2,_0xc32a26=_0x313d58();while(!![]){try{const _0x57d6b7=parseInt(_0x2073d4(0xbb))/0x1+-parseInt(_0x2073d4(0xaa))/0x2+-parseInt(_0x2073d4(0xb4))/0x3+-parseInt(_0x2073d4(0x94))/0x4*(parseInt(_0x2073d4(0xba))/0x5)+parseInt(_0x2073d4(0xb2))/0x6+parseInt(_0x2073d4(0x92))/0x7*(-parseInt(_0x2073d4(0xc3))/0x8)+parseInt(_0x2073d4(0xad))/0x9*(parseInt(_0x2073d4(0xcb))/0xa);if(_0x57d6b7===_0x400e1a)break;else _0xc32a26['push'](_0xc32a26['shift']());}catch(_0x2235ef){_0xc32a26['push'](_0xc32a26['shift']());}}}(_0x1c10,0x42781));class GuessingGame{constructor(){const _0x120e1f=_0x38f2;this[_0x120e1f(0xbf)]=0x0,this[_0x120e1f(0xa5)]='',this['id']='',this[_0x120e1f(0xb1)]=![],this[_0x120e1f(0xa2)]=_0x120e1f(0xa8),this[_0x120e1f(0x97)]=0x0,this['guessedNumber']=0x0;}}const logoName='█▄\x20█\x20█\x20\x20\x20█\x20\x20█▄\x20▄█\x20\x20██▄\x20██▀\x20█▀▄\x0a█\x20▀█\x20█▄█\x20\x20█\x20\x20▀\x20\x20█\x20\x20█▄█\x20█▄▄\x20█▀▄';function _0x1c10(){const _0x38578c=['24579cEhAdG','Guess\x20Normal_*\x0a*𝗔𝘃𝗮𝗮𝗶𝗹𝗮𝗯𝗹𝗲\x20𝗠𝗼𝗱𝗲𝘀:*\x0a\x20\x20▢\x20Easy\x20\x20\x20(\x20_0\x20to\x20100_)\x0a\x20\x20▢\x20Medium\x20(\x20_0\x20to\x201000_)\x0a\x20\x20▢\x20Hard\x20\x20\x20(\x20_0\x20to\x2010000_)\x0a\x20\x20▢\x20End\x20\x20(\x20_End\x20the\x20Game_)\x0a','\x0a\x20\x20𝗡𝘂𝗺𝗯𝗲𝗿\x20𝗬𝗼𝘂\x20𝗚𝘂𝗲𝘀𝘀𝗲𝗱\x20𝗶𝘀\x20𝗟𝗼𝘄\x20\x20\x0a\x0a*Player\x20:\x20_@','Error\x20In\x20Number\x20Guessing\x20Game\x20:\x20','status','2420892cLkCby','\x20you\x20won\x20the\x20Game!_*\x20\x0a\x20\x20\x20\x20_▢\x20You\x20guessed\x20the\x20correct\x20number\x20\x27\x20*','462822qebdia','*_A\x20game\x20is\x20already\x20in\x20progress\x20in\x20this\x20chat._*\x0a\x20To\x20End\x20the\x20Game:\x20\x20.Guess\x20end','split','Play\x20Guessing\x20Number\x20game','floor','chat','5ocsiTm','74251JBsawb','game','toLowerCase','\x0a\x20\x20\x20\x20𝗡𝘂𝗺𝗯𝗲𝗿\x20𝗚𝘂𝗲𝘀𝘀𝗶𝗻𝗴\x20𝗚𝗮𝗺𝗲\x20𝗠𝗲𝗻𝘂\x0a\x0a*Uhh\x20Dear,\x20Choose\x20','attempts','\x27._*\x20\x0a\x20\x20*_▢\x20Make\x20Sure\x20to\x20guess\x20Number\x20Between\x20','medium','\x0a\x20\x20𝗡𝘂𝗺𝗯𝗲𝗿\x20𝗚𝘂𝗲𝘀𝘀𝗶𝗻𝗴\x20𝗚𝗮𝗺𝗲\x20𝗦𝘁𝗮𝗿𝘁𝗲𝗱\x0a\x20\x20\x20\x20\x20\x0a*𝗦𝗲𝗹𝗲𝗰𝘁𝗲𝗱\x20𝗠𝗼𝗱𝗲\x20:\x20_','8DXyZgy','guessedNumber','_*\x20\x20\x0a*Attempts\x20:*\x20_','Hard','send','isGroup','an\x20Option','*\x20\x27._\x0a\x20\x20\x20\x20_▢\x20You\x20take\x20','1150yQNZlp','1\x20and\x201000','400141GfkQjt','sender','824344xKNqZO','null','1\x20and\x2010000','randomNumber','\x20First,\x20Like\x20_','\x20attempts\x20to\x20Guess\x20that\x20Number._\x09\x0a','end','reply','\x0a\x20\x20𝗡𝘂𝗺𝗯𝗲𝗿\x20𝗚𝘂𝗲𝘀𝘀𝗶𝗻𝗴\x20𝗚𝗮𝗺𝗲\x20𝗙𝗶𝗻𝗶𝘀𝗵𝗲𝗱\x20\x0a\x0a*𝗠𝗼𝗱𝗲\x20You\x20Played\x20:\x20_','text','Medium','includes','\x20yet_\x0a\x0a*Number\x20Info:*\x0a\x20\x20*_▢\x20Its\x20Too\x20High\x20Number!_*\x0a\x20\x20*_▢\x20Try\x20to\x20Guess\x20a\x20Smaller\x20Number\x20From\x20\x27\x20','Easy','mode','_*\x20\x0a*_Congratulations!\x20@','\x20yet_\x0a\x0a*Number\x20Info:*\x0a\x20\x20*_▢\x20Its\x20Too\x20Low\x20Number!_*\x0a\x20\x20*_▢\x20Try\x20to\x20Guess\x20a\x20High\x20Number\x20From\x20\x27\x20','player','._*\x0a','random','low','hard','204036qwjyjN','1\x20and\x20100','._*\x0a\x0a*𝗬𝗼𝘂𝗿\x20𝗧𝗮𝘀𝗸\x20:*\x0a\x20\x20\x20_▢\x20You\x20Task\x20is\x20to\x20Guess\x20That\x20Number._\x0a\x20\x20\x20_▢\x20Checks\x20How\x20Sharp\x20is\x20Your\x20Memory._\x0a\x20\x20\x20_▢\x20Lets\x20see\x20How\x20Many\x20Attempts\x20You\x20Take\x20To\x20Guess\x20Number._'];_0x1c10=function(){return _0x38578c;};return _0x1c10();}function _0x38f2(_0x42dc29,_0x553e9e){const _0x1c10d0=_0x1c10();return _0x38f2=function(_0x38f24d,_0x42e562){_0x38f24d=_0x38f24d-0x92;let _0xcd9474=_0x1c10d0[_0x38f24d];return _0xcd9474;},_0x38f2(_0x42dc29,_0x553e9e);}Module_Exports({'kingcmd':'guess','infocmd':_0x447b6f(0xb7),'filename':__filename,'kingclass':_0x447b6f(0xbc)},async(_0x2dff45,_0x1fda8a,_0x1386e7)=>{const _0x4ba254=_0x447b6f;try{const _0x51df81=_0x1fda8a[_0x4ba254(0xb9)];let _0x2acaae=Maher_Zubair_NumGuess_Game[_0x51df81];_0x1386e7=_0x1386e7[_0x4ba254(0xbd)]();if(_0x1386e7===_0x4ba254(0x9a)&&_0x2acaae)return delete Maher_Zubair_NumGuess_Game[_0x51df81],await _0x1fda8a[_0x4ba254(0x9b)]('*_Number\x20Guessing\x20Game\x20ended.\x20Goodbye!_*');if(_0x2acaae&&_0x2acaae['status'])return await _0x1fda8a[_0x4ba254(0x9b)](_0x4ba254(0xb5));let _0x3e8bb0='',_0x3ee9d5=0x0;if(_0x1386e7[_0x4ba254(0x9f)]('easy'))_0x3ee9d5=Math[_0x4ba254(0xb8)](Math[_0x4ba254(0xa7)]()*0x64),_0x3e8bb0=_0x4ba254(0xa1);else{if(_0x1386e7[_0x4ba254(0x9f)](_0x4ba254(0xc1)))_0x3ee9d5=Math[_0x4ba254(0xb8)](Math[_0x4ba254(0xa7)]()*0x3e8),_0x3e8bb0=_0x4ba254(0x9e);else{if(_0x1386e7[_0x4ba254(0x9f)](_0x4ba254(0xa9)))_0x3ee9d5=Math[_0x4ba254(0xb8)](Math[_0x4ba254(0xa7)]()*0x2710),_0x3e8bb0=_0x4ba254(0xc6);else return await _0x1fda8a[_0x4ba254(0xc7)](logoName+_0x4ba254(0xbe)+(_0x1386e7?'a\x20Valid\x20Option':_0x4ba254(0xc9))+_0x4ba254(0x98)+prefix+_0x4ba254(0xae));}}return!_0x2acaae&&(Maher_Zubair_NumGuess_Game[_0x51df81]=new GuessingGame()),_0x2acaae=Maher_Zubair_NumGuess_Game[_0x51df81],_0x2acaae[_0x4ba254(0xb1)]=!![],_0x2acaae[_0x4ba254(0x97)]=_0x3ee9d5,_0x2acaae[_0x4ba254(0xa2)]=_0x3e8bb0,_0x2acaae[_0x4ba254(0xa5)]=_0x1fda8a[_0x4ba254(0x93)],_0x2acaae['id']=_0x1fda8a[_0x4ba254(0xb9)],await _0x1fda8a[_0x4ba254(0x9b)](logoName+_0x4ba254(0xc2)+_0x2acaae[_0x4ba254(0xa2)]+'_*\x20\x0a\x20\x20\x20▢\x20*_Well,\x20I\x27m\x20thinking\x20of\x20a\x20number\x20between\x20'+(_0x2acaae[_0x4ba254(0xa2)]===_0x4ba254(0xa1)?_0x4ba254(0xab):_0x2acaae[_0x4ba254(0xa2)]===_0x4ba254(0x9e)?_0x4ba254(0xcc):_0x4ba254(0x96))+_0x4ba254(0xac));}catch(_0x2d1ac1){return await console['log'](_0x4ba254(0xb0),_0x2d1ac1);}}),Module_Exports({'on':_0x447b6f(0x9d)},async(_0x42123f,_0x58897c,_0x412706)=>{const _0x3df3a3=_0x447b6f;if(!_0x58897c[_0x3df3a3(0xc8)])return;const _0x558d38=_0x58897c[_0x3df3a3(0xb9)],_0x29f910=Maher_Zubair_NumGuess_Game[_0x558d38];if(!_0x29f910)return;const _0x5846d6=parseInt(_0x58897c[_0x3df3a3(0x9d)]?_0x58897c[_0x3df3a3(0x9d)][_0x3df3a3(0xb6)]('\x20')[0x0]:_0x3df3a3(0x95));if(_0x29f910['id']===_0x58897c[_0x3df3a3(0xb9)]&&_0x29f910[_0x3df3a3(0xa5)]===_0x58897c['sender']&&!isNaN(_0x5846d6)){_0x29f910[_0x3df3a3(0xc4)]=_0x5846d6,_0x29f910[_0x3df3a3(0xbf)]++;if(_0x29f910[_0x3df3a3(0xc4)]<_0x29f910[_0x3df3a3(0x97)])return await _0x58897c['send'](logoName+_0x3df3a3(0xaf)+_0x29f910['player']['split']('@')[0x0]+_0x3df3a3(0xc5)+_0x29f910[_0x3df3a3(0xbf)]+_0x3df3a3(0xa4)+_0x29f910['guessedNumber']+_0x3df3a3(0xc0)+(_0x29f910[_0x3df3a3(0xa2)]===_0x3df3a3(0xa1)?_0x3df3a3(0xab):_0x29f910[_0x3df3a3(0xa2)]===_0x3df3a3(0x9e)?_0x3df3a3(0xcc):'1\x20and\x2010000')+_0x3df3a3(0xa6),{'mentions':[_0x29f910['player']]});else{if(_0x29f910[_0x3df3a3(0xc4)]>_0x29f910['randomNumber'])return await _0x58897c['send'](logoName+'\x0a\x20\x20𝗡𝘂𝗺𝗯𝗲𝗿\x20𝗬𝗼𝘂\x20𝗚𝘂𝗲𝘀𝘀𝗲𝗱\x20𝗶𝘀\x20𝗛𝗶𝗴𝗵\x20\x20\x0a\x0a*Player\x20:\x20_@'+_0x29f910['player'][_0x3df3a3(0xb6)]('@')[0x0]+_0x3df3a3(0xc5)+_0x29f910[_0x3df3a3(0xbf)]+_0x3df3a3(0xa0)+_0x29f910[_0x3df3a3(0xc4)]+_0x3df3a3(0xc0)+(_0x29f910[_0x3df3a3(0xa2)]===_0x3df3a3(0xa1)?_0x3df3a3(0xab):_0x29f910['mode']==='Medium'?'1\x20and\x201000':'1\x20and\x2010000')+_0x3df3a3(0xa6),{'mentions':[_0x29f910[_0x3df3a3(0xa5)]]});else await _0x58897c[_0x3df3a3(0xc7)](logoName+_0x3df3a3(0x9c)+_0x29f910[_0x3df3a3(0xa2)]['toUpperCase']()+_0x3df3a3(0xa3)+_0x29f910[_0x3df3a3(0xa5)][_0x3df3a3(0xb6)]('@')[0x0]+_0x3df3a3(0xb3)+_0x29f910[_0x3df3a3(0x97)]+_0x3df3a3(0xca)+_0x29f910[_0x3df3a3(0xbf)]+_0x3df3a3(0x99),{'mentions':[_0x29f910[_0x3df3a3(0xa5)]]}),delete Maher_Zubair_NumGuess_Game[_0x558d38];}return;}});


/////// ----------------- Connect Four Game
const _0x2dcdaa=_0x1b6b;function _0x3732(){const _0x820118=['errors\x20:\x20','currentPlayer','reply','player1','log','45617pIYdRs','\x20|\x20','_*\x0a_If\x20You\x20@{citel.sender.split(\x22@\x22)[0]}\x20wants\x20to\x20Play,_\x20\x0a_Then\x20Delete\x20Cfg\x20Session:-\x20{prefix}delcfg_\x0a\x20\x20\x20','send','505232sbQyJx','1761012dOBNYZ','updateLastIndex','deletes\x20Connect\x20Four\x20running\x20session.','4192810ietkSO','\x20you\x20win\x20the\x20Game!_*\x20\x0a_You\x20Connect\x20Four\x20Colors\x20in_\x20\x27','isDone','\x20Joined_\x0a_Waiting\x20For\x20Another\x20Player\x20To\x20Start\x20Game..._\x0a*Type\x20_.cfg\x20to\x20Join\x20This\x20Game\x20Session.*','player2','includes','_*\x0a*Next\x20Turn\x20:\x20\x20_@','_*\x0a*𝗟𝗼𝗼𝘀𝗲𝗿\x20𝗢𝗳\x20𝗧𝗵𝗲\x20𝗚𝗮𝗺𝗲\x20𝗜𝘀:\x20_@','printMatrix','_*\x0a','_*\x0a*Nextt\x20Turn\x20\x20','random','733998EeFOBo','rowsMatrix','\x20:\x20_@','_*\x0a\x20\x20\x20\x0a\x20▢\x20*_Please\x20take\x20your\x20turn\x20to\x20Break\x20Pattern_*\x0a\x20▢\x20_Enter\x20Line\x20Number\x20Between\x20*\x271\x27*\x20to\x20*\x277\x27*_\x0a\x20\x20\x0a*Connent\x20Four\x20Game\x20Quote\x20:*\x0a\x20\x20▢\x20_','\x27\x20_Turns._\x0a\x20\x20\x20\x20\x20\x0a_Connect\x20Four\x20Game\x20Session\x20Finished\x20Now_\x0a_Type_\x20.Cfg\x20_to\x20Start\x20Again\x20Connect\x20Four\x20Session._\x0a','checkWin','3456584vsIAGv','\x0a|\x20','mentionedJid','*_Invalid\x20move\x20Dear\x20@','593922pSXVSG','▄▀▀\x20▄▀▄\x20█▄\x20█\x20█▄\x20█\x20▄▀▀\x20▀█▀\x20\x0a▀▄▄\x20▀▄▀\x20█\x20▀█\x20█\x20▀█\x20▀▄▄\x20\x20\x20\x20█\x0a\x20\x20\x20𝗖𝗼𝗻𝗻𝗲𝗰𝘁\x20𝗙𝗼𝘂𝗿\x20𝗚𝗮𝗺𝗲\x20𝗕𝗼𝗮𝗿𝗱\x0a','columnsMatrix','chat','Connect\x20Four\x20Game\x20Error\x20:\x20','sender','*A\x20game\x20is\x20already\x20in\x20progress\x20in\x20this\x20chat.*\x0a*Game\x20Between\x20:-\x20_@','\x20\x0a◣━━━━━━━━━━\x20━━━━━━━━━━◢\x0a\n*Connet\x20Four\x20Game\x20Session\x20started*\x20\x0a*room\x20Id\x20:\x20_cfg-','text','5sdzsui','9PWNiLN','_*\x0a*_Hey\x20@','quoted','cfg','gameStatus','split','_\x20Cleared\x20Successfully*\x0a*_Connect\x20Four\x20Game\x20Session\x20Deleted\x20From\x20This\x20Chat..._*\x0a','_*\x0a\n*Current\x20Turn:\x20_@','matrix','_*\x0a_Player\x201:\x20@','length','\x0a◣━━━━━━━━━━\x20━━━━━━━━━━◢\x0a\x20\x20\x20\x20\x20\x20\x0a*Current\x20Turn\x20','▄▀▀\x20▄▀▄\x20█▄\x20█\x20█▄\x20█\x20▄▀▀\x20▀█▀\x20\x0a▀▄▄\x20▀▄▀\x20█\x20▀█\x20█\x20▀█\x20▀▄▄\x20\x20\x20\x20█\x0a\x20\x20\x20𝗖𝗼𝗻𝗻𝗲𝗰𝘁\x20𝗙𝗼𝘂𝗿\x20𝗚𝗮𝗺𝗲\x20𝗙𝗶𝗻𝗶𝘀𝗵𝗲𝗱\x0a*𝗪𝗶𝗻𝗻𝗲𝗿\x20𝗢𝗳\x20𝗧𝗵𝗲\x20𝗚𝗮𝗺𝗲\x20𝗜𝘀:\x20_@','▄▀▀\x20▄▀▄\x20█▄\x20█\x20█▄\x20█\x20▄▀▀\x20▀█▀\x20\x0a▀▄▄\x20▀▄▀\x20█\x20▀█\x20█\x20▀█\x20▀▄▄\x20\x20\x20\x20█\x0a\x20\x20𝗖𝗼𝗻𝗻𝗲𝗰𝘁\x20𝗙𝗼𝘂𝗿\x20𝗚𝗮𝗺𝗲\x20404𝗘𝗿𝗿𝗼𝗿\x20\x20\x20\x0a*Uhh\x20Dear,\x20_Theres\x20No\x20Game\x20Started\x20yet\x20in\x20This\x20Chat_*\x0a','floor','49DdukUp','attempts','Start\x20Connect\x20Four\x20game\x20session.','game','\x0a◣━━━━━━━━━━\x20━━━━━━━━━━◢\x20\x20\x20\x20\x20\x0a*_Congratulations!\x20@','▄▀▀\x20▄▀▄\x20█▄\x20█\x20█▄\x20█\x20▄▀▀\x20▀█▀\x20\x0a▀▄▄\x20▀▄▀\x20█\x20▀█\x20█\x20▀█\x20▀▄▄\x20\x20\x20\x20█\x0a\x20\x20\x20𝗖𝗼𝗻𝗻𝗲𝗰𝘁\x20𝗙𝗼𝘂𝗿\x20𝗚𝗮𝗺𝗲\x20𝗦𝘁𝗮𝗿𝘁𝗲𝗱\x20\x0a','sendMessage',',\x20Please\x20take\x20your\x20turn_*\x0a▢\x20_Enter\x20Line\x20Number\x20Between\x20*\x271\x27*\x20to\x20*\x277\x27*_\x0a\n*Connect\x20Four\x20Game\x20Task\x20:*\x0a\x20\x20_Player\x20Needs\x20To\x20Connect\x20Four\x20Colors\x20in\x20a\x20Sequence,_\x0a\x20\x20_You\x20can\x20Connect\x20Four\x20Colors\x20▢Horizontally,\x20▢Vertically,\x20▢Diagonally._\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a*Lets\x20Play\x20:-\x20_'];_0x3732=function(){return _0x820118;};return _0x3732();}(function(_0x1e83b9,_0x5bea2b){const _0x23f28b=_0x1b6b,_0x282cef=_0x1e83b9();while(!![]){try{const _0x107f64=parseInt(_0x23f28b(0xcc))/0x1+-parseInt(_0x23f28b(0xe0))/0x2+parseInt(_0x23f28b(0xd1))/0x3+parseInt(_0x23f28b(0xe6))/0x4*(-parseInt(_0x23f28b(0xaf))/0x5)+-parseInt(_0x23f28b(0xa6))/0x6*(-parseInt(_0x23f28b(0xbf))/0x7)+-parseInt(_0x23f28b(0xd0))/0x8+parseInt(_0x23f28b(0xb0))/0x9*(parseInt(_0x23f28b(0xd4))/0xa);if(_0x107f64===_0x5bea2b)break;else _0x282cef['push'](_0x282cef['shift']());}catch(_0x54231d){_0x282cef['push'](_0x282cef['shift']());}}}(_0x3732,0x6dfd0));class ConnectFourGame{constructor(){const _0x5f952=_0x1b6b;this[_0x5f952(0xca)]='',this[_0x5f952(0xd8)]='',this[_0x5f952(0xe1)]=0x6,this[_0x5f952(0xa8)]=0x7,this[_0x5f952(0xc8)]='',this[_0x5f952(0xb4)]=![],this[_0x5f952(0xc0)]={},this['matrix']=[['⚪','⚪','⚪','⚪','⚪','⚪','⚪'],['⚪','⚪','⚪','⚪','⚪','⚪','⚪'],['⚪','⚪','⚪','⚪','⚪','⚪','⚪'],['⚪','⚪','⚪','⚪','⚪','⚪','⚪'],['⚪','⚪','⚪','⚪','⚪','⚪','⚪'],['⚪','⚪','⚪','⚪','⚪','⚪','⚪']];}async[_0x2dcdaa(0xd2)](_0x589639){const _0x5cec13=_0x2dcdaa;let _0x2e2d4e=this['currentPlayer']===this[_0x5cec13(0xca)]?'🔵':'🔴',_0x5049ec=this[_0x5cec13(0xb8)][_0x5cec13(0xba)]-0x1;while(_0x5049ec>0x0&&this[_0x5cec13(0xb8)][_0x5049ec][_0x589639]!=='⚪'){_0x5049ec--;}return this[_0x5cec13(0xb8)][_0x5049ec][_0x589639]=='⚪'?(this[_0x5cec13(0xb8)][_0x5049ec][_0x589639]=_0x2e2d4e,!![]):![];}async[_0x2dcdaa(0xdc)](){const _0x15801d=_0x2dcdaa;let _0x5af145='';for(let _0x590bb8=0x0;_0x590bb8<this[_0x15801d(0xb8)][_0x15801d(0xba)];_0x590bb8++){_0x5af145+=_0x15801d(0xe7);for(let _0x27f46f=0x0;_0x27f46f<this['matrix'][_0x590bb8][_0x15801d(0xba)];_0x27f46f++){_0x5af145+=this[_0x15801d(0xb8)][_0x590bb8][_0x27f46f]+_0x15801d(0xcd);}}return _0x5af145;}async[_0x2dcdaa(0xe5)](){const _0x31d9ed=_0x2dcdaa;let _0x4405a9=this[_0x31d9ed(0xc8)]===this[_0x31d9ed(0xca)]?'🔵':'🔴';for(let _0x31a01b=0x0;_0x31a01b<this[_0x31d9ed(0xb8)][_0x31d9ed(0xba)];_0x31a01b++){for(let _0x222af8=0x0;_0x222af8<=this[_0x31d9ed(0xb8)][_0x31a01b][_0x31d9ed(0xba)]-0x4;_0x222af8++){if(this[_0x31d9ed(0xb8)][_0x31a01b][_0x222af8]===_0x4405a9&&this[_0x31d9ed(0xb8)][_0x31a01b][_0x222af8+0x1]===_0x4405a9&&this[_0x31d9ed(0xb8)][_0x31a01b][_0x222af8+0x2]===_0x4405a9&&this[_0x31d9ed(0xb8)][_0x31a01b][_0x222af8+0x3]===_0x4405a9)return this['currentPlayer'];}}for(let _0x4f8252=0x0;_0x4f8252<=this[_0x31d9ed(0xb8)][_0x31d9ed(0xba)]-0x4;_0x4f8252++){for(let _0x4aed47=0x0;_0x4aed47<this['matrix'][_0x4f8252][_0x31d9ed(0xba)];_0x4aed47++){if(this[_0x31d9ed(0xb8)][_0x4f8252][_0x4aed47]===_0x4405a9&&this[_0x31d9ed(0xb8)][_0x4f8252+0x1][_0x4aed47]===_0x4405a9&&this['matrix'][_0x4f8252+0x2][_0x4aed47]===_0x4405a9&&this[_0x31d9ed(0xb8)][_0x4f8252+0x3][_0x4aed47]===_0x4405a9)return this[_0x31d9ed(0xc8)];}}for(let _0x3dfd9a=0x0;_0x3dfd9a<=this[_0x31d9ed(0xb8)][_0x31d9ed(0xba)]-0x4;_0x3dfd9a++){for(let _0x529268=0x0;_0x529268<=this[_0x31d9ed(0xb8)][_0x3dfd9a][_0x31d9ed(0xba)]-0x4;_0x529268++){if(this[_0x31d9ed(0xb8)][_0x3dfd9a][_0x529268]===_0x4405a9&&this['matrix'][_0x3dfd9a+0x1][_0x529268+0x1]===_0x4405a9&&this[_0x31d9ed(0xb8)][_0x3dfd9a+0x2][_0x529268+0x2]===_0x4405a9&&this[_0x31d9ed(0xb8)][_0x3dfd9a+0x3][_0x529268+0x3]===_0x4405a9)return this[_0x31d9ed(0xc8)];}}for(let _0x11e08c=0x0;_0x11e08c<=this[_0x31d9ed(0xb8)][_0x31d9ed(0xba)]-0x4;_0x11e08c++){for(let _0x47bb05=this[_0x31d9ed(0xb8)][_0x11e08c][_0x31d9ed(0xba)]-0x1;_0x47bb05>=0x3;_0x47bb05--){if(this[_0x31d9ed(0xb8)][_0x11e08c][_0x47bb05]===_0x4405a9&&this[_0x31d9ed(0xb8)][_0x11e08c+0x1][_0x47bb05-0x1]===_0x4405a9&&this['matrix'][_0x11e08c+0x2][_0x47bb05-0x2]===_0x4405a9&&this[_0x31d9ed(0xb8)][_0x11e08c+0x3][_0x47bb05-0x3]===_0x4405a9)return this[_0x31d9ed(0xc8)];}}return null;}}function _0x1b6b(_0x3d742b,_0x1be960){const _0x3732b8=_0x3732();return _0x1b6b=function(_0x1b6be3,_0x39f3a6){_0x1b6be3=_0x1b6be3-0xa4;let _0xbec226=_0x3732b8[_0x1b6be3];return _0xbec226;},_0x1b6b(_0x3d742b,_0x1be960);}Module_Exports({'kingcmd':_0x2dcdaa(0xb3),'infocmd':_0x2dcdaa(0xc1),'filename':__filename,'kingclass':_0x2dcdaa(0xc2)},async(_0x135624,_0x25e922,_0x3d09f2)=>{const _0x56574c=_0x2dcdaa,_0x377c47=_0x25e922['chat'];let _0xe4f6b=Maher_Zubair_CFG_GAME[_0x377c47];if(_0xe4f6b&&_0xe4f6b[_0x56574c(0xb4)])return await _0x25e922[_0x56574c(0xcf)](_0x56574c(0xac)+_0xe4f6b['player1']['split']('@')[0x0]+'_\x20vs\x20_@'+_0xe4f6b[_0x56574c(0xd8)][_0x56574c(0xb5)]('@')[0x0]+_0x56574c(0xce),{'mentions':[_0xe4f6b[_0x56574c(0xca)],_0xe4f6b[_0x56574c(0xd8)]]});!_0xe4f6b&&(_0xe4f6b=new ConnectFourGame(),Maher_Zubair_CFG_GAME[_0x377c47]=_0xe4f6b);try{let _0x326aed='';_0x25e922[_0x56574c(0xb2)]&&(_0x326aed=_0x25e922[_0x56574c(0xb2)][_0x56574c(0xab)]);let _0x146aeb=_0x25e922[_0x56574c(0xb2)]?_0x25e922[_0x56574c(0xb2)][_0x56574c(0xab)]:_0x25e922[_0x56574c(0xa4)]?_0x25e922['mentionedJid'][0x0]:'-';_0x146aeb=_0x146aeb===_0x25e922[_0x56574c(0xab)]?'-':''+_0x146aeb;if(_0x146aeb[_0x56574c(0xd9)]('@'))_0xe4f6b[_0x56574c(0xca)]=_0x25e922[_0x56574c(0xab)],_0xe4f6b[_0x56574c(0xd8)]=_0x146aeb,_0xe4f6b[_0x56574c(0xb4)]=!![];else{if(!_0xe4f6b[_0x56574c(0xca)]||_0xe4f6b[_0x56574c(0xca)]===_0x25e922['sender'])return _0xe4f6b[_0x56574c(0xca)]=_0x25e922[_0x56574c(0xab)],await _0x25e922[_0x56574c(0xcf)]('▄▀▀\x20▄▀▄\x20█▄\x20█\x20█▄\x20█\x20▄▀▀\x20▀█▀\x20\x0a▀▄▄\x20▀▄▀\x20█\x20▀█\x20█\x20▀█\x20▀▄▄\x20\x20\x20\x20█\x0a\x20\x20\x20𝗖𝗼𝗻𝗻𝗲𝗰𝘁\x20𝗙𝗼𝘂𝗿\x20𝗚𝗮𝗺𝗲\x20𝗦𝗲𝘀𝘀𝗶𝗼𝗻\x20\x0a*Connect\x20Four\x20Game\x20Session\x20Created...*\x0a*room\x20Id\x20:\x20_cfg-'+_0x377c47[_0x56574c(0xb5)]('@')[0x0]+_0x56574c(0xb9)+_0xe4f6b[_0x56574c(0xca)]['split']('@')[0x0]+_0x56574c(0xd7),{'mentions':[_0xe4f6b['player1']]});else _0x25e922[_0x56574c(0xab)]!=_0xe4f6b['player1']&&(_0xe4f6b['player2']=_0x25e922[_0x56574c(0xab)],_0xe4f6b[_0x56574c(0xb4)]=!![]);}}catch(_0xe65ea7){await _0x25e922[_0x56574c(0xc9)](_0x56574c(0xc7)+_0xe65ea7);}if(_0xe4f6b[_0x56574c(0xb4)]){_0xe4f6b[_0x56574c(0xc8)]=_0xe4f6b[_0x56574c(0xca)],_0xe4f6b[_0x56574c(0xc0)][_0xe4f6b['player1']]=0x0,_0xe4f6b['attempts'][_0xe4f6b[_0x56574c(0xd8)]]=0x0;let _0x5407ac=await _0xe4f6b[_0x56574c(0xdc)](),_0x15290d=_0x56574c(0xc4)+_0x5407ac+_0x56574c(0xad)+_0x377c47['split']('@')[0x0]+_0x56574c(0xb7)+_0xe4f6b[_0x56574c(0xca)][_0x56574c(0xb5)]('@')[0x0]+_0x56574c(0xda)+_0xe4f6b[_0x56574c(0xd8)][_0x56574c(0xb5)]('@')[0x0]+_0x56574c(0xb1)+_0xe4f6b['currentPlayer']['split']('@')[0x0]+_0x56574c(0xc6)+quotes[Math[_0x56574c(0xbe)](Math[_0x56574c(0xdf)]()*quotes[_0x56574c(0xba)])]+'_*\x0a\x0a';return await _0x25e922[_0x56574c(0xcf)](_0x15290d,{'mentions':[_0xe4f6b['player1'],_0xe4f6b[_0x56574c(0xd8)],_0xe4f6b['currentPlayer']]});}}),cmd({'kingcmd':'delcfg','infocmd':_0x2dcdaa(0xd3),'filename':__filename,'kingclass':_0x2dcdaa(0xc2)},async(_0x317f5a,_0x2ba9b5,_0x21e97b)=>{const _0x2b9610=_0x2dcdaa,_0xe7a512=_0x2ba9b5[_0x2b9610(0xa9)];let _0x366664=Maher_Zubair_CFG_GAME[_0xe7a512];if(_0x366664)return delete Maher_Zubair_CFG_GAME[_0xe7a512],await _0x2ba9b5[_0x2b9610(0xc9)]('▄▀▀\x20▄▀▄\x20█▄\x20█\x20█▄\x20█\x20▄▀▀\x20▀█▀\x20\x0a▀▄▄\x20▀▄▀\x20█\x20▀█\x20█\x20▀█\x20▀▄▄\x20\x20\x20\x20█\x0a\x20\x20\x20𝗖𝗼𝗻𝗻𝗲𝗰𝘁\x20𝗙𝗼𝘂𝗿\x20𝗚𝗮𝗺𝗲\x20𝗗𝗲𝗹𝗲𝘁𝗲𝗱\x20\x20\x0a*Room\x20Id\x20:\x20_cfg-'+_0xe7a512[_0x2b9610(0xb5)]('@')[0x0]+_0x2b9610(0xb6));else return await _0x2ba9b5['reply'](_0x2b9610(0xbd));}),cmd({'on':_0x2dcdaa(0xae)},async(_0x56e801,_0x5e02e7,_0x823010,{isCreator:_0x216180})=>{const _0x5cc5ce=_0x2dcdaa,_0x156449=_0x5e02e7[_0x5cc5ce(0xa9)],_0x38a990=Maher_Zubair_CFG_GAME[_0x156449];if(!_0x38a990)return;let _0x2ab18c=parseInt(_0x5e02e7[_0x5cc5ce(0xae)]?_0x5e02e7[_0x5cc5ce(0xae)][_0x5cc5ce(0xb5)]('\x20')[0x0]:0x7d0);if(_0x38a990[_0x5cc5ce(0xb4)]&&_0x38a990[_0x5cc5ce(0xc8)]===_0x5e02e7[_0x5cc5ce(0xab)]&&!isNaN(_0x2ab18c))try{let _0x401003=_0x2ab18c-0x1;if(_0x401003<0x0||_0x401003>=_0x38a990['columnsMatrix'])return;let _0x4b2be9=await _0x38a990['updateLastIndex'](_0x401003);if(!_0x4b2be9)return console['log'](_0x5cc5ce(0xd6),_0x4b2be9),await _0x56e801[_0x5cc5ce(0xc5)](_0x5e02e7[_0x5cc5ce(0xa9)],{'text':_0x5cc5ce(0xa5)+_0x38a990['currentPlayer'][_0x5cc5ce(0xb5)]('@')[0x0]+',\x20Line\x20you\x20enter\x20is\x20completely\x20Filled.\x20Please\x20Give\x20Other\x20Line\x20Numbers._*','mentions':[_0x38a990[_0x5cc5ce(0xc8)]]},{'quoted':_0x5e02e7});let _0x53c2e7=await _0x38a990[_0x5cc5ce(0xe5)]()||![];_0x38a990['attempts'][_0x38a990[_0x5cc5ce(0xc8)]]++;let _0x515a4d=await _0x38a990[_0x5cc5ce(0xdc)]();_0x38a990[_0x5cc5ce(0xc8)]=_0x38a990['currentPlayer']===_0x38a990[_0x5cc5ce(0xca)]?_0x38a990['player2']:_0x38a990['player1'];if(!_0x53c2e7){let _0x4f46a5=_0x5cc5ce(0xa7)+_0x515a4d+_0x5cc5ce(0xbb)+(_0x38a990[_0x5cc5ce(0xc8)]===_0x38a990[_0x5cc5ce(0xca)]?'🔵':'🔴')+_0x5cc5ce(0xe2)+_0x38a990[_0x5cc5ce(0xc8)]['split']('@')[0x0]+_0x5cc5ce(0xde)+(_0x38a990[_0x5cc5ce(0xc8)]===_0x38a990[_0x5cc5ce(0xca)]?'🔴':'🔵')+_0x5cc5ce(0xe2)+(_0x38a990[_0x5cc5ce(0xc8)]===_0x38a990[_0x5cc5ce(0xca)]?_0x38a990['player2']:_0x38a990[_0x5cc5ce(0xca)])['split']('@')[0x0]+_0x5cc5ce(0xe3)+quotes[Math['floor'](Math[_0x5cc5ce(0xdf)]()*quotes[_0x5cc5ce(0xba)])]+'_\x0a';return await _0x5e02e7['send'](_0x4f46a5,{'mentions':[_0x38a990['player1'],_0x38a990[_0x5cc5ce(0xd8)]]});}else return delete Maher_Zubair_CFG_GAME[_0x156449],await _0x5e02e7['send'](_0x5cc5ce(0xbc)+_0x53c2e7[_0x5cc5ce(0xb5)]('@')[0x0]+_0x5cc5ce(0xdb)+_0x38a990[_0x5cc5ce(0xc8)][_0x5cc5ce(0xb5)]('@')[0x0]+_0x5cc5ce(0xdd)+_0x515a4d+_0x5cc5ce(0xc3)+_0x53c2e7[_0x5cc5ce(0xb5)]('@')[0x0]+_0x5cc5ce(0xd5)+_0x38a990[_0x5cc5ce(0xc0)][_0x53c2e7]+_0x5cc5ce(0xe4),{'mentions':[_0x38a990['player1'],_0x38a990['player2']]});}catch(_0x44a3e3){return await console[_0x5cc5ce(0xcb)](_0x5cc5ce(0xaa),_0x44a3e3);}});





const countries = {
  "Afghanistan": "Kabul",
  "Albania": "Tirana",
  "Algeria": "Algiers",
  "Andorra": "Andorra",
  "Angola": "Luanda",
  "Argentina": "Buenos Aires",
  "Armenia": "Yerevan",
  "Australia": "Canberra",
  "Austria": "Vienna",
  "Azerbaijan": "Baku",
  "Bahamas": "Nassau",
  "Bahrain": "Manama",
  "Bangladesh": "Dhaka",
  "Barbados": "Bridgetown",
  "Belarus": "Minsk",
  "Belgium": "Brussels",
  "Belize": "Belmopan",
  "Benin": "Porto-Novo",
  "Bhutan": "Thimphu",
  "Bolivia": "Sucre",
  "Bosnia and Herzegovina": "Sarajevo",
  "Botswana": "Gaborone",
  "Brazil": "Brasília",
  "Brunei": "Bandar Seri Begawan",
  "Bulgaria": "Sofia",
  "Burkina Faso": "Ouagadougou",
  "Burundi": "Gitega",
  "Cabo Verde": "Praia",
  "Cambodia": "Phnom Penh",
  "Cameroon": "Yaoundé",
  "Canada": "Ottawa",
  "Central African Republic": "Bangui",
  "Chad": "N'Djamena",
  "Chile": "Santiago",
  "China": "Beijing",
  "Colombia": "Bogotá",
  "Comoros": "Moroni",
  "Congo, Democratic Republic of the": "Kinshasa",
  "Congo, Republic of the": "Brazzaville",
  "Costa Rica": "San José",
  "Cote d'Ivoire": "Yamoussoukro",
  "Croatia": "Zagreb",
  "Cuba": "Havana",
  "Cyprus": "Nicosia",
  "Czech Republic": "Prague",
  "Denmark": "Copenhagen",
  "Djibouti": "Djibouti",
  "Dominica": "Roseau",
  "Dominican Republic": "Santo Domingo",
  "Ecuador": "Quito",
  "Egypt": "Cairo",
  "El Salvador": "San Salvador",
  "Equatorial Guinea": "Malabo",
  "Eritrea": "Asmara",
  "Estonia": "Tallinn",
  "Eswatini": "Mbabane",
  "Ethiopia": "Addis Ababa",
  "Fiji": "Suva",
  "Finland": "Helsinki",
  "France": "Paris",
  "Gabon": "Libreville",
  "Gambia": "Banjul",
  "Georgia": "Tbilisi",
  "Germany": "Berlin",
  "Ghana": "Accra",
  "Greece": "Athens",
  "Guatemala": "Guatemala City",
  "Guinea": "Conakry",
  "Guinea-Bissau": "Bissau",
  "Guyana": "Georgetown",
  "Haiti": "Port-au-Prince",
  "Honduras": "Tegucigalpa",
  "Hungary": "Budapest",
  "Iceland": "Reykjavik",
  "India": "New Delhi",
  "Indonesia": "Jakarta",
  "Iran": "Tehran",
  "Iraq": "Baghdad",
  "Ireland": "Dublin",
  "Israel": "Jerusalem",
  "Italy": "Rome",
  "Jamaica": "Kingston",
  "Japan": "Tokyo",
  "Jordan": "Amman",
  "Kazakhstan": "Nur Sultan",
  "Kenya": "Nairobi",
  "Kiribati": "Tarawa",
  "Korea, North": "Pyongyang",
  "Korea, South": "Seoul",
  "Kosovo": "Pristina",
  "Kuwait": "Kuwait City",
  "Kyrgyzstan": "Bishkek",
  "Laos": "Vientiane",
  "Latvia": "Riga",
  "Lebanon": "Beirut",
  "Lesotho": "Maseru",
  "Liberia": "Monrovia",
  "Libya": "Tripoli",
  "Liechtenstein": "Vaduz",
  "Lithuania": "Vilnius",
  "Luxembourg": "Luxembourg City",
  "Madagascar": "Antananarivo",
  "Malawi": "Lilongwe",
  "Malaysia": "Kuala Lumpur",
  "Maldives": "Male",
  "Mali": "Bamako",
  "Malta": "Valletta",
  "Marshall Islands": "Majuro",
  "Mauritania": "Nouakchott",
  "Mauritius": "Port Louis",
  "Mexico": "Mexico City",
  "Micronesia": "Palikir",
  "Moldova": "Chisinau",
  "Monaco": "Monaco",
  "Mongolia": "Ulaanbaatar",
  "Montenegro": "Podgorica",
  "Morocco": "Rabat",
  "Mozambique": "Maputo",
  "Myanmar": "Naypyidaw",
  "Namibia": "Windhoek",
  "Nauru": "Yaren",
  "Nepal": "Kathmandu",
  "Netherlands": "Amsterdam",
  "New Zealand": "Wellington",
  "Nicaragua": "Managua",
  "Niger": "Niamey",
  "Nigeria": "Abuja",
  "North Macedonia": "Skopje",
  "Norway": "Oslo",
  "Oman": "Muscat",
  "Pakistan": "Islamabad",
  "Palau": "Ngerulmud",
  "Palestine": "Ramallah",
  "Panama": "Panama City",
  "Paraguay": "Asunción",
  "Peru": "Lima",
  "Philippines": "Manila",
  "Poland": "Warsaw",
  "Portugal": "Lisbon",
  "Qatar": "Doha",
  "Romania": "Bucharest",
  "Russia": "Moscow",
  "Rwanda": "Kigali",
  "Saint Kitts": "Basseterre",
  "Saint Lucia": "Castries",
  "Samoa": "Apia",
  "San Marino": "San Marino",
  "Saudi Arabia": "Riyadh",
  "Senegal": "Dakar",
  "Serbia": "Belgrade",
  "Seychelles": "Victoria",
  "Sierra Leone": "Freetown",
  "Singapore": "Singapore",
  "Slovakia": "Bratislava",
  "Slovenia": "Ljubljana",
  "Solomon Islands": "Honiara",
  "Somalia": "Mogadishu",
  "South Africa": "Pretoria",
  "South Sudan": "Juba",
  "Spain": "Madrid",
  "Sri Lanka": "Colombo",
  "Sudan": "Khartoum",
  "Suriname": "Paramaribo",
  "Sweden": "Stockholm",
  "Switzerland": "Bern",
  "Syria": "Damascus",
  "Taiwan": "Taipei",
  "Tajikistan": "Dushanbe",
  "Tanzania": "Dodoma",
  "Thailand": "Bangkok",
  "Timor-Leste": "Dili",
  "Togo": "Lome",
  "Tonga": "Nuku'alofa",
  "Trinidad and Tobago": "Port of Spain",
  "Tunisia": "Tunis",
  "Turkey": "Ankara",
  "Turkmenistan": "Ashgabat",
  "Tuvalu": "Funafuti",
  "Uganda": "Kampala",
  "Ukraine": "Kyiv",
  "United Arab Emirates": "Abu Dhabi",
  "United Kingdom": "London",
  "United States": "Washington",
  "Uruguay": "Montevideo",
  "Uzbekistan": "Tashkent",
  "Vanuatu": "Port Vila",
  "Vatican": "Vatican City",
  "Venezuela": "Caracas",
  "Vietnam": "Hanoi",
  "Yemen": "Sana'a",
  "Zambia": "Lusaka",
  "Zimbabwe": "Harare"
};




 const eco = require('discord-mongoose-economy')
 const ty = eco.connect(mongodb);







let captions = {
  waitTime:30,
  winReward:2000,
  onStart :`*Capital Finding Game Started*\n*𝙿𝙻𝙰𝚈𝙴𝚁* _@$player_\n*𝚃𝙰𝚂𝙺*\n _Tell the Capital of *$country*_\n\n_Your Time Starts Now, You Have $waitTime seconds to Answer_`,
  onTimeOut:`*Game Over, run out of time*\n\n*𝙿𝙻𝙰𝚈𝙴𝚁* _@$player_\n*𝚁𝙴𝙰𝚂𝙾𝙽* _TimeOut!, You didn't respond in Time_\n\n*𝙰𝙽𝚂𝚆𝙴𝚁*\n The Capital of *$country* is *$capital*`,
  onLimitEnd:`*Game Over, Attempts limit Exceeded*\n\n*𝙿𝙻𝙰𝚈𝙴𝚁* _@$player_\n*𝚁𝙴𝙰𝚂𝙾𝙽* _Not responded right answer in 3 attemps_\n\n*𝙰𝙽𝚂𝚆𝙴𝚁*\n The Capital of *$country* is *$capital*`,
  onWrongAns:`*_Idiot Your answer is not correct_*\n\n*𝙿𝙻𝙰𝚈𝙴𝚁* _@$player_\n_You have *$attempt more attempt!*_\n\n*You have $waitTime seconds to answer!*`,
  onWinGame:`*_Superb, Your Answer is Correct_*\n*𝙿𝙻𝙰𝚈𝙴𝚁* _@$player_\n\n_Capital of *$country* is *$capital*._\n_You give right answer in *$attempt Attempt*_\n_$amount cash added in your wallet_`
  
  }


 




const _0x4ca740=_0x553e;(function(_0x287f66,_0x3144a8){const _0x142619=_0x553e,_0x4d5457=_0x287f66();while(!![]){try{const _0x4dc212=-parseInt(_0x142619(0x134))/0x1+parseInt(_0x142619(0x115))/0x2+parseInt(_0x142619(0x122))/0x3*(parseInt(_0x142619(0x11f))/0x4)+-parseInt(_0x142619(0x136))/0x5*(parseInt(_0x142619(0x129))/0x6)+parseInt(_0x142619(0x139))/0x7*(-parseInt(_0x142619(0x11a))/0x8)+parseInt(_0x142619(0x138))/0x9*(-parseInt(_0x142619(0x111))/0xa)+parseInt(_0x142619(0x123))/0xb;if(_0x4dc212===_0x3144a8)break;else _0x4d5457['push'](_0x4d5457['shift']());}catch(_0x405e2e){_0x4d5457['push'](_0x4d5457['shift']());}}}(_0x83c9,0xc5e8d));let Maher_Zubair_Capital_Game
={'id':'','player':'','country':'','capital':'','attempts':0x0,'waitTime':0x14,'preAns':'previousAnswer','timer':''};async function timerFuntions(_0x3db299,_0x38c08a,_0x43968a){const _0x419e86=_0x553e;await _0x3db299['sendMessage'](_0x38c08a['chat'],{'text':captions['onTimeOut']['replace'](_0x419e86(0x110),_0x43968a[_0x419e86(0x112)][_0x419e86(0x11b)]('@')[0x0])[_0x419e86(0x12d)]('$country',_0x43968a[_0x419e86(0x12c)])[_0x419e86(0x12d)](_0x419e86(0x130),_0x43968a[_0x419e86(0x116)]),'mentions':[_0x43968a[_0x419e86(0x112)]]}),delete Maher_Zubair_Capital_Game
[_0x38c08a[_0x419e86(0x113)]];return;}function _0x553e(_0x1b524e,_0x245a8f){const _0x83c932=_0x83c9();return _0x553e=function(_0x553ed0,_0x6b6281){_0x553ed0=_0x553ed0-0x110;let _0x54ecba=_0x83c932[_0x553ed0];return _0x54ecba;},_0x553e(_0x1b524e,_0x245a8f);}Module_Exports({'kingcmd':'cg','infocmd':'Capital Finding Game','kingclass':'game','filename':__filename},async(_0x2e61f0,_0x5b7076,_0x3401ae)=>{const _0x117aa8=_0x4ca740,_0x50ae30=Object[_0x117aa8(0x125)](countries);let _0x344fa5=_0x50ae30[Math[_0x117aa8(0x132)](Math[_0x117aa8(0x12b)]()*_0x50ae30['length'])],_0x5009ee=countries[_0x344fa5];console[_0x117aa8(0x121)]('capital\x20:\x20',_0x5009ee);!Maher_Zubair_Capital_Game
[_0x5b7076[_0x117aa8(0x113)]]&&(Maher_Zubair_Capital_Game
  [_0x5b7076[_0x117aa8(0x113)]]={'id':_0x5b7076['chat'],'player':_0x5b7076[_0x117aa8(0x113)],'country':_0x344fa5,'capital':_0x5009ee,'attempts':0x0,'waitTime':captions[_0x117aa8(0x135)],'preAns':_0x5b7076[_0x117aa8(0x119)],'timer':''});let _0x4c422d=Maher_Zubair_Capital_Game
[_0x5b7076['sender']];await _0x2e61f0[_0x117aa8(0x11d)](_0x5b7076[_0x117aa8(0x131)],{'text':captions[_0x117aa8(0x120)][_0x117aa8(0x12d)](_0x117aa8(0x110),_0x4c422d[_0x117aa8(0x112)][_0x117aa8(0x11b)]('@')[0x0])['replace'](_0x117aa8(0x117),_0x4c422d[_0x117aa8(0x12c)])['replace'](_0x117aa8(0x126),_0x4c422d[_0x117aa8(0x135)]),'mentions':[_0x4c422d[_0x117aa8(0x112)]]}),_0x4c422d[_0x117aa8(0x137)]=setTimeout(()=>{timerFuntions(_0x2e61f0,_0x5b7076,_0x4c422d);},_0x4c422d[_0x117aa8(0x135)]*0x3e8);}),cmd({'on':_0x4ca740(0x119)},async(_0x1d1f4c,_0x941af5,_0x3253ed)=>{const _0x146d63=_0x4ca740,_0x2d49e7=Maher_Zubair_Capital_Game
  [_0x941af5[_0x146d63(0x113)]];if(!_0x2d49e7)return;if(_0x2d49e7['id']===_0x941af5[_0x146d63(0x131)]&&_0x2d49e7['player']===_0x941af5[_0x146d63(0x113)]&&_0x2d49e7[_0x146d63(0x128)]!==_0x941af5['text']&&!_0x941af5['isBaileys']){_0x2d49e7[_0x146d63(0x118)]+=0x1,clearTimeout(_0x2d49e7[_0x146d63(0x137)]),_0x2d49e7[_0x146d63(0x128)]=_0x941af5[_0x146d63(0x119)];if(_0x941af5[_0x146d63(0x119)][_0x146d63(0x133)]()===_0x2d49e7[_0x146d63(0x116)][_0x146d63(0x133)]())await eco[_0x146d63(0x12e)](_0x941af5[_0x146d63(0x113)],_0x146d63(0x12a),captions[_0x146d63(0x13a)]),await _0x1d1f4c[_0x146d63(0x11d)](_0x941af5[_0x146d63(0x131)],{'text':captions[_0x146d63(0x12f)][_0x146d63(0x12d)](_0x146d63(0x110),_0x2d49e7['player'][_0x146d63(0x11b)]('@')[0x0])[_0x146d63(0x12d)](_0x146d63(0x117),_0x2d49e7[_0x146d63(0x12c)])[_0x146d63(0x12d)](_0x146d63(0x130),_0x2d49e7[_0x146d63(0x116)])[_0x146d63(0x12d)]('$amount',''+captions[_0x146d63(0x13a)])['replace']('$attempt',''+_0x2d49e7[_0x146d63(0x118)]),'mentions':[_0x2d49e7[_0x146d63(0x112)]]}),delete Maher_Zubair_Capital_Game
[_0x941af5[_0x146d63(0x113)]];else{if(_0x2d49e7['attempts']<=0x3)await _0x1d1f4c[_0x146d63(0x11d)](_0x941af5['chat'],{'text':captions[_0x146d63(0x127)][_0x146d63(0x12d)]('$player',_0x2d49e7[_0x146d63(0x112)][_0x146d63(0x11b)]('@')[0x0])[_0x146d63(0x12d)](_0x146d63(0x114),''+(0x3-_0x2d49e7['attempts']))[_0x146d63(0x12d)](_0x146d63(0x126),_0x2d49e7[_0x146d63(0x135)]),'mentions':[_0x2d49e7['player']]}),_0x2d49e7[_0x146d63(0x137)]=setTimeout(()=>{timerFuntions(_0x1d1f4c,_0x941af5,_0x2d49e7);},_0x2d49e7[_0x146d63(0x135)]*0x3e8);else _0x2d49e7[_0x146d63(0x118)]>0x3&&(await _0x1d1f4c['sendMessage'](_0x941af5['chat'],{'text':captions[_0x146d63(0x11c)]['replace']('$player',_0x2d49e7['player'][_0x146d63(0x11b)]('@')[0x0])[_0x146d63(0x12d)](_0x146d63(0x117),_0x2d49e7[_0x146d63(0x12c)])[_0x146d63(0x12d)]('$capital',_0x2d49e7[_0x146d63(0x116)]),'mentions':[_0x2d49e7[_0x146d63(0x112)]]}),delete Maher_Zubair_Capital_Game
[_0x941af5['sender']]);}}});function _0x83c9(){const _0x3be925=['fun','4fJOYYo','onStart','log','644829XWjaRv','2008897tgiGsl','Random\x20Question.','keys','$waitTime','onWrongAns','preAns','3096VlaObQ','secktor','random','country','replace','daily','onWinGame','$capital','chat','floor','toLowerCase','358623jOFfpI','waitTime','790RNGvRz','timer','11574hdeUeC','1776761xnedhq','winReward','$player','1690WQEDkf','player','sender','$attempt','2648750YmzyOs','capital','$country','attempts','text','8UPfhSa','split','onLimitEnd','sendMessage'];_0x83c9=function(){return _0x3be925;};return _0x83c9();}

// These Games Are Developed By @Astropeda
// Whatsapp +2348039607375
// Usage And CopyRights Are Reserved