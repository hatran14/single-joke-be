const mongoose = require("mongoose")

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: true,
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