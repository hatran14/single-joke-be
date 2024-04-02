const { JokeController } = require("../../controllers")
const { asyncHandler } = require("../../middlewares")
const { Router } = require("express")

const router = Router()

router.post("/", asyncHandler(JokeController.createJoke))
router.get("/random", asyncHandler(JokeController.getRandomJoke))
router.put("/:jokeId/like", asyncHandler(JokeController.likeJoke))

module.exports = router
