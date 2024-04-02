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
		votedJokes = votedJokes.map((jokeId) => new ObjectId(jokeId))
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
		const likedJoke = await Joke.findOneAndUpdate(
			{ _id: jokeId },
			{ $inc: { like_votes: 1 } },
			{ new: true }
		)
    return likedJoke
	}
}

module.exports = JokeService
