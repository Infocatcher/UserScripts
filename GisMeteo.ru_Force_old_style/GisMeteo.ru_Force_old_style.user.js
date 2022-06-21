// ==UserScript==
// @name        GisMeteo.ru: Force old style
// @namespace   dev/null
// @author      Infocatcher
// @include     https://www.gismeteo.ru/*
// @version     0.1.1 - 2022-01-05
// @grant       none
// ==/UserScript==

setTimeout(function updateStorage() {
	try {
		M.Storage._setItem("old", "1", 720, "/", window.location.hostname);
		M.Storage._setItem("droped_old", "1", 24 * 365);
	}
	catch(e) {
		console.error(e);
		var link = document.querySelector(".js-old-site-link");
		link && link.click();
	}
}, 5000);