//-----------------------------------------------------------------------------------
const Config = require('../config')
let { tiny,  prefix,  cmd,  getBuffer  } = require("../lib");
//========================================================================================================
async function singleText(Void, citel , url = '' , text1 , text2 ){
    const _0x369e3b=_0x5b0f;(function(_0x243142,_0x573730){const _0x2c040a=_0x5b0f,_0x49c469=_0x243142();while(!![]){try{const _0x23b873=-parseInt(_0x2c040a(0x1aa))/0x1+parseInt(_0x2c040a(0x1a3))/0x2+-parseInt(_0x2c040a(0x1a7))/0x3*(parseInt(_0x2c040a(0x1a4))/0x4)+parseInt(_0x2c040a(0x1a9))/0x5+-parseInt(_0x2c040a(0x19f))/0x6*(parseInt(_0x2c040a(0x1a1))/0x7)+parseInt(_0x2c040a(0x1a6))/0x8*(parseInt(_0x2c040a(0x1a5))/0x9)+-parseInt(_0x2c040a(0x19c))/0xa;if(_0x23b873===_0x573730)break;else _0x49c469['push'](_0x49c469['shift']());}catch(_0x473a48){_0x49c469['push'](_0x49c469['shift']());}}}(_0xb69c,0x7c465));function _0xb69c(){const _0x4d1386=['mumaker','*_Error\x20while\x20Generating\x20Your\x20Photo_*','65330cKdpnt','.html','error\x20For\x20TextPro\x20:\x20','29586xxrpiu','https://textpro.me/','119TGEesl','caption','1450616vOHMzo','1644RZJhcL','6105816IoLRZZ','8SAfiCS','2802NxQUUH','log','309735ebjXle','482416jsInja','textpro'];_0xb69c=function(){return _0x4d1386;};return _0xb69c();}const maker=require(_0x369e3b(0x19a));function _0x5b0f(_0x3d9a0c,_0x1d2daf){const _0xb69caa=_0xb69c();return _0x5b0f=function(_0x5b0feb,_0x14d3ff){_0x5b0feb=_0x5b0feb-0x19a;let _0x240a04=_0xb69caa[_0x5b0feb];return _0x240a04;},_0x5b0f(_0x3d9a0c,_0x1d2daf);}try{let anu,urlss=_0x369e3b(0x1a0)+url+_0x369e3b(0x19d);if(text1&&!text2)anu=await maker[_0x369e3b(0x1ab)](urlss,text1);else text1&&text2&&(anu=await maker[_0x369e3b(0x1ab)](urlss,[text1,text2]));return await Void['sendMessage'](citel['chat'],{'image':{'url':anu['image']},'caption':Config[_0x369e3b(0x1a2)]},{'quoted':citel});}catch(_0x450f19){return console[_0x369e3b(0x1a8)](_0x369e3b(0x19e),_0x450f19),await citel['send'](_0x369e3b(0x19b));}
}
//========================================================================================================

//-----------------------------------------------------------------------------------
cmd({ pattern: "slice", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('*_Example : .slice Suhail Tech_*');
        return await singleText(Void, citel , 'create-light-glow-sliced-text-effect-online-1068' , text )
    })
//-----------------------------------------------------------------------------------
cmd({ pattern: "glow", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('*_Example : .glow Suhail Tech_*');
        return await singleText(Void, citel , 'free-advanced-glow-text-effect-873' , text )
    })
//----------------------------------------------------------------------------------- 
cmd({ pattern: "gitch1", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('*_Example : .gitch1 Suhail Tech_*');
        return await singleText(Void, citel , 'create-impressive-glitch-text-effects-online-1027' , text )        
    }) 
//---------------------------------------------------------------------------
//================================================================================================================================
cmd({ pattern: "stel",alias:['steal'],category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Example : .steel suhail;tech info_');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .stel text1;text2*");
            return await singleText(Void, citel , '3d-steel-text-effect-877' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "avenger",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .avenger suhail;tech_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .avenger text1;text2*");
            return await singleText(Void, citel ,'create-3d-avengers-logo-online-974' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "marvel",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .marvel suhail;tech_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .marvel text1;text2*");
            return await singleText(Void, citel , 'create-logo-style-marvel-studios-ver-metal-972' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "phub",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .phub suhail;tech_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .phub text1;text2*");
            return await singleText(Void, citel , 'pornhub-style-logo-online-generator-free-977' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------

cmd({ pattern: "glitch",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .glitch suhail;tech_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .glitch text1;text2*");
            return await singleText(Void, citel ,'create-glitch-text-effect-style-tik-tok-983', text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "glitch2",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .glitch2 suhail;tech_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .glitch2 text1;text2*");
            return await singleText(Void, citel , 'create-a-glitch-text-effect-online-free-1026' , text1 , text2 )
        })
//-----------------------------------------------------------------------------------
cmd({ pattern: "grafiti",category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('*_Example : .grafiti suhail;tech_*');  
            let text1 = text ? text.split(';')[0] : '';
            let text2 = text ? text.split(';')[1] : '';
            if(!text2 || !text1) return await citel.reply("*Uhh Please Provide text. Example: .grafiti text1;text2*");
            return await singleText(Void, citel ,'create-a-cool-graffiti-text-on-the-wall-1010'  , text1 , text2 )
        })
//================================================================================================================================
    //---------------------------------------------------------------------------
    cmd({ pattern: "deepsea", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , 'create-3d-deep-sea-metal-text-effect-online-1053' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "horror", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel ,'horror-blood-text-effect-online-883'  , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "whitebear", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel ,'online-black-and-white-bear-mascot-logo-creation-1012', text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "joker", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , 'create-logo-joker-online-934' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "metallic", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , 'create-a-metallic-text-effect-free-online-1041' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "steel", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , 'steel-text-effect-online-921' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "harrypotter", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , 'create-harry-potter-text-effect-online-1025' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "underwater", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , '3d-underwater-text-effect-generator-online-1013' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "luxury", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , '3d-luxury-gold-text-effect-online-1003' , text )

    })
    //---------------------------------------------------------------------------
cmd({ pattern: "glue", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , 'create-3d-glue-text-effect-with-realistic-style-986' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "fabric", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , 'fabric-text-effect-online-964' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "toxic", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , 'toxic-text-effect-online-901' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "ancient", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , '3d-golden-ancient-text-effect-online-free-1060' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "cloud", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel , 'create-a-cloud-text-effect-on-the-sky-online-1004' , text )
    })
    //---------------------------------------------------------------------------
cmd({ pattern: "transformer", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel , 'create-a-transformer-text-effect-online-1035' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "thunder", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel ,'online-thunder-text-effect-generator-1031'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "scifi", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel , 'create-3d-sci-fi-text-effect-online-1050' , text )
        })
    //---------------------------------------------------------------------------
cmd({pattern: "sand", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel ,'write-in-sand-summer-beach-free-online-991'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "rainbow", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel , '3d-rainbow-color-calligraphy-text-effect-1049' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "pencil", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel , 'create-a-sketch-text-effect-online-1044' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "neon", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel , 'create-3d-neon-light-text-effect-online-1028' , text )
        })
    //---------------------------------------------------------------------------
cmd({pattern: "magma", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel ,'create-a-magma-hot-text-effect-online-1030'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "leaves", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel , 'natural-leaves-text-effect-931' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "glitch", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel , 'create-impressive-glitch-text-effects-online-1027' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "discovery", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel , 'create-space-text-effects-online-free-1042' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "christmas", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel ,'christmas-tree-text-effect-online-free-1057'  , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "candy", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel , 'create-christmas-candy-cane-text-effect-1056' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "1917", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
            if (!text) return citel.reply('_Need text._')
            return await singleText(Void, citel , '1917-style-text-effect-online-980' , text )
        })
    //---------------------------------------------------------------------------
cmd({ pattern: "blackpink", category: "logo", desc: "Some text to image feature with various styles.",filename: __filename, }, async(Void, citel, text) => {
        if (!text) return citel.reply('_Need text._')
        return await singleText(Void, citel , 'create-blackpink-logo-style-online-1001' , text )
    })