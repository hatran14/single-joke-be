const { JokeController } = require("../../controllers")
const { asyncHandler } = require("../../middlewares")
const { Router } = require("express")

const router = Router()

router.post("/", asyncHandler(JokeController.createJoke))

module.exports = router
