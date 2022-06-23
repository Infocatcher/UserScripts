// ==UserScript==
// @name        GisMeteo.ru: Force old style
// @namespace   dev/null
// @author      Infocatcher
// @include     https://www.gismeteo.ru/*
// @version     0.1.2 - 2022-06-23
// @grant       none
// ==/UserScript==

setTimeout(function updateStorage() {
	try {
		M.Storage._setItem('old', '1', 720);
		M.Storage._setItem("droped_old", "1", 24 * 365);
		location.reload();
		return;
	}
	catch(e) {
		console.error(e);
		var link = document.querySelector(".js-old-site-link");
		if(link) {
			link.click();
			return;
		}
	}
	var i = "__iteration" in updateStorage ? ++updateStorage.__iteration : (updateStorage.__iteration = 1);
	if(i <= 20)
		setTimeout(updateStorage, 250);
}, 250);