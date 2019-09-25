// ==UserScript==
// @name        RuTor: invert title
// @namespace   dev/null
// @include     http://rus-tor.com/*
// @include     http://freedom-tor.org/*
// @include     http://tor-bit.net/*
// @include     http://new-tor.net/*
// @version     0.2.0.1 - 2019-09-25
// @run-at      document-start
// @grant       none
// ==/UserScript==

var stopTime = new Date().getTime() + 5e3;
var observer = new MutationObserver(function() {
	if(/^(зеркало rutor.info) :: /.test(document.title)) {
		observer.disconnect();
		document.title = RegExp.rightContext + " – " + RegExp.$1;
	}
	else if(new Date().getTime() > stopTime)
		observer.disconnect();
});
observer.observe(document.documentElement, { childList: true });