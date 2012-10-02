// ==UserScript==
// @name        Dirty.ru List of Best
// @namespace   dev/null
// @include     http://dirty.ru/comments/*
// @version     0.1.3pre
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
<style type="text/css">\n\
	.comment:target > .comment_inner { outline: 1px solid #c4cedb !important; }\n\
	.comment:target > .comment_inner:hover { outline: 1px solid #afbecf !important; }\n\
	.comment.__userJs__bestListTarget > .comment_inner { outline: 1px solid #e0e0e0 !important; }\n\
	.comment.__userJs__bestListTarget > .comment_inner:hover { outline: 1px solid #d0d0d0 !important; }\n\
	#__userJs__bestList {\n\
		position: fixed !important;\n\
		top: 2px !important;\n\
		right: 3px !important;\n\
		z-index: 2147483647 !important;\n\
		color: #999 !important;\n\
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
		max-height: 32.5em !important; /* 1.3*25 */\n\
		min-width: 5em !important;\n\
		overflow: auto !important;\n\
	}\n\
	#__userJs__bestList :visited { color: #999 !important; }\n\
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
function destroy() {
	div.removeEventListener("click", clickHandler, true);
	window.removeEventListener("unload", destroy, false);
}
})();