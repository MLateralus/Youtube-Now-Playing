// ==UserScript==
// @name        	      Youtube Now Playing
// @namespac			  http://tampermonkey.net/
// @version     	      0.1
// @description 	      Notification to the desktop about current palying video
// @author      	      Majkel
// @match                *://www.youtube.com/watch*
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
// @priority        	      9001
// ==/UserScript==


(function() {
    'use strict';
	setLayout();
    goNotification();
})();


function dom (){
	this.link = '';
	this.title = '';
	this.img = '';
}

function setLayout(){
	var body = document.getElementById("body-container");
	body.style.backgroundColor = "black";
}

function goNotification(){
	var video = new dom();
    var x = setInterval(function(){ checkForChanges(video); }, 2000);
}

function checkForChanges(video) {
	var imageHref = ( document.getElementsByClassName("video-thumb  yt-thumb yt-thumb-48 g-hovercard")[0].children[0].children[0].children[0].src) || '';
		var xx = setInterval(function(){
		if (document.getElementById("eow-title")){
			if (video.link != location.search && video.title != document.getElementById("eow-title").title && imageHref.length){
				clearInterval(xx);
	   			video.link = location.search;
				video.img = imageHref;
				video.title = document.getElementById("eow-title").title;
				notifyMe(video.title, imageHref);
			}
		}
	}, 1000);
}


function notifyMe(t, image) {
	if (Notification.permission === "granted") {
	var options = {
		body: t,
		icon: image || "https://www.gstatic.com/images/icons/material/product/2x/youtube_64dp.png"
	};
	var n = new Notification("Now palying",options);
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
console.log('Michal coś zjebałes');
      }
    });
  }
}
