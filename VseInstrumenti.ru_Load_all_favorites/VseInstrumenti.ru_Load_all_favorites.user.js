// ==UserScript==
// @name        VseInstrumenti.ru: Load all favorites
// @author      Infocatcher
// @namespace   dev/null
// @include     https://www.vseinstrumenti.ru/user/favorites
// @version     0.1.0pre
// @grant       none
// ==/UserScript==

(function iteration() {
	var btnLoad = /Показать ещё/i;
	var btnLoading = /Загружается/i;
	var ttls = ["⏳ ", "⌛️ "]; // Clock/hourglass emoji
	var msg = "[VSI loader]: ";
	var btnNext = iteration.__btnNext || (iteration.__btnNext = (function() {
		var btns = document.getElementsByTagName("button");
		for(var i = 0, l = btns.length; i < l; ++i) {
			var btn = btns[i];
			//console.log(msg + btn.textContent);
			if(btnLoad.test(btn.textContent))
				return btn;
		}
		return null;
	})());
	if(!btnNext) {
		console.log(msg + "wait for button…");
		setTimeout(iteration, 200);
		return;
	}
	if(!btnNext.parentNode) {
		document.title = unprefix();
		console.log(msg + "done!");
		return;
	}
	if(btnLoading.test(btnNext.textContent)) {
		console.log(msg + "loading, wait…");
		setTimeout(iteration, 200);
		return;
	}

	var indx = "__index" in iteration ? ++iteration.__index : (iteration.__index = 0);
	if(indx >= ttls.length)
		indx = iteration.__index = 0;
	document.title = ttls[indx] + unprefix();

	console.log(msg + "load next");
	btnNext.click();
	setTimeout(iteration, 300);

	function unprefix() {
		var t = document.title;
		for(var i = 0, l = ttls.length; i < l; ++i) {
			var p = ttls[i];
			if(t.startsWith(p))
				return t.substr(p.length);
		}
		return t;
	}
})();