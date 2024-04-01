const { JokeService } = require("../services")

class JokeController {
	async createJoke(req, res) {
    console.log('req.body', req.body)
		const joke = await JokeService.createJoke(req.body)
		res.status(201).json(joke)
	}
}

module.exports = JokeController
