
const {cmd,tlang} = require('../lib')
cmd({   pattern: "restart", desc: "To restart bot",category: "tools", filename: __filename }, async(Void, citel,text,{ isCreator }) => {  if (!isCreator) return citel.reply(tlang().owner);  const { exec } = require("child_process"); citel.reply('Restarting'); exec('pm2 restart all'); });

 





