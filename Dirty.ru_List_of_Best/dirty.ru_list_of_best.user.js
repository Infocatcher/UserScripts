// ==UserScript==
// @name        Dirty.ru List of Best
// @namespace   dev/null
// @include     http://dirty.ru/comments/*
// @include     http://www.dirty.ru/comments/*
// @include     http://d3.ru/comments/*
// @version     0.1.3pre6 - 2012-12-06
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

(function() {
// You can change
//   greasemonkey.scriptvals.dev/null/Dirty.ru List of Best.*
// in about:config
var prefsVersion = 1;
var v = getPref("prefsVersion", 0);
var forceDefault = v == 0;
var limit      = getPref("limit",      20, forceDefault);
var highlight  = getPref("highlight",  40, forceDefault);
var highlight2 = getPref("highlight2", 65, forceDefault);
var show       = getPref("show",       25, forceDefault);
if(v != prefsVersion)
	setPref("prefsVersion", prefsVersion);
var best = [];
Array.prototype.forEach.call(
	document.getElementsByClassName("vote_result"),
	function(e, i) {
		if(i == 0) // Post votes
			return;
		var n = e.textContent.trim();
		if(n < limit)
			return;
		var id = /'(\d+)'/.test(e.getAttribute("onclick")) && RegExp.$1;
		var title = "";
		for(var node = e.parentNode; node; node = node.parentNode) {
			if(/(?:^|\s)comment_inner(?:\s|$)/.test(node.className)) {
				var comment = node.getElementsByClassName("c_body")[0];
				if(comment) {
					// comment.textContent doesn't contain new lines
					var temp = document.createElement("div");
					temp.style.whiteSpace = "pre";
					temp.innerHTML = comment.innerHTML
						.replace(/\s+/g, " ")
						.replace(/<br\s*\/?>/g, "\n");
					var imgs = temp.getElementsByTagName("img");
					for(var j = imgs.length - 1; j >= 0; --j) {
						var img = imgs[j];
						img.parentNode.replaceChild(document.createTextNode("<img>"), img);
					}
					title = ' title="'
						+ temp.textContent.trimLeft()
							.replace(/&/g, "&amp;")
							.replace(/</g, "&lt;")
							.replace(/>/g, "&gt;")
							.replace(/"/g, "&quot;")
						+ '"';
				}
				break;
			}
		}
		var clss = "__userJs__bestListAnchor";
		if(n >= highlight)
			clss += " __userJs__bestListHL";
		if(n >= highlight2)
			clss += " __userJs__bestListHL2";
		best.push('<li><a href="#' + id + '"' + title + ' class="' + clss + '"' + '>' + n + '</a></li>');
	}
);
var div = document.createElement("div");
div.id = "__userJs__bestList";
div.innerHTML = '\
<style type="text/css">\n\
	.comment:target > .comment_inner {\n\
		outline: 1px dashed #c4cedb !important;\n\
		outline-offset: -4px !important;\n\
	}\n\
	.comment:target > .comment_inner:hover { outline-color: #afbecf !important; }\n\
	.comment_shrinked:target .c_body {\n\
		/* Hack for space before top outline */\n\
		display: block !important;\n\
		visibility: hidden !important;\n\
		max-height: 8px !important;\n\
		overflow: hidden !important;\n\
	}\n\
	.comment.__userJs__bestListTarget > .comment_inner {\n\
		outline: 1px solid #e0e0e0 !important;\n\
		outline-offset: -4px !important;\n\
	}\n\
	.comment.__userJs__bestListTarget > .comment_inner:hover { outline-color: #d0d0d0 !important; }\n\
	#__userJs__bestList {\n\
		position: fixed !important;\n\
		top: 2px !important;\n\
		right: 3px !important;\n\
		z-index: 2147483647 !important;\n\
		color: #999 !important;\n\
		background: #fff !important;\n\
		-moz-box-shadow:    0 0 4px 1px #fff !important;\n\
		-webkit-box-shadow: 0 0 4px 1px #fff !important;\n\
		box-shadow:         0 0 4px 1px #fff !important;\n\
	}\n\
	#__userJs__bestList, #__userJs__bestList ul, #__userJs__bestList li {\n\
		list-style-type: none !important;\n\
		margin: 0 !important;\n\
		padding: 0 !important;\n\
		text-align: right !important;\n\
	}\n\
	#__userJs__bestList li {\n\
		margin-right: 2px !important;\n\
	}\n\
	#__userJs__bestList ul {\n\
		line-height: 1.3em !important;\n\
		max-height: ' + 1.3*show + 'em !important;\n\
		min-width: 5.2em !important;\n\
		overflow: auto !important;\n\
	}\n\
	#__userJs__bestList :visited { color: #999 !important; }\n\
	.__userJs__bestListHL:before {\n\
		content: " " !important;\n\
		display: inline-block !important;\n\
		background: url("/i/wasstars.gif") no-repeat center center !important;\n\
		width: 11px !important;\n\
		margin-right: 1px !important;\n\
	}\n\
	.__userJs__bestListHL2:before { background-image: url("/i/stars.gif") !important; }\n\
	#__userJs__bestListClose {\n\
		text-decoration: none !important;\n\
		margin: 0 0.3em !important;\n\
		padding: 0 0.3em !important;\n\
	}\n\
	#__userJs__bestListClose:hover { color: #900 !important; }\n\
</style>\n\
<ul>\n' + (best.join("\n") || 'Не найдено!') + '\n</ul>\n\
<a id="__userJs__bestListClose" href="javascript://close" title="Закрыть"\>x</a>';
document.body.appendChild(div);

div.addEventListener("click", clickHandler, true);
window.addEventListener("unload", destroy, false);
function clickHandler(e) {
	if(e.button != 0)
		return;
	var a = getLink(e.target);
	if(a.id == "__userJs__bestListClose") {
		var block = a.parentNode;
		block.parentNode.removeChild(block);
		destroy();
		stopEvent(e);
	}
	else if(/^#(\d+)$/.test(a.getAttribute("href"))) {
		var id = RegExp.$1;
		var anch = document.getElementById(id) || document.getElementsByName(id)[0];
		if(anch && "scrollIntoView" in anch) {
			anch.scrollIntoView();
			var trgClass = "__userJs__bestListTarget";
			var trg = document.getElementsByClassName(trgClass);
			trg.length && trg[0].classList.remove(trgClass);
			anch.classList.add(trgClass);
			stopEvent(e);
		}
	}
}
function getLink(node) {
	for(; node; node = node.parentNode)
		if(node.nodeName.toLowerCase() == "a")
			return node;
	return null;
}
function stopEvent(e) {
	e.preventDefault();
	e.stopPropagation();
}
function getPref(name, defaultVal, forceDefault) {
	if(typeof GM_getValue != "function")
		return defaultVal;
	var v = forceDefault
		? undefined
		: GM_getValue(name, undefined);
	if(v == undefined) {
		GM_setValue(name, defaultVal);
		return defaultVal;
	}
	return v;
}
function setPref(name, val) {
	if(typeof GM_setValue == "function")
		GM_setValue(name, val);
}
function destroy() {
	div.removeEventListener("click", clickHandler, true);
	window.removeEventListener("unload", destroy, false);
}
})();