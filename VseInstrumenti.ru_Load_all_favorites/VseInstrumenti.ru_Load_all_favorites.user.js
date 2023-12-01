// ==UserScript==
// @name        VseInstrumenti.ru: Load all favorites
// @author      Infocatcher
// @namespace   dev/null
// @include     https://www.vseinstrumenti.ru/user/favorites
// @include     https://www.vseinstrumenti.ru/user/favorites/
// @version     0.1.0.2 - 2022-08-22
// @grant       none
// ==/UserScript==

(function iteration() {
	var btnLoad = /Показать ещ[её]/i;
	var btnLoading = /Загружается/i;
	var ttls = ["⏳ ", "⌛️ "]; // Clock/hourglass emoji
	var ttlsScroll = ["🔁 ", "⏬ "]; // Reload + down arrows
	var useScroller = true;
	var msg = "[VSI loader]: ";
	iteration.__titles = ttls;
	var btnNext = iteration.__btnNext || (iteration.__btnNext = (function() {
		var btns = document.getElementsByTagName("button");
		btnLoop: for(var i = 0, l = btns.length; i < l; ++i) {
			var btn = btns[i];
			//console.log(msg + btn.textContent);
			if(btnLoad.test(btn.textContent)) {
				for(var pn = btn; (pn = pn.parentNode); )
					if(pn.nodeName == "ASIDE")
						continue btnLoop;
				return btn;
			}
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
		iteration.__done = true;
		console.log(msg + "done!");
		if(useScroller) {
			iteration.__index = 0;
			iteration.__titles = ttlsScroll;
			if(iteration.__scroller)
				document.title = prefix();
		}
		return;
	}
	if(btnLoading.test(btnNext.textContent) || btnNext.disabled) {
		console.log(msg + "loading, wait…");
		setTimeout(iteration, 200);
		return;
	}

	document.title = prefix();

	console.log(msg + "load next");
	btnNext.click();
	setTimeout(iteration, 300);
	if(useScroller && !iteration.__scroller) {
		var step = Math.round(window.innerHeight/2);
		scrollTo(0, 0);
		iteration.__scrollUpdate = 0;
		iteration.__scroller = setInterval(function() {
			var y = window.scrollY;
			scrollBy(0, step);
			if(window.scrollY - y <= 20) {
				clearInterval(iteration.__scroller);
				delete iteration.__scroller;
				scrollTo(0, 0);
				console.log(msg + "scroll loading done!");
				if(iteration.__done || false)
					document.title = unprefix();
			}
			else if(iteration.__done || false) {
				var t = new Date().getTime();
				if(t - iteration.__scrollUpdate > 650) {
					iteration.__scrollUpdate = t;
					document.title = prefix();
				}
			}
		}, 100);
	}

	function prefix() {
		var ttls = iteration.__titles;
		var indx = "__index" in iteration ? ++iteration.__index : (iteration.__index = 0);
		if(indx >= ttls.length)
			indx = iteration.__index = 0;
		return ttls[indx] + unprefix();
	}
	function unprefix() {
		var t = document.title;
		var ttls = iteration.__titles;
		for(var i = 0, l = ttls.length; i < l; ++i) {
			var p = ttls[i];
			if(t.startsWith(p))
				return t.substr(p.length);
		}
		return t;
	}
})();