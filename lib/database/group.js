const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "true" },
nsfw : { type: String, default: "false" },
pdm : { type: String, default: "false" },
antipromote  : { type: String, default: "false" },
antidemote  : { type: String, default: "false" },
welcome :{ type: String, default: `*@user @pp Welcome Bruhhh In @gname.....!!!!!😊👇🏻♥️* \n\n*_GROUP DESCRIPTION_*\n@desc\n\n\n *______________*\n   *Support us by Subscribing*\n*Youtube.com/suhailtechinfo*`},
goodbye :{ type: String, default: `*@user @pp Left From @gname.....!!!!!😒👆🏻♥️* \n\n*_GROUP DESCRIPTION_*\n@desc\n\n\n *______________*\n   *Support us by Subscribing*\n*Youtube.com/suhailtechinfo*` },
botenable : { type: String, default: "true" },
antilink : { type: String, default: "false" },
//antiword : { type: String, default: "false" },
antifake : { type: String, default: "false" },
antispam : { type: String, default: "false" },
antibot : { type: String, default: "false" },
onlyadmin : { type: String , default: "false" },
economy : { type: String, default: "false" },
disablecmds : { type: String, default: "false" },
mute : { type: String },
unmute : { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck } 



 

