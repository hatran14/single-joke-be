const { Joke } = require("../models")

class JokeService {
	/**
	 * Create a new joke entry in the database.
	 * @async
	 * @param {Object} joke - The joke object to be created.
	 * @param {string} joke.text - The text of the joke.
	 * @returns {Promise<Object>} A promise that resolves to the newly created joke object.
	 * @throws {Error} Throws an error if there's an issue creating the joke.
	 */
	async createJoke(joke) {
		try {
			const newJoke = new Joke(joke)
			const savedJoke = await newJoke.save()
			return savedJoke
		} catch (error) {
			throw error
		}
	}
}

module.exports = JokeService
