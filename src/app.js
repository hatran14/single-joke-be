const express = require("express")

const { connectDB } = require("./config")

const app = express()

connectDB()

app.get("/", (req, res) => {
	res.send("Hello World!")
})

module.exports = app
