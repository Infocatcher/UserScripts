// ==UserScript==
// @name           Direct Images
// @version        0.5.38 - 2016-01-23
// @description    Redirect from preview pages to images directly
// @author         Infocatcher
// @namespace      dev/null
// @run-at         document-start
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_log

// @include        about:blank?UserScripts/options/Direct_Images

// Get image by id:
// @include        http://img*.imagevenue.com/img.php?image=*
// @include        http://ipicture.ru/Gallery/Viewfull/*.html
// @include        http://*.ipicture.ru/Gallery/Viewfull/*.html
// @include        http://www.picamatic.com/view/*
// @include        http://download.su/photo/*
// @include        http://*imageup.ru/img*/*.html
// @include        http://*pixshock.net/*.html
// @include        http://*image-share.com/image.php?*
// @include        http://*image-share.com/*.html
// @include        http://*10pix.ru/view/*
// @include        http://funkyimg.com/viewer.php?*
// @include        http://xmages.net/show.php*.html
// @include        http://opicture.ru/gallery/view/*.html
// @include        http://picamigo.com/show.php/*.html
// @include        http://*.directupload.net/file/*.htm
// @include        http://pikucha.ru/*
// @include        http://keep4u.ru/full/*.html
// @include        http://www.imagebanana.com/view/*
// @include        http://yfrog.com/*
// @include        http://radikal.ua/full/*.html
// @include        http://upyourpic.org/images/*.html
// @include        http://*postimg.com/image/*
// @include        http://www.bild.me/bild.php?file=*
// @include        http://www.pictureshack.ru/view_*
// @include        http://gyazo.com/*
// @include        http://pixs.ru/showimage/*
// @include        http://minus.com/*
// @include        http://*overpic.net/viewer.php?file=*
// @include        http://pictube.ru/?v=*
// @include        http://owely.com/*
// @include        http://uaimage.com/image/*
// @include        http://vfl.ru/fotos/*.html*
// @include        https://geekpics.net/view/*

// URL-based redirect:
// @include        http://smages.com/*.htm
// @include        http://anub.ru/pic/*
// @include        http://*onlinedisk.ru/image/*
// @include        http://*onlinedisk.ru/view/*
// @include        http://*.fotoupload.ru/viewer.php?file=*
// @include        http://image.vanilla.su/viewer.php?file=*
// @include        http://prostofotka.ru/viewer.php?file=*
// @include        http://foto-screen.ru/viewer.php?file=*
// @include        http://foto-screen.org/viewer.php?file=*
// @include        http://foto-boom.org/viewer.php?file=*
// @include        http://pixmaster.net/viewer.php?file=*
// @include        http://itrash.ru/idb/*.htm*
// @include        http://*.itrash.ru/idb/*.htm*
// @include        http://*.sendpic.ru/*.html
// @include        http://*imget.ru/show/?img=*
// @include        http://fastpic.msk.ru/?v=*
// @include        http://youpic.su/view.php?id=*
// @include        http://jpegshare.net/*.html
// @include        http://imagelike.org/?v=*
// @include        http://rupix.org/viewer.php?*
// @include        http://all-poster.ru/?v=*
// @include        http://picsee.net/*.html
// @include        http://img.bigstream.ru/viewer.php?file=*
// @include        http://pix.toile-libre.org/?img=*
// @include        http://fast-picture.ru/images/*.html
// @include        http://pasteboard.co/*

// Get image by src:
// @include        http://*imagepix.org/image/*.html
// @include        http://saveimg.ru/show-image.php?id=*
// @include        http://mediapix.ru/pic.php?id=*
// @include        http://pixs.ru/showimage/*
// @include        http://postimage.org/image/*
// @include        http://uaimages.com/viewer.php?*
// @include        http://7image.ru/v.php?*
// @include        http://mepic.ru/view/?*
// @include        http://simplest-image-hosting.net/*
// @include        http://pics.kz/view/*
// @include        http://*imagepost.ru/?v=*
// @include        http://imgtheif.com/show-image.php?id=*
// @include        http://imgtheif.com/image/*.html
// @include        http://hostingkartinok.com/show-image.php?*
// @include        http://image.kz/*
// @include        http://imm.io/*
// @include        http://narodpix.net/?v=*
// @include        http://www.narodpix.net/?v=*
// @include        http://www.imagebam.com/image/*
// @include        http://*radikal.ru/F/*.html*
// @include        http://radikal-foto.ru/F/*.html*
// @include        http://radical-foto.ru/F/*.html*
// @include        http://*radikal.ru/*fp/*
// @include        http://radikal-foto.ru/*fp/*
// @include        http://radical-foto.ru/*fp/*
// @include        http://f-page.ru/*fp/*
// @include        http://f-lite.ru/*fp/*
// @include        http://f-picture.net/*fp/*
// @include        http://firepic.org/?v=*
// @include        http://www.firepic.org/?v=*
// @include        http://you-logo.ru/show-image.php?*
// @include        http://uploadimagex.com/view.php?*
// @include        http://toroff.net/?v=*
// @include        http://clip2net.com/s/*
// @include        http://screencast.com/*/*
// @include        http://img.lastusja.ru/*

// Other:
// @include        http://img*.imageshack.us/*
// @include        http://imageshack.us/photo/*
// @include        http://imageshack.us/f/*/
// @include        http://imageshack.com/photo/*
// @include        http://savepic.ru/*.htm
// @include        http://savepic.org/*.htm
// @include        http://savepic.net/*.htm
// @include        http://savepic.su/*.htm
// @include        http://piccy.info/*view*/*
// @include        http://*xtupload.com/*.html
// @include        http://*picatom.com/*.html
// @include        http://*fotosik.pl/pokaz_obrazek/*.html
// @include        http://fotki.yandex.ru/users/*/view/*
// @include        http://southwc.ru/*.htm
// @include        http://imglink.ru/show-image.php?*
// @include        http://www.pict.com/view/*
// @include        http://imageban.ru/show/*
// @include        http://habreffect.ru/*
// @include        http://rghost.ru/*
// @include        http://rghost.net/*
// @include        http://itmages.ru/image/*
// @include        https://itmages.ru/image/*
// @include        http://itmages.com/image/*
// @include        https://itmages.com/image/*
// @include        http://*floomby.ru/content/*
// @include        http://www.kinopoisk.ru/picture/*/or/1/
// @include        http://tenpic.ru/view.php?*
// @include        http://imghost.in/pt-*.html
// @include        http://img*.binimage.org/*
// @include        http://forlazypeople.com/?v=*
// @include        http://upit.biz/?v=*
// @match          *://imgur.com/*
// @exclude        *://imgur.com/
// @exclude        *://imgur.com/a/*
// @exclude        *://imgur.com/gallery/*
// @exclude        *://imgur.com/user/*
// @include        http://*.goodfon.ru/download*
// @include        http://*.goodfon.su/download*
// @include        http://*.badfon.ru/download*
// @include        http://*image-upload.net/*.html
// @include        http://imageshost.ru/links/*
// @include        http://imageshost.ru/photo/*.html
// @include        http://screenshotuploader.com/s/*
// @include        http://prntscr.com/*
// @include        http://ifotki.info/*.html
// @include        http://*.photobucket.com/*?action=view*
// @include        http://*.photobucket.com/*.html*
// @include        http://tinypic.com/view.php?pic=*
// @include        http://*fotohost.by/show/*
// @include        http://fastpic.ru/view/*.html*
// @include        http://joxi.ru/*
// @include        http://postimg.org/image/*
// @include        http://i-fotki.info/*.html
// @include        http://4put.ru/*.php?*
// @include        http://fotkidepo.ru/?id=photo:*
// @include        http://lostpic.net/?*
// @include        http://pic.lg.ua/*
// @include        https://cardse.net/image/*
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
	document.title = "Direct Images Options";
	var body = document.body || document.documentElement;
	var label = document.createElementNS("http://www.w3.org/1999/xhtml", "label");
	label.htmlFor = "allowBack";
	var input = document.createElementNS("http://www.w3.org/1999/xhtml", "input");
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

var host = location.hostname
	.split(".")
	.slice(-2)
	.join("."); // a.example.com => example.com
var _iid, _img, _src, _clearDoc;
function $(id) {
	return document.getElementById(id);
}
function $t(tag, node) {
	if(!node)
		node = document;
	return node.getElementsByTagName(tag);
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
	if(!node)
		node = document;
	var inps = node.getElementsByTagName("input");
	for(var i = 0, len = inps.length; i < len; ++i) {
		var val = inps[i].value;
		if(mask.test(val))
			return val;
	}
	return "";
}
function $a(mask, node) {
	if(!node)
		node = document;
	var links = node.getElementsByTagName("a");
	for(var i = 0, len = links.length; i < len; ++i) {
		var link = links[i];
		if(mask.test(link.href))
			return link;
	}
	return null;
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
function redirect(url) {
	if(allowBack)
		location.href = url;
	else
		location.replace(url);
}
function clearDoc(src) {
	var ns = "http://www.w3.org/1999/xhtml";

	var html = document.createElementNS(ns, "html");

	var head = document.createElementNS(ns, "body");
	var title = document.createElementNS(ns, "title");
	var imgName = src.match(/[^\/]*$/)[0];
	try {
		imgName = decodeURIComponent(imgName);
	}
	catch(e) {
	}
	title.appendChild(document.createTextNode(imgName + " - Direct Images"));
	head.appendChild(title);
	var link = document.createElementNS(ns, "link");
	link.rel = "shortcut icon";
	link.href = src;
	head.appendChild(link);
	var style = document.createElementNS(ns, "style");
	style.type = "text/css";
	style.appendChild(document.createTextNode("\
		html, html > body {\n\
			margin: 0; padding: 0;\n\
			width: auto !important; height: auto !important; /* for https://userstyles.org/styles/101141/ru-adlist-css-fixes */\n\
		}\n\
		.zoomIn { cursor: -moz-zoom-in; cursor: -webkit-zoom-in; cursor: zoom-in; }\n\
		.zoomOut { cursor: -moz-zoom-out; cursor: -webkit-zoom-out; cursor: zoom-out; }"
	));
	head.appendChild(style);

	var meta = document.createElementNS(ns, "meta");
	meta.name = "viewport";
	meta.content = "width=device-width; height=device-height;";
	head.appendChild(meta);

	link = document.createElementNS(ns, "link");
	link.rel = "stylesheet";
	link.href = "resource://gre/res/TopLevelImageDocument.css";
	head.appendChild(link);
	link = link.cloneNode(true);
	link.href = "chrome://global/skin/TopLevelImageDocument.css";
	head.appendChild(link);
	link = link.cloneNode(true);
	link.href = "chrome://global/skin/media/TopLevelImageDocument.css"; // Firefox 19.0a1
	head.appendChild(link);

	var body = document.createElementNS(ns, "body");
	var img = document.createElementNS(ns, "img");
	img.style.maxWidth = window.innerWidth + "px";
	img.style.maxHeight = window.innerHeight + "px";
	img.addEventListener("load", function initResizer(e) {
		img.removeEventListener(e.type, initResizer, false);
		img.style.maxWidth = img.style.maxHeight = null;
		var originalSize = false;
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
				img.style.width = iw*persent + "px";
				img.style.height = ih*persent + "px";
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
			img.style.width = img.style.height = null;
			document.title = imgName + " (" + size + ")" + " - Direct Images";
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
			if(e.button != 0)
				return;
			if(!fitSize(true)) { // Nothing to toggle
				setCursor(false);
				return;
			}
			originalSize = !originalSize;
			if(originalSize) {
				// Zoom and scroll to clicked position
				var ww = window.innerWidth;
				var wh = window.innerHeight;
				var dx = e.clientX/ww;
				var dy = e.clientY/wh;
				origSize();
				window.scrollTo(
					Math.max(0, dx*iw - ww/2),
					Math.max(0, dy*ih - wh/2)
				);
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
		img.addEventListener("click", toggleFitSize, false);
		window.addEventListener("resize", onResize, false);
		window.addEventListener("unload", function destroy(e) {
			window.removeEventListener(e.type, destroy, false);
			img.removeEventListener("click", toggleFitSize, false);
			window.removeEventListener("resize", onResize, false);
		}, false);
		if(!originalSize)
			fitSize();
	}, false);
	img.src = img.alt = src;
	body.appendChild(img);

	html.appendChild(head);
	html.appendChild(body);

	while(document.hasChildNodes())
		document.removeChild(document.lastChild);
	document.appendChild(html);
}
hostLoop:
switch(host) {
	// Get image by id:
	case "imagevenue.com":   _iid = "thepic";        break;
	case "ipicture.ru":      _iid = "newImg";        break;
	case "picamatic.com":    _iid = "pic";           break;
	case "download.su":      _iid = "thepic";        break;
	case "imageup.ru":       _iid = "image";         break;
	case "pixshock.net":     _iid = "mi";            break;
	case "image-share.com":  _iid = "image";         break;
	case "10pix.ru":         _iid = "image";         break;
	case "funkyimg.com":     _iid = "image";         break;
	case "xmages.net":       _iid = "img_obj";       break;
	case "opicture.ru":      _iid = "newImg";        break;
	case "picamigo.com":     _iid = "img_obj";       break;
	case "directupload.net": _iid = "Bild";          break;
	case "pikucha.ru":       _iid = "image";         break;
	case "keep4u.ru":        _iid = "foto";          break;
	case "imagebanana.com":  _iid = "image";         break;
	case "yfrog.com":        _iid = "main_image";    break;
	case "radikal.ua":       _iid = "image";         break;
	case "upyourpic.org":    _iid = "mainimage";     break;
	case "postimg.com":      _iid = "image";         break;
	case "bild.me":          _iid = "Bild";          break;
	case "pictureshack.ru":  _iid = "image";         break;
	case "gyazo.com":        _iid = "gyazo_img";     break;
	case "pixs.ru":          _iid = "imgg";          break;
	case "minus.com":        _iid = "current_image"; break;
	case "overpic.net":      _iid = "main_img";      break;
	case "pictube.ru":       _iid = "full_image";    break;
	case "owely.com":        _iid = "issueImg";      break;
	case "uaimage.com":      _iid = "im";            break;
	case "vfl.ru":           _iid = "img_foto";      break;
	case "geekpics.net":     _iid = "full_image";    break;

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
		_src = loc.replace(/viewer\.php\?file=/, "images/");
	break;
	case "itrash.ru":
	case "sendpic.ru":
		_src = loc.replace(/\.html?$/, "");
	break;
	case "imget.ru":
		_src = loc.replace(/\/show\/\?img=/, "");
	break;
	case "msk.ru":
		_src = loc.replace(/\?v=/, "images/");
	break;
	case "youpic.su":
		_src = loc.replace(/^(https?:\/\/).*?\?id=/, "$1");
	break;
	case "jpegshare.net":
		_src = loc.replace(/jpegshare\.net\//, "$&images/").replace(/\.html$/, "");
	break;
	case "imagelike.org":
		_src = loc.replace(/\/\?v=/, "/images/");
	break;
	case "rupix.org":
		_src = loc.replace(/\/viewer\.php\?file=/, "/images/");
	break;
	case "all-poster.ru":
		_src = loc.replace(/\/\?v=/, "/images/");
	break;
	case "picsee.net":
		_src = loc
			.replace(/^https?:\/\/(?:\w+\.)*picsee\.net\//, "$&upload/")
			.replace(/\.html$/, "");
	break;
	case "bigstream.ru":
		_src = loc.replace(/\/viewer\.php\?file=/, "/i/");
	break;
	case "toile-libre.org":
		_src = loc.replace(/\/\?img=/, "/upload/original/");
	break;
	case "fast-picture.ru":
		_src = loc.replace(/\.html?$/, "");
	break;
	case "pasteboard.co":
		_src = loc.replace("http://pasteboard.co/", "https://cdn.pbrd.co/images/");
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
	case "imagebam.com":
		_src = $i(/^https?:\/\/(?:\w+\.)?imagebam\.com\/download\/[^?&#]+\.\w+$/);
		_clearDoc = true;
	break;
	case "radikal.ru":
	case "radikal-foto.ru":
	case "radical-foto.ru":
	case "f-page.ru":
	case "f-lite.ru":
	case "f-picture.net":
		if(/^https?:\/\/(?:www\.)?radikal\.ru\/F\/(\w+\.radikal\.ru\/[\w\/\.]+)\.html#?$/.test(loc))
			_src = "http://" + RegExp.$1;
		else if(/[?&]u=(http[^?&#]+)/.test(loc))
			_src = decodeURIComponent(RegExp.$1);
		else if(/^https?:\/\/([\w-]+\.)+\w+\/l?fp\//.test(loc)) {
			_src = $ie(
				/^https?:\/\/(\w+\.)*radikal\.ru\/[\w\/]+\.\w+$/,
				/^https?:\/\/[^\/]+\/Content\/Images\//
			);
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
	case "imglink.ru":
		var links = $t("a");
		for(var i = 0, len = links.length; i < len; ++i) {
			var a = links[i];
			if(a.title == "Нажмите на изображении для просмотра в полную величину") {
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
		var inp = $("direct_link");
		if(inp && inp.value) //~ old?
			_src = inp.value;
		else if(!$("hashes") && /^https?:\/\/rghost\.\w+(?:\/\w+)+\.view$/.test(loc))
			_src = $i(/^https?:\/\/(?:\w+\.)*rghost\.\w+\/[^?&#]+\/image\.\w+$/);
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
		_src = $i(/^https?:\/\/\w+\.stratoserver\.net\/files\/share\/[^?&#]+\.\w+$/i);
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
				if(/=(http[^\s&]+)/.test(fv)) try {
					_src = $url(decodeURIComponent(RegExp.$1));
				}
				catch(e) {
				}
			}
		}
	break;
	case "fotohost.by":
		var imgs = $c("pic");
		if(imgs.length == 1)
			_img = imgs[0];
	break;
	case "fastpic.ru":
		var imgs = document.querySelectorAll && document.querySelectorAll("[id='image']");
		if(imgs && imgs.length > 1) { // Really!
			_img = imgs[imgs.length - 1];
			break;
		}
		_iid = "image";
		_clearDoc = true;
	break;
	case "joxi.ru":
		var links = $c("js-tile-link-zoom");
		if(links.length)
			_src = links[0].href;
	break;
	case "postimg.org":
		var link = $a(/^https?:\/\/(?:\w+\.)?postimg\.org\/.*\/full\/$/);
		if(link && link.href != loc)
			redirect(link.href);
		else
			_src = $i(/^https?:\/\/(?:\w+\.)?postimg\.org\/\w{4,}\/[^?&#]+\.\w+$/);
	break;
	case "i-fotki.info":
		if($inp(/^\[URL=[^\[\]]+\]\[IMG\](https?:\/\/(?:\w+\.)*ifotki\.info\/org\/[^?&#]+\.\w+)\[\/IMG\]\[\/URL\]$/i))
			_src = RegExp.$1;
	break;
	case "4put.ru":
		_src = $inp(/^https?:\/\/(?:\w+\.)*4put\.ru\/pictures\/max\/[^?&#]+\.\w+$/);
	break;
	case "fotkidepo.ru":
		var link = $a(/^https?:\/\/(?:\w+\.)*fotkidepo\.ru\/photo\/[^?&#]+\.\w+$/);
		if(link)
			_src = link.href
	break;
	case "lostpic.net":
		_src = $a(/^https?:\/\/(?:\w+\.)*lostpic\.net\/orig_images[^?&#]*\/[0-9a-f]{32,}\.\w+$/);
	break;
	case "lg.ua":
		_src = $a(/^https?:\/\/pic\.lg\.ua\/[^?&#]+\.\w+$/);
	break;
	case "cardse.net":
		_src = $inp(/^https?:\/\/cardse\.net\/[^?&#]+\.\w+$/);
}
if(_iid)
	_img = $(_iid);
if(_img && _img.src && _img.offsetWidth && _img.offsetHeight) //~ todo: fails sometimes on DOMContentLoaded
	_src = _img.src;
if(_src && _src != loc) {
	GM_log("Redirect (" + (event ? event.type : "delay") + "):\n" + loc + "\n=> " + _src);
	if(_clearDoc) {
		if(allowBack && "history" in window && "pushState" in history)
			history.pushState("", document.title, loc);
		clearDoc(_src);
	}
	else {
		redirect(_src);
	}
	destroy();
}
else if(document.readyState == "loading") {
	if(!("_count" in di)) {
		di._count = 0;
		// With disabled scripts setTimeout doesn't work
		window.addEventListener("DOMContentLoaded", di, false);
		window.addEventListener("load", di, false);
	}
	if(++di._count < 5*60*1000/10)
		di._timer = setTimeout(di, 10);
}
else if(event && event.type == "load")
	destroy();
function destroy() {
	di._timer && clearTimeout(di._timer);
	window.removeEventListener("DOMContentLoaded", di, false);
	window.removeEventListener("load", di, false);
}
})();