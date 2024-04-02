const { JokeController } = require("../../controllers");
const { asyncHandler } = require("../../middlewares");
const { Router } = require("express");

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *    Joke:
 *      type: object
 *      required:
 *       - text
 *      properties:
 *        text:
 *          type: string
 *          description: The text of the joke.
 *          example: "Why did the scarecrow win an award?"
 *        like_votes:
 *          type: number
 *          description: The number of likes for the joke.
 *          example: 0
 *        dislike_votes:
 *          type: number
 *          description: The number of dislikes for the joke.
 *          example: 0
 */

/**
 * @swagger
 * tags:
 *  name: Jokes
 *  description: The jokes managing API
 */

/**
 * @swagger
 * /jokes:
 *  post:
 *    summary: Create a new joke
 *    tags: [Jokes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Joke'
 *    responses:
 *      201:
 *        description: The joke was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Joke'
 *      500:
 *        description: Internal server error
 */
router.post("/", asyncHandler(JokeController.createJoke));

/**
 * @swagger
 * /jokes/random:
 *  get:
 *    summary: Get a random joke
 *    tags: [Jokes]
 *    parameters:
 *      - in: query
 *        name: votedJokes
 *        description: An array of joke IDs that the user has already voted on
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A random joke object
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Joke'
 *      400:
 *        description: Invalid joke ID
 *      500:
 *        description: Internal Server Error
 */

router.get("/random", asyncHandler(JokeController.getRandomJoke));

/**
 * @swagger
 * /jokes/{jokeId}/like:
 *  put:
 *    summary: Like a joke
 *    tags: [Jokes]
 *    parameters:
 *      - in: path
 *        name: jokeId
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the joke to like
 *    responses:
 *      200:
 *        description: Joke liked successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Joke liked successfully
 *      400:
 *        description: Invalid joke ID
 *      404:
 *        description: Joke not found
 *      500:
 *        description: Internal Server Error
 */
router.put("/:jokeId/like", asyncHandler(JokeController.likeJoke));

/**
 * @swagger
 * /jokes/{jokeId}/dislike:
 *  put:
 *    summary: Dislike a joke
 *    tags: [Jokes]
 *    parameters:
 *      - in: path
 *        name: jokeId
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the joke to dislike
 *    responses:
 *      200:
 *        description: Joke disliked successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Joke disliked successfully
 *      400:
 *        description: Invalid joke ID
 *      404:
 *        description: Joke not found
 *      500:
 *        description: Internal Server Error
 */
router.put("/:jokeId/dislike", asyncHandler(JokeController.dislikeJoke));

module.exports = router;
