// ==UserScript==
// @name        Dirty.ru List of Best
// @namespace   dev/null
// @include     http://dirty.ru/comments/*
// @version     0.1.2
// ==/UserScript==

(function() {
var limit = 80;
var best = [];
Array.prototype.forEach.call(
	document.getElementsByClassName("vote_result"),
	function(e, i) {
		if(i == 0) // Post votes
			return;
		var n = e.textContent.trim();
		if(n < limit)
			return;
		var id = /\Wid:'(\d+)'/.test(e.getAttribute("onclick")) && RegExp.$1;
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
		best.push('<li><a href="#' + id + '"' + title + '>' + n + '</a></li>');
	}
);
var div = document.createElement("div");
div.id = "__userJs__bestList";
div.innerHTML = '\
<style type="text/css">\
	#__userJs__bestList {\
		position: fixed !important;\
		top: 2px !important;\
		right: 3px !important;\
		z-index: 2147483647 !important;\
		color: #999 !important;\
	}\
	#__userJs__bestList, #__userJs__bestList ul, #__userJs__bestList li {\
		list-style-type: none !important;\
		margin: 0 !important;\
		padding: 0 !important;\
		text-align: right !important;\
	}\
	#__userJs__bestList li {\
		margin-right: 2px !important;\
	}\
	#__userJs__bestList ul {\
		line-height: 1.3em !important;\
		max-height: 32.5em !important; /* 1.3*25 */\
		min-width: 5em !important;\
		overflow: auto !important;\
	}\
	#__userJs__bestList :visited { color: #999 !important; }\
	#__userJs__bestListClose {\
		text-decoration: none !important;\
		margin: 0 1em !important;\
		padding: 0 0.3em !important;\
	}\
	#__userJs__bestListClose:hover { color: #900 !important; }\
</style>\
<ul>\n' + (best.join("\n") || 'Не найдено!') + '\n</ul>\
<a id="__userJs__bestListClose" href="javascript:void 0;" title="Закрыть"\
	onclick="this.parentNode.parentNode.removeChild(this.parentNode);">x</a>';
document.body.appendChild(div);
})();