!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../../addon/mode/overlay"],e):e(CodeMirror)}(function(o){"use strict";o.defineMode("django:inner",function(){var i=["block","endblock","for","endfor","in","true","false","loop","none","self","super","if","endif","as","not","and","else","import","with","endwith","without","context","ifequal","endifequal","ifnotequal","endifnotequal","extends","include","load","length","comment","endcomment","empty"];function r(e,n){e.eatWhile(/[^\{]/);var t=e.next();if("{"==t&&(t=e.eat(/\{|%|#/)))return n.tokenize=function(o){"{"==o&&(o="}");return function(e,n){var t=e.next();return t==o&&e.eat("}")?(n.tokenize=r,"tag"):e.match(i)?"keyword":"#"==o?"comment":"string"}}(t),"tag"}return i=new RegExp("^(("+i.join(")|(")+"))\\b"),{startState:function(){return{tokenize:r}},token:function(e,n){return n.tokenize(e,n)}}}),o.defineMode("django",function(e){var n=o.getMode(e,"text/html"),t=o.getMode(e,"django:inner");return o.overlayMode(n,t)}),o.defineMIME("text/x-django","django")});