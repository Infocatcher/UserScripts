// ==UserScript==
// @name           Dirty.ru Title
// @version        0.3.3 - 2012-11-21
// @author         Infocatcher
// @namespace      dev/null
// @run-at         document-start
// @include        http://dirty.ru/comments/*
// @include        http://www.dirty.ru/comments/*
// @include        http://d3.ru/comments/*
// ==/UserScript==

(function reTitle(e) {
	var maxLength = 100;

	if(typeof GM_getValue == "function") { // «"GM_getValue" in this» doesn't work with setTimeout()
		var mm = function(n) {
			return Math.max(15, Math.min(500, isNaN(n) ? 100 : n));
		};
		maxLength = mm(GM_getValue("maxTitleLength", maxLength));
		if("GM_registerMenuCommand" in this && !("_count" in reTitle)) {
			GM_registerMenuCommand("Максимальная длина заголовка…", function() {
				var ml = prompt("Максимальная длина заголовка:", mm(GM_getValue("maxTitleLength", maxLength)));
				if(ml) {
					GM_setValue("maxTitleLength", mm(ml));
					reTitle();
				}
			}, "М");
		}
	}

	function tc(elt) {
		return elt && elt.textContent.replace(/^\s+|\s+$/g, "");
	}
	var c = document.getElementsByTagName("h3");
	c = c.length && c[0];
	var text = tc(c) || tc(document.querySelector("div.post > div.dt"));
	//GM_log(e && typeof e == "object" ? "!!! " + e.type : "timer");
	if(!text) {
		if(!("_count" in reTitle)) {
			reTitle._count = 0;
			if(document.readyState == "loading") {
				// With disabled scripts setTimeout doesn't work
				window.addEventListener("DOMContentLoaded", reTitle, false);
				window.addEventListener("load", reTitle, false);
				reTitle._destroy = function() {
					window.removeEventListener("DOMContentLoaded", reTitle, false);
					window.removeEventListener("load", reTitle, false);
				};
			}
		}
		if(++reTitle._count < 5*60*1000/10)
			setTimeout(reTitle, 10);
		if(e && typeof e == "object" && e.type == "load")
			reTitle._destroy && reTitle._destroy();
		return;
	}
	reTitle._destroy && reTitle._destroy();
	if(text.length > maxLength) {
		var st = text.substr(0, maxLength);
		if(/[а-яёa-z-]$/i.test(st) && /^[а-яёa-z-]/i.test(text.substr(maxLength)))
			st = st.replace(/\s*[а-яёa-z-]*$/i, "");
		st = st.replace(/[\s.,:;…—–-]+$/i, "");
		if(!st)
			return;
		text = st + "…";
	}
	document.title = text + " – " + location.host.replace(/^www\./, "");
})();