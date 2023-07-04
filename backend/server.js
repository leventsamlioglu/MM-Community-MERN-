const express = require("express");
var socket = require("socket.io");
const exportedRoutes = require("./routes/routes");
const mongoose = require("mongoose");
require("dotenv").config();
var cors = require('cors')
const app = express();

//cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const dbURI = process.env.URI;
const port = process.env.PORT;
mongoose
	.connect(dbURI)
	.then(() => {
		console.log("Successfully connected to DB!");
		const server = app.listen(port);

		// Socket connection
		const io = socket(server);
		io.on("connection", (socket) => {
			console.log("made socket connection", socket.id);

			// Handle like event
			socket.on("like", function (data) {
				io.sockets.emit("like", data);
			});
		});
	})
	.catch((err) => console.log(err));

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	cors(
		{
			"origin": [3000],
			"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
			"preflightContinue": false,
			"optionsSuccessStatus": 204
		  }
	)
)

app.set("view engine", "ejs");
app.use(exportedRoutes);
