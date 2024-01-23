const mongoose = require('mongoose');
const Alive = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true, default:"1"},
  text: { type: String, default: `*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ* \n\n_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ \n_Cʀєαtєd вყ : ѕυнαιℓ tєᴄʜ info_\n_If any query : wa.me/923184474176_\n\n\n*_Update Alive Message by adding text with Alive_* \n*Eg: _.alive Your_Alive_Message_*` },
  get:  { type: String, default: `*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ* \n\n_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ \n_Cʀєαtєd вყ : ѕυнαιℓ tєᴄʜ info_\n_If any query : wa.me/923184474176_\n\n\n*_Update Alive Message by adding text with Alive_* \n*Eg: _.alive Your_Alive_Message_*` },
  url: { type: String, default:""},
  image: { type: Boolean, default: false },
  video: { type: Boolean, default: false }
});

const alive =mongoose.model("alive", Alive)
module.exports = { alive }

 

