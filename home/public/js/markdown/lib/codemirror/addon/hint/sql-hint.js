!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../../mode/sql/sql")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/sql/sql"],t):t(CodeMirror)}(function(l){"use strict";var v,p,c,A={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},y=l.Pos;function f(t){return"string"==typeof t?t:t.text}function m(t,r){if(!t.slice)return t[r];for(var e=t.length-1;0<=e;e--)if(f(t[e])==r)return t[e]}function g(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);return r}function h(t,r,e,n){for(var o in e)e.hasOwnProperty(o)&&(Array.isArray(e)&&(o=e[o]),s=o,u=void 0,a=(i=r).length,u=f(s).substr(0,a),i.toUpperCase()===u.toUpperCase()&&t.push(n(o)));var i,s,a,u}function d(t){for(var r=f(t).split("."),e=0;e<r.length;e++)r[e]="`"+r[e]+"`";var n=r.join(".");return"string"==typeof t?n:((t=g(t)).text=n,t)}function x(t,r,e,n){for(var o,i=!1,s=[],a=r.start,u=!0;u;)u="."==r.string.charAt(0),i=i||"`"==r.string.charAt(0),a=r.start,s.unshift(("."==(o=r.string).charAt(0)&&(o=o.substr(1)),o.replace(/`/g,""))),"."==(r=n.getTokenAt(y(t.line,r.start))).string&&(u=!0,r=n.getTokenAt(y(t.line,r.start)));var f=s.join(".");h(e,f,v,function(t){return i?d(t):t}),h(e,f,p,function(t){return i?d(t):t}),f=s.pop();var l=s.join(".");m(v,l)||(l=function(t,r){var e=r.doc,n=e.getValue(),o=t.toUpperCase(),i="",s="",a=[],u={start:y(0,0),end:y(r.lastLine(),r.getLineHandle(r.lastLine()).length)},f=n.indexOf(A.QUERY_DIV);for(;-1!=f;)a.push(e.posFromIndex(f)),f=n.indexOf(A.QUERY_DIV,f+1);a.unshift(y(0,0)),a.push(y(r.lastLine(),r.getLineHandle(r.lastLine()).text.length));for(var l=0,c=q(r.getCursor()),p=0;p<a.length;p++){var g=q(a[p]);if(l<c&&c<=g){u={start:C(l),end:C(g)};break}l=g}for(var h=e.getRange(u.start,u.end,!1),p=0;p<h.length;p++){var d=h[p];if(b(d,function(t){var r=t.toUpperCase();r===o&&m(v,i)&&(s=i),r!==A.ALIAS_KEYWORD&&(i=t)}),s)break}return s}(l,n));var c=m(v,l);return c&&Array.isArray(v)&&c.columns&&(c=c.columns),c&&h(e,f,c,function(t){return"string"==typeof t?t=l+"."+t:(t=g(t)).text=l+"."+t.text,i?d(t):t}),a}function b(t,r){if(t)for(var e=/[,;]/g,n=t.split(" "),o=0;o<n.length;o++)r(n[o]?n[o].replace(e,""):"")}function q(t){return t.line+t.ch/Math.pow(10,6)}function C(t){return y(Math.floor(t),+t.toString().split(".").pop())}l.registerHelper("hint","sql",function(t,r){v=r&&r.tables||{};var e,n=r&&r.defaultTable;p=n&&m(v,n)||[],c=c||("sql"===(e=t.doc.modeOption)&&(e="text/x-sql"),l.resolveMode(e).keywords);var o,i,s,a=t.getCursor(),u=[],f=t.getTokenAt(a);return f.end>a.ch&&(f.end=a.ch,f.string=f.string.slice(0,a.ch-f.start)),f.string.match(/^[.`\w@]\w*$/)?(s=f.string,o=f.start,i=f.end):(o=i=a.ch,s=""),"."==s.charAt(0)||"`"==s.charAt(0)?o=x(a,f,u,t):(h(u,s,v,function(t){return t}),h(u,s,p,function(t){return t}),h(u,s,c,function(t){return t.toUpperCase()})),{list:u,from:y(a.line,o),to:y(a.line,i)}})});