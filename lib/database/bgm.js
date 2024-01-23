const mongoose = require('mongoose');
const BGM = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true, default:"1"},
  bgm: { type: Boolean, default: false },
  bgmArray: { type: Map, of: String, default: {} },
  JjmVids: { type: String, default: "" }, //Jujusto Anime Videos To save Here
  });

const bgms =mongoose.model("bgms", BGM)
module.exports = { bgms } 