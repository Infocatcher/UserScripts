// ==UserScript==
// @name        Remove fake links
// @description Remove tracking redirects like http://www.google.com/url?... and http://clck.yandex.ru/redir/...
// @author      Infocatcher
// @version     0.1.9 - 2012-10-16
// @run-at      document-start
// @namespace   dev/null
// @include     http://www.google.*/search?*
// @include     https://www.google.*/search?*
// @include     http://www.google.*/webhp?*
// @include     https://www.google.*/webhp?*
// @include     http://www.google.*/#*q=*
// @include     https://www.google.*/#*q=*
// @include     http://www.google.*/imgres?*
// @include     https://www.google.*/imgres?*
// @include     http://groups.google.com/*
// @include     https://groups.google.com/*
// @include     http://yandex.*/yandsearch?*
// @include     https://yandex.*/yandsearch?*
// @include     http://market.yandex.ru/model.xml?*
// @include     https://market.yandex.ru/model.xml?*
// @include     http://mail.yandex.ru/*
// @include     https://mail.yandex.ru/*
// @grant       none
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
			if(a.hasAttribute("onclick")) {
				var onclick = a.getAttribute("onclick");
				if(/(^|\W)location\.replace\(/.test(onclick)) {
					a.setAttribute("__deleted__onclick", onclick);
					a.removeAttribute("onclick");
				}
			}
			if(exclude && exclude.test(a.href))
				break;
			else if(/^https?:\/\/(?:\w+\.)?google\.[\w.]+\/.*=(https?:\/\/[^&?]*)/.test(a.href)) {
				var h = RegExp.$1;
				if(!/^https?:\/\/(?:\w+\.)?google\.[\w.]+\/(search|imgres)\?/.test(a.href))
					a.href = decodeURIComponent(h);
			}
			else if(/^https?:\/\/clck\.yandex\.\w+\/redir\/.*?\*(https?:\/\/.*)$/.test(a.href))
				a.href = RegExp.$1;
			else if(/^https?:\/\/r\.mail\.yandex\.net\/url(s)?\/[^\/]+\/([^&?]+)$/.test(a.href))
				a.href = "http" + RegExp.$1 + "://" + decodeURIComponent(RegExp.$2);
			break;
		}
	}
}, true);