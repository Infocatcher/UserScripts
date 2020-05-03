// ==UserScript==
// @name           Direct Images
// @version        0.7.0pre5 - 2020-05-03
// @description    Redirect from preview pages to images directly
// @author         Infocatcher
// @namespace      dev/null
// @run-at         document-start
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_log

// @include        about:blank?UserScripts/options/Direct_Images

// Get image by id:
// @match          *://*.imagevenue.com/img.php?image=*
// @match          *://ipicture.ru/Gallery/Viewfull/*.html
// @match          *://*.ipicture.ru/Gallery/Viewfull/*.html
// @match          *://www.picamatic.com/view/*
// @match          *://download.su/photo/*
// @match          *://imageup.ru/img*/*.html
// @include        *://*pixshock.net/*.html
// @include        *://*image-share.com/image.php?*
// @include        *://*image-share.com/*.html
// @include        *://*10pix.ru/view/*
// @match          *://xmages.net/show.php*.html
// @match          *://opicture.ru/gallery/view/*.html
// @match          *://picamigo.com/show.php/*.html
// @match          *://pikucha.ru/*
// @match          *://keep4u.ru/full/*.html
// @match          *://www.imagebanana.com/view/*
// @match          *://yfrog.com/*
// @match          *://radikal.ua/full/*.html
// @match          *://upyourpic.org/images/*.html
// @include        *://*postimg.com/image/*
// @match          *://www.bild.me/bild.php?file=*
// @match          *://www.pictureshack.ru/view_*
// @match          *://pixs.ru/showimage/*
// @match          *://minus.com/*
// @include        *://*overpic.net/viewer.php?file=*
// @match          *://pictube.ru/?v=*
// @match          *://owely.com/*
// @match          *://uaimage.com/image/*
// @match          *://vfl.ru/fotos/*.html*
// @match          *://geekpics.net/view/*
// @match          *://grab.by/*
// @match          *://someimage.com/*
// @match          *://skrinshoter.ru/*
// @match          *://*.imagetitan.com/img.php?image=*
// @match          *://www.picshare.ru/view/*

// URL-based redirect:
// @match          *://smages.com/*.htm
// @match          *://anub.ru/pic/*
// @include        *://*onlinedisk.ru/image/*
// @include        *://*onlinedisk.ru/view/*
// @match          *://*.fotoupload.ru/viewer.php?file=*
// @match          *://image.vanilla.su/viewer.php?file=*
// @match          *://prostofotka.ru/viewer.php?file=*
// @match          *://foto-screen.ru/viewer.php?file=*
// @match          *://foto-screen.org/viewer.php?file=*
// @match          *://foto-boom.org/viewer.php?file=*
// @match          *://pixmaster.net/viewer.php?file=*
// @match          *://itrash.ru/idb/*.htm*
// @match          *://*.itrash.ru/idb/*.htm*
// @match          *://*.sendpic.ru/*.html
// @include        *://*imget.ru/show/?img=*
// @match          *://fastpic.msk.ru/?v=*
// @match          *://youpic.su/view.php?id=*
// @match          *://jpegshare.net/*.html
// @match          *://imagelike.org/?v=*
// @match          *://rupix.org/viewer.php?*
// @match          *://all-poster.ru/?v=*
// @match          *://picsee.net/*.html
// @match          *://img.bigstream.ru/viewer.php?file=*
// @match          *://pix.toile-libre.org/?img=*
// @match          *://fast-picture.ru/images/*.html
// @match          *://pasteboard.co/*
// @match          *://img-host.org.ua/?v=*
// @match          *://images.gameru.net/image/*.html
// @match          *://imgdepo.com/show/*
// @match          *://stick.kz/?v=*
// @match          *://imagestun.com/hosting/?v=*
// @match          *://picua.org/?v=*
// @match          *://*.giphy.com/media/*
// @match          *://scrin.org/?v=*
// @match          *://lostpix.com/?v=*
// @match          *://picplus.ru/ful/*

// Get image by src:
// @include        *://*imagepix.org/image/*.html
// @match          *://saveimg.ru/show-image.php?id=*
// @match          *://mediapix.ru/pic.php?id=*
// @match          *://pixs.ru/showimage/*
// @match          *://postimage.org/image/*
// @match          *://uaimages.com/viewer.php?*
// @match          *://7image.ru/v.php?*
// @match          *://mepic.ru/view/?*
// @match          *://simplest-image-hosting.net/*
// @match          *://pics.kz/view/*
// @include        *://*imagepost.ru/?v=*
// @match          *://imgtheif.com/show-image.php?id=*
// @match          *://imgtheif.com/image/*.html
// @match          *://hostingkartinok.com/show-image.php?*
// @match          *://image.kz/*
// @match          *://imm.io/*
// @match          *://narodpix.net/?v=*
// @match          *://www.narodpix.net/?v=*
// @include        *://*radikal.ru/F/*.html*
// @match          *://*.radikal.ru/*fp/*
// @match          *://radikal.ru/big/*
// @match          *://radikal-foto.ru/F/*.html*
// @match          *://radical-foto.ru/F/*.html*
// @match          *://radikal-foto.ru/*fp/*
// @match          *://radical-foto.ru/*fp/*
// @match          *://f-page.ru/*fp/*
// @match          *://f-lite.ru/*fp/*
// @match          *://f-picture.net/*fp/*
// @match          *://firepic.org/?v=*
// @match          *://www.firepic.org/?v=*
// @match          *://you-logo.ru/show-image.php?*
// @match          *://uploadimagex.com/view.php?*
// @match          *://toroff.net/?v=*
// @match          *://clip2net.com/s/*
// @match          *://screencast.com/*/*
// @match          *://img.lastusja.ru/*
// @match          *://gyazo.com/*
// @match          *://imgchilibum.ru/*.php?id=*
// @match          *://imglink.ru/show-image.php?id=*
// @match          *://www.fotolink.su/v.php?id=*
// @match          *://netpics.org/image/*
// @include        *://*ximage.ru/index.php?id=*
// @include        *://*ii4.ru/image-*.html*
// @match          *://freescreens.ru/*/
// @match          *://powerlogo.ru/show-image.php?id=*
// @match          *://savepice.ru/full/*.html*
// @match          *://funkyimg.com/viewer.php?*
// @match          *://funkyimg.com/view/*
// @match          *://www.imagesnake.com/show*

// Get image from thumbnail:
// @match          *://piccash.net/*/
// @match          *://pic4you.ru/*/
// @match          *://picforall.ru/*
// @match          *://payforpic.ru/*
// @match          *://pix-x.net/*
// @match          *://picclick.ru/*
// @match          *://imgclick.ru/*
// @match          *://imgbase.ru/*
// @match          *://picpays.ru/*
// @match          *://drlink.online/*

// Other:
// @match          *://*.imageshack.us/*
// @match          *://imageshack.us/photo/*
// @match          *://imageshack.us/f/*/
// @match          *://imageshack.com/photo/*
// @match          *://savepic.ru/*.htm
// @match          *://savepic.org/*.htm
// @match          *://savepic.net/*.htm
// @match          *://savepic.su/*.htm
// @match          *://piccy.info/*view*/*
// @include        *://*xtupload.com/*.html
// @include        *://*picatom.com/*.html
// @include        *://*fotosik.pl/pokaz_obrazek/*.html
// @match          *://fotki.yandex.ru/users/*/view/*
// @match          *://southwc.ru/*.htm
// @match          *://www.pict.com/view/*
// @match          *://imageban.ru/show/*
// @match          *://habreffect.ru/*
// @match          *://rghost.ru/*
// @match          *://rghost.net/*
// @match          *://rgho.st/*
// @match          *://itmages.ru/image/*
// @match          *://itmages.com/image/*
// @include        *://*floomby.ru/*/*
// @match          *://www.kinopoisk.ru/picture/*/or/1/
// @match          *://tenpic.ru/view.php?*
// @match          *://imghost.in/pt-*.html
// @match          *://*.binimage.org/*
// @match          *://forlazypeople.com/?v=*
// @match          *://upit.biz/?v=*
// @match          *://imgur.com/*
// @exclude        *://imgur.com/
// @exclude        *://imgur.com/a/*
// @exclude        *://imgur.com/gallery/*
// @exclude        *://imgur.com/user/*
// @match          *://*.goodfon.ru/download*
// @match          *://*.goodfon.su/download*
// @match          *://*.badfon.ru/download*
// @include        *://*image-upload.net/*.html
// @match          *://imageshost.ru/links/*
// @match          *://imageshost.ru/photo/*.html
// @match          *://screenshotuploader.com/s/*
// @match          *://prntscr.com/*
// @match          *://ifotki.info/*.html
// @match          *://*.photobucket.com/*?action=view*
// @match          *://*.photobucket.com/*.html*
// @match          *://tinypic.com/view.php?pic=*
// @include        *://*fotohost.by/show/*
// @match          *://fastpic.ru/view/*.html*
// @match          *://joxi.ru/*
// @match          *://joxi.net/*
// @match          *://postimg.org/image/*
// @match          *://i-fotki.info/*.html
// @match          *://4put.ru/*.php?*
// @match          *://fotkidepo.ru/?id=photo:*
// @match          *://ixbt.photo/?id=photo:*
// @match          *://lostpic.net/?*
// @match          *://lostpic.net/image/*
// @match          *://*.lostpic.net/image/*
// @match          *://pic.lg.ua/*
// @match          *://cardse.net/image/*
// @match          *://image2you.ru/*/
// @match          *://cl.ly/*
// @match          *://*.riotpixels.com/games/*/screenshots/*
// @match          *://prnt.sc/*
// @match          *://snag.gy/*.*
// @match          *://www.directupload.net/*.htm*
// @match          *://*.directupload.net/images/*
// @match          *://ibb.co/*
// @match          *://picturelol.com/*
// @match          *://imgdrive.net/img-*.html*
// @match          *://www.imagebam.com/image/*
// ==/UserScript==

(function di(event) {
var allowBack = false; // default value
// You can change greasemonkey.scriptvals.dev/null/Direct Images.allowBack in about:config
if(typeof GM_getValue == "function") {
	var _allowBack = GM_getValue("allowBack", undefined);
	if(_allowBack == undefined)
		GM_setValue("allowBack", allowBack);
	else
		allowBack = _allowBack;
}

var loc = location.href;
if(
	loc == "about:blank?UserScripts/options/Direct_Images"
	&& typeof GM_getValue == "function"
) {
	var t = "Direct Images Options";
	document.title = t;
	setTimeout(function() { // Or wait for "load" event?
		document.title = t;
	}, 0);
	var body = document.body || document.documentElement;
	var label = _e("label");
	label.htmlFor = "allowBack";
	var input = _e("input");
	input.id = "allowBack";
	input.type = "checkbox";
	input.checked = allowBack;
	var handleClick = function() {
		GM_setValue("allowBack", input.checked);
	};
	input.addEventListener("click", handleClick, false);
	label.appendChild(input);
	label.appendChild(document.createTextNode("Allow back (don't remove page from back/forward history)"));
	body.appendChild(label);
	window.addEventListener("unload", function destroy(e) {
		window.removeEventListener("unload", destroy, false);
		input.removeEventListener("click", handleClick, false);
	}, false);
	destroy();
	return;
}

var ael = di.ael || (di.ael = window.addEventListener);
var rel = di.rel || (di.rel = window.removeEventListener);

var host = (function() { // a.example.com => example.com
	var tld = "msk.ru|org.ua"; // Only currently used TLD, for better performance
	var tldRe = new RegExp("[^.]+\\.(?:" + tld.replace(/\./g, "\\.") + "|[^.]+)$");
	return location.hostname.match(tldRe)[0];
})();
var _iid, _img, _src, _clearDoc;
function _e(nn) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", nn);
}
function $(id) {
	return document.getElementById(id);
}
function $t(tag, node) {
	return (node || document).getElementsByTagName(tag);
}
function $c(className, node) {
	if(!node)
		node = document;
	if(node.getElementsByClassName)
		return node.getElementsByClassName(className);
	var classNames = className.split(/\s+/);
	var count = classNames.length;
	var regs = [];
	for(var i = 0; i < count; ++i)
		regs.push(new RegExp("(^|\\s)" + classNames[i].replace(/[\\\/.^$+*?|()\[\]{}]/g, "\\$&") + "(\\s|$)"));
	var out = [];
	var nodes = node.getElementsByTagName("*");
	main:
	for(var i = 0, l = nodes.length; i < l; ++i) {
		var n = nodes[i];
		var c = n.className;
		for(var j = 0; j < count; ++j)
			if(!regs[j].test(c))
				continue main;
		out.push(n);
	}
	return out;
}
function $i(mask, node, exclude) {
	var imgs = node
		? node.getElementsByTagName("img")
		: document.images;
	for(var i = 0, len = imgs.length; i < len; ++i) {
		var src = imgs[i].src;
		if(
			src && mask.test(src)
			&& (!exclude || !exclude.test(src))
		)
			return src;
	}
	return "";
}
function $ie(mask, exclude, node) {
	return $i(mask, node, exclude);
}
function $inp(mask, node) {
	var inps = (node || document).getElementsByTagName("input");
	for(var i = 0, len = inps.length; i < len; ++i) {
		var val = inps[i].value;
		if(mask.test(val))
			return val;
	}
	return "";
}
function $a(mask, node) {
	var links = (node || document).getElementsByTagName("a");
	for(var i = 0, len = links.length; i < len; ++i) {
		var link = links[i];
		if(mask.test(link.href))
			return link;
	}
	return null;
}
function $th(imgRe, thumbRe, replacements) {
	var src = $i(imgRe);
	if(src)
		return src;
	src = $i(thumbRe);
	if(src) for(var find in replacements)
		src = src.replace(find, replacements[find]);
	return src;
}
function $u(node) {
	if(node && node.nodeName.toLowerCase() == "input")
		return $url(node.value);
	return "";
}
function $url(s) {
	if(/^https?:\/\/\S+$/.test(s) && !/html?$/.test(s))
		return s;
	return "";
}
function $dec(url) {
	try {
		return decodeURIComponent(url);
	}
	catch(e) {
	}
	return url;
}
function ogImage() {
	var metaImg = document.querySelector && document.querySelector('meta[property="og:image"][content^="http"]');
	return metaImg && metaImg.getAttribute("content") || "";
}
function redirect(url) {
	if(allowBack)
		location.href = url;
	else
		location.replace(url);
}
function clearDoc(src) {
	window.stop();

	var html = _e("html");
	var head = _e("head");
	var title = _e("title");
	var imgName = $dec(src.match(/[^\/]*$/)[0]);
	title.appendChild(document.createTextNode(imgName + " - Direct Images"));
	head.appendChild(title);
	var link = _e("link");
	link.rel = "shortcut icon";
	link.href = src;
	head.appendChild(link);
	var style = _e("style");
	style.type = "text/css";
	style.appendChild(document.createTextNode("\
		html, html > body {\n\
			margin: 0; padding: 0;\n\
			width: auto !important; height: auto !important; /* for https://userstyles.org/styles/101141/ru-adlist-css-fixes */\n\
		}\n\
		.zoomIn { cursor: -moz-zoom-in; cursor: -webkit-zoom-in; cursor: zoom-in; }\n\
		.zoomOut { cursor: -moz-zoom-out; cursor: -webkit-zoom-out; cursor: zoom-out; }\n\
		/* From resource://gre/res/TopLevelImageDocument.css */\n\
		@media not print {\n\
			img {\n\
				text-align: center;\n\
				position: absolute;\n\
				margin: auto;\n\
				top: 0;\n\
				right: 0;\n\
				bottom: 0;\n\
				left: 0;\n\
			}\n\
		}"
	));
	head.appendChild(style);

	var meta = _e("meta");
	meta.name = "viewport";
	meta.content = "width=device-width; height=device-height;";
	head.appendChild(meta);

	link = _e("link");
	link.rel = "stylesheet";
	link.href = "resource://gre/res/TopLevelImageDocument.css";
	head.appendChild(link);
	link = link.cloneNode(true);
	link.href = "chrome://global/skin/TopLevelImageDocument.css";
	head.appendChild(link);
	link = link.cloneNode(true);
	link.href = "chrome://global/skin/media/TopLevelImageDocument.css"; // Firefox 19.0a1
	head.appendChild(link);

	var body = _e("body");
	var img = _e("img");
	var stl = img.style;
	stl.maxWidth = window.innerWidth + "px";
	stl.maxHeight = window.innerHeight + "px";

	var originalSize = false;

	var simpleZoom, destroySimpleZoom;
	ael.call(window, "click", simpleZoom = function(e) {
		if(e.button != 0 || e.target != img)
			return;
		originalSize = !originalSize;
		if(originalSize) {
			stl.maxWidth = stl.maxHeight = null;
			scrollToClicked(e, img.width, img.height);
		}
		else {
			stl.maxWidth = window.innerWidth + "px";
			stl.maxHeight = window.innerHeight + "px";
		}
	}, true);
	ael.call(window, "unload", destroySimpleZoom = function() {
		rel.call(window, "unload", destroySimpleZoom, false);
		rel.call(window, "click", simpleZoom, true);
	}, false);

	ael.call(img, "load", function initResizer(e) {
		rel.call(img, e.type, initResizer, false);
		destroySimpleZoom();

		stl.maxWidth = stl.maxHeight = null;
		var iw = img.width;
		var ih = img.height;
		var size = iw + " × " + ih;
		function fitSize(check) {
			var ww = window.innerWidth;
			var wh = window.innerHeight;
			var canFit = iw > ww || ih > wh;
			if(check)
				return canFit;
			if(canFit) {
				var persent = Math.min(ww/iw, wh/ih);
				stl.width = iw*persent + "px";
				stl.height = ih*persent + "px";
				stl.marginTop = null;
				persent = Math.floor(persent*100); // Inherit Firefox built-in resizer behavior...
				document.title = imgName + " (" + size + ", " + persent + "%)" + " - Direct Images";
			}
			else {
				origSize();
			}
			setCursor(canFit);
			return canFit;
		}
		function origSize() {
			stl.width = stl.height = null;
			document.title = imgName + " (" + size + ")" + " - Direct Images";
			if(ih > window.innerHeight) // Override styles from resource://gre/res/TopLevelImageDocument.css
				stl.marginTop = 0;
		}
		function setCursor(canFit) {
			if(canFit == undefined)
				canFit = fitSize(true);
			img.className = canFit
				? originalSize
					? "zoomOut"
					: "zoomIn"
				: "";
		}
		function toggleFitSize(e) {
			if(e.button != 0 || e.target != img)
				return;
			if(!fitSize(true)) { // Nothing to toggle
				setCursor(false);
				return;
			}
			originalSize = !originalSize;
			if(originalSize) {
				origSize();
				scrollToClicked(e, iw, ih);
			}
			else
				fitSize();
			setCursor(true);
		}
		function onResize(e) {
			if(!originalSize)
				fitSize();
			setCursor();
		}
		ael.call(window, "click", toggleFitSize, true);
		ael.call(window, "resize", onResize, false);
		ael.call(window, "unload", function destroy(e) {
			rel.call(window, e.type, destroy, false);
			rel.call(window, "click", toggleFitSize, true);
			rel.call(window, "resize", onResize, false);
		}, false);
		if(originalSize) {
			origSize();
			setCursor();
		}
		else {
			fitSize();
		}
	}, false);
	function scrollToClicked(e, iw, ih) {
		if(!iw || !ih)
			return;
		var ww = window.innerWidth;
		var wh = window.innerHeight;
		var dx = e.clientX/ww;
		var dy = e.clientY/wh;
		window.scrollTo(
			Math.max(0, dx*iw - ww/2),
			Math.max(0, dy*ih - wh/2)
		);
	}

	img.src = img.alt = src;
	body.appendChild(img);

	html.appendChild(head);
	html.appendChild(body);

	for(var lc; lc = document.lastChild; )
		document.removeChild(lc);
	document.appendChild(html);

	// Prevent modifications, used new Function() to bypass unsafeWindow things in GreaseMonkey
	if(Object.defineProperty)
		new window.Function('var i = document.images[0]; Object.defineProperty(i, "src", { value: i.src });')();
	if(window.Node && Node.prototype) {
		var m = [
			"appendChild",
			"insertBefore",
			"removeChild",
			"replaceChild",
			//"setAttribute",
			"removeAttribute",
			"addEventListener"
		];
		new window.Function("var p = Node.prototype; p." + m.join(" = p.") + " = function() {};")();
	}
	if(window.EventTarget && EventTarget.prototype)
		new window.Function("EventTarget.prototype.addEventListener = function() {};")();
	var tmr = setTimeout(function checkCSS(_stopTime) {
		if(window.getComputedStyle(img, null).textAlign == "center")
			return; // Looks like all works fine
		// Let's reload styles...
		GM_log("Force reload styles");
		var links = document.getElementsByTagName("link");
		for(var i = 0, l = links.length; i < l; ++i) {
			var link = links[i];
			if(link.rel == "stylesheet")
				link.href = link.href.replace(/\?.*$/, "") + "?" + new Date().getTime();
		}
		var styles = document.getElementsByTagName("style");
		for(var i = 0, l = styles.length; i < l; ++i) {
			var style = styles[i];
			if(style.type != "text/css")
				continue;
			style.type = "text/force-reload";
			style.type = "text/css";
		}
		if(!_stopTime || _stopTime > new Date().getTime())
			setTimeout(checkCSS, 100, _stopTime || new Date().getTime() + 2e3);
	}, 0);
	GM_log("Remove timers: " + (tmr - 1));
	while(--tmr)
		clearTimeout(tmr);
}
hostLoop:
switch(host) {
	// Get image by id:
	case "imagevenue.com":   _iid = "thepic";           break;
	case "ipicture.ru":      _iid = "newImg";           break;
	case "picamatic.com":    _iid = "pic";              break;
	case "download.su":      _iid = "thepic";           break;
	case "imageup.ru":       _iid = "image";            break;
	case "pixshock.net":     _iid = "mi";               break;
	case "image-share.com":  _iid = "image";            break;
	case "10pix.ru":         _iid = "image";            break;
	case "xmages.net":       _iid = "img_obj";          break;
	case "opicture.ru":      _iid = "newImg";           break;
	case "picamigo.com":     _iid = "img_obj";          break;
	case "pikucha.ru":       _iid = "image";            break;
	case "keep4u.ru":        _iid = "foto";             break;
	case "imagebanana.com":  _iid = "image";            break;
	case "yfrog.com":        _iid = "main_image";       break;
	case "radikal.ua":       _iid = "image";            break;
	case "upyourpic.org":    _iid = "mainimage";        break;
	case "postimg.com":      _iid = "image";            break;
	case "bild.me":          _iid = "Bild";             break;
	case "pictureshack.ru":  _iid = "image";            break;
	case "pixs.ru":          _iid = "imgg";             break;
	case "minus.com":        _iid = "current_image";    break;
	case "overpic.net":      _iid = "main_img";         break;
	case "pictube.ru":       _iid = "full_image";       break;
	case "owely.com":        _iid = "issueImg";         break;
	case "uaimage.com":      _iid = "im";               break;
	case "vfl.ru":           _iid = "img_foto";         break;
	case "geekpics.net":     _iid = "full_image";       break;
	case "grab.by":          _iid = "thegrab";          break;
	case "someimage.com":    _iid = "viewimage";        break;
	case "skrinshoter.ru":   _iid = "screenshot-image"; break;
	case "imagetitan.com":   _iid = "image";            break;
	case "picshare.ru":      _iid = "image";            break;

	// URL-based redirect:
	case "smages.com":
		if(/^https?:\/\/(?:www\.)?smages\.com\/(.*?)\.htm/i.test(loc))
			_src = "http://smages.com/i/" + RegExp.$1;
	break;
	case "anub.ru":
		if(/^https?:\/\/(?:www\.)?anub\.ru\/pic\/(.+)$/i.test(loc))
			_src = "http://anub.ru/uploads/" + RegExp.$1;
	break;
	case "onlinedisk.ru":
		if(/^https?:\/\/(?:www\.)?onlinedisk\.ru\/(?:image|view)\/(\d+)(?:\/.*)?$/i.test(loc))
			_src = "http://onlinedisk.ru/get_image.php?id=" + RegExp.$1;
	break;
	case "fotoupload.ru": //~ todo: remove?
	case "vanilla.su": //~ todo: remove?
	case "prostofotka.ru": //~ todo: remove?
	case "foto-screen.ru": //~ todo: remove?
	case "foto-screen.org":
	case "foto-boom.org":
	case "pixmaster.net":
		_src = loc.replace("/viewer.php?file=", "/images/");
	break;
	case "itrash.ru":
	case "sendpic.ru":
		_src = loc.replace(/\.html?$/, "");
	break;
	case "imget.ru":
		_src = loc.replace("/show/?img=", "");
	break;
	case "fastpic.msk.ru":
		_src = loc.replace("/?v=", "/images/");
	break;
	case "youpic.su":
		_src = loc.replace(/^(https?:\/\/).*?\?id=/, "$1");
	break;
	case "jpegshare.net":
		_src = loc
			.replace(/jpegshare\.net\//, "$&images/")
			.replace(/\.html$/, "");
	break;
	case "imagelike.org":
		_src = loc.replace("/?v=", "/images/");
	break;
	case "rupix.org":
		_src = loc.replace("/viewer.php?file=", "/images/");
	break;
	case "all-poster.ru":
		_src = loc.replace("/?v=", "/images/");
	break;
	case "picsee.net":
		_src = loc
			.replace(/^https?:\/\/(?:\w+\.)*picsee\.net\//, "$&upload/")
			.replace(/\.html$/, "");
	break;
	case "bigstream.ru":
		_src = loc.replace("/viewer.php?file=", "/i/");
	break;
	case "toile-libre.org":
		_src = loc.replace("/?img=", "/upload/original/");
	break;
	case "fast-picture.ru":
		_src = loc.replace(/\.html?$/, "");
	break;
	case "pasteboard.co":
		_src = loc.replace("http://pasteboard.co/", "https://cdn.pbrd.co/images/");
	break;
	case "img-host.org.ua":
		_src = loc.replace("/?v=", "/images/");
	break;
	case "gameru.net":
		_src = loc
			.replace("/image/", "/image/direct/")
			.replace(/\.html$/, "");
	break;
	case "imgdepo.com":
		_src = loc.replace("/show/", "/id/");
	break;
	case "stick.kz":
		// stick.kz/?v=2016-07-19_foo.jpg
		// stick.kz/img/2016-07/19/foo.jpg
		_src = loc.replace(/\/\?v=(\d{4}-\d\d)-(\d\d)_/, "/img/$1/$2/");
	break;
	case "imagestun.com":
		_src = loc.replace("/?v=", "/kartinki/");
	break;
	case "picua.org":
		// picua.org/?v=2016-08-06_foo.png
		// picua.org/img/2016-08/06/foo.png
		_src = loc.replace(/\/\?v=(\d{4}-\d\d)-(\d\d)_/, "/img/$1/$2/");
	break;
	case "giphy.com":
		// http://media1.giphy.com/media/yr7n0u3qzO9nG/giphy.gif
		// http://i.giphy.com/yr7n0u3qzO9nG.gif
		_src = loc
			.replace(/^https?:\/\/\w+\.giphy\.com\/media\//, "https://i.giphy.com/")
			.replace(/\/\w+(\.\w+)$/, "$1");
	break;
	case "scrin.org":
		_src = loc.replace(/\/\?v=(\w+\.\w+)/, function(s, name) {
			return "/i/" + name.replace(/_/g, "/");
		});
	break;
	case "lostpix.com":
		// lostpix.com/?v=2018-01-09_foo.png
		// lostpix.com/img/2018-01/09/foo.png
		_src = loc.replace(/\/\?v=(\d{4}-\d\d)-(\d\d)_/, "/img/$1/$2/");
	break;
	case "picplus.ru":
		_src = loc.replace("/ful/", "/img/");
	break;

	// Get image by src:
	case "imagepix.org":
		_src = $i(/^https?:\/\/(?:www\.)?imagepix\.org\/full\/\w+\.\w+$/i);
	break;
	case "saveimg.ru":
		_src = $i(/^https?:\/\/(?:www\.)?saveimg\.ru\/pictures\/[\w\/-]+?\/[a-f0-9]{25,}\.[a-z]+$/);
	break;
	case "mediapix.ru":
		_src = $i(/^https?:\/\/(?:www\.)?mediapix\.ru\/pics\/[a-f0-9]{25,}\.[a-z]+$/);
	break;
	case "pixs.ru":
		_src = $i(/^https?:\/\/img\.pixs\.ru\/storage\//);
	break;
	case "postimage.org":
		_src = $i(/^https?:\/\/\w+\.postimage.org\//);
	break;
	case "uaimages.com":
		_src = $i(/^https?:\/\/(?:www\.)?uaimages\.com\/images\/\w+\.\w+$/);
	break;
	case "7image.ru":
		_src = $i(/^https?:\/\/7image\.ru\/pics\/[^?&#]+\.\w+$/);
	break;
	case "mepic.ru":
		_src = $i(/^https?:\/\/mepic\.ru\/up\/[^?&#]+\.\w+$/);
	break;
	case "simplest-image-hosting.net":
		_src = $i(/^https?:\/\/\w+\.simplest-image-hosting\.net\/[^?&#]+\.\w+$/);
	break;
	case "pics.kz":
		_src = $i(/^https?:\/\/pics\.kz\/[^?&#]+\/[0-9a-f]{32,}\.\w+$/);
	break;
	case "imagepost.ru":
		_src = $i(/^https?:\/\/(?:www\.)?imagepost\.ru\/images\/[^?&#]+\.\w+$/);
	break;
	case "imgtheif.com":
		_src = $i(/^https?:\/\/(?:www\.)?imgtheif\.com\/pictures\/[^?&#]+\.\w+$/);
	break;
	case "hostingkartinok.com":
		_src = $i(/^https?:\/\/(?:\w+\.)?hostingkartinok\.com\/[^#]+[0-9a-f]{32,}\.\w+$/);
	break;
	case "image.kz":
		_src = $i(/^https?:\/\/(?:www\.)?image\.kz\/[^?&#]+\/[0-9a-f]{32,}\.\w+$/);
	break;
	case "imm.io":
		_src = $i(/^https?:\/\/(?:\w+\.)?imm\.io\/[^?&#]+\.\w+$/);
	break;
	case "narodpix.net":
		_src = $i(/^https?:\/\/(?:\w+\.)?narodpix\.net\/img\/[^?&#]+\.\w+$/);
	break;
	case "radikal.ru":
	case "radikal-foto.ru":
	case "radical-foto.ru":
	case "f-page.ru":
	case "f-lite.ru":
	case "f-picture.net":
		if(/^(https?:\/\/)(?:www\.)?radikal\.ru\/F\/(\w+\.radikal\.ru\/[\w\/\.]+)\.html#?$/.test(loc))
			_src = RegExp.$1 + RegExp.$2;
		else if(/[?&]u=(http[^?&#]+)/.test(loc))
			_src = $dec(RegExp.$1);
		else if(/^https?:\/\/([\w-]+\.)+\w+\/(?:l?fp|big)\//.test(loc)) {
			_src = $ie(
				/^https?:\/\/(\w+\.)*radikal\.ru\/[\w\/]+\.\w+$/,
				/^https?:\/\/[^\/]+\/content\//i
			);
		}
		if(!_src) {
			GM_log("Will extract from scripts");
			var ss = document.getElementsByTagName("script");
			for(var i = 0, l = ss.length; i < l; ++i) {
				var tc = ss[i].textContent || "";
				if(
					tc.indexOf('"PublicPrevUrl"') != -1
					&& /"Url": "(https?:\/\/(\w+\.)*radikal\.ru\/[\w\/]+\.\w+)"/.test(tc)
				) {
					_src = RegExp.$1;
					break;
				}
			}
		}
		_clearDoc = true;
	break;
	case "firepic.org":
		_src = $i(/^https?:\/\/(?:\w+\.)*firepic\.org\/[^?&#]*images\/[^?&#]+\.\w+$/);
	break;
	case "you-logo.ru":
		_src = $i(/^https?:\/\/(?:\w+\.)*you-logo\.ru\/[^?&#]+\/[^?&#\/]{32,}\.\w+$/);
	break;
	case "uploadimagex.com":
		_src = $i(/^https?:\/\/(?:\w+\.)*uploadimagex\.com\/uploads\/(?:[^?&#\/]+\/)*[^?&#\/]+\.\w+$/);
	break;
	case "toroff.net":
		_src = $i(/^https?:\/\/(?:\w+\.)*toroff\.net\/img\/(?:[^?&#\/]+\/)*[^?&#\/]{15,}\.\w+$/);
	break;
	case "clip2net.com":
		_src = $i(/^https?:\/\/(?:\w+\.)*clip2net\.com\/clip\/[^?&#]+\.\w+(?:\?nocache=\d+)?$/)
			.replace(/\?nocache=\d+?$/, "");
	break;
	case "screencast.com":
		_src = $i(/^https?:\/\/content\.screencast\.com\/[^?&#]+\.\w+$/);
	break;
	case "lastusja.ru":
		_src = $i(/^https?:\/\/(?:\w+\.)*lastusja\.ru\/images\/[^?&#]+\.\w+$/);
	break;
	case "gyazo.com":
		_src = $i(/^https?:\/\/(?:\w+\.)*gyazo\.com\/[\da-f]{32,}\.\w+$/);
	break;
	case "imgchilibum.ru":
		_src = $i(/^https?:\/\/imgchilibum\.ru\/[^?&#]+\/[\da-f]{32,}\.\w+$/);
	break;
	case "imglink.ru":
		_src = $i(/^https?:\/\/imglink\.ru\/pictures\/[^?&#]+\/[\da-f]{32,}\.\w+$/);
	break;
	case "fotolink.su":
		_src = $i(/^https?:\/\/(?:\w+\.)?fotolink\.su\/pic_b\/[^?&#]*[\da-f]{32,}\.\w+$/);
		_clearDoc = true;
	break;
	case "netpics.org":
		_src = $i(/^https?:\/\/netpics\.org\/images\/[^?&#]+\/\w+\.\w+$/);
	break;
	case "ximage.ru":
		_src = $i(/^https?:\/\/(?:\w+\.)*ximage\.ru\/data\/imgs\/[^?&#]+\.\w+$/);
	break;
	case "ii4.ru":
		_src = $i(/^https?:\/\/(?:\w+\.)*ii4\.ru\/images\/[^?&#]+\.\w+$/);
	break;
	case "freescreens.ru":
		_src = $i(/^https?:\/\/(?:\w+\.)*freescreens\.ru\/allimage\/[^?&#]+\.\w+$/);
	break;
	case "powerlogo.ru":
		_src = $i(/^https?:\/\/(?:\w+\.)*powerlogo\.ru\/pictures\/[\da-f]{32,}\.\w+$/);
	break;
	case "savepice.ru":
		_src = $i(/^https?:\/\/(?:\w+\.)*savepice\.ru\/uploads\/[^?&#]+\/[\da-f]{32,}[^?&#\/]+\.\w+$/);
	break;
	case "funkyimg.com":
		_src = $i(/^https?:\/\/(?:\w+\.)*funkyimg\.com\/i\/[^?&#\/]+\.\w+$/);
	break;
	case "imagesnake.com":
		_src = $i(/^https?:\/\/(?:\w+\.)*imagesnake\.com\/tn\/i\d+\/[^?&#\/]+\.\w+(?:\?id=\w+)?$/);
	break;

	// Get image from thumbnail:
	case "piccash.net":
		_src = $th(
			/^https?:\/\/piccash\.net\/[^?&#]+\/img_full\/\w+\.\w+$/,
			/^https?:\/\/piccash\.net\/[^?&#]+\/img_thumb\/\w+-thumb\.\w+$/,
			{
				"/img_thumb/": "/img_full/",
				"-thumb.":     "."
			}
		);
	break;
	case "pic4you.ru":
		_src = $th(
			/^https?:\/\/(?:\w+\.)?pic4you\.ru\/[^?&#]+\/\d+\.\w+$/,
			/^https?:\/\/(?:\w+\.)?pic4you\.ru\/[^?&#]+\/\d+-thumb\.\w+$/,
			{ "-thumb.": "." }
		);
	break;
	case "picforall.ru":
	case "payforpic.ru":
	case "pix-x.net":
	case "picclick.ru":
	case "imgclick.ru":
	case "imgbase.ru":
	case "picpays.ru":
	case "drlink.online":
		var more = $c("more_images"); // Blocks with "similar images" (on pix-x.net)
		for(var i = more.length - 1; i >= 0; --i)
			more[i].parentNode.removeChild(more[i]);
		_src = $th(
			/^https?:\/\/[^\/]+\/allimage\/[^?&#]+\/\d+\.\w+$/,
			/^https?:\/\/[^\/]+\/allimage\/[^?&#]+\/\d+-thumb\.\w+$/,
			{
				"/img_thumb/": "/img_full/",
				"-thumb.":     "."
			}
		);
	break;

	// Other:
	case "imageshack.us":
	case "imageshack.com":
		_src = $inp(/^https?:\/\/(?:\w+\.)*imageshack\.us\/(?:\w+\/)?img[^?&#]*\.\w+$/i);
	break;
	case "savepic.ru":
	case "savepic.org":
	case "savepic.net":
	case "savepic.su":
		var inp = $("http");
		if(inp) {
			_src = inp.value;
			break;
		}
		var imgs = document.images;
		for(var i = 0, len = imgs.length; i < len; ++i) {
			var img = imgs[i];
			var h = img.parentNode.href;
			var s = img.src;
			if(
				h && /^https?:\/\/(?:www\.)?savepic\.\w+\/\d+m\.htm$/.test(h)
				&& s && /^https?:\/\/(?:www\.)?savepic\.\w+\/\d+\.[a-z0-9]{3,4}$/.test(s)
			) {
				_src = s;
				break;
			}
		}
	break;
	case "piccy.info":
		if(/\/orig\/?$/.test(loc))
			_iid = "mainim";
		else
			_src = loc.replace(/(?:\/\d{2,4})?\/?$/, "/orig/");
	break;
	case "xtupload.com":
		var src = $inp(/^\[url=[^\[\]]+\]\[img\](http:\/\/(?:www\.)?xtupload.com\/\w+\/image-[^\[\]]+)\[\/img\]\[\/url\]/);
		if(src)
			_src = RegExp.$1;
	break;
	case "picatom.com":
		_img = document.getElementsByName("fred")[0];
	break;
	case "fotosik.pl":
		if(loc.indexOf("/pelny/") != -1)
			_iid = "photoDivImage";
		else
			redirect(loc.replace(/\/pokaz_obrazek\//i, "$&pelny/"));
	break;
	case "yandex.ru":
		var cont = $("sizes-list");
		if(!cont)
			break;
		var opts = cont.getElementsByTagName("div"), oLen = opts.length;
		if(!oLen)
			break;
		var a = opts[oLen - 1].getElementsByTagName("a");
		if(a.length)
			_src = a[0].href;
		if(!_src) {
			cont = $("fotka-view");
			if(!cont)
				break;
			var imgs = cont.getElementsByTagName("img");
			if(!imgs.length)
				break;
			_img = imgs[0];
		}
	break;
	case "southwc.ru":
		var links = $t("a");
		for(var i = 0, len = links.length; i < len; ++i) {
			var a = links[i];
			if(a.getAttribute("rel") == "lightbox[roadtrip]") {
				_src = a.href;
				break;
			}
		}
	break;
	case "pict.com":
		var link = $("original-link");
		if(link)
			_src = link.href;
	break;
	case "imageban.ru":
		_src = $inp(/^https?:\/\/(?:\w+\.)*imageban\.ru\/out\//);
	break;
	case "habreffect.ru":
		var node = $("image");
		if(!node)
			break;
		var imgs = node.getElementsByTagName("img");
		if(imgs.length == 1)
			_img = imgs[0];
	break;
	case "rghost.ru":
	case "rghost.net":
	case "rgho.st":
		var inp = $("direct_link");
		if(inp && inp.value) //~ old?
			_src = inp.value;
		else if(!$("hashes") && /^https?:\/\/rgho(?:\.st|st\.\w+)(?:\/\w+)+\.view$/.test(loc))
			_src = $i(/^https?:\/\/(?:\w+\.)*rgho(?:\.st|st\.\w+)\/[^?&#]+\/image\.\w+$/);
	break;
	case "itmages.ru":
	case "itmages.com":
		if(loc.indexOf("/preview/") != -1)
			_src = loc.replace("/preview/", "/view/");
		else
			_iid = "image";
	break;
	case "floomby.ru":
		if(!/\/full\/?$/.test(loc)) {
			_src = loc.replace(/\/$/, "") + "/full/";
			break;
		}
		_src = $i(/^https?:\/\/(?:\w+\.)*floomby\.\w+\/files\/share\/[^?&#]+\.\w+$/);
	break;
	case "kinopoisk.ru":
		var links = $t("a");
		for(var i = 0, len = links.length; i < len; ++i) {
			var a = links[i];
			if(!/\/picture\/\d+\//.test(a.href))
				continue;
			var contents = a.getElementsByTagName("*");
			if(contents.length == 1 && contents[0].nodeName.toLowerCase() == "img") {
				_src = contents[0].src;
				break;
			}
		}
	break;
	case "tenpic.ru":
		var ta = $t("textarea");
		if(ta.length && /^https?:\/\/tenpic\.ru\//.test(ta[0].value))
			_src = ta[0].value;
	break;
	case "imghost.in":
		var links = $t("a");
		for(var i = 0, len = links.length; i < len; ++i) {
			var a = links[i];
			if(!/^https?:\/\/imghost\.in\/di-\d+\.\w+$/.test(a.href))
				continue;
			var imgs = a.getElementsByTagName("img");
			if(imgs.length == 1 && /^https?:\/\/imghost\.in\/dt-\d+\.\w+$/.test(imgs[0].src)) {
				_src = a.href;
				break;
			}
		}
	break;
	case "binimage.org":
		var frs = document.getElementsByTagName("iframe");
		if(!frs.length)
			break;
		var fr = frs[0];
		_src = fr.getAttribute("src").charAt(0) == "/" && fr.src;
	break;
	case "forlazypeople.com":
	case "upit.biz":
		var node = $("imagen");
		if(!node)
			break;
		var imgs = node.getElementsByTagName("img");
		if(imgs.length == 1)
			_img = imgs[0];
	break;
	case "imgur.com":
		if(/\w{4,},\w{4,}(?:#[^#]*)?$/.test(loc)) // After uploading of 2+ images
			break;
		var a = $("large-image");
		if(a)
			_src = a.href;
		else {
			var block = $("image")
				|| $c("image textbox")[0]
				|| $c("share-links")[0]
				|| $c("post-image")[0];
			if(block) {
				var re = /^https?:\/\/(?:\w+\.)*imgur\.com\/\w+\.\w+(\?\d+)?$/;
				_src = $inp(re, block) || $i(re, block);
			}
		}
		if(
			!_src
			&& document.getElementsByTagName("video").length
			&& /^(https?:\/\/imgur\.com\/)(?:[^?&#]+\/)?(\w+)$/.test(loc)
		)
			redirect(RegExp.$1 + RegExp.$2 + "?tags");
	break;
	case "goodfon.ru":
	case "goodfon.su":
	case "badfon.ru":
		var a = $("im");
		if(a)
			_src = a.href;
	break;
	case "image-upload.net":
		var inp = document.getElementById("codedirect");
		if(inp)
			_src = inp.value;
	break;
	case "imageshost.ru":
		//_img = $("image");
		//if(_img)
		//	break;
		var content = $("content");
		if(!content)
			break;
		var ps = content.getElementsByTagName("p");
		for(var i = 0, l = ps.length; i < l; ++i)
			if(ps[i].textContent == "Другие изображения из данного альбома")
				break hostLoop;
		_src = $i(/^https?:\/\/(?:\w+\.)?imageshost\.ru\/img\/[^?&#]+\.\w+$/, content);
	break;
	case "screenshotuploader.com":
		var node = $("padd");
		_img = node && node.getElementsByTagName("img")[0];
	break;
	case "prntscr.com":
		var nodes = $c("image__pic");
		if(nodes.length == 1 && nodes[0].nodeName.toLowerCase() == "img")
			_img = nodes[0];
	break;
	case "ifotki.info":
		_src = $i(/^https?:\/\/(?:\w+\.)?ifotki\.info\/([^?&#]+\/)?[0-9a-f]{32,}\.\w+$/);
		if(!_src) {
			var src = $inp(/^\[url=http:\/\/ifotki\.info\/\]\[img\](.*?)\[\/img\]\[\/url\]$/);
			if(src && !/html?$/.test(RegExp.$1))
				_src = RegExp.$1;
		}
	break;
	case "photobucket.com":
		if($("flashcontent"))
			break;
		if(/^(http:\/\/\w+\.photobucket\.com\/[^?&#]+).*[?&]current=([^?&#]+)/.test(loc))
			_src = (RegExp.$1 + RegExp.$2).replace(/\/\/s/, "//i");
		else {
			_clearDoc = true;
			_src = $u($("linksModule_ccinput_1"));
			if(!_src) {
				var labels = document.getElementsByTagName("label");
				for(var i = 0, l = labels.length; i < l; ++i) {
					var label = labels[i];
					if(/(?:^|\s)Direct(?:\s|$)/i.test(label.textContent)) {
						_src = $u(label.parentNode.getElementsByTagName("input")[0]);
						break;
					}
				}
			}
		}
	break;
	case "tinypic.com":
		_clearDoc = true;
		_src = $u($("direct-url"));
		if(!_src) {
			var block = $("flash-direct-url");
			var embed = block && $t("embed", block)[0];
			if(embed) {
				var fv = embed.getAttribute("flashvars");
				if(/=(http[^\s&]+)/.test(fv))
					_src = $url($dec(RegExp.$1));
			}
		}
	break;
	case "fotohost.by":
		var imgs = $c("pic");
		if(imgs.length == 1)
			_img = imgs[0];
	break;
	case "fastpic.ru":
		_img = $c("image")[0] || null;
		_clearDoc = true;
	break;
	case "joxi.ru":
	case "joxi.net":
		var links = $c("js-tile-link-zoom");
		if(links.length)
			_src = links[0].href;
	break;
	case "postimg.org":
		var img = $("main-image");
		if(!img)
			break;
		if(img.hasAttribute("data-full"))
			_src = location.protocol + img.getAttribute("data-full").replace(/^https?:/, "");
		else
			_img = img;
		_clearDoc = true;
	break;
	case "i-fotki.info":
		if($inp(/^\[URL=[^\[\]]+\]\[IMG\](https?:\/\/(?:\w+\.)*ifotki\.info\/org\/[^?&#]+\.\w+)\[\/IMG\]\[\/URL\]$/i))
			_src = RegExp.$1;
	break;
	case "4put.ru":
		_src = $inp(/^https?:\/\/(?:\w+\.)*4put\.ru\/pictures\/max\/[^?&#]+\.\w+$/);
	break;
	case "fotkidepo.ru":
	case "ixbt.photo":
		_src = $a(/^https?:\/\/(?:\w+\.)*(?:fotkidepo\.ru|ixbt\.photo)\/photo\/[^?&#]+\.\w+$/);
	break;
	case "lostpic.net":
		_src = $a(/^https?:\/\/(?:\w+\.)*lostpic\.net\/orig_images[^?&#]*\/[0-9a-f]{32,}\.\w+$/)
			|| ($i(/^https?:\/\/(?:\w+\.)*lostpic\.net\/[^?&#]*\/[0-9a-f]{32,}(?:\.md)?\.\w+$/) || "")
				.replace(/\.md(\.\w+)$/, "$1")
	break;
	case "lg.ua":
		_src = $a(/^https?:\/\/pic\.lg\.ua\/[^?&#]+\.\w+$/);
	break;
	case "cardse.net":
		_src = $inp(/^https?:\/\/cardse\.net\/[^?&#]+\.\w+$/);
	break;
	case "image2you.ru":
		var btn = $("_confirm");
		if(btn)
			btn.click();
		else
			_src = $i(/^https?:\/\/image2you\.ru\/allimages\/[^?&#]+\.\w+$/);
	break;
	case "cl.ly":
		_src = ogImage();
		if(_src && location.protocol == "https:" && /^http:\/+/i.test(_src))
			_src = "https://s3.amazonaws.com/" + RegExp.rightContext;
	break;
	case "riotpixels.com":
		_src = $a(/^https?:\/\/(?:\w+\.)?riotpixels\.\w+\/data\/[^?&#]+\.\w+$/);
	break;
	case "prnt.sc":
	case "snag.gy":
	case "directupload.net":
	case "ibb.co":
		_src = ogImage();
		if(!_src) {
			var img = document.querySelector && document.querySelector('img[src="' + location.pathname + '"]');
			if(img && img.src == loc && img.parentNode != document.body) {
				_src = loc;
				_clearDoc = true;
			}
		}
	break;
	case "picturelol.com":
		_img = $c("pic")[0] || null;
		_clearDoc = true;
	break;
	case "imgdrive.net":
		_src = ogImage()
			.replace("/small/", "/big/");
	break;
	case "imagebam.com":
		_src = ogImage();
}
if(_iid)
	_img = $(_iid);
if(_img && _img.src && _img.offsetWidth && _img.offsetHeight) //~ todo: fails sometimes on DOMContentLoaded
	_src = _img.src;
if(_src && _src != loc) {
	GM_log("Redirect (" + (event ? event.type : "delay") + "):\n" + loc + "\n=> " + _src);
	if(_clearDoc) {
		if("history" in window && "pushState" in history) try {
			history[allowBack ? "pushState" : "replaceState"]("", document.title, _src);
		}
		catch(e) { // SecurityError: The operation is insecure
			setTimeout(function() { throw e; }, 0);
			allowBack && history.pushState("", document.title, loc);
		}
		clearDoc(_src);
	}
	else {
		redirect(_src);
	}
	destroy();
}
else if(_src) {
	GM_log("Clear document (" + (event ? event.type : "delay") + "):\n" + loc);
	clearDoc(_src);
	destroy();
}
else if(document.readyState == "loading") {
	if(!("_count" in di)) {
		di._count = 0;
		// With disabled scripts setTimeout doesn't work
		ael.call(window, "DOMContentLoaded", di, false);
		ael.call(window, "load", di, false);
	}
	if(++di._count < 5*60e3/10)
		di._timer = setTimeout(di, 10);
}
else if(event && event.type == "load")
	destroy();
function destroy() {
	di._timer && clearTimeout(di._timer);
	rel.call(window, "DOMContentLoaded", di, false);
	rel.call(window, "load", di, false);
}
})();