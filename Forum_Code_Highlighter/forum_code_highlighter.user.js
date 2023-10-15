// ==UserScript==
// @name        Forum Code Highlighter
// @version     0.2.0b1 - 2023-09-30
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

// Highlighter and styles: highlight.js https://highlightjs.org/download

(function() {
var classPrefix = "forumCodeHighlighter";
var codeClass     = classPrefix + "-code";
var switcherClass = classPrefix + "-typeSwitcher";
var cbClass       = classPrefix + "-cbCodeView";

var attr = classPrefix.replace(/[A-Z]/g, function(s) {
	return "-" + s.toLowerCase();
});
var parsedAttr = "data-" + attr + "-parsed";
var origAttr   = "data-" + attr + "-original";


/*!
  Highlight.js v11.8.0 (git: 65687a907b)
  (c) 2006-2023 undefined and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";function e(t){return t instanceof Map?t.clear=t.delete=t.set=()=>{throw Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=()=>{throw Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach((n=>{const i=t[n],s=typeof i;"object"!==s&&"function"!==s||Object.isFrozen(i)||e(i)})),t}class t{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t];return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const s=e=>!!e.scope;class o{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=n(e)}openNode(e){if(!s(e))return;const t=((e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")}return`${t}${e}`})(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const r=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class a{constructor(){this.rootNode=r(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=r({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{a._collapse(e)})))}}class c extends a{constructor(e){super(),this.options=e}addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){const n=e.root;t&&(n.scope="language:"+t),this.add(n)}toHTML(){return new o(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function l(e){return e?"string"==typeof e?e:e.source:null}function g(e){return h("(?=",e,")")}function u(e){return h("(?:",e,")*")}function d(e){return h("(?:",e,")?")}function h(...e){return e.map((e=>l(e))).join("")}function f(...e){const t=(e=>{const t=e[e.length-1];return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}})(e);return"("+(t.capture?"":"?:")+e.map((e=>l(e))).join("|")+")"}function p(e){return RegExp(e.toString()+"|").exec("").length-1}const b=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function m(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n;let i=l(e),s="";for(;i.length>0;){const e=b.exec(i);if(!e){s+=i;break}s+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?s+="\\"+(Number(e[1])+t):(s+=e[0],"("===e[0]&&n++)}return s})).map((e=>`(${e})`)).join(t)}const E="[a-zA-Z]\\w*",x="[a-zA-Z_]\\w*",w="\\b\\d+(\\.\\d+)?",y="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",_="\\b(0b[01]+)",O={begin:"\\\\[\\s\\S]",relevance:0},k={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[O]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[O]},S=(e,t,n={})=>{const s=i({scope:"comment",begin:e,end:t,contains:[]},n);s.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=f("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return s.contains.push({begin:h(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s},v=S("//","$"),M=S("/\\*","\\*/"),R=S("#","$");var j=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:E,UNDERSCORE_IDENT_RE:x,NUMBER_RE:w,C_NUMBER_RE:y,BINARY_NUMBER_RE:_,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=h(t,/.*\b/,e.binary,/\b.*/)),i({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:O,APOS_STRING_MODE:k,QUOTE_STRING_MODE:N,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:S,C_LINE_COMMENT_MODE:v,C_BLOCK_COMMENT_MODE:M,HASH_COMMENT_MODE:R,NUMBER_MODE:{scope:"number",begin:w,relevance:0},C_NUMBER_MODE:{scope:"number",begin:y,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:_,relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[O,{begin:/\[/,end:/\]/,relevance:0,contains:[O]}]}]},TITLE_MODE:{scope:"title",begin:E,relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:x,relevance:0},METHOD_GUARD:{begin:"\\.\\s*"+x,relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function A(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function I(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function T(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=A,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function L(e,t){Array.isArray(e.illegal)&&(e.illegal=f(...e.illegal))}function B(e,t){if(e.match){if(e.begin||e.end)throw Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function P(e,t){void 0===e.relevance&&(e.relevance=1)}const D=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]})),e.keywords=n.keywords,e.begin=h(n.beforeMatch,g(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},H=["of","and","for","in","not","or","if","then","parent","list","value"],C="keyword";function $(e,t,n=C){const i=Object.create(null);return"string"==typeof e?s(n,e.split(" ")):Array.isArray(e)?s(n,e):Object.keys(e).forEach((n=>{Object.assign(i,$(e[n],t,n))})),i;function s(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|");i[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,t){return t?Number(t):(e=>H.includes(e.toLowerCase()))(e)?0:1}const z={},W=e=>{console.error(e)},X=(e,...t)=>{console.log("WARN: "+e,...t)},G=(e,t)=>{z[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),z[`${e}/${t}`]=!0)},K=Error();function F(e,t,{key:n}){let i=0;const s=e[n],o={},r={};for(let e=1;e<=t.length;e++)r[e+i]=s[e],o[e+i]=!0,i+=p(t[e-1]);e[n]=r,e[n]._emit=o,e[n]._multi=!0}function Z(e){(e=>{e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),(e=>{if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw W("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),K;if("object"!=typeof e.beginScope||null===e.beginScope)throw W("beginScope must be object"),K;F(e,e.begin,{key:"beginScope"}),e.begin=m(e.begin,{joinWith:""})}})(e),(e=>{if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw W("skip, excludeEnd, returnEnd not compatible with endScope: {}"),K;if("object"!=typeof e.endScope||null===e.endScope)throw W("endScope must be object"),K;F(e,e.end,{key:"endScope"}),e.end=m(e.end,{joinWith:""})}})(e)}function V(e){function t(t,n){return RegExp(l(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=p(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=t(m(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,i)}}class s{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=i(e.classNameAliases||{}),function n(o,r){const a=o;if(o.isCompiled)return a;[I,B,Z,D].forEach((e=>e(o,r))),e.compilerExtensions.forEach((e=>e(o,r))),o.__beforeBegin=null,[T,L,P].forEach((e=>e(o,r))),o.isCompiled=!0;let c=null;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),c=o.keywords.$pattern,delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=$(o.keywords,e.case_insensitive)),a.keywordPatternRe=t(c,!0),r&&(o.begin||(o.begin=/\B|\b/),a.beginRe=t(a.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(a.endRe=t(a.end)),a.terminatorEnd=l(a.end)||"",o.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),o.illegal&&(a.illegalRe=t(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>i(e,{variants:null},t)))),e.cachedVariants?e.cachedVariants:q(e)?i(e,{starts:e.starts?i(e.starts):null}):Object.isFrozen(e)?i(e):e))("self"===e?o:e)))),o.contains.forEach((e=>{n(e,a)})),o.starts&&n(o.starts,r),a.matcher=(e=>{const t=new s;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(a),a}(e)}function q(e){return!!e&&(e.endsWithParent||q(e.starts))}class J extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const Y=n,Q=i,ee=Symbol("nomatch"),te=n=>{const i=Object.create(null),s=Object.create(null),o=[];let r=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let p={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:c};function b(e){return p.noHighlightRe.test(e)}function m(e,t,n){let i="",s="";"object"==typeof t?(i=e,n=t.ignoreIllegals,s=t.language):(G("10.7.0","highlight(lang, code, ...args) has been deprecated."),G("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),s=e,i=t),void 0===n&&(n=!0);const o={code:i,language:s};S("before:highlight",o);const r=o.result?o.result:E(o.language,o.code,n);return r.code=o.code,S("after:highlight",r),r}function E(e,n,s,o){const c=Object.create(null);function l(){if(!S.keywords)return void M.addText(R);let e=0;S.keywordPatternRe.lastIndex=0;let t=S.keywordPatternRe.exec(R),n="";for(;t;){n+=R.substring(e,t.index);const s=_.case_insensitive?t[0].toLowerCase():t[0],o=(i=s,S.keywords[i]);if(o){const[e,i]=o;if(M.addText(n),n="",c[s]=(c[s]||0)+1,c[s]<=7&&(j+=i),e.startsWith("_"))n+=t[0];else{const n=_.classNameAliases[e]||e;u(t[0],n)}}else n+=t[0];e=S.keywordPatternRe.lastIndex,t=S.keywordPatternRe.exec(R)}var i;n+=R.substring(e),M.addText(n)}function g(){null!=S.subLanguage?(()=>{if(""===R)return;let e=null;if("string"==typeof S.subLanguage){if(!i[S.subLanguage])return void M.addText(R);e=E(S.subLanguage,R,!0,v[S.subLanguage]),v[S.subLanguage]=e._top}else e=x(R,S.subLanguage.length?S.subLanguage:null);S.relevance>0&&(j+=e.relevance),M.__addSublanguage(e._emitter,e.language)})():l(),R=""}function u(e,t){""!==e&&(M.startScope(t),M.addText(e),M.endScope())}function d(e,t){let n=1;const i=t.length-1;for(;n<=i;){if(!e._emit[n]){n++;continue}const i=_.classNameAliases[e[n]]||e[n],s=t[n];i?u(s,i):(R=s,l(),R=""),n++}}function h(e,t){return e.scope&&"string"==typeof e.scope&&M.openNode(_.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(u(R,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),R=""):e.beginScope._multi&&(d(e.beginScope,t),R="")),S=Object.create(e,{parent:{value:S}}),S}function f(e,n,i){let s=((e,t)=>{const n=e&&e.exec(t);return n&&0===n.index})(e.endRe,i);if(s){if(e["on:end"]){const i=new t(e);e["on:end"](n,i),i.isMatchIgnored&&(s=!1)}if(s){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return f(e.parent,n,i)}function b(e){return 0===S.matcher.regexIndex?(R+=e[0],1):(T=!0,0)}function m(e){const t=e[0],i=n.substring(e.index),s=f(S,e,i);if(!s)return ee;const o=S;S.endScope&&S.endScope._wrap?(g(),u(t,S.endScope._wrap)):S.endScope&&S.endScope._multi?(g(),d(S.endScope,e)):o.skip?R+=t:(o.returnEnd||o.excludeEnd||(R+=t),g(),o.excludeEnd&&(R=t));do{S.scope&&M.closeNode(),S.skip||S.subLanguage||(j+=S.relevance),S=S.parent}while(S!==s.parent);return s.starts&&h(s.starts,e),o.returnEnd?0:t.length}let w={};function y(i,o){const a=o&&o[0];if(R+=i,null==a)return g(),0;if("begin"===w.type&&"end"===o.type&&w.index===o.index&&""===a){if(R+=n.slice(o.index,o.index+1),!r){const t=Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=w.rule,t}return 1}if(w=o,"begin"===o.type)return(e=>{const n=e[0],i=e.rule,s=new t(i),o=[i.__beforeBegin,i["on:begin"]];for(const t of o)if(t&&(t(e,s),s.isMatchIgnored))return b(n);return i.skip?R+=n:(i.excludeBegin&&(R+=n),g(),i.returnBegin||i.excludeBegin||(R=n)),h(i,e),i.returnBegin?0:n.length})(o);if("illegal"===o.type&&!s){const e=Error('Illegal lexeme "'+a+'" for mode "'+(S.scope||"<unnamed>")+'"');throw e.mode=S,e}if("end"===o.type){const e=m(o);if(e!==ee)return e}if("illegal"===o.type&&""===a)return 1;if(I>1e5&&I>3*o.index)throw Error("potential infinite loop, way more iterations than matches");return R+=a,a.length}const _=O(e);if(!_)throw W(a.replace("{}",e)),Error('Unknown language: "'+e+'"');const k=V(_);let N="",S=o||k;const v={},M=new p.__emitter(p);(()=>{const e=[];for(let t=S;t!==_;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach((e=>M.openNode(e)))})();let R="",j=0,A=0,I=0,T=!1;try{if(_.__emitTokens)_.__emitTokens(n,M);else{for(S.matcher.considerAll();;){I++,T?T=!1:S.matcher.considerAll(),S.matcher.lastIndex=A;const e=S.matcher.exec(n);if(!e)break;const t=y(n.substring(A,e.index),e);A=e.index+t}y(n.substring(A))}return M.finalize(),N=M.toHTML(),{language:e,value:N,relevance:j,illegal:!1,_emitter:M,_top:S}}catch(t){if(t.message&&t.message.includes("Illegal"))return{language:e,value:Y(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:A,context:n.slice(A-100,A+100),mode:t.mode,resultSoFar:N},_emitter:M};if(r)return{language:e,value:Y(n),illegal:!1,relevance:0,errorRaised:t,_emitter:M,_top:S};throw t}}function x(e,t){t=t||p.languages||Object.keys(i);const n=(e=>{const t={value:Y(e),illegal:!1,relevance:0,_top:l,_emitter:new p.__emitter(p)};return t._emitter.addText(e),t})(e),s=t.filter(O).filter(N).map((t=>E(t,e,!1)));s.unshift(n);const o=s.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(O(e.language).supersetOf===t.language)return 1;if(O(t.language).supersetOf===e.language)return-1}return 0})),[r,a]=o,c=r;return c.secondBest=a,c}function w(e){let t=null;const n=(e=>{let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=p.languageDetectRe.exec(t);if(n){const t=O(n[1]);return t||(X(a.replace("{}",n[1])),X("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>b(e)||O(e)))})(e);if(b(n))return;if(S("before:highlightElement",{el:e,language:n}),e.children.length>0&&(p.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),p.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML);t=e;const i=t.textContent,o=n?m(i,{language:n,ignoreIllegals:!0}):x(i);e.innerHTML=o.value,((e,t,n)=>{const i=t&&s[t]||n;e.classList.add("hljs"),e.classList.add("language-"+i)})(e,n,o.language),e.result={language:o.language,re:o.relevance,relevance:o.relevance},o.secondBest&&(e.secondBest={language:o.secondBest.language,relevance:o.secondBest.relevance}),S("after:highlightElement",{el:e,result:o,text:i})}let y=!1;function _(){"loading"!==document.readyState?document.querySelectorAll(p.cssSelector).forEach(w):y=!0}function O(e){return e=(e||"").toLowerCase(),i[e]||i[s[e]]}function k(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{s[e.toLowerCase()]=t}))}function N(e){const t=O(e);return t&&!t.disableAutodetect}function S(e,t){const n=e;o.forEach((e=>{e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{y&&_()}),!1),Object.assign(n,{highlight:m,highlightAuto:x,highlightAll:_,highlightElement:w,highlightBlock:e=>(G("10.7.0","highlightBlock will be removed entirely in v12.0"),G("10.7.0","Please use highlightElement now."),w(e)),configure:e=>{p=Q(p,e)},initHighlighting:()=>{_(),G("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:()=>{_(),G("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:(e,t)=>{let s=null;try{s=t(n)}catch(t){if(W("Language definition for '{}' could not be registered.".replace("{}",e)),!r)throw t;W(t),s=l}s.name||(s.name=e),i[e]=s,s.rawDefinition=t.bind(null,n),s.aliases&&k(s.aliases,{languageName:e})},unregisterLanguage:e=>{delete i[e];for(const t of Object.keys(s))s[t]===e&&delete s[t]},listLanguages:()=>Object.keys(i),getLanguage:O,registerAliases:k,autoDetection:N,inherit:Q,addPlugin:e=>{(e=>{e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),o.push(e)},removePlugin:e=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}),n.debugMode=()=>{r=!1},n.safeMode=()=>{r=!0},n.versionString="11.8.0",n.regex={concat:h,lookahead:g,either:f,optional:d,anyNumberOfTimes:u};for(const t in j)"object"==typeof j[t]&&e(j[t]);return Object.assign(n,j),n},ne=te({});return ne.newInstance=()=>te({}),ne}();"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);/*! `cpp` grammar compiled for Highlight.js 11.8.0 */(()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,a=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),n="decltype\\(auto\\)",r="[a-zA-Z_]\\w*::",i="(?!struct)("+n+"|"+t.optional(r)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",s={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},c={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},l={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(c,{className:"string"}),{className:"string",begin:/<.*?>/},a,e.C_BLOCK_COMMENT_MODE]},d={className:"title",begin:t.optional(r)+e.IDENT_RE,relevance:0},u=t.optional(r)+e.IDENT_RE+"\\s*\\(",p={type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]},_={className:"function.dispatch",relevance:0,keywords:{_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]},begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))},m=[_,l,s,a,e.C_BLOCK_COMMENT_MODE,o,c],g={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:p,contains:m.concat([{begin:/\(/,end:/\)/,keywords:p,contains:m.concat(["self"]),relevance:0}]),relevance:0},f={className:"function",begin:"("+i+"[\\*&\\s]+)+"+u,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:p,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:n,keywords:p,relevance:0},{begin:u,returnBegin:!0,contains:[d],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[c,o]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:p,relevance:0,contains:[a,e.C_BLOCK_COMMENT_MODE,c,o,s,{begin:/\(/,end:/\)/,keywords:p,relevance:0,contains:["self",a,e.C_BLOCK_COMMENT_MODE,c,o,s]}]},s,a,e.C_BLOCK_COMMENT_MODE,l]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:p,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(g,f,_,m,[l,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:p,contains:["self",s]},{begin:e.IDENT_RE+"::",keywords:p},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}})();hljs.registerLanguage("cpp",e)})();/*! `css` grammar compiled for Highlight.js 11.8.0 */(()=>{var e=(()=>{"use strict";const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],i=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],t=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],o=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();return n=>{const a=n.regex,l=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}))(n),s=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[l.BLOCK_COMMENT,{begin:/-(webkit|moz|ms|o)-(?=[a-z])/},l.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},l.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+r.join("|")+")"},{begin:":(:)?("+t.join("|")+")"}]},l.CSS_VARIABLE,{className:"attribute",begin:"\\b("+o.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[l.BLOCK_COMMENT,l.HEXCOLOR,l.IMPORTANT,l.CSS_NUMBER_MODE,...s,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...s,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},l.FUNCTION_DISPATCH]},{begin:a.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:"and or not only",attribute:i.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...s,l.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+e.join("|")+")\\b"}]}}})();hljs.registerLanguage("css",e)})();/*! `diff` grammar compiled for Highlight.js 11.8.0 */(()=>{var e=(()=>{"use strict";return e=>{const a=e.regex;return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,match:a.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)},{className:"comment",variants:[{begin:a.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}})();hljs.registerLanguage("diff",e)})();/*! `dos` grammar compiled for Highlight.js 11.8.0 */(()=>{var e=(()=>{"use strict";return e=>{const r=e.COMMENT(/^\s*@?rem\b/,/$/,{relevance:10});return{name:"Batch file (DOS)",aliases:["bat","cmd"],case_insensitive:!0,illegal:/\/\*/,keywords:{keyword:["if","else","goto","for","in","do","call","exit","not","exist","errorlevel","defined","equ","neq","lss","leq","gtr","geq"],built_in:["prn","nul","lpt3","lpt2","lpt1","con","com4","com3","com2","com1","aux","shift","cd","dir","echo","setlocal","endlocal","set","pause","copy","append","assoc","at","attrib","break","cacls","cd","chcp","chdir","chkdsk","chkntfs","cls","cmd","color","comp","compact","convert","date","dir","diskcomp","diskcopy","doskey","erase","fs","find","findstr","format","ftype","graftabl","help","keyb","label","md","mkdir","mode","more","move","path","pause","print","popd","pushd","promt","rd","recover","rem","rename","replace","restore","rmdir","shift","sort","start","subst","time","title","tree","type","ver","verify","vol","ping","net","ipconfig","taskkill","xcopy","ren","del"]},contains:[{className:"variable",begin:/%%[^ ]|%[^ ]+?%|![^ ]+?!/},{className:"function",begin:"^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",end:"goto:eof",contains:[e.inherit(e.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),r]},{className:"number",begin:"\\b\\d+",relevance:0},r]}}})();hljs.registerLanguage("dos",e)})();/*! `ini` grammar compiled for Highlight.js 11.8.0 */(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]},s=e.COMMENT();s.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const i={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},t={className:"literal",begin:/\bon|off|true|false|yes|no\b/},r={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},l={begin:/\[/,end:/\]/,contains:[s,t,i,r,a,"self"],relevance:0},c=n.either(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[s,{className:"section",begin:/\[+/,end:/\]+/},{begin:n.concat(c,"(\\s*\\.\\s*",c,")*",n.lookahead(/\s*=\s*[^#\s]/)),className:"attr",starts:{end:/$/,contains:[s,l,t,i,r,a]}}]}}})();hljs.registerLanguage("ini",e)})();/*! `javascript` grammar compiled for Highlight.js 11.8.0 */(()=>{var e=(()=>{"use strict";const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],i=[].concat(r,t,s);return o=>{const l=o.regex,b=e,d={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const a=e[0].length+e.index,t=e.input[a];if("<"===t||","===t)return void n.ignoreMatch();let s;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1);return-1!==e.input.indexOf(a,n)})(e,{after:a})||n.ignoreMatch());const r=e.input.substring(a);((s=r.match(/^\s*=/))||(s=r.match(/^\s+extends\s+/))&&0===s.index)&&n.ignoreMatch()}},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c},u="[0-9](_?[0-9])*",m=`\\.(${u})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={className:"number",variants:[{begin:`(\\b(${E})((${m})|\\.)?|(${m}))[eE][+-]?(${u})\\b`},{begin:`\\b(${E})\\b((${m})\\b|\\.)?|(${m})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",end:"\\}",keywords:g,contains:[]},h={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},N={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"css"}},_={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"graphql"}},f={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,y]},v={className:"comment",variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:b+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},p=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,h,N,_,f,{match:/\$\d+/},A];y.contains=p.concat({begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(p)});const S=[].concat(v,y.contains),w=S.concat([{begin:/\(/,end:/\)/,keywords:g,contains:["self"].concat(S)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w},O={variants:[{match:[/class/,/\s+/,b,/\s+/,/extends/,/\s+/,l.concat(b,"(",l.concat(/\./,b),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,b],scope:{1:"keyword",3:"title.class"}}]},k={relevance:0,match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...t,...s]}},I={variants:[{match:[/function/,/\s+/,b,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},x={match:l.concat(/\b/,(T=[...r,"super","import"],l.concat("(?!",T.join("|"),")")),b,l.lookahead(/\(/)),className:"title.function",relevance:0};var T;const C={begin:l.concat(/\./,l.lookahead(l.concat(b,/(?![0-9A-Za-z$_(])/))),end:b,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},M={match:[/get|set/,/\s+/,b,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",$={match:[/const|var|let/,/\s+/,b,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(B)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:k},illegal:/#(?![$_A-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,h,N,_,f,v,{match:/\$\d+/},A,k,{className:"attr",begin:b+l.lookahead(":"),relevance:0},$,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[v,o.REGEXP_MODE,{className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d.begin,"on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},I,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,o.inherit(o.TITLE_MODE,{begin:b,className:"title.function"})]},{match:/\.\.\./,relevance:0},C,{match:"\\$"+b,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},x,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},O,M,{match:/\$[(.]/}]}}})();hljs.registerLanguage("javascript",e)})();/*! `json` grammar compiled for Highlight.js 11.8.0 */(()=>{var e=(()=>{"use strict";return e=>{const a=["true","false","null"],n={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",keywords:{literal:a},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},e.QUOTE_STRING_MODE,n,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}})();hljs.registerLanguage("json",e)})();/*! `vbscript` grammar compiled for Highlight.js 11.8.0 */(()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,r=["lcase","month","vartype","instrrev","ubound","setlocale","getobject","rgb","getref","string","weekdayname","rnd","dateadd","monthname","now","day","minute","isarray","cbool","round","formatcurrency","conversions","csng","timevalue","second","year","space","abs","clng","timeserial","fixs","len","asc","isempty","maths","dateserial","atn","timer","isobject","filter","weekday","datevalue","ccur","isdate","instr","datediff","formatdatetime","replace","isnull","right","sgn","array","snumeric","log","cdbl","hex","chr","lbound","msgbox","ucase","getlocale","cos","cdate","cbyte","rtrim","join","hour","oct","typename","trim","strcomp","int","createobject","loadpicture","tan","formatnumber","mid","split","cint","sin","datepart","ltrim","sqr","time","derived","eval","date","formatpercent","exp","inputbox","left","ascw","chrw","regexp","cstr","err"];return{name:"VBScript",aliases:["vbs"],case_insensitive:!0,keywords:{keyword:["call","class","const","dim","do","loop","erase","execute","executeglobal","exit","for","each","next","function","if","then","else","on","error","option","explicit","new","private","property","let","get","public","randomize","redim","rem","select","case","set","stop","sub","while","wend","with","end","to","elseif","is","or","xor","and","not","class_initialize","class_terminate","default","preserve","in","me","byval","byref","step","resume","goto"],built_in:["server","response","request","scriptengine","scriptenginebuildversion","scriptengineminorversion","scriptenginemajorversion"],literal:["true","false","null","nothing","empty"]},illegal:"//",contains:[{begin:t.concat(t.either(...r),"\\s*\\("),relevance:0,keywords:{built_in:r}},e.inherit(e.QUOTE_STRING_MODE,{contains:[{begin:'""'}]}),e.COMMENT(/'/,/$/,{relevance:0}),e.C_NUMBER_MODE]}}})();hljs.registerLanguage("vbscript",e)})();/*! `xml` grammar compiled for Highlight.js 11.8.0 */(()=>{var e=(()=>{"use strict";return e=>{const a=e.regex,n=a.concat(/[\p{L}_]/u,a.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},t={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(t,{begin:/\(/,end:/\)/}),c=e.inherit(e.APOS_STRING_MODE,{className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),r={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[t,l,c,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[t,i,l,c]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[r],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[r],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:a.concat(/</,a.lookahead(a.concat(n,a.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:r}]},{className:"tag",begin:a.concat(/<\//,a.lookahead(a.concat(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}})();hljs.registerLanguage("xml",e)})();
/*! `diff` grammar compiled for Highlight.js 11.8.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a=e.regex;return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,match:a.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)},{className:"comment",variants:[{begin:a.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}})();hljs.registerLanguage("diff",e)})();
/*! `json` grammar compiled for Highlight.js 11.8.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a=["true","false","null"],n={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",keywords:{literal:a},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},e.QUOTE_STRING_MODE,n,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}})();hljs.registerLanguage("json",e)})();
/*! `xml` grammar compiled for Highlight.js 11.8.0 */
(()=>{var e=(()=>{"use strict";return e=>{const a=e.regex,n=a.concat(/[\p{L}_]/u,a.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},t={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(t,{begin:/\(/,end:/\)/}),c=e.inherit(e.APOS_STRING_MODE,{className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),r={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[\p{L}0-9._:-]+/u,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[t,l,c,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[t,i,l,c]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[r],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[r],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:a.concat(/</,a.lookahead(a.concat(n,a.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:r}]},{className:"tag",begin:a.concat(/<\//,a.lookahead(a.concat(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}})();hljs.registerLanguage("xml",e)})();
/*! `javascript` grammar compiled for Highlight.js 11.8.0 */
(()=>{var e=(()=>{"use strict";const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],i=[].concat(r,t,s);return o=>{const l=o.regex,b=e,d={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const a=e[0].length+e.index,t=e.input[a];if("<"===t||","===t)return void n.ignoreMatch();let s;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1);return-1!==e.input.indexOf(a,n)})(e,{after:a})||n.ignoreMatch());const r=e.input.substring(a);((s=r.match(/^\s*=/))||(s=r.match(/^\s+extends\s+/))&&0===s.index)&&n.ignoreMatch()}},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c},u="[0-9](_?[0-9])*",m=`\\.(${u})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={className:"number",variants:[{begin:`(\\b(${E})((${m})|\\.)?|(${m}))[eE][+-]?(${u})\\b`},{begin:`\\b(${E})\\b((${m})\\b|\\.)?|(${m})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",end:"\\}",keywords:g,contains:[]},h={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},N={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"css"}},_={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"graphql"}},f={className:"string",begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,y]},v={className:"comment",variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:b+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]},p=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,h,N,_,f,{match:/\$\d+/},A];y.contains=p.concat({begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(p)});const S=[].concat(v,y.contains),w=S.concat([{begin:/\(/,end:/\)/,keywords:g,contains:["self"].concat(S)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w},O={variants:[{match:[/class/,/\s+/,b,/\s+/,/extends/,/\s+/,l.concat(b,"(",l.concat(/\./,b),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,b],scope:{1:"keyword",3:"title.class"}}]},k={relevance:0,match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...t,...s]}},I={variants:[{match:[/function/,/\s+/,b,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},x={match:l.concat(/\b/,(T=[...r,"super","import"],l.concat("(?!",T.join("|"),")")),b,l.lookahead(/\(/)),className:"title.function",relevance:0};var T;const C={begin:l.concat(/\./,l.lookahead(l.concat(b,/(?![0-9A-Za-z$_(])/))),end:b,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},M={match:[/get|set/,/\s+/,b,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",$={match:[/const|var|let/,/\s+/,b,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(B)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:k},illegal:/#(?![$_A-z])/,contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,h,N,_,f,v,{match:/\$\d+/},A,k,{className:"attr",begin:b+l.lookahead(":"),relevance:0},$,{begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[v,o.REGEXP_MODE,{className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d.begin,"on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},I,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,o.inherit(o.TITLE_MODE,{begin:b,className:"title.function"})]},{match:/\.\.\./,relevance:0},C,{match:"\\$"+b,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},x,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},O,M,{match:/\$[(.]/}]}}})();hljs.registerLanguage("javascript",e)})();
/*! `css` grammar compiled for Highlight.js 11.8.0 */
(()=>{var e=(()=>{"use strict";const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],i=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],t=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],o=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse();return n=>{const a=n.regex,l=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}}))(n),s=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[l.BLOCK_COMMENT,{begin:/-(webkit|moz|ms|o)-(?=[a-z])/},l.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},l.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+r.join("|")+")"},{begin:":(:)?("+t.join("|")+")"}]},l.CSS_VARIABLE,{className:"attribute",begin:"\\b("+o.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[l.BLOCK_COMMENT,l.HEXCOLOR,l.IMPORTANT,l.CSS_NUMBER_MODE,...s,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...s,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},l.FUNCTION_DISPATCH]},{begin:a.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:"and or not only",attribute:i.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...s,l.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+e.join("|")+")\\b"}]}}})();hljs.registerLanguage("css",e)})();
/*! `cpp` grammar compiled for Highlight.js 11.8.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,a=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),n="decltype\\(auto\\)",r="[a-zA-Z_]\\w*::",i="(?!struct)("+n+"|"+t.optional(r)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",s={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},c={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},l={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(c,{className:"string"}),{className:"string",begin:/<.*?>/},a,e.C_BLOCK_COMMENT_MODE]},d={className:"title",begin:t.optional(r)+e.IDENT_RE,relevance:0},u=t.optional(r)+e.IDENT_RE+"\\s*\\(",p={type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]},_={className:"function.dispatch",relevance:0,keywords:{_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]},begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))},m=[_,l,s,a,e.C_BLOCK_COMMENT_MODE,o,c],g={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:p,contains:m.concat([{begin:/\(/,end:/\)/,keywords:p,contains:m.concat(["self"]),relevance:0}]),relevance:0},f={className:"function",begin:"("+i+"[\\*&\\s]+)+"+u,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:p,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:n,keywords:p,relevance:0},{begin:u,returnBegin:!0,contains:[d],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[c,o]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:p,relevance:0,contains:[a,e.C_BLOCK_COMMENT_MODE,c,o,s,{begin:/\(/,end:/\)/,keywords:p,relevance:0,contains:["self",a,e.C_BLOCK_COMMENT_MODE,c,o,s]}]},s,a,e.C_BLOCK_COMMENT_MODE,l]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:p,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(g,f,_,m,[l,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:p,contains:["self",s]},{begin:e.IDENT_RE+"::",keywords:p},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}})();hljs.registerLanguage("cpp",e)})();
/*! `ini` grammar compiled for Highlight.js 11.8.0 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]},s=e.COMMENT();s.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const i={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},t={className:"literal",begin:/\bon|off|true|false|yes|no\b/},r={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},l={begin:/\[/,end:/\]/,contains:[s,t,i,r,a,"self"],relevance:0},c=n.either(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[s,{className:"section",begin:/\[+/,end:/\]+/},{begin:n.concat(c,"(\\s*\\.\\s*",c,")*",n.lookahead(/\s*=\s*[^#\s]/)),className:"attr",starts:{end:/$/,contains:[s,l,t,i,r,a]}}]}}})();hljs.registerLanguage("ini",e)})();
/*! `dos` grammar compiled for Highlight.js 11.8.0 */
(()=>{var e=(()=>{"use strict";return e=>{const r=e.COMMENT(/^\s*@?rem\b/,/$/,{relevance:10});return{name:"Batch file (DOS)",aliases:["bat","cmd"],case_insensitive:!0,illegal:/\/\*/,keywords:{keyword:["if","else","goto","for","in","do","call","exit","not","exist","errorlevel","defined","equ","neq","lss","leq","gtr","geq"],built_in:["prn","nul","lpt3","lpt2","lpt1","con","com4","com3","com2","com1","aux","shift","cd","dir","echo","setlocal","endlocal","set","pause","copy","append","assoc","at","attrib","break","cacls","cd","chcp","chdir","chkdsk","chkntfs","cls","cmd","color","comp","compact","convert","date","dir","diskcomp","diskcopy","doskey","erase","fs","find","findstr","format","ftype","graftabl","help","keyb","label","md","mkdir","mode","more","move","path","pause","print","popd","pushd","promt","rd","recover","rem","rename","replace","restore","rmdir","shift","sort","start","subst","time","title","tree","type","ver","verify","vol","ping","net","ipconfig","taskkill","xcopy","ren","del"]},contains:[{className:"variable",begin:/%%[^ ]|%[^ ]+?%|![^ ]+?!/},{className:"function",begin:"^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",end:"goto:eof",contains:[e.inherit(e.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),r]},{className:"number",begin:"\\b\\d+",relevance:0},r]}}})();hljs.registerLanguage("dos",e)})();
/*! `vbscript` grammar compiled for Highlight.js 11.8.0 */
(()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,r=["lcase","month","vartype","instrrev","ubound","setlocale","getobject","rgb","getref","string","weekdayname","rnd","dateadd","monthname","now","day","minute","isarray","cbool","round","formatcurrency","conversions","csng","timevalue","second","year","space","abs","clng","timeserial","fixs","len","asc","isempty","maths","dateserial","atn","timer","isobject","filter","weekday","datevalue","ccur","isdate","instr","datediff","formatdatetime","replace","isnull","right","sgn","array","snumeric","log","cdbl","hex","chr","lbound","msgbox","ucase","getlocale","cos","cdate","cbyte","rtrim","join","hour","oct","typename","trim","strcomp","int","createobject","loadpicture","tan","formatnumber","mid","split","cint","sin","datepart","ltrim","sqr","time","derived","eval","date","formatpercent","exp","inputbox","left","ascw","chrw","regexp","cstr","err"];return{name:"VBScript",aliases:["vbs"],case_insensitive:!0,keywords:{keyword:["call","class","const","dim","do","loop","erase","execute","executeglobal","exit","for","each","next","function","if","then","else","on","error","option","explicit","new","private","property","let","get","public","randomize","redim","rem","select","case","set","stop","sub","while","wend","with","end","to","elseif","is","or","xor","and","not","class_initialize","class_terminate","default","preserve","in","me","byval","byref","step","resume","goto"],built_in:["server","response","request","scriptengine","scriptenginebuildversion","scriptengineminorversion","scriptenginemajorversion"],literal:["true","false","null","nothing","empty"]},illegal:"//",contains:[{begin:t.concat(t.either(...r),"\\s*\\("),relevance:0,keywords:{built_in:r}},e.inherit(e.QUOTE_STRING_MODE,{contains:[{begin:'""'}]}),e.COMMENT(/'/,/$/,{relevance:0}),e.C_NUMBER_MODE]}}})();hljs.registerLanguage("vbscript",e)})();


/*** Site-specific variables ***/
var codeSelector;
var types;
var defaultType = "javascript"; // If autodetection fails
var getBoxes;
var getHeader;
var styleSelect;
function getCodeHeader(box) {
	if(box.classList.contains(cbClass + "-section-value"))
		return box.parentNode.firstChild;
	return getHeader(box);
}

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
	hljs.unregisterLanguage("cpp");
	hljs.unregisterLanguage("ini");
	hljs.unregisterLanguage("dos");
	hljs.unregisterLanguage("vbscript");

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
	? `
/* Tomorrow Night Bright Theme */
/* Original theme - https://github.com/chriskempson/tomorrow-theme */
/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
/* Modified by Infocatcher */
%pre% .hljs-keyword,
%pre% .hljs-literal {
	font-weight: bold;
}
%pre% .hljs-comment,
%pre% .hljs-string {
	font-style: italic;
}
%pre% code.hljs {
	display: block;
	overflow-x: auto;
	padding: 3px 5px
}
%pre% .hljs-comment,
%pre% .hljs-quote {
	color: #969896
}
%pre% .hljs-deletion,
%pre% .hljs-name,
%pre% .hljs-regexp,
%pre% .hljs-selector-class,
%pre% .hljs-selector-id,
%pre% .hljs-tag,
%pre% .hljs-template-variable,
%pre% .hljs-variable {
	color: #d54e53
}
%pre% .hljs-built_in,
%pre% .hljs-link,
%pre% .hljs-literal,
%pre% .hljs-meta,
%pre% .hljs-number,
%pre% .hljs-params,
%pre% .hljs-type {
	color: #e78c45
}
%pre% .hljs-attribute {
	color: #e7c547
}
%pre% .hljs-addition,
%pre% .hljs-bullet,
%pre% .hljs-string,
%pre% .hljs-symbol {
	color: #b9ca4a
}
%pre% .hljs-section,
%pre% .hljs-title {
	color: #7aa6da
}
%pre% .hljs-keyword,
%pre% .hljs-selector-tag {
	color: #c397d8
}
%pre%.hljs {
	background: #000;
	color: #eaeaea;
	tab-size: 4;
}
%pre% .hljs-emphasis {
	font-style: italic
}
%pre% .hljs-strong {
	font-weight: 700
}
/* Tweaks for parsed custombutton://… */
._CB-wrapper {
	overflow: hidden !important;
	text-overflow: ellipsis !important;
}
._CB ._CB-section-header {
	margin: 1.6em 0 0.2em !important;
}
._CB ._CB-section-header > ._FCH-typeSwitcher {
	margin-top: -0.5em !important;
}
._CB ._CB-section-value%code% {
	border: 1px solid #555 !important;
	max-height: 35em !important;
	overflow: auto !important;
}`
	: `
/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
  Modified by Infocatcher
*/
%pre% .hljs-keyword,
%pre% .hljs-literal {
	font-weight: bold;
}
%pre% .hljs-comment,
%pre% .hljs-string {
	font-style: italic;
}
%pre%.hljs {
	display: block;
	overflow-x: auto;
	color: #000;
	background: #f8f8ff;
	padding: 3px 5px;
	tab-size: 4;
}
%pre% .hljs-doctag,
%pre% .hljs-keyword,
%pre% .hljs-meta .hljs-keyword,
%pre% .hljs-template-tag,
%pre% .hljs-template-variable,
%pre% .hljs-type,
%pre% .hljs-variable.language_ {
	color: #d73a49
}
%pre% .hljs-title,
%pre% .hljs-title.class_,
%pre% .hljs-title.class_.inherited__,
%pre% .hljs-title.function_ {
	color: #6f42c1
}
%pre% .hljs-attr,
%pre% .hljs-attribute,
%pre% .hljs-literal,
%pre% .hljs-meta,
%pre% .hljs-number,
%pre% .hljs-operator,
%pre% .hljs-selector-attr,
%pre% .hljs-selector-class,
%pre% .hljs-selector-id,
%pre% .hljs-variable {
	color: #005cc5
}
%pre% .hljs-meta .hljs-string,
%pre% .hljs-regexp,
%pre% .hljs-string {
	color: #032f62
}
%pre% .hljs-built_in,
%pre% .hljs-symbol {
	color: #e36209
}
%pre% .hljs-code,
%pre% .hljs-comment,
%pre% .hljs-formula {
	color: #6a737d
}
%pre% .hljs-name,
%pre% .hljs-quote,
%pre% .hljs-selector-pseudo,
%pre% .hljs-selector-tag {
	color: #22863a
}
%pre% .hljs-subst {
	color: #24292e
}
%pre% .hljs-section {
	color: #005cc5;
	font-weight: 700
}
%pre% .hljs-bullet {
	color: #735c0f
}
%pre% .hljs-emphasis {
	color: #24292e;
	font-style: italic
}
%pre% .hljs-strong {
	color: #24292e;
	font-weight: 700
}
%pre% .hljs-addition {
	color: #22863a;
	background-color: #f0fff4
}
%pre% .hljs-deletion {
	color: #b31d28;
	background-color: #ffeef0
}
/* Tweaks for parsed custombutton://… */
._CB-wrapper {
	overflow: hidden !important;
	text-overflow: ellipsis !important;
}
._CB ._CB-section-header {
	margin: 1.6em 0 0.2em !important;
}
._CB ._CB-section-header > ._FCH-typeSwitcher {
	margin-top: -0.5em !important;
}
._CB ._CB-section-value%code% {
	border: 1px solid #ccc !important;
	max-height: 35em !important;
	overflow: auto !important;
}`;

style = style
	.replace(/%pre%/g, codeSelector)
	.replace(/%code%/g, "." + codeClass)
	.replace(/\._FCH/g, "." + classPrefix)
	.replace(/\._CB/g, "." + cbClass);

var s = document.createElement("style");
s.id = classPrefix + "-styles";
s.type = "text/css";
s.appendChild(document.createTextNode(style));
setTimeout(function() {
	document.getElementsByTagName("head")[0].appendChild(s);
}, 0);


/*** Main functions ***/
function highlight(box, newType, append) {
	if(!append) {
		hljs.highlightElement(box);
		return;
	}
	box.innerHTML = hljs.highlight(
			box.innerHTML,
			{ language: newType }
		).value
		.replace(/&lt;/g, "<") // Is there some better way?
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&amp;/g, "&");
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
	if(box.hasAttribute(parsedAttr))
		return;
	box.setAttribute(parsedAttr, "true");

	// Special "codes"
	var tc = box.textContent;
	var isCB = /^custombutton:\/\/\S+%3C\/custombutton%3E\s*$/.test(tc)
	if(
		isCB
		|| /^data:[\w-]+\/[\w-]+;base64,\S+\s*$/.test(tc)
	) {
		tc = tc.replace(/\s+$/, "");
		var wrapper = document.createElement("div");
		wrapper.className = cbClass + "-wrapper";
		var a = wrapper.appendChild(document.createElement("a"));
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
		box.appendChild(wrapper);

		isCB && setTimeout(function() {
			var pn = box.parentNode;
			if(pn.style.height)
				pn.style.height = "";
			viewCustomButtonCode(tc, box);
		}, 0);

		return;
	}

	box.classList.add(codeClass);
	if(box.parentNode.className == "scrollbox") // For forum.mozilla-russia.org
		box.parentNode.classList.add("highlight-js-forceBG");
	if(box.getElementsByTagName("span").length) // Already highlighted
		box.setAttribute(origAttr, "");
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
	var header = getCodeHeader(box);
	var select = document.createElement("select");
	select.className = switcherClass;

	var s = select.style;
	s.cssFloat = s.styleFloat = "right";
	s.textTransform = "none";
	s.marginLeft = "6px";
	s.cursor = "auto";
	styleSelect(s);

	var selectedType;
	if(box.hasAttribute(origAttr)) {
		var option = document.createElement("option");
		option.value = "__original__";
		option.appendChild(document.createTextNode("Original"));
		option.selected = true;
		select.appendChild(option);
	}
	else {
		var cl = box.classList;
		for(var type in types) {
			if(cl.contains("language-" + type)) {
				selectedType = type;
				break;
			}
		}
		if(!selectedType) {
			selectedType = defaultType;
			backup(box);
			cl.remove("language-undefined");
			cl.add("language-" + defaultType);
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
	var select = e.target;
	if(select.className != switcherClass)
		return;
	var container = select.parentNode;
	var nn = container.nodeName.toLowerCase();
	if(nn == "td") // td -> tr -> tbody
		container = container.parentNode.parentNode;
	else if(nn == "dt" || nn == "p" || nn == "h5") // dt -> dl, p -> div, h5 -> div
		container = container.parentNode;
	var box = container.querySelector("[" + parsedAttr + "]");
	box && switchType(select, box);
}
function switchType(select, box) {
	_updLock = true;
	var newType = select.value;
	var cl = box.classList;
	for(var type in types)
		if(type != newType)
			cl.remove("language-" + type);
	cl.remove("language-undefined");
	if(newType == "__original__")
		box.innerHTML = box.getAttribute(origAttr);
	else {
		backup(box);
		var append = newType.charAt(0) == "+";
		if(append)
			newType = newType.substr(1);
		cl.add("language-" + newType);
		highlight(box, newType, append);
	}
	_updLock = false;
}
function backup(node) {
	if(
		node.hasAttribute(origAttr)
		&& !node.getAttribute(origAttr)
	)
		node.setAttribute(origAttr, node.innerHTML);
}
function unhl(node) {
	node.innerHTML = node.innerHTML.replace(/<\/?span[^<>]*>/ig, "");
}

//=== Custom Buttons parser: begin
// https://github.com/Infocatcher/Custom_Buttons/blob/gh-pages/viewCustomButton.js
// Parser for custombutton:// URIs https://addons.mozilla.org/addon/custom-buttons/
// (c) Infocatcher 2013
// version 0.1.0 - 2013-10-16 (modified)
function viewCustomButtonCode(cbURI, outBlock) {
	var data = parseCustomButtonURI(cbURI);
	var res = document.createElement("div");
	res.className = cbClass;
	function appendSection(name, code, hl) {
		var section = document.createElement("div");
		section.className = cbClass + "-section";
		var header = document.createElement("h5");
		header.className = cbClass + "-section-header";
		var a = document.createElement("a");
		a.className = cbClass + "-section-toggler";
		a.href = "javascript://Select code";
		a.appendChild(document.createTextNode(name));
		header.appendChild(a);
		section.appendChild(header);
		var value = document.createElement("pre");
		value.style.fontSize = "1em"; // Force fix size
		value.appendChild(document.createTextNode(code));
		value.className = cbClass + "-section-value";
		section.appendChild(value);
		res.appendChild(section);
		if(hl) setTimeout(function() {
			value.className += " " + codeClass;
			highlight(value);
			value.setAttribute(parsedAttr, "true");
			if(name != "Name")
				addTypeSwitcher(value);
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
		appendSection("Help", data.help, true);
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

function clickHandler(e) {
	var a = e.target;
	if(!a || e.button != 0 || a.nodeName != "A" || a.className != cbClass + "-section-toggler")
		return;
	var value = a.parentNode.parentNode.lastChild;
	selectNode(value);
	e.preventDefault();
}
function selectNode(node) {
	if(document.selection) {
		document.selection.empty();
		var range = document.body.createTextRange();
		range.moveToElementText(node);
		range.select();
	}
	else if(window.getSelection) {
		var sel = window.getSelection();
		sel.removeAllRanges()
		var range = document.createRange();
		range.selectNode(node);
		sel.addRange(range);
	}
}

function destroy(e) {
	window.removeEventListener("unload", destroy, false);
	document.removeEventListener("change", switchTypeHandler, false);
	document.removeEventListener("click", clickHandler, false);
	if(typeof mo != "undefined")
		mo.disconnect();
	else
		document.removeEventListener("DOMNodeInserted", updProxy, false);
}

higlightAll();
document.addEventListener("change", switchTypeHandler, false);
document.addEventListener("click", clickHandler, false);
if(window.MutationObserver) {
	var mo = new MutationObserver(updProxy);
	mo.observe(document, {
		childList: true,
		subtree: true
	});
}
else {
	document.addEventListener("DOMNodeInserted", updProxy, false);
}
window.addEventListener("unload", destroy, false);

})();