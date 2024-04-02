const { MONGO_URI, PORT } = require("./envVariable")
const ReasonPhrases = require("./reasonPhrases")
const StatusCodes = require("./statusCodes")

module.exports = {
	MONGO_URI,
	PORT,
  ReasonPhrases,
  StatusCodes
}