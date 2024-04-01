const path = require("path")

const envPath = (NODE_ENV) => path.join(__dirname, `../../.env.${NODE_ENV}`)

require("dotenv").config({ path: envPath(process.env.NODE_ENV) })

module.exports = {
	PORT: process.env.PORT,
	MONGO_URI: process.env.MONGO_URI,
}
