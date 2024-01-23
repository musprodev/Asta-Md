/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const moment = require('moment-timezone')
const {fetchJson,cmd, tlang, getBuffer, prefix, Config } = require('../lib')
let gis ='' // require("g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

   //---------------------------------------------------------------------------
   const { shazam } = require('../lib')
   let yts = require("secktor-pack");
   cmd({
           pattern: "find",
           category: "misc",
           desc: "Finds info about song",
           filename: __filename,
       },
       async(Void, citel, text) => {
            let mime = citel.quoted.mtype
            if (!citel.quoted) return citel.reply(`Send/Reply audio  ${prefix}find`);
            if (!/audio/.test(mime)) return citel.reply(`Send/Reply audio ${prefix}shazam`);
            let buff = await citel.quoted.download();
            let data = await shazam(buff);
            if (!data.status) return citel.send(data);
            let search = await yts(data.title);
            let anu = search.videos[0];
            let h =`*Title : _${data.title}_*           
*Artist : _${data.artists}_*            
*To Download Song:- _${prefix}yta ${anu.url}_*
   `
//   *Album :* _${data.album}_    
//   *Release :* _${data.release_date}


   let buttonMessaged = {
                   image: { url: anu.thumbnail, },
                   caption: h,
                   footer: tlang().footer,
                   headerType: 4,
                   contextInfo: {
                       externalAdReply: {
                           title: data.artists,
                           body: data.album,
                           thumbnail: log0,
                           mediaType: 2,
                           mediaUrl: ``,
                           sourceUrl: ``,
                       },
                   },
               };
               await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel, });
       }
    )
    //------------------------------------------------------------------------------------
cmd({
            pattern: 'ss',
            alias :['webss' , 'fullss'],
            category: "search",
            desc: "Searches Image on Google",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {
let limit = 5;
 try {
    if (!text) return citel.reply("```Uhh Please, Give me Url!```");
    var url = text;
    let urll = `https://s.vercel.app/api?url=${url.match(/\bhttps?:\/\/\S+/gi)[0]}&width=1280&height=720`
    let media  = await getBuffer(urll)
    return await Void.sendMessage(citel.chat ,{image : media } , {quoted:citel} )
 }
catch (err) { return citel.reply("```Error While Fetching Snapshot```")}
        }
    )



    //---------------------------------------------------------------------------
cmd({
            pattern: "imdb",
            category: "search",
            desc: "Sends image of asked Movie/Series.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`_Name a Series or movie ${tlang().greet}._`);
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);
            let imdbt = "";
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` 𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
            imdbt += "🎬Title      : " + fids.data.Title + "\n";
            imdbt += "📅Year       : " + fids.data.Year + "\n";
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n";
            imdbt += "📆Released   : " + fids.data.Released + "\n";
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n";
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";
            imdbt += "✍Writer     : " + fids.data.Writer + "\n";
            imdbt += "👨Actors     : " + fids.data.Actors + "\n";
            imdbt += "📃Plot       : " + fids.data.Plot + "\n";
            imdbt += "🌐Language   : " + fids.data.Language + "\n";
            imdbt += "🌍Country    : " + fids.data.Country + "\n";
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";
            imdbt += "🏙️Production : " + fids.data.Production + "\n";
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";
            imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "\n";
            imdbt += Config.caption ;
            Void.sendMessage(citel.chat, {  image: { url: fids.data.Poster, }, caption: imdbt,  }, {   quoted: citel,  });

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "weather",
            category: "search",
            desc: "Sends weather info about asked place.",
            use: '<location>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give me location.Baka!!`);
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = "";
            textw += `*🌟Weather of  ${text}*\n\n`;
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`;
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`;
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`;
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`;
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`;
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`;
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`;
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`;
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`;
            textw += `*Country:-* ${wdata.data.sys.country}\n`;
            textw +=Config.caption ;

            Void.sendMessage( citel.chat, {  text: textw }, {  quoted: citel } );

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "horo",
            category: "search",
            desc: "Gives horoscope info of user.",
            use: '<sign>\n:Example: horo libra',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Provide me a sign!`)
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`;
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date;
                        console.log(date);
                        let textw = "";
                        textw += `*🌟 Horoscope of  ${text}*\n\n`;
                        textw += `*Current Date:* ${json.current_date}.\n`;
                        textw += `*Sign:* ${text}.\n`;
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`;
                        textw += `*Compatibility:* ${json.compatibility}.\n`;
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`;
                        textw += `*Lucky Color:* ${json.color}.\n`;
                        textw += `*Today Mood:* ${json.mood}.\n`;
                        textw += `*Overall:* ${json.description}.\n`;
                        textw +=Config.caption ;
                        citel.reply(textw)
                    });

            } catch (e) {   console.log(e)  }
        }
    )
    //---------------------------------------------------------------------------

cmd({
            pattern: "cric",
            alias :['search','gsearch'],
            category: "search",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {

          citel.reply (`*_Please Wait, Getting Cricket Info_*`);
const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78');
  const dat = await response.json();
console.log(dat);

for (let i=0 ; i <  dat.data.length; i++) {
let j = i+1;
text +=`\n*--------------------- MATCH ${i}-------------------*`;
text +="\n*Match Name  :* "+ dat.data[i].name;
text +="\n*Match Status  :* "+ dat.data[i].status;
text +="\n*Match  Date   :* " + dat.data[i].dateTimeGMT ;
text +="\n*Match Started :* " + dat.data[i].matchStarted;
text +="\n*Match Ended:* " + dat.data[i].matchEnded;

}
 return await citel.reply( text);


})

//---------------------------------------------------------------------------
cmd({
            pattern: "google",
            alias :['search','gsearch'],
            category: "search",
            desc: "Sends info of given query from Google Search.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`give me a query\n*Example : .google Who is Suhail Tech.*`);
            let google = require('google-it');
            google({ 'query': text}).then(res => {
                let msg= `Google Search From : ${text} \n\n`;
                for (let g of res) {
                    msg+= `➣ Title : ${g.title}\n`;
                    msg+= `➣ Description : ${g.snippet}\n`;
                    msg+= `➣ Link : ${g.link}\n\n────────────────────────\n\n`;
                }
             
                return citel.reply(msg);
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "image",
            alias: ["img" , "pic"],
            category: "search",
            desc: "Searches Image on Google",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {

   if (!text) return citel.reply(`Provide me a query!\n*Ex : .image luffy |10*`)
   let buttonMessage = {}
   let name1 = text.split("|")[0] || `Luffy`
   let name2 = text.split("|")[1] || `5`
 try {
    let urlsArray = [];
    const params = {
        q: name1, 
        tbm: "isch",
        hl: "en",
        gl: "in",
        ijn: "0", 
    };
    const headers = {
      "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36",
      "Accept-Encoding": "application/json",
  };
  
    const res = await axios.get("https://www.google.com/search", { headers: headers, params: params });
    let body = res.data;
    body = body.slice(body.lastIndexOf("AF_initDataCallback"));
    body = body.slice(body.indexOf("["));
    body = body.slice(0, body.indexOf("</script>")-1);
    body = body.slice(0, body.lastIndexOf(","));
    
    const img = JSON.parse(body);

    const imgObjects = img[56][1][0][0][1][0];
    for (let i = 0; i < name2; i++) {
        if (imgObjects[i] && imgObjects[i][0][0]["444383007"][1]) {
            let url = imgObjects[i][0][0]["444383007"][1][3][0]; // the url
            urlsArray.push(url);
        }
    }

for (let url of urlsArray) { Void.sendMessage(citel.chat , {image : {url : url} } )  }
} 
 catch (error) {   return citel.reply("*Google Images Not Working, Try it Later*"); }

 
 
 /*
 
let isImages = false;
            let num = text.split("|")[1];
 gis(name1, async(error, result) => { 
if(result.length) 
{
 isImages = true;
 citel.reply(`Sending images of ${name1} in chat`) 
}
else return citel.reply("*Google Images Not Working, Try it Later*");
})
     if(!isImages) return       
            let nn = name2
            for (let i = 0; i < nn; i++) {
            gis(name1, async(error, result) => { 
            n = result;
            images = n[Math.floor(Math.random() * n.length)].url;
            
             
             if(!num){ buttonMessage = {   image: { url: images },
                                caption: Config.caption,
                                }
             }else {  buttonMessage = {   image: { url: images },}   }
                    
             
             Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
                })
            }
            
            
            */
 })
    //---------------------------------------------------------------------------
cmd({
            pattern: "couplepp",
            category: "search",
            desc: "Sends two couples pics.",
            filename: __filename,
        },
        async(Void, citel, text) => {
            let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
            let random = anu[Math.floor(Math.random() * anu.length)]
            Void.sendMessage(citel.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: citel })
            Void.sendMessage(citel.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: citel })
        }
    ) 
    //---------------------------------------------------------------------------
cmd({
        pattern: "iswa",
        alias: ["oldwa","bio","onwa"],
        category: "search",
        desc: "Searches in given rage about given number.",
        use: '9112345678xx',
        filename: __filename,
    },
    async(Void, citel, text) => {
 if(!text) return await citel.reply('Give Me Number without + sign. Example: .iswa 9231844741xx')
        var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return citel.reply(`*You did not add x*\nExample: iswa 9231844741xx  \n ${Config.caption}`)
        citel.reply(`*Searching for WhatsApp account in given range...* \n ${Config.caption}`)

        function countInstances(string, word) {  return string.split(word).length - 1; }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) { randomxx = 10 } 
        else if (random_length == 2) { randomxx = 100 } 
        else if (random_length == 3) { randomxx = 1000 }
 
        text = `*--『 List of Whatsapp Numbers 』--*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random;
            if (random_length == 1) { random = `${status1}` } 
            else if (random_length == 2) {random = `${status1}${status2}` } 
            else if (random_length == 3) {random = `${status1}${status2}${status3}` } 
            else if (random_length == 4) {random = `${status1}${status2}${status3}${dom4}` }
         
            var anu = await Void.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
            var anuu = anu.length !== 0 ? anu : false
            try 
            {
                  try { var anu1 = await Void.fetchStatus(anu[0].jid); } 
                  catch { var anu1 = '401' ; }
                  if (anu1 == '401' || anu1.status.length == 0) { nobio += `wa.me/${anu[0].jid.split("@")[0]}\n` ; } 
                  else {  text += `🧐 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n ✨*Bio :* ${anu1.status}\n🍁*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n` ;   }
            } catch { nowhatsapp += `${number0}${i}${number1}\n`; }
        }
        return await citel.reply(`${text}${nobio}${nowhatsapp}`)

    }
)


cmd({
        pattern: "nowa",
        category: "search",
        desc: "Searches in given rage about given number.",
        use: '9112345678xx',
        filename: __filename,
    },
    async(Void, citel, text) => {
if(!text) return await citel.reply('Give Me Number without + sign. Example: .nowa 9231844741xx')
const inputNumber = text.split(" ")[0]
if (!inputNumber.includes('x')) return citel.reply(`*You did not add x in number.*\nExample: ${prefix}nowa 9231844741xx  \n ${Config.caption}`)
citel.reply(`*Searching for WhatsApp account in the given range...*\n${Config.caption}`);
function countInstances(string, word) { return string.split(word).length - 1; }
const number0 = inputNumber.split('x')[0];
const number1 = inputNumber.split('x').slice(-1)[0] || '';
const randomLength = countInstances(inputNumber, 'x');
const randomxx = [10, 100, 1000][randomLength - 1] || 0;
let nobio = `\n*『 WhatsApp Account With No Bio』* \n`;
 let nobios='';
let nowhatsapp = `*『 Numbers With No WhatsApp Account 』* \n\n`;
for (let i = 0; i < randomxx; i++) 
{
    const nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const status = nu.slice(0, randomLength).map(() => nu[Math.floor(Math.random() * nu.length)]).join('');
    const random = `${status}${nu[Math.floor(Math.random() * nu.length)]}`.slice(0, randomLength);
    const anu = await Void.onWhatsApp(`${number0}${i}${number1}`);
    const anuu = anu.length !== 0 ? anu : false;
    try 
    {
         const anu1 = await Void.fetchStatus(anu[0].jid);
         if (anu1 === '401' || anu1.status.length === 0) {  nobios += `wa.me/${anu[0].jid.split("@")[0]}\n`; } 
    } catch { nowhatsapp += `${number0}${i}${number1}\n`;  }
}
if(!nobios){ nobio = ''; } else {nobio += nobios+'\n' ;}
return await citel.reply(`${nobio}${nowhatsapp}${Config.caption}`);
  
})
