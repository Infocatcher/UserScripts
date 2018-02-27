// ==UserScript==
// @name        RuTor: invert title
// @namespace   dev/null
// @include     http://rus-tor.com/*
// @include     http://freedom-tor.org/*
// @version     0.1 - 2017-11-12
// @run-at      document-start
// @grant       none
// ==/UserScript==

setTimeout(function invertTitle(_stopTime) {
	if(/^(зеркало rutor.info) :: /.test(document.title))
		document.title = RegExp.rightContext + " – " + RegExp.$1;
	else if(!_stopTime || new Date().getTime() < _stopTime)
		setTimeout(invertTitle, 10, _stopTime || new Date().getTime() + 5e3);
}, 0);