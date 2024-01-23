const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "2348039607375";
global.mongodb = process.env.MONGODB_URI || "";
global.port= process.env.PORT || 5000
global.audio = '' ; 
global.video = '' ;
global.email = 'astromedia0010@outlook.com';
global.github = 'https://github.com/Astropeda/Asta-Md';
global.location = 'Sultanpur IN';
global.gurl = 'https://instagram.com/';
global.timezone  = process.env.TIME_ZONE || 'Africa/Lagos'
global.sudo = process.env.SUDO || '2348039607375';
global.devs = '2348039607375';
global.website = 'https://github.com/Astropeda/Asta-Md';
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://leadier-umbrellas.000webhostapp.com/botpic.jpeg';
module.exports = {
  botname:   process.env.BOT_NAME || '',
  ownername: process.env.OWNER_NAME || '',
  sessionName:  process.env.SESSION_ID || '',
  author:  process.env.PACK_INFO || 'Astro',
  auto_read_status :  process.env.AUTO_READ_STATUS || 'false',
  packname:  process.env.PACK_INFO || 'Astro',
  autoreaction:  process.env.AUTO_REACTION  || 'false',
  antibadword :  process.env.ANTI_BAD_WORD || 'nobadword',
  alwaysonline:  process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '212',
  readmessage:  process.env.READ_MESSAGE || 'false',
  auto_status_saver: process.env.AUTO_STATUS_SAVER || 'false',
  HANDLERS:  process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || "3",
  disablepm:  process.env.DISABLE_PM || "false",
  levelupmessage:  process.env.LEVEL_UP_MESSAGE || "false",
  antilink:  process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME || 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
