const path = require("path")

const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Joke API",
			version: "1.0.0",
			description: "A simple Express Joke API",
		},
		servers: [
			{
				url: "http://localhost:3000/api/v1",
			},
      {
        url: "https://single-joke-be.vercel.app/api/v1",
      }
		],
	},
	apis: [path.join(__dirname, "../routes/v1/*.js")],
}

module.exports = swaggerOptions
