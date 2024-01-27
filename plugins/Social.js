const {Module_Exports , name , prefix,getBuffer,tlang,fetchJson } = require('../lib')
const fetch = require('node-fetch');
const bocil = require('@bochilteam/scraper');
const cheerio = require('cheerio')
const axios= require('axios');

Module_Exports({
    kingcmd: "ydesc",
    infocmd: "Gives descriptive info of query from youtube..",
    kingclass: "downloader",
    filename: __filename,
    use: '<yt search text>',
},
async(Void, citel, text) => {
    let yts = require("secktor-pack");
    if (!text) return citel.reply(`Example : ${prefix}yts ${tlang().title} WhatsApp Bot`);
    let search = await yts(text);
    let textt = "*YouTube Search*\n\n Result From " + text + "\n\n───────────────────\n";
    let no = 1;
    for (let i of search.all) {
        textt += `⚡ No : ${no++}\n ❤Title : ${i.title}\n♫ Type : ${
  i.type
}\n👾Views : ${i.views}\n⌛Duration : ${
  i.timestamp
}\n⬆️Upload At : ${i.ago}\n👑Author : ${i.author.name}\n🎵Url : ${
  i.url
}\n\n──────────────\n\n`;
    }
    return Void.sendMessage(citel.chat, {
        image: {
            url: search.all[0].thumbnail,
        },
        caption: textt,
    }, {
        quoted: citel,
    });
}
)

//--
Module_Exports({
    kingcmd: 'fb',
    shortcut:'facebook',
    fromMe: false,
    kingclass:'downloader',
    desc: 'Download fb video without watermark',
  },
  async (Void,citel, text,) => {
    let url = text.split(' ')[0];
  
    if (!text) {
      return citel.reply('Please provide a fb video URL.');
    }
  
    try {
      let {data}= await axios.get(`https://api-smd.vercel.app/api/fb?url=${encodeURIComponent(url)}`);
  
     if(! data || !data.result ) return citel.reply("no results found")
  
      await 
  Void.sendMessage(citel.chat, {video : { url :data.result.urls[1].url } , },)
    } catch (error) {
      citel.reply(`Error: ${error.message || error}`);
    }
  });
//--
        