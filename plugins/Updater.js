//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                            𝚅.𝟷.𝟸.𝟽                                                   // 
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

const DB = require('../lib/scraper')
const { tlang, name, prefix, Module_Exports } = require('../lib')
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
//---------------------------------------------------------------------------

 


async function updateHerokuApp() {
    const heroku = new Heroku({ token: process.env.HEROKU_API_KEY });
    await git.fetch();
    const commits = await git.log(['main..origin/main']);
    if (commits.total === 0) { return 'Your Bot is Running on Latest Version.'; } 
    else {
      const app = await heroku.get(`/apps/${process.env.HEROKU_APP_NAME}`);
      const gitUrl = app.git_url.replace('https://', `https://api:${process.env.HEROKU_API_KEY}@`);
      try { await git.addRemote('heroku', gitUrl); } catch(e) { console.log('Heroku remote adding error');  }
      await git.push('heroku', 'main');
      return "*_Bot Updated SuccessFully_*\n*_Wait While Restarting_*";
    }
  }

  
//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "update",
            shortcut: ["ud"],
            infocmd: "Shows repo\'s refreshed commits.",
            kingclass: "tools",
            kingpath: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            let commits = await DB.syncgit()
            if (commits.total === 0) return await citel.reply(`*_HEY_* *_${name.ownername}_* *_Your Bot Is_*\n*_Running on Latest Version_*`) 
            let update = await DB.sync()
            await Void.sendMessage(citel.chat, { text: update, },{ quoted : citel });


if(text == 'all')
{
          citel.reply(`*_Started Updating You Bot..._*\n*_Please Wait..._*`);
          const update = await updateHerokuApp();
          return await citel.reply(update);
}
else return






})
  
//---------------------------------------------------------------------------
//                  UPDATE COMMANDS
//---------------------------------------------------------------------------
if(name.HEROKU_APP_NAME && name.HEROKU_API_KEY )
{
        
     Module_Exports({
                 kingcmd: "updatebot",
                 shortcut: ["ubot"],
                 infocmd: "Shows repo\'s refreshed commits.",
                 kingclass: "tools",
                 kingpath: __filename
             },
        async(Void, citel, text,{ isCreator }) => {
                if(!isCreator) return await citel.reply(tlang().owner)
                let commits = await DB.syncgit()
                if (commits.total === 0) return await citel.reply(`*_HEY_* *_${name.ownername}_* *_Your Bot Is_*\n*_Running on Latest Version_*`)
                let update = await DB.sync()
                let buttonMessaged = 
                {
                     text:" ♕ *Updating Your Bot...!*\n  *★────────────────────────★*\n"+update +"\n  *★────────────────────────★*",
                     footer: 'UPDATER --- sᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/Astropeda',
                     headerType: 4,
                };
                await Void.sendMessage(citel.chat, buttonMessaged);
                await require("simple-git")().reset("hard",["HEAD"])
                await require("simple-git")().pull()
                await citel.send(`*_Bot SuccessFully Updated_*`)
                process.exit(0);
       })
}
/*
Module_Exports({
    kingcmd: "update all",
    infocmd: "Shows repo's refreshed commits.",
    kingclass: "tools",
    kingpath: __filename
},
async(Void, citel, text,{ isCreator }) => {
    await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    if (commits.total === 0) {
        return await citel.reply('Bot is UP-TO-DATE')
 }
// if (!isHeroku){
   // await require("simple-git")().reset("hard",["HEAD"])
   // await require("simple-git")().pull()
   // await citel.reply("_Successfully updated. Please manually update npm modules if applicable!_")
   // process.exit(0);    
   // }
    //else if (isHeroku) {
       // await fixHerokuAppName(message)
        await citel.reply('Starting Update...')

 try { var app = await heroku.get('/apps/' + Config.HEROKU_APP_NAME)  }
 catch { await citel.reply('Heroku Information Wrong')
        await new Promise(r => setTimeout(r, 1000)); }
 
        git.fetch('upstream', 'main');
        git.reset('hard', ['FETCH_HEAD']);
        var git_url = app.git_url.replace( "https://", "https://api:" + Config.HEROKU_API_KEY + "@"  )
        try { await git.addRemote('heroku', git_url);  } 
       catch { console.log('null '); }
        await git.push('heroku', 'main');
       await citel.reply(`${name.botname} *_Updated Successfully_*`)
       await citel.reply("_Restarting_")
        } else {
            await update("UPDATER",'default')
            await citel.reply("_Starting Update!_")
    }
 
}
)

//______________________________________________________________\\
async function fixHerokuAppName(message){
    if (!HEROKU_API_KEY) return await message.sendReply(`_You have not provided HEROKU_API_KEY\n\nPlease fill this var, get api key from heroku account settings_`)
    let apps = await heroku.get('/apps')
    let app_names = apps.map(e=>e.name)
    if (!HEROKU_APP_NAME || !app_names.includes(Config.HEROKU_APP_NAME)){
    function findGreatestNumber(e){let t=e[0];for(let n=1;n<e.length;n++)e[n]>t&&(t=e[n]);return t}
    let times = apps.map(e=>new Date(e.updated_at).getTime())
    let latest = findGreatestNumber(times)
    let index = times.indexOf(latest)
    let app_name = apps[index].name
    Config.HEROKU_APP_NAME = app_name
    process.env.HEROKU_APP_NAME = app_name
    baseURI = '/apps/' + app_name;
    await message.sendReply(`_You provided an incorrect heroku app name, and I have corrected your app name to "${app_name}"_\n\n_Please retry this command after restart!_`)    
    Config.HEROKU_APP_NAME = app_name
        return await setVar("HEROKU_APP_NAME",app_name,message)
    }
}
*/