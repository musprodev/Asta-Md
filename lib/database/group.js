const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw : { type: String, default: "false" },
pdm : { type: String, default: "false" },
antipromote  : { type: String, default: "false" },
antidemote  : { type: String, default: "false" },
welcome :{ type: String, default: ` @pp *_HI Dear @user_*\n*_Welcome In ♥️ @gname_*\n*_Read The Description CareFully_*\n\n\n*_Support Me By Subscribing_*\n*_https://www.youtube.com/@InnoxentTech_*` },
goodbye :{ type: String, default: ` @pp *_The @user_*\n*_Left The ♥️ @gname_*\n*_Read The Description CareFully_*\n\n\n*_Support Me By Subscribing_*\n*_https://www.youtube.com/@InnoxentTech_*` },
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



 

