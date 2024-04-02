const { JokeController } = require("../../controllers")
const { asyncHandler } = require("../../middlewares")
const { Router } = require("express")

const router = Router()

router.post("/", asyncHandler(JokeController.createJoke))
router.get("/random", asyncHandler(JokeController.getRandomJoke))

module.exports = router
