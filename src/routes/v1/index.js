const jokeRouter = require("./joke.route")

const route = (app) => {
  app.use("/api/v1/jokes", jokeRouter)
}

module.exports = route
