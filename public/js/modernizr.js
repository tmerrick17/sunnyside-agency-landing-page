/*! modernizr 3.12.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function(e,n,A,o){function a(e,n){return typeof e===n}function t(e){var n=c.className,A=r._config.classPrefix||"";if(p&&(n=n.baseVal),r._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}r._config.enableClasses&&(e.length>0&&(n+=" "+A+e.join(" "+A)),p?c.className.baseVal=n:c.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{var o=(e=e.toLowerCase()).split("."),a=r[o[0]];if(2===o.length&&(a=a[o[1]]),void 0!==a)return r;n="function"==typeof n?n():n,1===o.length?r[o[0]]=n:(!r[o[0]]||r[o[0]]instanceof Boolean||(r[o[0]]=new Boolean(r[o[0]])),r[o[0]][o[1]]=n),t([(n&&!1!==n?"":"no-")+o.join("-")]),r._trigger(e,n)}return r}var s=[],l={_version:"3.12.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout((function(){n(A[e])}),0)},addTest:function(e,n,A){s.push({name:e,fn:n,options:A})},addAsyncTest:function(e){s.push({name:null,fn:e})}},r=function(){};r.prototype=l,r=new r;var f,u=[],c=A.documentElement,p="svg"===c.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=a(e,"undefined")||a(e.call,"undefined")?function(e,n){return n in e&&a(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),r.hasOwnProperty(e)&&setTimeout((function(){r._trigger(e,r[e])}),0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout((function(){var e;for(e=0;e<A.length;e++)(0,A[e])(n)}),0),delete this._l[e]}},r._q.push((function(){l.addTest=i})),r.addAsyncTest((function(){function e(e,n,A){function o(n){var o=!(!n||"load"!==n.type)&&1===a.width;i(e,"webp"===e&&o?new Boolean(o):o),A&&A(n)}var a=new Image;a.onerror=o,a.onload=o,a.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,(function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)}))})),function(){var e,n,A,o,t,i;for(var l in s)if(s.hasOwnProperty(l)){if(e=[],(n=s[l]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(o=a(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)1===(i=e[t].split(".")).length?r[i[0]]=o:(r[i[0]]&&(!r[i[0]]||r[i[0]]instanceof Boolean)||(r[i[0]]=new Boolean(r[i[0]])),r[i[0]][i[1]]=o),u.push((o?"":"no-")+i.join("-"))}}(),t(u),delete l.addTest,delete l.addAsyncTest;for(var d=0;d<r._q.length;d++)r._q[d]();e.Modernizr=r}(window,window,document);