// ==UserScript==
// @name        Forum Code Highlighter
// @version     0.1.4.1 - 2016-07-02
// @author      Infocatcher
// @namespace   dev/null
// @match       *://custombuttons.sourceforge.net/forum/viewtopic.php?*
// @match       *://custombuttons.sourceforge.net/forum/posting.php*
// @match       *://custombuttons.sourceforge.net/forum/ucp.php*mode=compose*
// @match       *://forum.mozilla-russia.org/viewtopic.php?*
// @match       *://forum.mozilla-russia.org/post.php*
// @match       *://forum.mozilla-russia.org/message_list.php?*
// @match       *://forum.mozilla-russia.org/message_send.php?*
// @match       *://forum.mozilla-russia.org/edit.php?*
// @match       *://akelpad.sourceforge.net/forum/viewtopic.php?*
// @match       *://akelpad.sourceforge.net/forum/posting.php*
// @match       *://akelpad.sourceforge.net/forum/privmsg.php*
// ==/UserScript==

// Highlighter and styles: highlight.js http://softwaremaniacs.org/soft/highlight/download/

(function() {
var codeClass = "highlight-js-code";
var switcherClass = "highlight-js-typeSwitcher";

var hljs=new function(){function o(r){return r.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function h(t,s,r){return RegExp(s,"m"+(t.cI?"i":"")+(r?"g":""))}function d(t){for(var r=0;r<t.childNodes.length;r++){var s=t.childNodes[r];if(s.nodeName=="CODE"){return s}if(!(s.nodeType==3&&s.nodeValue.match(/\s+/))){break}}}var c=(typeof navigator!=="undefined"&&/MSIE [678]/.test(navigator.userAgent));function j(v,u){var r="";for(var t=0;t<v.childNodes.length;t++){if(v.childNodes[t].nodeType==3){var s=v.childNodes[t].nodeValue;if(u){s=s.replace(/\n/g,"")}r+=s}else{if(v.childNodes[t].nodeName=="BR"){r+="\n"}else{r+=j(v.childNodes[t])}}}if(c){r=r.replace(/\r/g,"\n")}return r}function a(u){var t=u.className.split(/\s+/);t=t.concat(u.parentNode.className.split(/\s+/));for(var s=0;s<t.length;s++){var r=t[s].replace(/^language-/,"");if(g[r]||r=="no-highlight"){return r}}}function e(t){var r=[];(function s(v,w){for(var u=0;u<v.childNodes.length;u++){if(v.childNodes[u].nodeType==3){w+=v.childNodes[u].nodeValue.length}else{if(v.childNodes[u].nodeName=="BR"){w+=1}else{if(v.childNodes[u].nodeType==1){r.push({event:"start",offset:w,node:v.childNodes[u]});w=s(v.childNodes[u],w);r.push({event:"stop",offset:w,node:v.childNodes[u]})}}}}return w})(t,0);return r}function m(A,y,z){var s=0;var B="";var u=[];function w(){if(A.length&&y.length){if(A[0].offset!=y[0].offset){return(A[0].offset<y[0].offset)?A:y}else{return y[0].event=="start"?A:y}}else{return A.length?A:y}}function v(F){var C="<"+F.nodeName.toLowerCase();for(var D=0;D<F.attributes.length;D++){var E=F.attributes[D];C+=" "+E.nodeName.toLowerCase();if(E.value!==undefined&&E.value!==false&&E.value!==null){C+='="'+o(E.value)+'"'}}return C+">"}while(A.length||y.length){var x=w().splice(0,1)[0];B+=o(z.substr(s,x.offset-s));s=x.offset;if(x.event=="start"){B+=v(x.node);u.push(x.node)}else{if(x.event=="stop"){var r,t=u.length;do{t--;r=u[t];B+=("</"+r.nodeName.toLowerCase()+">")}while(r!=x.node);u.splice(t,1);while(t<u.length){B+=v(u[t]);t++}}}}return B+o(z.substr(s))}function l(r){function s(y,A,w){if(y.compiled){return}var u=[];if(y.k){var t={};function z(F,E){var C=E.split(" ");for(var B=0;B<C.length;B++){var D=C[B].split("|");t[D[0]]=[F,D[1]?Number(D[1]):1];u.push(D[0])}}y.lR=h(A,y.l||hljs.IR,true);if(typeof y.k=="string"){z("keyword",y.k)}else{for(var x in y.k){if(!y.k.hasOwnProperty(x)){continue}z(x,y.k[x])}}y.k=t}if(!w){if(y.bWK){y.b="\\b("+u.join("|")+")\\s"}y.bR=h(A,y.b?y.b:"\\B|\\b");if(!y.e&&!y.eW){y.e="\\B|\\b"}if(y.e){y.eR=h(A,y.e)}}if(y.i){y.iR=h(A,y.i)}if(y.r===undefined){y.r=1}if(!y.c){y.c=[]}y.compiled=true;for(var v=0;v<y.c.length;v++){if(y.c[v]=="self"){y.c[v]=y}s(y.c[v],A,false)}if(y.starts){s(y.starts,A,false)}}s(g[r].dM,g[r],true)}var b={};function f(F,G){if(!b[F]){l(F);b[F]=true}function u(r,Q){for(var P=0;P<Q.c.length;P++){var O=Q.c[P].bR.exec(r);if(O&&O.index==0){return Q.c[P]}}}function y(O,r){if(s[O].e&&s[O].eR.test(r)){return 1}if(s[O].eW){var P=y(O-1,r);return P?P+1:0}return 0}function z(r,O){return O.i&&O.iR.test(r)}function N(Q,R){var P=[];for(var O=0;O<Q.c.length;O++){P.push(Q.c[O].b)}var r=s.length-1;do{if(s[r].e){P.push(s[r].e)}r--}while(s[r+1].eW);if(Q.i){P.push(Q.i)}return P.length?h(R,P.join("|"),true):null}function t(P,O){var Q=s[s.length-1];if(Q.t===undefined){Q.t=N(Q,H)}var r;if(Q.t){Q.t.lastIndex=O;r=Q.t.exec(P)}return r?[P.substr(O,r.index-O),r[0],false]:[P.substr(O),"",true]}function C(Q,r){var O=H.cI?r[0].toLowerCase():r[0];var P=Q.k[O];if(P&&P instanceof Array){return P}return false}function I(O,S){O=o(O);if(!S.k){return O}var r="";var R=0;S.lR.lastIndex=0;var P=S.lR.exec(O);while(P){r+=O.substr(R,P.index-R);var Q=C(S,P);if(Q){A+=Q[1];r+='<span class="'+Q[0]+'">'+P[0]+"</span>"}else{r+=P[0]}R=S.lR.lastIndex;P=S.lR.exec(O)}return r+O.substr(R)}function D(O,P){var r;if(P.sL==""){r=i(O)}else{r=f(P.sL,O)}if(P.r>0){A+=r.keyword_count;E+=r.r}return'<span class="'+r.language+'">'+r.value+"</span>"}function M(r,O){if(O.sL&&g[O.sL]||O.sL==""){return D(r,O)}else{return I(r,O)}}function L(P,r){var O=P.cN?'<span class="'+P.cN+'">':"";if(P.rB){B+=O;P.buffer=""}else{if(P.eB){B+=o(r)+O;P.buffer=""}else{B+=O;P.buffer=r}}s.push(P);E+=P.r}function J(Q,P,T){var U=s[s.length-1];if(T){B+=M(U.buffer+Q,U);return false}var S=u(P,U);if(S){B+=M(U.buffer+Q,U);L(S,P);return S.rB}var O=y(s.length-1,P);if(O){var R=U.cN?"</span>":"";if(U.rE){B+=M(U.buffer+Q,U)+R}else{if(U.eE){B+=M(U.buffer+Q,U)+R+o(P)}else{B+=M(U.buffer+Q+P,U)+R}}while(O>1){R=s[s.length-2].cN?"</span>":"";B+=R;O--;s.length--}var r=s[s.length-1];s.length--;s[s.length-1].buffer="";if(r.starts){L(r.starts,"")}return U.rE}if(z(P,U)){throw"Illegal"}}var H=g[F];var s=[H.dM];var E=0;var A=0;var B="";try{var v,x=0;H.dM.buffer="";do{v=t(G,x);var w=J(v[0],v[1],v[2]);x+=v[0].length;if(!w){x+=v[1].length}}while(!v[2]);return{r:E,keyword_count:A,value:B,language:F}}catch(K){if(K=="Illegal"){return{r:0,keyword_count:0,value:o(G)}}else{throw K}}}function i(v){var r={keyword_count:0,r:0,value:o(v)};var t=r;for(var s in g){if(!g.hasOwnProperty(s)){continue}var u=f(s,v);u.language=s;if(u.keyword_count+u.r>t.keyword_count+t.r){t=u}if(u.keyword_count+u.r>r.keyword_count+r.r){t=r;r=u}}if(t.language){r.second_best=t}return r}function k(t,s,r){if(s){t=t.replace(/^((<[^>]+>|\t)+)/gm,function(u,x,w,v){return x.replace(/\t/g,s)})}if(r){t=t.replace(/\n/g,"<br>")}return t}function p(v,y,t){var z=j(v,t);var x=a(v);var A,u;if(x=="no-highlight"){return}if(x){A=f(x,z)}else{A=i(z);x=A.language}var s=e(v);if(s.length){u=document.createElement("pre");u.innerHTML=A.value;A.value=m(s,e(u),z)}A.value=k(A.value,y,t);var w=v.className;if(!w.match("(\\s|^)(language-)?"+x+"(\\s|$)")){w=w?(w+" "+x):x}if(c&&v.tagName=="CODE"&&v.parentNode.tagName=="PRE"){u=v.parentNode;var r=document.createElement("div");r.innerHTML="<pre><code>"+A.value+"</code></pre>";v=r.firstChild.firstChild;r.firstChild.cN=u.cN;u.parentNode.replaceChild(r.firstChild,u)}else{v.innerHTML=A.value}v.className=w;v.result={language:x,kw:A.keyword_count,re:A.r};if(A.second_best){v.second_best={language:A.second_best.language,kw:A.second_best.keyword_count,re:A.second_best.r}}}function q(){if(q.called){return}q.called=true;var t=document.getElementsByTagName("pre");for(var r=0;r<t.length;r++){var s=d(t[r]);if(s){p(s,hljs.tabReplace)}}}function n(){if(window.addEventListener){window.addEventListener("DOMContentLoaded",q,false);window.addEventListener("load",q,false)}else{if(window.attachEvent){window.attachEvent("onload",q)}else{window.onload=q}}}var g={};this.LANGUAGES=g;this.highlight=f;this.highlightAuto=i;this.fixMarkup=k;this.highlightBlock=p;this.initHighlighting=q;this.initHighlightingOnLoad=n;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.inherit=function(t,u){var r={};for(var s in t){r[s]=t[s]}if(u){for(var s in u){r[s]=u[s]}}return r}}();
hljs.LANGUAGES.diff=function(a){return{cI:true,dM:{c:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}}}(hljs);
hljs.LANGUAGES.json=function(a){var e={literal:"true false null"};var d=[a.QSM,a.CNM];var c={cN:"value",e:",",eW:true,eE:true,c:d,k:e};var b={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:c}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(c,{cN:null})],i:"\\S"};d.splice(d.length,0,b,f);return{dM:{c:d,k:e,i:"\\S"}}}(hljs);
hljs.LANGUAGES.xml=function(a){var c="[A-Za-z0-9\\._:-]+";var b={eW:true,c:[{cN:"attribute",b:c,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,dM:{c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[b],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[b],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},b]}]}}}(hljs);

// Patched:
// https://github.com/isagalaev/highlight.js/issues/118
// https://github.com/isagalaev/highlight.js/issues/116#issuecomment-7961049
hljs.LANGUAGES.javascript=function(a){return{dM:{k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},c:[a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBLCLM,{cN:"regexp",b:"/([^*+?\\\\/\n\r]|\\\\[^\n\r])(\\\\/|[^/\n\r])*/[gim]{0,3}",e:""}],r:0},{cN:"function",bWK:true,e:"{",k:"function",c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[a.CLCM,a.CBLCLM],i:"[\"'\\(]"}],i:"\\[|%"}]}}}(hljs);

hljs.LANGUAGES.css=function(a){var b={cN:"function",b:a.IR+"\\(",e:"\\)",c:[a.NM,a.ASM,a.QSM]};return{cI:true,dM:{i:"[=/|']",c:[a.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:"import page media charset",c:[b,a.ASM,a.QSM,a.NM]},{cN:"tag",b:a.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[a.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[b,a.NM,a.QSM,a.ASM,a.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}}(hljs);
hljs.LANGUAGES.cpp=function(a){var b={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr"};return{dM:{k:b,i:"</",c:[a.CLCM,a.CBLCLM,a.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},a.CNM,{cN:"preprocessor",b:"#",e:"$"},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:b,r:10,c:["self"]}]}}}(hljs);
hljs.LANGUAGES.ini=function(a){return{cI:true,dM:{i:"[^\\s]",c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:"on off true false yes no",c:[a.QSM,a.NM]}]}]}}}(hljs);
hljs.LANGUAGES.dos=function(a){return{cI:true,dM:{k:{flow:"if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",keyword:"shift cd dir echo setlocal endlocal set pause copy",stream:"prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux",winutils:"ping net ipconfig taskkill xcopy ren del"},c:[{cN:"envvar",b:"%%[^ ]"},{cN:"envvar",b:"%[^ ]+?%"},{cN:"envvar",b:"![^ ]+?!"},{cN:"number",b:"\\b\\d+",r:0},{cN:"comment",b:"@?rem",e:"$"}]}}}(hljs);
hljs.LANGUAGES.vbscript=function(a){return{cI:true,dM:{k:{keyword:"call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",built_in:"lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err",literal:"true false null nothing empty"},i:"//",c:[{cN:"string",b:'"',e:'"',i:"\\n",c:[{b:'""'}],r:0},{cN:"comment",b:"'",e:"$"},a.CNM]}}}(hljs);


/*** Site-specific variables ***/
var codeSelector;
var types;
var defaultType = "javascript"; // If autodetection fails
var getBoxes;
var getHeader;
var styleSelect;

var host = location.hostname;
if(host == "akelpad.sourceforge.net") {
	codeSelector = "code." + codeClass;
	types = {
		javascript: "JavaScript",
		cpp: "C++",
		vbscript: "VBScript",
		dos: "Batch",
		ini: "INI",
		xml: "HTML, XML",
		css: "CSS",
		json: "JSON",
		diff: "Diff",
		"+diff": "+Diff"
	};
	getBoxes = function() {
		return document.getElementsByTagName("code");
	};
	getHeader = function(box) {
		return box.parentNode.parentNode.getElementsByTagName("p")[0];
	};
	styleSelect = function(s) {
		s.marginBottom = "-5px";
	};
}
else {
	delete hljs.LANGUAGES.cpp;
	delete hljs.LANGUAGES.ini;
	delete hljs.LANGUAGES.dos;
	delete hljs.LANGUAGES.vbscript;

	types = {
		javascript: "JavaScript",
		xml: "HTML, XML",
		css: "CSS",
		json: "JSON",
		diff: "Diff",
		"+diff": "+Diff"
	};

	if(host == "custombuttons.sourceforge.net") {
		codeSelector = "dl.codebox code." + codeClass;
		getBoxes = function() {
			return document.getElementsByTagName("code");
		};
		getHeader = function(box) {
			return box.parentNode.previousSibling;
		};
		styleSelect = function(s) {
			s.marginTop = "-3px";
		};
	}
	else if(host == "forum.mozilla-russia.org") {
		codeSelector = ".pun pre." + codeClass;
		getBoxes = function() {
			var boxes = [];
			var pres = document.getElementsByTagName("pre");
			for(var i = 0, l = pres.length; i < l; ++i) {
				var pre = pres[i];
				if(pre.parentNode.parentNode.parentNode.className == "codebox")
					boxes.push(pre);
			}
			return boxes;
		};
		getHeader = function(box) {
			return box.parentNode.parentNode;
		};
		styleSelect = function(s) {
		};
	}
}


/*** Add styles ***/
var isDarkTheme = false;
if(window.getComputedStyle) { // No autodetection in IE, sorry
	var bg = window.getComputedStyle(document.body).backgroundColor;
	var r, g, b;
	if(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.test(bg))
		r = +RegExp.$1, g = +RegExp.$2, b = +RegExp.$3;
	else if(/^#([\da-f]{6})$/i.test(bg) || /^#([\da-f]{3})$/i.test(bg)) {
		var hex = RegExp.$1;
		var part = hex.length/3;
		r = parseInt(hex.substr(0, part), 16);
		g = parseInt(hex.substr(part, part), 16);
		b = parseInt(hex.slice(-part), 16);
	}
	if(r != undefined) {
		var brightness = Math.max(r/255, g/255, b/255); // HSV, 0..1
		if(brightness < 0.5)
			isDarkTheme = true;
	}
}

var style = isDarkTheme
	? '\
/* Tomorrow Night Bright Theme */\n\
/* Original theme - https://github.com/chriskempson/tomorrow-theme */\n\
/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n\
/* Modified by Infocatcher */\n\
%pre% .comment, %pre% .title {\n\
  color: #969896;\n\
}\n\
%pre% .comment {\n\
  font-style: italic;\n\
}\n\
%pre% .variable, %pre% .attribute, %pre% .tag, %pre% .regexp, %pre% .ruby .constant, %pre% .xml .tag .title, %pre% .xml .pi, %pre% .xml .doctype, %pre% .html .doctype, %pre% .css .id, %pre% .css .class, %pre% .css .pseudo {\n\
  color: #d54e53;\n\
}\n\
%pre% .number, %pre% .preprocessor, %pre% .built_in, %pre% .literal, %pre% .params, %pre% .constant {\n\
  color: #e78c45;\n\
}\n\
%pre% .class, %pre% .ruby .class .title, %pre% .css .rules .attribute {\n\
  color: #e7c547;\n\
}\n\
%pre% .string, %pre% .value, %pre% .inheritance, %pre% .header, %pre% .ruby .symbol, %pre% .xml .cdata {\n\
  color: #b9ca4a;\n\
}\n\
%pre% .css .hexcolor {\n\
  color: #70c0b1;\n\
}\n\
%pre% .function, %pre% .python .decorator, %pre% .python .title, %pre% .ruby .function .title, %pre% .ruby .title .keyword, %pre% .perl .sub, %pre% .javascript .title, %pre% .coffeescript .title {\n\
  color: #7aa6da;\n\
}\n\
%pre% .keyword, %pre% .javascript .function {\n\
  color: #c397d8;\n\
  font-weight: bold;\n\
}\n\
%pre%, .highlight-js-forceBG {\n\
  background: black;\n\
}\n\
%pre% {\n\
  display: block;\n\
  color: #eaeaea;\n\
  padding: 0.5em;\n\
}'
	: '\
/*\n\
github.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\
Modified by Infocatcher\n\
*/\n\
%pre%, .highlight-js-forceBG {\n\
  background: #f8f8ff;\n\
}\n\
%pre% {\n\
  display: block; padding: 0.5em;\n\
  color: #333;\n\
}\n\
\n\
%pre% .comment,\n\
%pre% .template_comment,\n\
%pre%.diff .header,\n\
%pre% .javadoc {\n\
  color: #998;\n\
  font-style: italic\n\
}\n\
\n\
%pre% .keyword,\n\
%pre% .css .rule .keyword,\n\
%pre% .winutils,\n\
%pre%.javascript .title,\n\
%pre%.nginx .title,\n\
%pre% .subst,\n\
%pre% .request,\n\
%pre% .status {\n\
  color: #333;\n\
  font-weight: bold\n\
}\n\
\n\
%pre% .number,\n\
%pre% .hexcolor,\n\
%pre%.ruby .constant {\n\
  color: #099;\n\
}\n\
\n\
%pre% .string,\n\
%pre% .tag .value,\n\
%pre% .phpdoc,\n\
%pre%.tex .formula {\n\
  color: #d14\n\
}\n\
\n\
%pre% .title,\n\
%pre% .id {\n\
  color: #900;\n\
  font-weight: bold\n\
}\n\
\n\
%pre%.javascript .title,\n\
%pre%.lisp .title,\n\
%pre%.clojure .title,\n\
%pre% .subst {\n\
  font-weight: normal\n\
}\n\
\n\
%pre% .class .title,\n\
%pre%.haskell .type,\n\
%pre%/*.vhdl*/ .literal,\n\
%pre%.tex .command {\n\
  color: #458;\n\
  font-weight: bold\n\
}\n\
\n\
%pre% .tag,\n\
%pre% .tag .title,\n\
%pre% .rules .property,\n\
%pre%.django .tag .keyword {\n\
  color: #000080;\n\
  font-weight: normal\n\
}\n\
\n\
%pre% .attribute,\n\
%pre% .variable,\n\
%pre%.lisp .body {\n\
  color: #008080\n\
}\n\
\n\
%pre% .regexp {\n\
  color: #009926\n\
}\n\
\n\
%pre% .class {\n\
  color: #458;\n\
  font-weight: bold\n\
}\n\
\n\
%pre% .symbol,\n\
%pre%.ruby .symbol .string,\n\
%pre%.lisp .keyword,\n\
%pre%.tex .special,\n\
%pre% .input_number {\n\
  color: #990073\n\
}\n\
\n\
%pre% .built_in,\n\
%pre%.lisp .title,\n\
%pre%.clojure .built_in {\n\
  color: #0086b3\n\
}\n\
\n\
%pre% .preprocessor,\n\
%pre% .pi,\n\
%pre% .doctype,\n\
%pre% .shebang,\n\
%pre% .cdata {\n\
  color: #999;\n\
  font-weight: bold\n\
}\n\
\n\
%pre% .deletion {\n\
  background: #fdd\n\
}\n\
\n\
%pre% .addition {\n\
  background: #dfd\n\
}\n\
\n\
%pre%.diff .change {\n\
  background: #0086b3\n\
}\n\
\n\
%pre% .chunk {\n\
  color: #aaa\n\
}\n\
\n\
%pre%.tex .formula {\n\
  opacity: 0.5;\n\
}';

style = style.replace(/%pre%/g, codeSelector);

var s = document.createElement("style");
s.id = "highlight-js-styles";
s.type = "text/css";
s.appendChild(document.createTextNode(style));
document.getElementsByTagName("head")[0].appendChild(s);


/*** Main functions ***/
function highlight(box) {
	var useBR = box.getElementsByTagName("br").length > 0;
	hljs.highlightBlock(box, null, useBR);
}
function higlightAll() {
	var boxes = getBoxes();
	for(var i = 0, l = boxes.length; i < l; ++i) {
		var box = boxes[i];
		initBoxDelayed(box);
	}
}
function initBoxDelayed(box) {
	setTimeout(function() {
		_updLock = true;
		initBox(box);
		_updLock = false;
	}, 0);
}
function initBox(box) {
	if(box.hasAttribute("data-highlight-js-parsed"))
		return;
	box.setAttribute("data-highlight-js-parsed", "true");

	// Special "codes"
	var tc = box.textContent;
	var isCB = /^custombutton:\/\/\S+%3C\/custombutton%3E\s*$/.test(tc)
	if(
		isCB
		|| /^data:[\w-]+\/[\w-]+;base64,\S+\s*$/.test(tc)
	) {
		tc = tc.replace(/\s+$/, "");
		var a = document.createElement("a");
		a.href = tc;

		var icon, maxSize;
		if(/^data:image\//.test(tc))
			icon = tc;
		else if(isCB && /%3Cimage%3E%3C%21%5BCDATA%5B(data%3A\S+)%5D%5D%3E%3C\/image%3E/.test(tc)) {
			try {
				icon = decodeURIComponent(RegExp.$1);
				maxSize = "32px";
			}
			catch(e) {
			}
		}
		if(icon) {
			var img = document.createElement("img");
			img.src = icon;
			img.alt = "";
			var s = img.style;
			s.marginRight = "4px";
			s.verticalAlign = "middle";
			if(maxSize)
				s.maxWidth = s.maxHeight = maxSize;
			a.appendChild(img);
		}

		a.appendChild(document.createTextNode(tc));
		var s = a.style;
		s.background = "none";
		s.margin = s.padding = 0;

		box.innerHTML = "";
		box.appendChild(a);

		isCB && setTimeout(function() {
			var pn = box.parentNode;
			if(pn.style.height)
				pn.style.height = "";
			viewCustomButtonCode(tc, box);
		}, 0);

		return;
	}

	new ClassList(box).add(codeClass);
	if(box.parentNode.className == "scrollbox") // For forum.mozilla-russia.org
		new ClassList(box.parentNode).add("highlight-js-forceBG");
	if(box.getElementsByTagName("span").length) // Already highlighted
		box.setAttribute("data-highlight-js-original", "");
	else
		highlight(box);
	addTypeSwitcher(box);
}
var _updLast = 0;
var _updInitialDelay = 100; // Wait for all DOM mutations
var _updMinDelay = 500; // Limit update frequency
var _updScheduled = false;
var _updLock = false;
function updProxy() {
	if(_updScheduled || _updLock)
		return;
	var dt = Math.max(_updInitialDelay, _updLast + _updMinDelay - new Date().getTime());
	_updScheduled = true;
	setTimeout(function() {
		_updScheduled = false;
		higlightAll();
		_updLast = new Date().getTime();
	}, dt);
}
function addTypeSwitcher(box) {
	var header = getHeader(box);
	var select = document.createElement("select");
	select.className = switcherClass;

	var s = select.style;
	s.cssFloat = s.styleFloat = "right";
	s.textTransform = "none";
	s.marginLeft = "6px";
	styleSelect(s);

	var selectedType;
	if(box.hasAttribute("data-highlight-js-original")) {
		var option = document.createElement("option");
		option.value = "__original__";
		option.appendChild(document.createTextNode("Original"));
		option.selected = true;
		select.appendChild(option);
	}
	else {
		var cl = new ClassList(box);
		for(var type in types) {
			if(cl.contains(type)) {
				selectedType = type;
				break;
			}
		}
		if(!selectedType) {
			selectedType = defaultType;
			backup(box);
			cl.remove("undefined");
			cl.add(defaultType);
			highlight(box);
		}
	}

	for(var type in types) {
		var name = types[type];
		var option = document.createElement("option");
		option.value = type;
		option.appendChild(document.createTextNode(name));
		if(type == selectedType)
			option.selected = true;
		select.appendChild(option);
	}
	header.insertBefore(select, header.firstChild);
}
function switchTypeHandler(e) {
	e = e || window.event;
	var select = e.target || e.srcElement;
	if(select.className != switcherClass)
		return;
	var container = select.parentNode;
	var nn = container.nodeName.toLowerCase();
	if(nn == "td") // td -> tr -> tbody
		container = container.parentNode.parentNode;
	else if(nn == "dt" || nn == "p") // dt -> dl, p -> div
		container = container.parentNode;
	var box;
	if(container.querySelector)
		box = container.querySelector("[data-highlight-js-parsed]");
	else {
		var nodes = container.getElementsByTagName("*");
		for(var i = 0, l = nodes.length; i < l; ++i) {
			var node = nodes[i];
			if(node.hasAttribute("data-highlight-js-parsed")) {
				box = node;
				break;
			}
		}
	}
	box && switchType(select, box);
}
function switchType(select, box) {
	_updLock = true;
	var newType = select.value;
	var cl = new ClassList(box);
	for(var type in types)
		if(type != newType)
			cl.remove(type);
	cl.remove("undefined");
	if(newType == "__original__")
		box.innerHTML = box.getAttribute("data-highlight-js-original");
	else {
		backup(box);
		cl.add(newType.replace(/^\+/, ""));
		if(newType.charAt(0) != "+")
			unhl(box);
		highlight(box);
	}
	_updLock = false;
}
function backup(node) {
	if(
		node.hasAttribute("data-highlight-js-original")
		&& !node.getAttribute("data-highlight-js-original")
	)
		node.setAttribute("data-highlight-js-original", node.innerHTML);
}
function unhl(node) {
	node.innerHTML = node.innerHTML.replace(/<\/?span[^<>]*>/ig, "");
}

//=== Custom Buttons parser: begin
// https://github.com/Infocatcher/Custom_Buttons/blob/gh-pages/viewCustomButton.js
// Parser for custombutton:// URIs https://addons.mozilla.org/addon/custom-buttons/
// (c) Infocatcher 2013
// version 0.1.0 - 2013-10-16
function viewCustomButtonCode(cbURI, outBlock) {
	var data = parseCustomButtonURI(cbURI);
	var res = document.createElement("div");
	res.className = "cbCodeView";
	function appendSection(name, code, hl) {
		var section = document.createElement("div");
		section.className = "cbCodeView-section";
		var header = document.createElement("h5");
		header.appendChild(document.createTextNode(name));
		header.className = "cbCodeView-section-header";
		section.appendChild(header);
		var value = document.createElement("pre");
		value.style.fontSize = "1em"; // Force fix size
		value.appendChild(document.createTextNode(code));
		value.className = "cbCodeView-section-value";
		section.appendChild(value);
		res.appendChild(section);
		if(hl) setTimeout(function() {
			value.className += " " + codeClass;
			highlight(value);
		}, 0);
	}
	appendSection("Name", data.name);
	if(data.accelkey) {
		var disableDefault = data.mode & 2 /*CB_MODE_DISABLE_DEFAULT_KEY_BEHAVIOR*/;
		appendSection("Hotkey", data.accelkey + (disableDefault ? " (disable default action)" : ""));
	}
	appendSection("Code", data.code, true);
	appendSection("Initialization Code", data.initCode, true);
	if(data.help)
		appendSection("Help", data.help);
	//~ loadHihglighterStyles();
	if(!outBlock)
		outBlock = document.body || document.documentElement;
	outBlock.appendChild(res);
}
function parseCustomButtonURI(cbURI) {
	var out = {};
	if(cbURI.substr(0, 15) != "custombutton://")
		throw new Error("Not a custombutton:// URI");
	var data = unescape(cbURI.substr(15));
	if(data.substr(0, 6) != "<?xml ")
		throw new Error("Malformed custombutton:// URI");
	var doc = new DOMParser().parseFromString(data, "application/xml");
	// See components/CustomButtonsService.js
	function getText(nodeName) {
		var result = "";
		var node = doc.getElementsByTagName(nodeName)[0];
		if(!node)
			return result;
		if(!node.firstChild || (node.firstChild && (node.firstChild.nodeType == node.TEXT_NODE)))
			result = node.textContent;
		else // CDATA
			result = node.firstChild.textContent;
		return result;
	}
	var fields = ["name", "code", "initCode", "accelkey", "mode", "help"];
	for(var i = 0, l = fields.length; i < l; ++i) {
		var field = fields[i];
		out[field] = getText(field.toLowerCase());
	}
	return out;
}
//=== Custom Buttons parser: end

function destroy(e) {
	removeEventListener(window, "unload", destroy);
	removeEventListener(document, "change", switchTypeHandler);
	if(typeof mo != "undefined")
		mo.disconnect();
	else
		removeEventListener(document, "DOMNodeInserted", updProxy);
}

function addEventListener(target, type, func) {
	if(target.addEventListener)
		target.addEventListener(type, func, false);
	else
		target.attachEvent("on" + type, func);
}
function removeEventListener(target, type, func) {
	if(target.removeEventListener)
		target.removeEventListener(type, func, false);
	else
		target.detachEvent("on" + type, func);
}
function ClassList(node) {
	if("classList" in node)
		return node.classList;
	this.node = node;
}
ClassList.prototype = {
	_re: function(s) {
		return new RegExp(
			"(^|\\s+)"
			+ s.replace(/[\\\/.^$+*?|()\[\]{}]/g, "\\$&")
			+ "(\\s|$)"
		);
	},
	_trim: function(s) {
		return (s || "").replace(/^\s+|\s+$/g, "");
	},
	add: function(clss) {
		if(!this.contains(clss))
			this.node.className = this._trim(this.node.className + " " + clss);
	},
	remove: function(clss) {
		if(this.contains(clss))
			this.node.className = this._trim(this.node.className.replace(this._re(clss), " "));
	},
	toggle: function(clss) {
		if(this.contains(clss))
			this.remove(clss);
		else
			this.add(clss);
	},
	contains: function(clss) {
		return this._re(clss).test(this.node.className);
	}
};

higlightAll();
addEventListener(document, "change", switchTypeHandler);
if(window.MutationObserver) {
	var mo = new MutationObserver(updProxy);
	mo.observe(document, {
		childList: true,
		subtree: true
	});
}
else {
	addEventListener(document, "DOMNodeInserted", updProxy);
}
addEventListener(window, "unload", destroy);

})();