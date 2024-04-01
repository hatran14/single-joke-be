const app = require('./app')
const { PORT } = require('./constants')

app.listen(PORT || 3000, () => {
  console.log(`App started on port ${PORT || 3000}`)
})
