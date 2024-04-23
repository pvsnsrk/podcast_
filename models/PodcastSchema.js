const mongoose = require("mongoose");

const PodcastSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author_name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  lang: { type: String, required: true },
  timesplayed: { type: String, required: true },
  type: { type: String, required: true },
  musicName: { type: String, required: true },
});

module.exports = mongoose.model("Podcast", PodcastSchema);
