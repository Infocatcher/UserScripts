// ==UserScript==
// @name           Remove fake links
// @description    Remove tracking redirects like http://www.google.com/url?... and http://clck.yandex.ru/redir/...
// @author         Infocatcher
// @version        0.1.7 - 2012-04-08
// @run-at         document-start
// @namespace      dev/null
// @include        http://www.google.*/search?*
// @include        https://www.google.*/search?*
// @include        http://www.google.*/#*q=*
// @include        https://www.google.*/#*q=*
// @include        http://groups.google.com/*
// @include        https://groups.google.com/*
// @include        http://yandex.*/yandsearch?*
// @include        https://yandex.*/yandsearch?*
// @include        http://market.yandex.ru/model.xml?*
// @include        https://market.yandex.ru/model.xml?*
// ==/UserScript==

window.addEventListener("mousedown", function(e) {
	var exclude;
	// Uncomment following to leave "Warning - visiting this web site may harm your computer!"
	//exclude = /^https?:\/\/(?:www\.)google\.[\w.]+\/interstitial\?url=http\S+$/;
	for(var a = e.target; a && a.localName; a = a.parentNode) {
		if(a.localName.toLowerCase() == "a" && a.href) {
			if(a.hasAttribute("onmousedown")) {
				a.setAttribute("__deleted__onmousedown", a.getAttribute("onmousedown"));
				a.removeAttribute("onmousedown");
			}
			if(exclude && exclude.test(a.href))
				break;
			else if(/^https?:\/\/(?:\w+\.)?google\.[\w.]+\/.*=(https?:\/\/[^&?]*)/.test(a.href)) {
				var h = RegExp.$1;
				if(!/^https?:\/\/(?:\w+\.)?google\.[\w.]+\/search\?q=/.test(a.href))
					a.href = decodeURIComponent(h);
			}
			else if(/^https?:\/\/clck\.yandex\.\w+\/redir\/.*?\*(https?:\/\/.*)$/.test(a.href))
				a.href = RegExp.$1;
			break;
		}
	}
}, true);