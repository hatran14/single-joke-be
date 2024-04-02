const { ErrorResponse } = require("../common/error.response")
const env = process.env.NODE_ENV

module.exports = (error, req, res, next) => {
	if (!(error instanceof ErrorResponse) && env === "development") {
		console.error(error)
	}

	const code = error.code || 500
	const message = error.message || "Internal Server Error"
	const errors = error.errors || null

	res.status(code).json({
		status: "Error",
		message,
		code,
		errors,
	})
}
