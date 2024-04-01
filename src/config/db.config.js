const mongoose = require("mongoose")
const { MONGO_URI } = require("../constants")

const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI, {
      dbName: "single-joke",
      retryWrites: true,
      w: "majority",
    })
		console.log("Connect to MongoDB successfully")
	} catch (err) {
		console.error("Error Connection: ", err)
	}
}

module.exports = connectDB
