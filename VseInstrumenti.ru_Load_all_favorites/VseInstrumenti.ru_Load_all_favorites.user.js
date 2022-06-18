// ==UserScript==
// @name        VseInstrumenti.ru: Load all favorites
// @namespace   dev/null
// @include     https://www.vseinstrumenti.ru/user/favorites
// @version     0.1.0pre
// @grant       none
// ==/UserScript==

(function iteration() {
	var msg = "[VSI loader]: ";
	var btnNext = iteration.__btnNext || (iteration.__btnNext = (function() {
		var btns = document.getElementsByTagName("button");
		for(var i = 0, l = btns.length; i < l; ++i) {
			var btn = btns[i];
			//console.log(msg + btn.textContent);
			if(/Показать ещё/i.test(btn.textContent))
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
	if(/Загружается/i.test(btnNext.textContent)) {
		console.log(msg + "loading, wait…");
		setTimeout(iteration, 200);
		return;
	}
	console.log(msg + "load next");
	btnNext.click();
	setTimeout(iteration, 300);
})();