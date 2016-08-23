// ==UserScript==
// @name        	      Youtube bookmaker
// @namespac              http://tampermonkey.net/
// @version     	      0.1
// @description 	      try to take over the world!
// @author      	      Majkel
// @match                 *://www.youtube.com/watch*
// @require     	      https://code.jquery.com/jquery-2.1.4.min.js
// @domain      	      youtube.com/
// @run-at      	      document-end
// @grant       	      GM_getValue
// @grant       	      GM_setValue
// @grant       	      GM_xmlhttpRequest
// @grant       	      GM_log
// @grant       	      GM_registerMenuCommand
// @grant                 GM_openInTab
// @grant        	      unsafeWindow
// @priority        	  9001
// ==/UserScript==


(function() {
    'use strict';
	setLayout();
    goNotification();
})();



function setLayout(){
	var body = document.getElementById("body-container");
	body.style.backgroundColor = "black";
}

function goNotification(){
	var video = new dom();
    var x = setInterval(function(){ checkForChanges(video); }, 2000);
}

function checkForChanges(video) {
	
}


function notifyMe(t, image) {
	try {
	if (Notification.permission === "granted") {
	
	var n = new Notification("Now palying","title");
	}catch(e){
		console.log(e)
		
	}
  }
}
