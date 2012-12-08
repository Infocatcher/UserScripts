// ==UserScript==
// @name        Direct Links
// @namespace   dev/null
// @description Redirect from download pages to files directly
// @author      Infocatcher
// @version     0.2.0pre2 - 2012-11-17
// @run-at      document-start
// @include     http://sourceforge.net/projects/*/download
// @include     http://sourceforge.net/projects/*/download?*
// @include     http://systemexplorer.net/downloadi.php
// @include     http://systemexplorer.net/downloadp.php
// @include     http://systemexplorer.net/download-archive/*/SystemExplorer*
// @grant       GM_log
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// ==/UserScript==

(function dl(event) {
// You can change
//   greasemonkey.scriptvals.dev/null/Direct Links.*
// in about:config
var allowBack = getPref("allowBack", false);

var loc = location.href;
var host = location.hostname
	.split(".")
	.slice(-2)
	.join("."); // a.example.com => example.com
var _aid, _a, _url;
function $(id) {
	return document.getElementById(id);
}
function $c(className) {
	return document.getElementsByClassName(className);
}
function $t(tag) {
	return document.getElementsByTagName(tag);
}
function $a(mask) {
	var links = document.links;
	for(var i = 0, len = links.length; i < len; ++i) {
		var url = links[i].href;
		if(url && mask.test(url))
			return url;
	}
	return null;
}
hostLoop:
switch(host) {
	// Get link by id:
	// URL-based redirect:
	// Get link by href:
	case "systemexplorer.net":
		_url = $a(/^https?:\/\/(\w+\.)*systemexplorer\.net\/download\/[^?&#]+\/SystemExplorer[\w.-]*\.(?:exe|zip|7z)$/);
	break;
	// Other:
	case "sourceforge.net":
		_a = $c("direct-download")[0];
}

if(_aid)
	_a = $(_aid);
if(_a && _a.href && _a.offsetWidth && _a.offsetHeight) //~ todo: fails sometimes on DOMContentLoaded
	_url = _a.href;
if(_url && _url != loc) {
	GM_log("Redirect (" + (event ? event.type : "delay") + "):\n" + loc + "\n=> " + _url);

	if(typeof GM_setValue == "function") {
		// For Close Download Tabs extension
		// https://github.com/Infocatcher/Close_Download_Tabs
		// This preference should be listed in extensions.closedownloadtabs.closeURI.pref.<full_pref_name>
		// See https://github.com/Infocatcher/Close_Download_Tabs/blob/master/defaults/preferences/prefs.js
		GM_setValue("closeURI", loc);
		GM_deleteValue("closeURI"); // Don't save history :)
	}

	if(allowBack)
		location.href = _url;
	else
		location.replace(_url);
	destroy();
}
else if(document.readyState == "loading") {
	if(!("_count" in dl)) {
		dl._count = 0;
		// With disabled scripts setTimeout doesn't works
		window.addEventListener("DOMContentLoaded", dl, false);
		window.addEventListener("load", dl, false);
	}
	if(++dl._count < 5*60*1000/10)
		dl._timer = setTimeout(dl, 10);
}
else if(event && event.type == "load")
	destroy();
function getPref(name, defaultVal) {
	if(typeof GM_getValue != "function")
		return defaultVal;
	var v = GM_getValue(name, undefined);
	if(v == undefined) {
		GM_setValue(name, defaultVal);
		return defaultVal;
	}
	return v;
}
function destroy() {
	dl._timer && clearTimeout(dl._timer);
	window.removeEventListener("DOMContentLoaded", dl, false);
	window.removeEventListener("load", dl, false);
}
})();