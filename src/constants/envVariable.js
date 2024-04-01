const path = require("path")

require("dotenv").config({ path: path.join(__dirname, "../../.env.development") })

module.exports = {
	PORT: process.env.PORT,
	MONGO_URI: process.env.MONGO_URI,
}
