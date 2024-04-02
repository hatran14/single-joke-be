const { SuccessResponse, BadRequest } = require("../common/error.response")
const { CreatedResponse } = require("../common/success.response")
const { JokeService } = require("../services")

class JokeController {
	async createJoke(req, res) {
		const { text } = req.body || {}
		if (!text) {
			throw new BadRequest("Joke text is required")
		}
		const joke = await JokeService.createJoke(req.body)
		return new CreatedResponse({ metadata: joke }).send({ res })
	}

	async getRandomJoke(req, res) {
		let { votedJokes } = req.query || {}
		votedJokes = JSON.parse(votedJokes || "[]")
		const joke = await JokeService.getRandomJoke(votedJokes)
		return new SuccessResponse({ metadata: joke }).send({ res })
	}

	async likeJoke(req, res) {
		const { jokeId } = req.params || {}
		if (!jokeId) {
			throw new BadRequest("Joke ID is required")
		}
		const likedJoke = await JokeService.likeJoke(jokeId)
		return new SuccessResponse({ metadata: likedJoke }).send({ res })
	}

	async dislikeJoke(req, res) {
		const { jokeId } = req.params || {}
		if (!jokeId) {
			throw new BadRequest("Joke ID is required")
		}
		const dislikedJoke = await JokeService.dislikeJoke(jokeId)
		return new SuccessResponse({ metadata: dislikedJoke }).send({ res })
	}
}

module.exports = JokeController
