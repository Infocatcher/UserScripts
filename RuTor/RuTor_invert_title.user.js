// ==UserScript==
// @name        RuTor: invert title
// @namespace   dev/null
// @include     http://rus-tor.com/*
// @include     http://freedom-tor.org/*
// @include     http://tor-bit.net/*
// @include     http://new-tor.net/*
// @include     http://rutor.info/*
// @version     0.2.0.2 - 2022-09-28
// @run-at      document-start
// @grant       none
// ==/UserScript==

var stopTime = new Date().getTime() + 5e3;
var observer = new MutationObserver(function() {
	if(/^((?:зеркало )?rutor\.info) :: /i.test(document.title)) {
		observer.disconnect();
		document.title = RegExp.rightContext + " – " + RegExp.$1;
	}
	else if(new Date().getTime() > stopTime)
		observer.disconnect();
});
observer.observe(document.documentElement, { childList: true });