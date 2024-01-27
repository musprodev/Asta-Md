const { dare, truth, random_question ,name } = require('../lib/truth-dare.js')
const axios = require('axios')
const { Module_Exports,sleep } = require('../lib')
const fetch = require('node-fetch');
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "question",
            infocmd: "Random Question.",
            kingclass: "fun",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${random_question()}`);
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "truth",
            infocmd: "truth and dare(truth game.).",
            kingclass: "game",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "dirtydare",
            infocmd: "truth and dare(dare game.).",
            kingclass: "game",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${dare()}`);
        }
    )
//--------------------------------------------------------------------------------
Module_Exports({
            kingcmd: "joke",
            infocmd: "Sends Joke in chat.",
            kingclass: "fun",
            kingpath: __filename,
        },
        async(Void, citel, text) => { 

const response =await  fetch('https://official-joke-api.appspot.com/random_joke');
  const joke= await response.json();
citel.reply( `*𝙹𝙾𝙺𝙴:* ${joke.setup}\n*𝙿𝚄𝙽𝙲𝙷𝙻𝙸𝙽𝙴:*  ${joke.punchline}`);

})
//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "joke2",
            infocmd: "Sends Joke in chat.",
            kingclass: "fun",
            kingpath: __filename,
        },
        async(Void, citel, text) => { 
 
         fetch('https://v2.jokeapi.dev/joke/Any?type=single')
         .then(response => response.json())
         .then(data => {
         citel.reply(`*𝙹𝙾𝙺𝙴:* ${data.joke}`); 
  })
  .catch(error => {
     return citel.reply ('Error fetching joke:' + error);
  });
        }
    )

//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "fact",
        infocmd: "Sends fact in chat.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, citel, text) => {
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return citel.reply(`*𝙵𝙰𝙲𝚃:* ${data.fact}`)   
    }

)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "quotes",
        infocmd: "Sends quotes in chat.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, man, text) => {
        var quoo = await axios.get(`https://favqs.com/api/qotd`)
        const replyf = `
┏━━⟪⟪ ${mztit} ⟫━◈
┃✬ *𝙲𝙾𝙽𝚃𝙴𝙽𝚃* ${quoo.data.quote.body}
┃✬ *𝙰𝚄𝚃𝙷𝙾𝚁* ${quoo.data.quote.author}  
┗━━━━━━━━━━◈ `
return man.reply(replyf)
    }
 
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "define",
        infocmd: "urban dictionary.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `
            *𝚆𝙾𝚁𝙳:* ${text}
            *𝙳𝙴𝙵𝙸𝙽𝙸𝚃𝙸𝙾𝙽:* ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            *𝙴𝚇𝙰𝙼𝙿𝙻𝙴:* ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)
//------------------------------------------------------------------------

cmd({
    pattern: 'rizz',
    category: "fun",
    desc: 'Get a random pickup line',
    react: '🙈',
  },
  async (Void, citel) => {
    try {
      let response = await axios.get('https://vinuxd.vercel.app/api/pickup');
      let data = response.data;
  
      if (!data || !data.pickup) {
        return citel.reply('Unable to retrieve a pickup line. Please try again later.');
      }
  
      let pickupLine = data.pickup;
  
      return citel.reply(`*Pickup Line:* ${pickupLine} \n*Thanks to Excel*\n*Visit* https://github.com/excelottah6/IZUKU-MD`);
    } catch (error) {
      citel.reply(`Error: ${error.message || error}`);
    }
  });
  //-----------------COPY AND GIVE CREDIT------------------//
  cmd({
    pattern: 'insult',
    desc: 'Get a random insult',
    category: "fun",
    react: '🤥',
  },
  async (Void, citel) => {
    try {
      let response = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
      let data = response.data;
  
      if (!data || !data.insult) {
        return citel.reply('Unable to retrieve an insult. Please try again later.');
      }
  
      let insult = data.insult;
      return citel.reply(`*Insult:* ${insult} \n*Thanks to Excel*\n*Visit* https://github.com/excelottah6/IZUKU-MD`);
    } catch (error) {
      citel.reply(`Error: ${error.message || error}`);
    }
  });
//---------------------------------------------------------------------------

Module_Exports({

            kingcmd: "hack",

            kingclass: "fun",

            infocmd: "hacking prank",

            use: ' ',

            kingpath: __filename,

        },

        async(Void,citel, text) => {

citel.reply("```Injecting malware```")

await sleep(1000)

citel.reply("```Injecting malware \n 0%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ 10%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ 20%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ 30%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ 40%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ 50%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ 60%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ 70%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ █ 80%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ █ █ 90%```")

await sleep(1000)

citel.reply("```Injecting malware \n █ █ █ █ █ █ █ █ █ █ 100%```")

await sleep(1000)

citel.reply("```System hyjacking on process.. \n Conecting to Server error to find 404 ```")

await sleep(1000)

citel.reply("```Divice successfully connected... \n Riciving data...```")

await sleep(1000)

citel.reply("```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```")

await sleep(1000)

citel.reply("``` HACKING COMPLETED ```")

await sleep(1000)

citel.reply("``` SENDING LOG DOCUMENTS...```")

await sleep(1000)

citel.reply("``` SUCCESSFULLY SENT DATA AND Connection disconnected```")

await sleep(1000)

            return citel.reply('*BACKLOGS CLEARED*');

        }

    )

// These Fun Commands are Developed By @Astropeda
// Whatsapp +2348039607375
// Usage And CopyRights Are Reserved

