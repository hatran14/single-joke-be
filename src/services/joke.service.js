const { BadRequest, NotFoundResponse } = require("../common/error.response")
const { Joke } = require("../models")
const { ObjectId } = require("mongodb")

class JokeService {
	/**
	 * Create a new joke entry in the database.
	 * @async
	 * @param {Object} joke - The joke object to be created.
	 * @param {string} joke.text - The text of the joke.
	 * @returns {Promise<Object>} A promise that resolves to the newly created joke object.
	 */
	async createJoke(joke) {
		const newJoke = new Joke(joke)
		const savedJoke = await newJoke.save()
		return savedJoke
	}

	/**
	 * Get a random joke from the database.
	 * @async
	 * @returns {Promise<Object>} A promise that resolves to a random joke object.
	 */
	async getRandomJoke(votedJokes = []) {
		votedJokes = votedJokes.map((jokeId) => {
      if (ObjectId.isValid(jokeId) === false) {
        throw new BadRequest("Invalid joke ID")
      }
			return new ObjectId(jokeId)
		})
		const joke = await Joke.aggregate([
			{ $match: { _id: { $nin: votedJokes } } },
			{ $sample: { size: 1 } },
		])
		return joke[0]
	}

	/**
	 * Increment the like_votes count for a joke.
	 * @async
	 * @param {string} jokeId - The ID of the joke to be liked.
	 * @returns {Promise<Object>} A promise that resolves to the updated joke object.
	 */
	async likeJoke(jokeId) {
    if (ObjectId.isValid(jokeId) === false) {
      throw new BadRequest("Invalid joke ID")
    }
		const likedJoke = await Joke.findOneAndUpdate(
			{ _id: jokeId },
			{ $inc: { like_votes: 1 } },
			{ new: true }
		)
    if (!likedJoke) {
      throw new NotFoundResponse("Joke not found")
    }
		return likedJoke
	}

	/**
	 * Increment the dislike_votes count for a joke.
	 * @async
	 * @param {string} jokeId - The ID of the joke to be disliked.
	 * @returns {Promise<Object>} A promise that resolves to the updated joke object.
	 */
	async dislikeJoke(jokeId) {
    if (ObjectId.isValid(jokeId) === false) {
      throw new BadRequest("Invalid joke ID")
    }
		const dislikedJoke = await Joke.findOneAndUpdate(
			{ _id: jokeId },
			{ $inc: { dislike_votes: 1 } },
			{ new: true }
		)
    if (!dislikedJoke) {
      throw new NotFoundResponse("Joke not found")
    }
		return dislikedJoke
	}
}

module.exports = JokeService
