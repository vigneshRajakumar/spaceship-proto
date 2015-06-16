/*
 * SpaceClient.js
 * 
 * Usage: 
 *    Include in HTML body onload to run on a web page.
 *    <body onload="loadScript('', 'SpaceClient.js')">
 */

 "use strict";

 function SpaceClient() {
 	var playArea;       // HTML5 canvas game window 

 	var iniNetwork = function() {
 		//initiate network.
 		//connect to gameserver
 		//set up socket listeners
 	}

 	var initGUI = function() {
 		while(document.readyState !== "complete") {console.log("loading...");};
	    playArea = document.getElementById("playArea");
        playArea.height = Space.HEIGHT;
        playArea.width = Space.WIDTH;

        //add event handlers
 	}

 	var gameLoop = function() {
 		render();
 	}

 	var render = function() {

 	}

 	this.start = function() {
 		iniNetwork();
 		initGUI();
 		setInterval(function() {gameLoop();}, 1000/Space.FRAME_RATE);
 	}
 }

var client = new SpaceClient();
setTimeout(function() {client.start();}, 500);