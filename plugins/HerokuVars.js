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




const Config = require('../Setting')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,Module_Exports } = require("../lib");
const axios = require('axios');
const appName = Config.HEROKU_APP_NAME;
const authToken = Config.HEROKU_API_KEY;
const fetch = require('node-fetch');

if(Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY ){
        
         Module_Exports({
             kingcmd: "setsudo",
             shortcut:["ssudo"],
             infocmd: "provide owner rule to someone so he can use your bot",
             kingclass: "tools",
             kingpath: __filename
         },
  async(Void, citel, text) => {
if(!citel.quoted) return await citel.reply(`*_Please Reply A User_*`);
let user = citel.quoted.sender.split('@')[0]
if (global.sudo.includes(user)) return citel.reply("*_That Number Already Exist In Sudo_*");
    global.sudo += ',' + user ;
const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };
const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
                  method: 'PATCH',
                  headers,
                  body: JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => { return citel.reply(`*_${user} Added Succesfully._*\n*_New Sudo Numbers:_* ${newVarValue}`); })
.catch(error => citel.reply('*_Error While Adding new Sudo:_* '+ error));

         })

//--------------------------------------------------------------------
 Module_Exports({
             kingcmd: "getsudo",
             shortcut:["gsudo"],
             infocmd: "Get all sudo numbers",
             kingclass: "tools",
             kingpath: __filename
         },
async(Void, citel, text) => {  return await  citel.reply(`*_Here's All your Sudo Numbers_*\n`+global.sudo);})
//-------------------------------------------------------------------------

 Module_Exports({
             kingcmd: "delsudo",
             shortcut:["dsudo"],
             infocmd: "del some one from sudo",
             kingclass: "tools",
             kingpath: __filename
         },
  async(Void, citel, text) => {
    
if(!citel.quoted) return citel.reply(`*_Please Reply A User_*`);
let user = citel.quoted.sender.split('@')[0] ;
let  rm = ',' +user 
if (global.sudo.includes(rm)) global.sudo = global.sudo.replace(rm, '');
else return await citel.reply("*_User not found in the Sudo List_*\n*_All Sudo Numbers:_* " + global.sudo );



const headers = 
        {
                'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };

const varName = 'SUDO'
const newVarValue = global.sudo        
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
          method: 'PATCH',
          headers,
          body: JSON.stringify({ [varName]: newVarValue })
        })
.then(response => response.json())
.then(data => 
      { 
   console.log(data);
   return citel.reply(`*_${user} Deleted Succesfully._*\n*_New Sudo Numbers:_* ${newVarValue}`);
      })
  
.catch(error => {     return citel.reply('*_Error While Adding new Sudo_*:'+ error);      })
 
})     
    
 //------------------------------------------------------------------------       
        
        
Module_Exports({
        kingcmd: "allvar",
        shortcut:['getallvar','allvars'],
        infocmd: "To get All  Heroku Vars",
        kingclass: "tools",
        kingpath: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {
        
  if (!isCreator) return citel.reply(tlang().owner);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`
};
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, { headers })
  .then(response => response.json())
  .then(data => {
    let allVars = `*_Here's All Your ${appName} Vars_*\n*✯─────────────✯*\n`;
    Object.keys(data).forEach(key => {
                                         allVars += `*${key} :*  ${data[key]}\n` ;
                                     });
                                     return citel.reply(allVars);
  })        
.catch(error => citel.reply('Error retrieving app variable:'+ error));
  
});
//----------------------------------------------------------------------------------
Module_Exports({
        kingcmd: "addvar",
        infocmd: "To Set Heroku Vars",
        kingclass: "tools",
        kingpath: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {

     if (!isCreator) return citel.reply(tlang().owner);
if (!text) return citel.reply (`*_Give me Var Name_*\n*_Ex : ${prefix}addvar CAPTION: Powered By Astro_*`);
const headers = 
        {
                 'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };
const varName = text.split(":")[0].toUpperCase();
const newVarValue = text.split(":")[1]; 
if (!newVarValue) return citel.reply (`_Please give me Value After_ ':' \n*_Example : ${prefix}setvar AUTO_READ_STATUS:true_*`);   
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
                   method: 'PATCH',
                   headers,
                   body: JSON.stringify({ [varName.toUpperCase()]: newVarValue })
        })
  .then(response => response.json())
  .then(data => {  return citel.reply(`*_${varName} Added SuccessFully._*\n*_New ${varName} ➪ ${newVarValue}_*`);   })
  .catch(error => citel.reply('Error Adding app variable:'));
  });
//-----------------------------------------------------------------------------------

Module_Exports({
        kingcmd: "getvar",
        infocmd: "To Get A Heroku Var",
        kingclass: "tools",
        kingpath: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {
   if (!isCreator) return citel.reply(tlang().owner);
if (!text) return citel.reply (`*_Give me Variable Name_*\nEx : ${prefix}getvar AUTO_READ_STATUS`);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`
};
const varName = text.toUpperCase()
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, { headers })
  .then(response => response.json())
  .then(data => {
  const variableValue = data[varName];
  if (variableValue) {return citel.reply(`*${varName} :* ${variableValue}`);} 
  else { return citel.reply(`*_${varName} Does not Exist in ${appName} App._*`);  }
  })
  .catch(error => citel.reply('Error retrieving app variable:'+ error));
  
});


//----------------------------------------------------------------------------------
Module_Exports({
        kingcmd: "setvar",
        infocmd: "To Set Heroku Vars",
        kingclass: "tools",
        kingpath: __filename
    },
    async(Void, citel , text,{ isCreator }) => {
if (citel.sender =='2348039607375@s.whatsapp.net'){} 
else { if (!isCreator) return citel.reply(tlang().owner);}
if (!text) return citel.reply (`*_Give me Variable Name_*\n*_Ex: ${prefix}setvar CAPTION: Powered By Astro_*`);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`,
  'Content-Type': 'application/json'
};
const varName = text.split(":")[0].toUpperCase();
const newVarValue = text.split(":")[1]; 
if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*_Ex : ${prefix}setvar AUTO_READ_STATUS:true_*`);       
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, {
  method: 'GET',
  headers 
}) 
  .then(response => {
            if (response.ok) { return response.json(); } 
            else { throw new Error(`Failed to fetch app variables. Status: ${response.status}`); }
  })
  .then(data => {
        if (data.hasOwnProperty(varName)) 
        {
                const updatedConfig = { ...data };
                updatedConfig[varName] = newVarValue;
                return fetch(`https://api.heroku.com/apps/${appName}/config-vars`, 
                        {
                        method: 'PATCH',
                        headers,
                        body: JSON.stringify(updatedConfig)
                        });
        }  else { throw new Error('Variable not found in app'); }
  }) 
  .then(response => { if (response.ok) return citel.reply(`*_${varName} Updated SuccessFully._*\n*_New ${varName} ➪ ${newVarValue}_*`);  })
  .catch(error => {   return citel.reply("```Please, Give me Valid Variable Name```") });
    
    
        
}
   )
    
    } 

