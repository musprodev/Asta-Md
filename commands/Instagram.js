const { Insta,cmd , Config , prefix } = require('../lib')
cmd({
        pattern: "insta",
        alias  : ['instagram'],
        desc: "download instagram post.",
        category: "downloader",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.send('Need insta post url.')
let response = await Insta(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[i], `*Downloaded Media from instagram.*` +  Config.caption, citel)
}
    });
//----------------------------------------------------------------------------------
cmd({
    pattern: "ig",
    desc: "Downloads Instagram videos.",
    category: "downloader",
    filename: __filename,
    use: '<add fb url.>'
},
async(Void, citel, text) => {

    const _0x3eaed3=_0x2fc8;function _0x2fc8(_0x46c011,_0x4704d1){const _0x1c0fdd=_0x1c0f();return _0x2fc8=function(_0x2fc810,_0x1f1117){_0x2fc810=_0x2fc810-0xc7;let _0x2c4f64=_0x1c0fdd[_0x2fc810];return _0x2c4f64;},_0x2fc8(_0x46c011,_0x4704d1);}(function(_0x362fdc,_0x1e931f){const _0x5a6eee=_0x2fc8,_0x51fa0d=_0x362fdc();while(!![]){try{const _0x410042=-parseInt(_0x5a6eee(0xce))/0x1+-parseInt(_0x5a6eee(0xd1))/0x2*(parseInt(_0x5a6eee(0xcc))/0x3)+parseInt(_0x5a6eee(0xcb))/0x4*(-parseInt(_0x5a6eee(0xc8))/0x5)+parseInt(_0x5a6eee(0xd8))/0x6*(-parseInt(_0x5a6eee(0xd7))/0x7)+parseInt(_0x5a6eee(0xda))/0x8*(-parseInt(_0x5a6eee(0xcf))/0x9)+-parseInt(_0x5a6eee(0xca))/0xa*(-parseInt(_0x5a6eee(0xc7))/0xb)+parseInt(_0x5a6eee(0xcd))/0xc;if(_0x410042===_0x1e931f)break;else _0x51fa0d['push'](_0x51fa0d['shift']());}catch(_0x3a93da){_0x51fa0d['push'](_0x51fa0d['shift']());}}}(_0x1c0f,0xdfe1c));try{const mumaker=require(_0x3eaed3(0xd2));if(!text||!text[_0x3eaed3(0xd3)]()['startsWith'](_0x3eaed3(0xd6)))return await citel[_0x3eaed3(0xd4)]('*Provide\x20insta\x20video\x20url,\x20Dear*');let insta=await mumaker['instagram'](text);citel[_0x3eaed3(0xd4)](insta[0x0],{'caption':Config[_0x3eaed3(0xd9)]},_0x3eaed3(0xc9));}catch(_0x4afabe){return console[_0x3eaed3(0xd0)](_0x3eaed3(0xd5),_0x4afabe),await citel['send']('*Error,\x20Video\x20Not\x20Found*');}function _0x1c0f(){const _0x3b8b4b=['60ecnNyI','638692fTPnqh','2724441YlMcEA','70731372wkRxRO','589600rAnvEo','117uGYxvo','log','4LthHhR','mumaker','toLowerCase','send','insta\x20err:\x20','https://','17437mjPthd','2004QkHdzS','caption','900488VjbtKp','79321zSEKOh','10atfvie','image'];_0x1c0f=function(){return _0x3b8b4b;};return _0x1c0f();}


})

//---------------------------------------------------------------------------