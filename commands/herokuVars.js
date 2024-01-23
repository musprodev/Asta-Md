
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
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/









const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1,cmd } = require("../lib");
const axios = require('axios');
const appName = Config.HEROKU_APP_NAME;
const authToken = Config.HEROKU_API_KEY;
const fetch = require('node-fetch');

if(Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY ){
        
         cmd({
             pattern: "setsudo",
             desc: "Makes wa me of quoted or mentioned user.",
             category: "tools",
             filename: __filename
         },
  async(Void, citel, text) => {
if(!citel.quoted) return await citel.reply(`*Please Reply A User*`);
let user = citel.quoted.sender.split('@')[0]
if (global.sudo.includes(user)) return citel.reply("Number Already Exist In Sudo");
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
.then(data => { return citel.reply(`*${user} Added Succesfully.*\nSudo Numbers : ${newVarValue}`); })
.catch(error => citel.reply('Error While Adding new Sudo :'+ error));

         })

//--------------------------------------------------------------------
 cmd({
             pattern: "getsudo",
             desc: "Makes wa me of quoted or mentioned user.",
             category: "tools",
             filename: __filename
         },
async(Void, citel, text) => {  return await  citel.reply(global.sudo);})
//-------------------------------------------------------------------------

 cmd({
             pattern: "delsudo",
             desc: "Makes wa me of quoted or mentioned user.",
             category: "tools",
             filename: __filename
         },
  async(Void, citel, text) => {
    
if(!citel.quoted) return citel.reply(`*Please Reply A User*`);
let user = citel.quoted.sender.split('@')[0] ;
let  rm = ',' +user 
if (global.sudo.includes(rm)) global.sudo = global.sudo.replace(rm, '');
else return await citel.reply("User not found in the Sudo List\n Sudo Numbers : " + global.sudo );



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
   return citel.reply(`*${user} Deleted Succesfully.*\nSudo Numbers : ${newVarValue}`);
      })
  
.catch(error => {     return citel.reply('Error While Adding new Sudo :'+ error);      })
 
})     
    
 //------------------------------------------------------------------------       
        
        
cmd({
        pattern: "allvar",
        alias:['getallvar','allvars'],
        desc: "To get All  Heroku Vars",
        category: "tools",
        filename: __filename
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
    let allVars = `     *${appName}* Vars \n*________________________________________*\n`;
    Object.keys(data).forEach(key => {
                                         allVars += `*${key} :*  ${data[key]}\n` ;
                                     });
                                     return citel.reply(allVars);
  })        
.catch(error => citel.reply('Error retrieving app variable:'+ error));
  
});
//----------------------------------------------------------------------------------
cmd({
        pattern: "addvar",
        desc: "To Set Heroku Vars",
        category: "tools",
        filename: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {

     if (!isCreator) return citel.reply(tlang().owner);
if (!text) return citel.reply (`give me Variable Name\n*E.x : ${prefix}setvar CAPTION: Powered By Suhail Tech*`);
const headers = 
        {
                 'Accept': 'application/vnd.heroku+json; version=3',
                 'Authorization': `Bearer ${authToken}`,
                 'Content-Type': 'application/json'
        };
        const commaIndex = text.indexOf(':');
        const varName = text.slice(0, commaIndex).toUpperCase().trim();
        const newVarValue = text.slice(commaIndex + 1).trim();
        
if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*Example : ${prefix}setvar AUTO_READ_STATUS:true*`);   
fetch(`https://api.heroku.com/apps/${appName}/config-vars`,
        {
                   method: 'PATCH',
                   headers,
                   body: JSON.stringify({ [varName.toUpperCase()]: newVarValue })
        })
  .then(response => response.json())
  .then(data => {  return citel.reply(`*${varName} updated Succesfully.*\n${varName}  :  ${newVarValue}`);   })
  .catch(error => citel.reply('Error Adding app variable:'));
  });
//-----------------------------------------------------------------------------------

cmd({
        pattern: "getvar",
        desc: "To Get A Heroku Var",
        category: "tools",
        filename: __filename
    },
    
async(Void, citel , text,{ isCreator }) => {
   if (!isCreator) return citel.reply(tlang().owner);
if (!text) return citel.reply (`give me Variable Name\nExample : ${prefix}getvar AUTO_READ_STATUS`);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`
};
const varName = text.toUpperCase().split(" ")
fetch(`https://api.heroku.com/apps/${appName}/config-vars`, { headers })
  .then(response => response.json())
  .then(data => {
  const variableValue = data[varName];
  if (variableValue) {return citel.reply(`*${varName} :* ${variableValue}`);} 
  else { return citel.reply(`*${varName}* does not exist in *${appName}* app.`);  }
  })
  .catch(error => citel.reply('Error retrieving app variable:'+ error));
  
});


//----------------------------------------------------------------------------------
cmd({
        pattern: "setvar",
        desc: "To Set Heroku Vars",
        category: "tools",
        filename: __filename
    },
    async(Void, citel , text,{ isCreator }) => {
 if (!isCreator) return citel.reply(tlang().owner);
if (!text) return citel.reply (`give me Variable Name\n*Example : ${prefix}setvar CAPTION: Powered By Suhail Tech*`);
const headers = {
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': `Bearer ${authToken}`,
  'Content-Type': 'application/json'
};
const commaIndex = text.indexOf(':');
const varName = text.slice(0, commaIndex).toUpperCase().trim();
const newVarValue = text.slice(commaIndex + 1).trim();

if (!newVarValue) return citel.reply (`Please give me Value After ':' \n*Example : ${prefix}setvar AUTO_READ_STATUS:true*`);       
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
  .then(response => { if (response.ok) return citel.reply(`${varName} updated successfully.\n${varName}: ${newVarValue}`);  })
  .catch(error => {   return citel.reply("```Uhh Please, Give me Valid Variable Name```") });
    
    
        
}
   )
    
    } // If Statements End Here FOr Heroku App and Heroku APP Key to Update App Variable 
