const mongoose = require("mongoose")

const jokeSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  like_votes: {
    type: Number,
    default: 0,
  },
  dislike_votes: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
})

const Joke = mongoose.model("Joke", jokeSchema)

module.exports = Joke