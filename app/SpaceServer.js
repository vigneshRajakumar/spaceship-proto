/*
 * SpaceServer.js
 * 
 * Usage: 
 *   node SpaceServer.js
 */

"use strict";

var LIB_PATH = "./";

function SpaceServer() {
	var port; // Game port 
	var count; // Keeps track how many people are connected to server 
	var nextPID; // PID to assign to next connected player (i.e. which player slot is open) 
	var gameInterval; // Interval variable used for gameLoop 

	var gameLoop = function() {

	}

	var startGame = function() {
		gameInterval = setInterval(function() {
			gameLoop();
		}, 1000 / Space.FRAME_RATE);
	}

	this.start = function() {
		try {
			var express = require('express');
			var http = require('http');

			count = 0;
			nextPID = 1;
			gameInterval = undefined;

			//put socket listeners here

			var app = express();
			var httpServer = http.createServer(app);

			httpServer.listen(Space.PORT, '0.0.0.0');
			app.use(express.static(__dirname));
			console.log("Server running on http://0.0.0.0:" + Space.PORT + "\n")
			console.log("Visit http://0.0.0.0:" + Space.PORT + "/index.html in your " +
				"browser to start the game")
		} catch (e) {
			console.log("Cannot listen to " + Space.PORT);
            console.log("Error: " + e);
		}
	}
}

var gameServer = new SpaceServer();
gameServer.start();
