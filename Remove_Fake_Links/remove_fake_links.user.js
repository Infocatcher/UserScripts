// ==UserScript==
// @name        Remove fake links
// @description Remove tracking redirects like http://www.google.com/url?... and http://clck.yandex.ru/redir/...
// @author      Infocatcher
// @version     0.2.0pre15 - 2015-06-12
// @run-at      document-start
// @namespace   dev/null
// @include     http://www.google.*/search?*
// @include     https://www.google.*/search?*
// @include     http://www.google.*/webhp?*
// @include     https://www.google.*/webhp?*
// @include     http://www.google.*/#*q=*
// @include     https://www.google.*/#*q=*
// @include     http://www.google.*/?*
// @include     https://www.google.*/?*
// @include     http://www.google.*/
// @include     https://www.google.*/
// @include     https://encrypted.google.com/search?*
// @include     https://encrypted.google.com/#*q=*
// @include     http://www.google.*/imgres?*
// @include     https://www.google.*/imgres?*
// @include     http://groups.google.com/*
// @include     https://groups.google.com/*
// @include     http://docs.google.com/document/*
// @include     https://docs.google.com/document/*
// @include     http://yandex.*/yandsearch?*
// @include     https://yandex.*/yandsearch?*
// @include     http://yandex.*/search/*
// @include     https://yandex.*/search/*
// @include     http://market.yandex.ru/model.xml?*
// @include     https://market.yandex.ru/model.xml?*
// @include     http://mail.yandex.*/*
// @include     https://mail.yandex.*/*
// @include     http://news.yandex.*/*
// @include     https://news.yandex.*/*
// @include     https://duckduckgo.com/?*
// @include     http://www.mts.ru/*
// @include     http://4pda.ru/*
// @include     http://*.deviantart.com/*
// @include     https://*.deviantart.com/*
// @include     https://addons.mozilla.org/*
// @include     https://www.facebook.com/*
// @include     http://steamcommunity.com/*
// @include     https://steamcommunity.com/*
// @include     http://store.steampowered.com/*
// @grant       none
// ==/UserScript==

(function() {

var _debug = true; // Show debug messages in Web Console
var isNoScript = window.getComputedStyle(document.createElement("noscript"), null).display != "none";
var exclude = [
	// "Warning - visiting this web site may harm your computer!"
	// /^https?:\/\/(?:www\.)google\.[\w.]+\/interstitial\?url=http\S+$/,
	/^https?:\/\/accounts\.google(?:\.\w+){1,2}\/ServiceLogin\?/,
	/^https?:\/\/translate\.google(?:\.\w+){1,2}\/translate\?/,
	/^https?:\/\/news\.yandex\.\w+\/yandsearch.*[?&]cl4url=/
];
var removeOnTheFly = true;
var deleted = "__deleted__"; // Prefix to rename attributes

if(removeOnTheFly) {
	window.addEventListener("mouseover", clearLink, true);
	window.addEventListener("focus", clearLink, true);
}
window.addEventListener("mousedown", clearLink, true);
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("unload", function destroy(e) {
	window.removeEventListener(e.type, destroy, false);
	if(removeOnTheFly) {
		window.removeEventListener("mouseover", clearLink, true);
		window.removeEventListener("focus", clearLink, true);
	}
	window.removeEventListener("mousedown", clearLink, true);
	window.removeEventListener("keydown", handleKeyDown, true);
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

	renameAttr(a, "onclick", /(^|\W)location\.replace\(/);
	renameAttr(a, "onmousedown");
	renameAttr(a, "data-vdir-href"); // mail.yandex.ru
	renameAttr(a, "data-orig-href"); // mail.yandex.ru

	var h = a.href;
	var nh = h;
	var host = location.hostname;
	if( // See https://github.com/Infocatcher/UserScripts/issues/5
		host == "addons.mozilla.org"
		&& (
			!/^\w+:\/+(?:[\w-]+\.)*mozilla\.(?:net|org)\//.test(h) // Only for external links
			|| /^https?:\/\/forums\.mozilla\.org\//.test(h)
		)
	) {
		var $ = window.$ // Greasemonkey
			|| typeof unsafeWindow != "undefined" && unsafeWindow.$ // Scriptish
			|| null;
		if($) try {
			$(a).unbind("click");
			_log("Remove jQuery handlers for \"click\" event");
		}
		catch(e) {
			setTimeout(function() { throw e; }, 0);
		}
	}
	if(host == "www.facebook.com") // See https://github.com/Infocatcher/UserScripts/issues/6
		renameAttr(a, "onclick", "=http") && renameAttr(a, "onmouseover");
	if(host == "duckduckgo.com") {
		var DDG = window.DDG
			|| typeof unsafeWindow != "undefined" && unsafeWindow.DDG
			|| null;
		if(
			DDG
			&& "get_http_redirect" in DDG
			&& ("" + DDG.get_http_redirect).indexOf("encodeURIComponent") != -1
		) {
			_log("Override DDG.get_http_redirect()");
			DDG.get_http_redirect = function(a) {
				return a.href;
			};
		}
	}
	if(
		exclude.some(function(re) {
			return re.test(h)
		})
	)
		return;
	if(/^https?:\/\/(?:\w+\.)?google\.[\w.]+\/.*=(https?(?::|%3A)[^?&#]+)/.test(h)) {
		var _h = RegExp.$1;
		if(!/^https?:\/\/(?:\w+\.)?google\.[\w.]+\/(?:search|imgres)\?/.test(h))
			nh = decode(_h);
	}
	else if(/^https?:\/\/clck\.yandex\.\w+\/redir\/.*?(?:\*|%3D)(http\S+)$/.test(h)) {
		var _h = RegExp.$1;
		nh = /^https?%3A/.test(_h) ? decode(_h) : _h;
	}
	else if(
		/^https?:\/\/r\.mail\.yandex\.net\/url(s)?\/[^\/]+\/([^?]+)$/.test(h)
		|| /https?:\/\/news\.yandex\.ru\/yandsearch\?.*url(s)?=([^?]+)$/.test(h)
	)
		nh = "http" + RegExp.$1 + "://" + decode(RegExp.$2);
	else if(/^https?:\/\/duckduckgo\.com\/.*=(http\S+)/.test(h))
		nh = decode(RegExp.$1);
	else if(/^https?:\/\/ads\.adfox\.ru\/.*goLink\?.*@(http\S+)$/.test(h))
		nh = RegExp.$1;
	else if(/^https?:\/\/4pda\.ru\/[^#]+=(http[^?&#\/]+)/.test(h))
		nh = decode(RegExp.$1);
	else if(/^https?:\/\/(?:\w+\.)*deviantart\.com\/.*\/outgoing\?(\S+)$/.test(h))
		nh = RegExp.$1;
	else if(/^https?:\/\/outgoing\.mozilla\.org\/.*\/(\w+(?::|%3A)\S+)$/.test(h))
		nh = decode(RegExp.$1);
	else if(/^https?:\/\/(?:\w+\.)*facebook\.com\/[^#]+=(http[^?&#\/]+)/.test(h))
		nh = decode(RegExp.$1);
	else if(/^https?:\/\/steamcommunity\.com\/linkfilter\/\?url=(\S+)$/.test(h))
		nh = RegExp.$1;
	if(nh == h)
		return;
	_log("Override link:\n" + h + "\n=> " + nh);
	a.href = nh;
	// Force update link in status bar
	if(e.type == "focus") {
		a.ownerDocument.documentElement.focus();
		setTimeout(function() {
			a.focus();
		}, 0);
	}
	else if(e.type == "mouseover") {
		var orig = a.hasAttribute("style") && a.getAttribute("style");
		a.style.visibility = "hidden";
		setTimeout(function() {
			if(orig !== false)
				a.setAttribute("style", orig);
			else
				a.removeAttribute("style");
		}, 0);
	}
}
function handleKeyDown(e) {
	if(e.keyCode == (e.DOM_VK_RETURN || 13))
		clearLink(e);
}
function getLink(e) {
	for(var a = e.target; a && a.localName; a = a.parentNode)
		if(a.localName.toLowerCase() == "a")
			return a.href && a;
	return null;
}
function decode(s) {
	try {
		return decodeURIComponent(s);
	}
	catch(e) {
		setTimeout(function() { throw e; }, 0);
	}
	return s;
}
function renameAttr(node, attr, check) {
	if(!node.hasAttribute(attr))
		return false;
	var orig = node.getAttribute(attr);
	var skip = false;
	switch(typeof check) {
		case "string": skip = orig.indexOf(check) == -1; break;
		case "object": skip = !check.test(orig);
	}
	if(skip)
		return false;
	node.setAttribute(deleted + attr, orig);
	node.removeAttribute(attr);
	return true;
}

function _log(s) {
	_log = _debug && "console" in window && "log" in console
		? function(s) {
			console.log("[Remove fake links] " + s);
		}
		: function(s) {
		};
	return _log.apply(this, arguments);
}

})();