const express = require("express")
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require('swagger-jsdoc');

const { connectDB, swaggerOptions } = require("./config")
const { v1 } = require("./routes")

const app = express()

connectDB()

const swaggerSpec = swaggerJSDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", (req, res) => {
	res.send("Hello World!")
})

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookieParser());

v1(app)

module.exports = app
