 const { sck,sck1,getBuffer, tlang, prefix,name } = require('../lib')
 const eco = require('discord-mongoose-economy')
 const ty = eco.connect(mongodb);
 const {Function} = require('../lib')
 Function({
         kingcmd: "daily",
         infocmd: "daily gold.",
         kingclass: "economy",
         kingpath: __filename,
         use: ""
     },
     async(sigma, person, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: person.chat,
        })) || (await new sck({
                id: person.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return person.reply("*Economy* _is not active in current group._");
         if (!person.isGroup) return person.reply(tlang().group);
	const zubair = "zubair"
	const daily  = await eco.daily(person.sender, zubair, 5000); //give 500 for daily, can be changed
	 if (daily.cd) { //cdL is already formatted cooldown Left
        return await  person.reply(`_You already claimed daily for today, come back in_ ${daily.cdL}`)
	 } else {
	 person.reply(`_you claimed daily ${daily.amount} for today._`);   
	 }
 }
 )

 Function({
         kingcmd: "resetwallet",
         shortcut: ["rwallet"],
         infocmd: "reset wallet of quoted user.",
         kingclass: "economy",
         kingpath: __filename,
         use: ""
     },
     async(sigma, person, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: person.chat,
        })) || (await new sck({
                id: person.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return person.reply("*Economy* _is not active in current group._");
	 if(!isCreator) return person.reply(tlang().owner)
        let users = person.mentionedJid ? person.mentionedJid[0] : person.msg.contextInfo.participant || false;
	if(!users) return person.reply('```Please give me user.```')
        const balance  = await eco.balance(users, "zubair")
        await eco.deduct(users, "zubair", balance.wallet);
        return await person.reply(` User: @${users.split('@')[0]} \n *@${users.split('@')[0]} lost all 🪙 in wallet.*\n_Now live with that poverty_`,{mentions:[users]})
 }
 )
 Function({
    kingcmd: "capacity",
    infocmd: "update capacity.",
    kingclass: "economy",
    kingpath: __filename,
    use: ""
},
async(sigma, person, text,{ isCreator }) => {
    let zerogroup = (await sck.findOne({
        id: person.chat,
    })) || (await new sck({
            id: person.chat,
        })
        .save());
    let mongoschemas = zerogroup.economy || "false";
    if (mongoschemas == "false") return person.reply("*Economy* _is not active in current group._");
    if (!person.isGroup) return person.reply(tlang().group);
    if (!text) return person.reply(`*Bank-capacity* 💳\n\n1 | *1000 sp* = 🪙100\n\n2 | *100000 sp* = 🪙1000\n\n3 | *10000000 sp* = 🪙10000000\n\nExample- ${prefix}capacity 1 OR ${prefix}bankupgrade 1000`)
    let user = person.mentionedJid ? person.mentionedJid[0] : person.msg.contextInfo.participant || false;
    const zubair = "zubair"
	let value = text.trim();
	let k = parseInt(value)
    const balance  = await eco.balance(user, zubair)
    switch (value) {
        case '1000':
        case '1':
        if (k > balance.wallet ) return person.reply(`*_You need to pay 🪙100 to increase bank capacity ~ 1000 sp_*`);
          const deduct1 = await eco.deduct(user, zubair, 100);
          const add1 = eco.giveCapacity(user, zubair, 1000);
return await person.reply(`*_1000 🪙diamond storage has been added in ${person.pushName} bank*_`)
              break
        case '100000':
        case '2':
        if (k < balance.wallet) return person.reply(`*_You need to pay 🪙1000 to increase bank capacity ~ 100000 sp_*`);
          const deduct2 = await eco.deduct(user, zubair, 1000);
          const add2 = eco.giveCapacity(user, zubair, 100000);
return await person.reply(`*_100000 🪙diamond storage has been added in ${person.pushName} bank_*`)

              break
        case '10000000':
        case '3':
        if (k < balance.wallet) return person.reply(`_You need to pay 🪙10000 to increase bank capacity ~ 1000 sp_`);
           const deduct3 = await eco.deduct(user, zubair, 10000);
           const add3 = eco.giveCapacity(user, zubair, 10000000);
return await person.reply(`*_10000000 🪙diamond storage has been added in ${person.pushName}\'s bank_*`)


             break
default:
 await person.reply('*What are you trying to do*')

 }
}
)
     Function({
        kingcmd: "deposit",
        infocmd: "deposit gold.",
        kingclass: "economy",
        kingpath: __filename,
        use: ""
    },
    async(sigma, person, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: person.chat,
        })) || (await new sck({
                id: person.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return person.reply("*Economy* _is not active in current group._");
      //  let users = person.mentionedJid ? person.mentionedJid[0] : person.msg.contextInfo.participant || false;
        if (!text) return person.reply("Provide the amount you want to deposit!");
        let d = parseInt(text)
        const deposit = await eco.deposit(person.sender, "zubair", d);
        const balance = await eco.balance(person.sender, "zubair")
        if(deposit.noten) return person.reply(`You can't deposit what you don't have.`); //if user states more than whats in his wallet
return await person.reply(`Sender: ${person.pushName}\nSuccessfully Deposited 🪙${deposit.amount} to your bank.\n_Upgrade your bank capacity to add more money._`)
    }
)
     Function({
        kingcmd: "lb",
        infocmd: "check leaderboard.",
        kingclass: "economy",
        kingpath: __filename,
        use: ""
    },
    async(sigma, person, text,{ isCreator }) => {
	let h = await eco.lb('zubair',10);
	let str = `*ᴛᴏᴘ ${h.length} ʀɪᴄʜ ᴜsᴇʀs ᴡɪᴛʜ ᴀ ʟᴏᴛ ᴏꜰ ᴍᴏɴᴇʏ*\n`
	const { sck1 } = require('../lib');
	let arr = []
	 for(let i=0;i<h.length;i++){
            let username = await sck1.findOne({ id: h[i].userID })
            var tname;
            if (username.name && username.name !== undefined) {
                tname = username.name
            } else {
                tname = sigma.getName(h[i].userID)
            }
str+= `*${i+1}*\n*╭─────────────★*\n┃ *ɴᴀᴍᴇ:* _${tname}_\n┃ *ᴜsᴇʀ:* _@${h[i].userID.split('@')[0]}_\n┃ *ᴡᴀʟʟᴇᴛ:* _${h[i].wallet}_\n┃ *ʙᴀɴᴋ ᴀᴍᴏᴜɴᴛ:* _${h[i].bank}_\n┃ *ʙᴀɴᴋ ᴄᴀᴘᴀᴄɪᴛʏ:* _${h[i].bankCapacity}_\n*╰─────────────★*\n\n`  	 
	 arr.push(h[i].userID)
	 }
	     person.reply(str,{mentions:arr})
	     
     })

Function({
    kingcmd: "transfer",
    infocmd: "transfer gold.",
    kingclass: "economy",
    kingpath: __filename,
    use: ""
},
async(sigma, person, text,{ isCreator }) => {
    let zerogroup = (await sck.findOne({
        id: person.chat,
    })) || (await new sck({
            id: person.chat,
        })
        .save());
    let mongoschemas = zerogroup.economy || "false";
    if (mongoschemas == "false") return person.reply("*Economy* _is not active in current group._");
    let value = text.trim().split(" ");
    if (value[0] === "") return person.reply(`Use ${prefix}transfer 100 reply a user`);
    let user = person.mentionedJid ? person.mentionedJid[0] : person.msg.contextInfo.participant || false;
    if(!user) return person.reply('Please give me any user.');
    const zubair = "zubair"
        const user1 = person.sender
        const user2 = user
        const word = value[0];
		const code = value[1];
        let d = parseInt(word)
		if (!d) return person.reply("check your text plz u r using the command in a wrong way");
        const balance = await eco.balance(user1, zubair);
        let a = (balance.wallet) < parseInt(word)
        //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
        if(a == true) return person.reply("_you poor haven't sufficient money to transfer_");

        const deduct = await eco.deduct(user1, zubair, value[0]);
        const give = await eco.give(user2, zubair, value[0]);

return await person.reply( `*Transaction successful of ${value[0]}*`)

}
)
     Function({
        kingcmd: "wallet",
        infocmd: "shows wallet.",
        kingclass: "economy",
        kingpath: __filename,
        use: ""
    },
    async(sigma, person, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: person.chat,
        })) || (await new sck({
                id: person.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return person.reply("*Economy* _is not active in current group._");
         const zubair = "zubair"
         const balance = await eco.balance(person.sender, zubair); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
return await person.reply(`*${person.pushName}'s Bank Wallet:*\n\n_🪙${balance.wallet}_`)
    }
)
     Function({
        kingcmd: "give",
        infocmd: "Add money in wallet.",
        kingclass: "economy",
        kingpath: __filename,
        use: ""
    },
    async(sigma, person, text,{ isCreator }) => {
        if(!isCreator) return

         const zubair = "zubair"
         let users = person.mentionedJid ? person.mentionedJid[0] : person.msg.contextInfo.participant || false;
         if(!users) return person.reply('_Please reply a user to add money._')
         await eco.give(users, zubair, parseInt(text.split(' ')[0]));
        return await sigma.sendMessage(person.chat,{text: `Added  ${parseInt(text.split(' ')[0])} to @${users.split('@')[0]} wallet🛸.`,mentions:[users]},{quoted:person})

    }
)

     //---------------------------------------------------------------------------
     Function({
        kingcmd: "bank",
        infocmd: "shows bank amount.",
        kingclass: "economy",
        kingpath: __filename,
        use: ""
    },
    async(sigma, person, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: person.chat,
        })) || (await new sck({
                id: person.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return person.reply("*Economy* _is not active in current group._");
        const balance = await eco.balance(person.sender, "zubair"); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
return await person.reply(`User: ${person.pushName}\n\n_${balance.bank}/${balance.bankCapacity}_`)
    }
)

     //---------------------------------------------------------------------------
     Function({
        kingcmd: "rob",
        infocmd: "rob bank amount.",
        kingclass: "economy",
        kingpath: __filename,
    },
    async(sigma, person, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: person.chat,
        })) || (await new sck({
                id: person.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return person.reply("*Economy* _is not active in current group._");
        let users = person.mentionedJid ? person.mentionedJid[0] : person.msg.contextInfo.participant || false;
	if(!users) return person.reply('_Please reply a user to rob._')
        const user1 = person.sender
        const user2 = users
	const zubair = "zubair"
	    const k = 1000
        const balance1  = await eco.balance(user1, zubair)
	const balance2  = await eco.balance(user2, zubair)
	const typ = ['ran','rob','caught'];
    const random = typ[Math.floor(Math.random() * typ.length)];
    if (k > balance1.wallet) return person.reply(`*You poor don't have enough money to pay, incase you get caught*`);
    if (k > balance2.wallet) return person.reply(`*Sorry, your victim is too poor, let him go.*`);
    let tpy = random    
    switch (random) {
       
        case 'ran':
              await person.reply(`*_Your victim escaped, be more scary next time_*`)
              ////person.use('🥹')

              break
        case 'rob':
	  const deduff = Math.floor(Math.random() * 1000)	    
          await eco.deduct(user2, zubair, deduff);
          await eco.give(person.sender, zubair, deduff);
          await person.reply(`*_Robbery operation done successfully._*\nYou ran with ${deduff} amount in your wallet.`)
          ////person.use('💀')
              break
        case 'caught':
           const rmoney = Math.floor(Math.random() * 1000)
           await eco.deduct(user1, zubair, rmoney);
           await person.reply(`*_Sorry FBI caught up with you, you paid ${rmoney} from wallet🥹._*`)
           ////person.use('😦')
             break
default:
 await person.reply('*_What are you trying to do_*.')
 //person.use('🤔')

 }

    }
)
     Function({
        kingcmd: "withdraw",
        infocmd: "withdraw money from bank account.",
        kingclass: "economy",
        kingpath: __filename,
        use: ""
    },
    async(sigma, person, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: person.chat,
        })) || (await new sck({
                id: person.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return person.reply("*Economy* _is not active in current group._");
        const user = person.sender
		if (!text) return person.reply("*Provide the amount you want to withdraw!*");
		const query = text.trim();
        const zubair = "zubair"
        const withdraw = await eco.withdraw(user, zubair, query);
        if(withdraw.noten) return person.reply('*Insufficient fund in bank*'); //if user states more than whats in his wallet
        const add = eco.give(user, zubair, query);
          person.reply(`*ALERT* \n _${withdraw.amount} has been withdrawn from your wallet._`)
    }
)

     //---------------------------------------------------------------------------
     Function({
        kingcmd: "gamble",
        infocmd: "gamble money.",
        kingclass: "economy",
        kingpath: __filename,
        use: ""
    },
    async(sigma, person, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: person.chat,
        })) || (await new sck({
                id: person.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return person.reply("*Economy* is not active in current group.");
        const user = person.sender
	//	if(person.chat!=="120363043857093839@g.us") return person.reply('This is not a economy group.')
        var texts = text.split(" ");
     var opp = texts[1];// your value
     var value = texts[0].toLowerCase();
     var gg = parseInt(value)
 ///.mentionedJid[0] ? m.mentionedJid[0] : m.sender
     const zubair = "zubair"
     const balance = await eco.balance(user, zubair);
     const g = (balance.wallet) > parseInt(value)
     const k = 50
     const a = (k) > parseInt(value)
     const twice = gg*2
          var hjkl;
     if(opp==='left')
     {
         hjkl = 'https://github.com/secktorBot/Brandimages/blob/main/Nezuko/leftr.webp?raw=true'
     } 
    else if(opp==='right') 
    {
        hjkl = 'https://github.com/secktorBot/Brandimages/blob/main/Nezuko/rightr.webp?raw=true'
    } else if(opp==='up') 
    {
        hjkl = 'https://github.com/secktorBot/Brandimages/blob/main/Nezuko/upr.webp?raw=true'
    } else if (opp==='down'){
        hjkl = 'https://github.com/secktorBot/Brandimages/blob/main/Nezuko/downr.webp?raw=true'
    } else{
        person.reply(`Please provide direction(left,right,up,down).\nEg:- ${prefix}gamble 200 left`)
    }
   let media = await getBuffer(hjkl)
   person.reply(media,{packname:'Asta-Md',author:'Zubair'},"sticker")
     const f = ["up", "right", "left", "down", "up", "left", "down", "right", "up", "down", "right", "left"]
     const r = f[Math.floor(Math.random () * f.length)]
     if (!text) return person.reply(
				`Example:  ${prefix}gamble 100 direction(left,right,up,down)`
			);

            if (!value) return person.reply("*Please, specify the amount you are gambling with!*");
            if (!opp) return person.reply("*Specify the direction you are betting on!*");
            if (!gg) return person.reply("*Check your text please, You are using the command in a wrong way*")
            if (g == false) return person.reply(`*You don't have sufficient 🪙 Diamond to gamble with*`);
        if (a == true) return person.reply(`*Sorry ${person.pushName}, you can only gamble with more than 🪙50.*`);
        if ( r == opp){
           let give = await eco.give(user , zubair, twice);
    //person.use('⭐️')
return await person.reply( `*You won 🪙${twice}*`)
        }
        else{
           let deduct = await eco.deduct(user, zubair, texts[0]);
    //person.use('🤮')
    return await person.reply(`*You lost 🪙${texts[0]}*`)
         }
    }
)




     //---------------------------------------------------------------------------
     Function({
        kingcmd: "slot2",
        infocmd: "withdraw money from bank account.",
        kingclass: "economy",
        kingpath: __filename,
        use: ""
    },
    async(sigma, person, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: person.chat,
        })) || (await new sck({
                id: person.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return person.reply("*Economy* is not active in current group.");
        var today = new Date();
        if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
            if (text == 'help') return person.reply(`*1:* Use ${prefix}slot to play\n\n*2:* You must have 🪙100 in your wallet\n\n*3:* If you don't have money in wallet then 👛withdraw from your bank🏦\n\n*4:* If you don't have 🤑 money in your 🏦bank too then use economy features to 📈gain money`)
            if (text == 'money') return person.reply(`*1:* Small Win --> +🪙20\n\n*2:* Small Lose --> -🪙20\n\n*3:* Big Win --> +🪙100\n\n*4:* Big Lose --> -🪙50\n\n*5:* 🎉 JackPot --> +🪙1000`)
            const fruit1= ["🥥", "🍎", "🍇"]
            const fruit2 = ["🍎", "🍇", "🥥"]
            const fruit3 = ["🍇", "🥥", "🍎"]
            const fruit4 = "🍇"
            const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_']
            const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_']
            const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_']
            const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_']
            const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 🪙1000*']
            const user = person.sender
            const zubair = "zubair"
            const k = 100
            const balance1  = await eco.balance(user, zubair)
            if (k > balance1.wallet) return person.reply(`You are going to be spinning on your wallet, you need at least 🪙100`);
            const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
            const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
            const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
            //const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
            const mess1 = lose[Math.floor(Math.random() * lose.length)];
            const mess2 = won[Math.floor(Math.random() * won.length)];
            const mess3 = near[Math.floor(Math.random() * near.length)];
            const mess4 = jack[Math.floor(Math.random() * jack.length)];
            const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
            if(text.split(' ')[0]){
let value = text.split(' ')[0]
const balance = await eco.balance(person.sender, zubair)
console.log(balance.wallet)
if(value<=balance.wallet){
    const deduff = Math.floor(Math.random() * value)
    if ((f1 !== f2) && f2 !== f3){
        const deduct1 = await eco.deduct(user, zubair, deduff);
        return person.reply(`${mess1}\n\n*Big Lose -->* _🪙${deduff}_`)
     }
     else if ((f1 == f2) && f2 == f3){
        const give1 = await eco.give(user, zubair, deduff/2);
        return person.reply(`${mess2}\n*_Little Jackpot -->* _🪙${deduff/2}_`)
     }
     else if ((f1 == f2) && f2 !== f3){
        const give2 = await eco.give(user, zubair, deduff);
        return person.reply(`${mess3}\n*Small Win -->* _🪙${deduff}_`)
     }
     else if ((f1 !== f2) && f1 == f3){
        const deduct2 = await eco.deduct(user, zubair, deduff);
        return person.reply(`${mess5}\n\n*Small Lose -->* _🪙${deduff}_`)
     }
     else if ((f1 !== f2) && f2 == f3){
        const give4 = eco.give(user, zubair, deduff);
        return person.reply(`${mess3}\n\n*Small Win -->* _🪙${deduff}_`)
     }
     else if ((f1 == f2) && (f2 == f3) && (f3 == f4)){
        const give5 = eco.give(user, zubair, deduff*20);
        return person.reply(`${mess4}\n\n_🎊 JackPot --> _🪙${deduff*20}_`)
     }
     else {
        return person.reply(`Do you understand what you are doing?`)
     }

} else{
    return person.reply('You don\'t have enough 💰amount in your👛 wallet.\n- Please don\'t provide 🤑amount.')
}
            }
            if ((f1 !== f2) && f2 !== f3){
               const deduct1 = await eco.deduct(user, zubair, 50);
                      person.reply(`${mess1}\n\n*Big Lose -->* _🪙50_`)
            }
            else if ((f1 == f2) && f2 == f3){
               const give1 = await eco.give(user, zubair, 100);
                     person.reply(`${mess2}\n*_Little Jackpot -->* _🪙100_`)
            }
            else if ((f1 == f2) && f2 !== f3){
               const give2 = await eco.give(user, zubair, 20);
                     person.reply(`${mess3}\n*Small Win -->* _🪙20_`)
            }
            else if ((f1 !== f2) && f1 == f3){
               const deduct2 = await eco.deduct(user, zubair, 20);
                     person.reply(`${mess5}\n\n*Small Lose -->* _🪙20_`)
            }
            else if ((f1 !== f2) && f2 == f3){
               const give4 = eco.give(user, zubair, 20);
                     person.reply(`${mess3}\n\n*Small Win -->* _🪙20_`)
            }
            else if ((f1 == f2) && (f2 == f3) && (f3 == f4)){
               const give5 = eco.give(user, zubair, 1000);
                    person.reply(`${mess4}\n\n_🎊 JackPot --> _🪙1000_`)
            }
            else {
                    person.reply(`Do you understand what you are doing?`)
            }
         }
         else{
                person.reply(`*You can only play this game during weekends*\n\n*🌿 Friday*\n*🎏 Saturday*\n*🎐 Sunday*`)
         }
    }
)

Function({
    kingcmd: "slot",
    infocmd: "slot game.",
    kingclass: "economy",
    kingpath: __filename,
    use: ""
},
async(sigma, person, text,{ isCreator }) => {
    let zerogroup = (await sck.findOne({
        id: person.chat,
    })) || (await new sck({
            id: person.chat,
        })
        .save());
    let mongoschemas = zerogroup.economy || "false";
    if (mongoschemas == "false") return person.reply("*🚦Economy* is not active in current group.");
    const kg = 100
            const balance1  = await eco.balance(person.sender, "zubair")
            if (kg > balance1.wallet) return person.reply(`You are going to be spinning on your wallet, you need at least 🪙100`);
    var r_ban = new Array ();
    r_ban[0] =    "1 : 2 : 3"
    r_ban[1] = "1 : 2 : 3"
    r_ban[2] = "1 : 2 : 3"
    r_ban[3] = "4 : 3 : 3"
    r_ban[4] = "1 : 1 : 1"
    r_ban[5] = "5 : 2 : 5"
    r_ban[6] = "3 : 5 : 3"
    r_ban[7] = "1 : 3 : 6"
    r_ban[8] = "6 : 2 : 7"
    r_ban[9] = "1 : 6 : 3"
    r_ban[10]= "6 : 3 : 2"
    r_ban[11]= "5 : 5 : 6"
    r_ban[12]= "1 : 5 : 3"
    r_ban[13]= "4 : 1 : 7"
    r_ban[14]= "4 : 3 : 2"
    r_ban[15]= "4 : 3 : 2"
    r_ban[16]= "7 : 4 : 6"
    r_ban[17]= "6 : 5 : 1"
    r_ban[18]= "5 : 7 : 2"


    var p = Math.floor(19*Math.random())
    var q = Math.floor(19*Math.random())
    var r = Math.floor(19*Math.random())
    var i = (r_ban[p]);
    var j = (r_ban[q]);
    var k = (r_ban[r]);
    console.log(i+'\n'+j+'\n'+k)
    let t = i.split(':');
    let tt = j.split(':');
    let ttt = k.split(':');
    var lol;
    if(t[2]===tt[1] && tt[1]===ttt[0]) lol = true
    if(t[0]===tt[1] && tt[1]===ttt[2]) lol = true
    if(t[0]===tt[0] && tt[0]===ttt[0]) lol = true
    if(t[1]===tt[1] && tt[1]===ttt[1]) lol = true
    if(t[2]===tt[2] && tt[2] ===ttt[2]) lol = true
    if(t[0]===tt[1] && tt[1]===ttt[2]) lol = true
    if(t[2]===tt[1] && tt[1]===ttt[0]) lol = true
    if(t[0]===t[1] && t[0]===t[2]) lol = true
    if(tt[0]===tt[1] && tt[0]===tt[2]) lol = true
    if(ttt[0]===ttt[1] && ttt[0]===ttt[2]) lol = true
    if(t[0]===ttt[1] && t[0]===ttt[2]) lol = true
    if(lol){
        const deduff = Math.floor(Math.random() * 5000)
        const give2 = await eco.give(person.sender, "zubair", deduff*2);
        let st = `🎰 Slot Machine Result\n     ${i}\n\n     ${j}\n\n     ${k}\n\nWow Jackpot🎊.`
        let str = st.replace(/1/g, `🔴`).replace(/2/g, `🔵`).replace(/3/g, `🟣`).replace(/4/g, `🟢`).replace(/5/g, `🟡`).replace(/6/g, `⚪️`).replace(/7/g, `⚫️`).replace(/:/g, `  `)
    return await person.reply(str+`You got ${deduff*10} in your wallet.`)
    } else {
    const deduff = Math.floor(Math.random() * 300)
    const deduct1 = await eco.deduct(person.sender, "zubair", deduff);
    let st = `\n🎰 Slot Machine Result\n     ${i}\n\n      ${j}\n\n      ${k}\n\nNot Jacpot📉 but lost `
            let str = st.replace(/1/g, `🔴`).replace(/2/g, `🔵`).replace(/3/g, `🟣`).replace(/4/g, `🟢`).replace(/5/g, `🟡`).replace(/6/g, `⚪️`).replace(/7/g, `⚫️`).replace(/:/g, `    `)
return await person.reply(str+` ${deduff}.`)
}
}
) 

//  This Economy is Developed By @Astropeda
//  Whatsapp +2348039607375
//  Usage And CopyRights Are Reserved 