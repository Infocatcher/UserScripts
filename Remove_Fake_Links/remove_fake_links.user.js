// ==UserScript==
// @name        Remove fake links
// @description Remove tracking redirects like http://www.google.com/url?... and http://clck.yandex.ru/redir/...
// @author      Infocatcher
// @version     0.2.0pre5 - 2013-07-20
// @run-at      document-start
// @namespace   dev/null
// @include     http://www.google.*/search?*
// @include     https://www.google.*/search?*
// @include     http://www.google.*/webhp?*
// @include     https://www.google.*/webhp?*
// @include     http://www.google.*/#*q=*
// @include     https://www.google.*/#*q=*
// @include     http://www.google.*/
// @include     https://www.google.*/
// @include     https://encrypted.google.com/search?*
// @include     https://encrypted.google.com/#*q=*
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
// @include     http://www.mts.ru/*
// @include     http://4pda.ru/*
// @grant       none
// ==/UserScript==

(function() {

var isNoScript = window.getComputedStyle(document.createElement("noscript"), null).display != "none";
var exclude;
// Uncomment following to leave "Warning - visiting this web site may harm your computer!"
//exclude = /^https?:\/\/(?:www\.)google\.[\w.]+\/interstitial\?url=http\S+$/;

// You can comment two following lines to increase performance
window.addEventListener("mouseover", clearLink, true);
window.addEventListener("focus", clearLink, true);
window.addEventListener("mousedown", clearLink, true);
window.addEventListener("unload", function destroy(e) {
	window.removeEventListener(e.type, destroy, false);
	window.removeEventListener("mouseover", clearLink, true);
	window.removeEventListener("focus", clearLink, true);
	window.removeEventListener("mousedown", clearLink, true);
}, false);

// Based on code from https://github.com/Infocatcher/Bookmarklets/blob/master/showAnchors.js
var setTimeout = window.setTimeout;
if(isNoScript) {
	if("postMessage" in window) {
		setTimeout = function fakeTimeout(callback) {
			var key = "removeTrackingLinksFakeTimeout#" + Math.random().toFixed(16).substr(2);
			window.addEventListener("message", function onMessage(e) {
				if(e.data !== key)
					return;
				var origin = e.origin;
				if(!origin || location.href.substr(0, origin.length) !== origin)
					return;
				window.removeEventListener("message", onMessage, false);
				callback();
			}, false);
			window.postMessage(key, location.href);
		}
	}
	else {
		setTimeout = function(callback) {
			callback();
		};
	}
}

function clearLink(e) {
	var a = getLink(e);
	if(!a)
		return;

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
	var h = a.href;
	if(exclude && exclude.test(h))
		return;
	if(/^https?:\/\/(?:\w+\.)?google\.[\w.]+\/.*=(https?:\/\/[^&?]*)/.test(h)) {
		var _h = RegExp.$1;
		if(!/^https?:\/\/(?:\w+\.)?google\.[\w.]+\/(search|imgres)\?/.test(h))
			a.href = decodeURIComponent(_h);
	}
	else if(/^https?:\/\/clck\.yandex\.\w+\/redir\/.*?\*(https?:\/\/.*)$/.test(h))
		a.href = RegExp.$1;
	else if(
		/^https?:\/\/r\.mail\.yandex\.net\/url(s)?\/[^\/]+\/([^?]+)$/.test(h)
		|| /https?:\/\/news\.yandex\.ru\/yandsearch\?.*url(s)?=([^?]+)$/.test(h)
	)
		a.href = "http" + RegExp.$1 + "://" + decodeURIComponent(RegExp.$2);
	else if(/^https?:\/\/ads\.adfox\.ru\/.*goLink\?.*@(http\S+)$/.test(h))
		a.href = RegExp.$1;
	else if(/^https?:\/\/4pda\.ru\/[^#]+=(http[^?&#\/]+)/.test(h))
		a.href = decodeURIComponent(RegExp.$1);
	if(a.href != h) {
		// Force update link in status bar
		if(e.type == "focus") {
			a.ownerDocument.documentElement.focus();
			setTimeout(function() {
				a.focus();
			}, 0);
		}
		else if(e.type == "mouseover") {
			var s = a.style;
			var v = s.visibility || "";
			s.visibility = "hidden";
			setTimeout(function() {
				s.visibility = v;
			}, 0);
		}
	}
}
function getLink(e) {
	for(var a = e.target; a && a.localName; a = a.parentNode)
		if(a.localName.toLowerCase() == "a")
			return a.href && a;
	return null;
}

})();