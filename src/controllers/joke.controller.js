const { JokeService } = require("../services")

class JokeController {
	async createJoke(req, res) {
		const { text } = req.body || {}
    if (!text) {
      throw new Error("Joke text is required")
    }
		const joke = await JokeService.createJoke(req.body)
		return res.status(201).json(joke)
	}
  
  async getRandomJoke(req, res) {
    const { votedJokes } = req.body || {}
    console.log("🚀 ~ JokeController ~ getRandomJoke ~ votedJokes:", votedJokes)
    const joke = await JokeService.getRandomJoke(votedJokes)
    return res.status(200).json(joke)
  }
}

module.exports = JokeController
