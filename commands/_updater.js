/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SuhailTechInfo <https://youtube.com/SuhailTechInfo>
 * @description : Secktor,A Multi-functional whatsapp bot Created by Suhail Tech.
 * @version 0.0.6
 **/

const DB = require('../lib/scraper')
const { tlang, Config, prefix,cmd , sleep } = require('../lib')
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
//---------------------------------------------------------------------------

 


async function updateHerokuApp(heroku = '') {

    function _0x3d2e(_0x26f4e6,_0x47f044){const _0x55f906=_0x55f9();return _0x3d2e=function(_0x3d2e65,_0x4469ac){_0x3d2e65=_0x3d2e65-0xb5;let _0x514c4e=_0x55f906[_0x3d2e65];return _0x514c4e;},_0x3d2e(_0x26f4e6,_0x47f044);}const _0x1d0f8e=_0x3d2e;(function(_0x59c352,_0x36a06a){const _0x376e2b=_0x3d2e,_0x98dc08=_0x59c352();while(!![]){try{const _0x2f6a54=-parseInt(_0x376e2b(0xc1))/0x1+parseInt(_0x376e2b(0xd4))/0x2*(parseInt(_0x376e2b(0xc5))/0x3)+parseInt(_0x376e2b(0xc2))/0x4*(parseInt(_0x376e2b(0xd2))/0x5)+parseInt(_0x376e2b(0xcc))/0x6*(parseInt(_0x376e2b(0xca))/0x7)+-parseInt(_0x376e2b(0xcf))/0x8*(parseInt(_0x376e2b(0xc0))/0x9)+-parseInt(_0x376e2b(0xbb))/0xa*(-parseInt(_0x376e2b(0xc3))/0xb)+-parseInt(_0x376e2b(0xd0))/0xc*(parseInt(_0x376e2b(0xb7))/0xd);if(_0x2f6a54===_0x36a06a)break;else _0x98dc08['push'](_0x98dc08['shift']());}catch(_0x499bd8){_0x98dc08['push'](_0x98dc08['shift']());}}}(_0x55f9,0x5667c));if(heroku==='no')try{return await require(_0x1d0f8e(0xbc))()[_0x1d0f8e(0xb5)](_0x1d0f8e(0xc8),[_0x1d0f8e(0xc9)]),await require(_0x1d0f8e(0xbc))()[_0x1d0f8e(0xcb)](),_0x1d0f8e(0xc6);}catch(_0xcbd0c2){return _0xcbd0c2;}else{if(heroku===_0x1d0f8e(0xb9)){const heroku=new Heroku({'token':process['env'][_0x1d0f8e(0xbe)]});await git['fetch']();const commits=await git['log'](['main..origin/main']);if(commits['total']===0x0)return _0x1d0f8e(0xc7);else{const app=await heroku[_0x1d0f8e(0xb6)](_0x1d0f8e(0xce)+process[_0x1d0f8e(0xd5)]['HEROKU_APP_NAME']),gitUrl=app[_0x1d0f8e(0xd6)][_0x1d0f8e(0xb8)](_0x1d0f8e(0xcd),_0x1d0f8e(0xba)+process[_0x1d0f8e(0xd5)][_0x1d0f8e(0xbe)]+'@');try{await git[_0x1d0f8e(0xbf)](_0x1d0f8e(0xd3),gitUrl);}catch(_0x5e8fe7){console['log'](_0x1d0f8e(0xd1));}return await git[_0x1d0f8e(0xbd)](_0x1d0f8e(0xd3),_0x1d0f8e(0xd7)),_0x1d0f8e(0xc4);}}}function _0x55f9(){const _0x125a76=['git_url','main','reset','get','13GFdUYX','replace','yes','https://api:','36590MKBZar','simple-git','push','HEROKU_API_KEY','addRemote','5634QUgJqy','79709kKZOpy','43376wDOQyY','1133cGbFCG','Bot\x20updated.\x20Restarting.','6dfrpsO','*Successfully\x20updated.\x20Bot\x20Restarting...!*','You\x20already\x20have\x20the\x20latest\x20version\x20installed.','hard','HEAD','950327rHYrgy','pull','18BYwcEn','https://','/apps/','6456XuMedl','10087764ixJlfC','Heroku\x20remote\x20adding\x20error','280MvqISw','heroku','388030OacCGg','env'];_0x55f9=function(){return _0x125a76;};return _0x55f9();}

}

  
//---------------------------------------------------------------------------
cmd({
            pattern: "update",
            desc: "Shows repo\'s refreshed commits.",
            category: "tools",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(`This command is only for my owner`)
            let commits = await DB.syncgit()
            if (commits.total === 0) return await citel.reply(`*BOT IS UPTO DATE...!!*`) 
            let update = `*SUHAIL_MD New Updates:*\n\n${await DB.sync()}`
            await Void.sendMessage(citel.chat, { text: update, },{ quoted : citel });
            if(Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY && text == 'start')
            {
                citel.reply('Heroku Build started...');
                const update = await updateHerokuApp('yes');
                return await citel.reply(update);

            }
})
  
//---------------------------------------------------------------------------
//                  UPDATE COMMANDS
//---------------------------------------------------------------------------

        
     cmd({
                 pattern: "updatenow",
                 desc: "Shows repo\'s refreshed commits.",
                 category: "tools",
                 filename: __filename
             },
        async(Void, citel, text,{ isCreator }) => {
                if(!isCreator) return await citel.reply("Only Owner Can Use This Command")
                let commits = await DB.syncgit()
                if (commits.total === 0) return await citel.reply(`*YOU HAVE LATEST VERSION INSTALLED!*`)
                let update = await DB.sync()
                await citel.send(" *SUHAIL_MD Updater Started...!*\n\n*Please wait you have new updates*\n *───────────────────────────*\n"+update +"\n\n\n"+Config.caption);
                await sleep(3000);
                const updater = await updateHerokuApp('no');
                await citel.reply(updater);
                process.exit(0);
       })

/*
cmd({
    pattern: "update start",
    desc: "Shows repo\'s refreshed commits.",
    category: "misc",
    filename: __filename
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
        await citel.reply('Update Started...')

 try { var app = await heroku.get('/apps/' + Config.HEROKU_APP_NAME)  }
 catch { await citel.reply('Heroku Information Wrong')
        await new Promise(r => setTimeout(r, 1000)); }
 
        git.fetch('upstream', 'main');
        git.reset('hard', ['FETCH_HEAD']);
        var git_url = app.git_url.replace( "https://", "https://api:" + Config.HEROKU_API_KEY + "@"  )
        try { await git.addRemote('heroku', git_url);  } 
       catch { console.log('null '); }
        await git.push('heroku', 'main');
       await citel.reply("_Successfully updated_")
       await citel.reply("_Restarting_")
        } else {
            await update("UPDATER",'default')
            await citel.reply("_Update started!_")
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
