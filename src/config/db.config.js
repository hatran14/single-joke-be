const mongoose = require("mongoose")
const { MONGO_URI } = require("../constants")

const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log("Connect to MongoDB successfully")
	} catch (err) {
		console.error("Error Connection: ", err)
	}
}

module.exports = connectDB
