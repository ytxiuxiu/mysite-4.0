!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../xml/xml"),require("../meta")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../meta"],t):t(CodeMirror)}(function(P){"use strict";P.defineMode("markdown",function(o,x){var n=P.modes.hasOwnProperty("xml"),S=P.getMode(o,n?{name:"xml",htmlMode:!0}:"text/plain");void 0===x.highlightFormatting&&(x.highlightFormatting=!1),void 0===x.maxBlockquoteDepth&&(x.maxBlockquoteDepth=0),void 0===x.underscoresBreakWords&&(x.underscoresBreakWords=!0),void 0===x.fencedCodeBlocks&&(x.fencedCodeBlocks=!1),void 0===x.taskLists&&(x.taskLists=!1),void 0===x.strikethrough&&(x.strikethrough=!1);var L=0,r="header",l="comment",a="quote",h="variable-2",g="variable-3",s="keyword",f="hr",F="tag",u="formatting",b="link",q="link",m="link",M="string",c="em",d="strong",k="strikethrough",p=/^([*\-=_])(?:\s*\1){2,}\s*$/,v=/^[*\-+]\s+/,w=/^[0-9]+\.\s+/,C=/^\[(x| )\](?=\s)/,D=/^#+/,H=/^(?:\={1,}|-{1,})$/,i=/^[^#!\[\]*_\\<>` "'(~]+/;function T(t,e,i){return e.f=e.inline=i,i(t,e)}function B(t){return t.linkTitle=!1,t.em=!1,t.strong=!1,t.strikethrough=!1,t.quote=0,n||t.f!=_||(t.f=j,t.block=y),t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.thisLineHasContent=!1,null}function y(t,e){var i=t.sol(),n=!1!==e.list;!1!==e.list&&0<=e.indentationDiff?(e.indentationDiff<4&&(e.indentation-=e.indentationDiff),e.list=null):!1!==e.list&&0<e.indentation?(e.list=null,e.listDepth=Math.floor(e.indentation/4)):!1!==e.list&&(e.list=!1,e.listDepth=0);var r=null;if(4<=e.indentationDiff)return e.indentation-=4,t.skipToEnd(),l;if(t.eatSpace())return null;if(r=t.match(D))return e.header=r[0].length<=6?r[0].length:6,x.highlightFormatting&&(e.formatting="header"),e.f=e.inline,O(e);if(e.prevLineHasContent&&(r=t.match(H)))return e.header="="==r[0].charAt(0)?1:2,x.highlightFormatting&&(e.formatting="header"),e.f=e.inline,O(e);if(t.eat(">"))return e.indentation++,e.quote=i?1:e.quote+1,x.highlightFormatting&&(e.formatting="quote"),t.eatSpace(),O(e);if("["===t.peek())return T(t,e,U);if(t.match(p,!0))return f;if((!e.prevLineHasContent||n)&&(t.match(v,!1)||t.match(w,!1))){var a=null;return t.match(v,!0)?a="ul":(t.match(w,!0),a="ol"),e.indentation+=4,e.list=!0,e.listDepth++,x.taskLists&&t.match(C,!1)&&(e.taskList=!0),e.f=e.inline,x.highlightFormatting&&(e.formatting=["list","list-"+a]),O(e)}return x.fencedCodeBlocks&&t.match(/^```[ \t]*([\w+#]*)/,!0)?(e.localMode=function(t){if(P.findModeByName){var e=P.findModeByName(t);e&&(t=e.mime||e.mimes[0])}var i=P.getMode(o,t);return"null"==i.name?null:i}(RegExp.$1),e.localMode&&(e.localState=e.localMode.startState()),e.f=e.block=$,x.highlightFormatting&&(e.formatting="code-block"),e.code=!0,O(e)):T(t,e,e.inline)}function _(t,e){var i=S.token(t,e.htmlState);return(n&&null===e.htmlState.tagStart&&!e.htmlState.context||e.md_inside&&-1<t.current().indexOf(">"))&&(e.f=j,e.block=y,e.htmlState=null),i}function $(t,e){return t.sol()&&t.match("```",!1)?(e.localMode=e.localState=null,e.f=e.block=N,null):e.localMode?e.localMode.token(t,e.localState):(t.skipToEnd(),l)}function N(t,e){t.match("```"),e.block=y,e.f=j,x.highlightFormatting&&(e.formatting="code-block"),e.code=!0;var i=O(e);return e.code=!1,i}function O(t){var e=[];if(t.formatting){e.push(u),"string"==typeof t.formatting&&(t.formatting=[t.formatting]);for(var i=0;i<t.formatting.length;i++)e.push(u+"-"+t.formatting[i]),"header"===t.formatting[i]&&e.push(u+"-"+t.formatting[i]+"-"+t.header),"quote"===t.formatting[i]&&(!x.maxBlockquoteDepth||x.maxBlockquoteDepth>=t.quote?e.push(u+"-"+t.formatting[i]+"-"+t.quote):e.push("error"))}if(t.taskOpen)return e.push("meta"),e.length?e.join(" "):null;if(t.taskClosed)return e.push("property"),e.length?e.join(" "):null;if(t.linkHref)return e.push(M),e.length?e.join(" "):null;if(t.strong&&e.push(d),t.em&&e.push(c),t.strikethrough&&e.push(k),t.linkText&&e.push(m),t.code&&e.push(l),t.header&&(e.push(r),e.push(r+"-"+t.header)),t.quote&&(e.push(a),!x.maxBlockquoteDepth||x.maxBlockquoteDepth>=t.quote?e.push(a+"-"+t.quote):e.push(a+"-"+x.maxBlockquoteDepth)),!1!==t.list){var n=(t.listDepth-1)%3;n?1===n?e.push(g):e.push(s):e.push(h)}return t.trailingSpaceNewLine?e.push("trailing-space-new-line"):t.trailingSpace&&e.push("trailing-space-"+(t.trailingSpace%2?"a":"b")),e.length?e.join(" "):null}function t(t,e){if(t.match(i,!0))return O(e)}function j(t,e){var i=e.text(t,e);if(void 0!==i)return i;if(e.list)return e.list=null,O(e);if(e.taskList)return"x"!==t.match(C,!0)[1]?e.taskOpen=!0:e.taskClosed=!0,x.highlightFormatting&&(e.formatting="task"),e.taskList=!1,O(e);if(e.taskOpen=!1,e.taskClosed=!1,e.header&&t.match(/^#+$/,!0))return x.highlightFormatting&&(e.formatting="header"),O(e);var n,r,a,o=t.sol(),l=t.next();if("\\"===l&&(t.next(),x.highlightFormatting))return(c=O(e))?c+" formatting-escape":"formatting-escape";if(e.linkTitle){e.linkTitle=!1;var h=l;"("===l&&(h=")");var g="^\\s*(?:[^"+(h=(h+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"))+"\\\\]+|\\\\\\\\|\\\\.)"+h;if(t.match(new RegExp(g),!0))return M}if("`"===l){var s=e.formatting;x.highlightFormatting&&(e.formatting="code");var f=O(e),u=t.pos;t.eatWhile("`");var m=1+t.pos-u;return e.code?m===L?(e.code=!1,f):(e.formatting=s,O(e)):(L=m,e.code=!0,O(e))}if(e.code)return O(e);if("!"===l&&t.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return t.match(/\[[^\]]*\]/),e.inline=e.f=W,F;if("["===l&&t.match(/.*\](\(.*\)| ?\[.*\])/,!1))return e.linkText=!0,x.highlightFormatting&&(e.formatting="link"),O(e);if("]"===l&&e.linkText&&t.match(/\(.*\)| ?\[.*\]/,!1)){x.highlightFormatting&&(e.formatting="link");var c=O(e);return e.linkText=!1,e.inline=e.f=W,c}if("<"===l&&t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1))return e.f=e.inline=E,x.highlightFormatting&&(e.formatting="link"),(c=O(e))?c+=" ":c="",c+b;if("<"===l&&t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1))return e.f=e.inline=E,x.highlightFormatting&&(e.formatting="link"),(c=O(e))?c+=" ":c="",c+q;if("<"===l&&t.match(/^\w/,!1)){if(-1!=t.string.indexOf(">")){var d=t.string.substring(1,t.string.indexOf(">"));/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(d)&&(e.md_inside=!0)}return t.backUp(1),e.htmlState=P.startState(S),n=t,a=_,(r=e).f=r.block=a,a(n,r)}if("<"===l&&t.match(/^\/\w*?>/))return e.md_inside=!1,"tag";var k=!1;if(!x.underscoresBreakWords&&"_"===l&&"_"!==t.peek()&&t.match(/(\w)/,!1)){var p=t.pos-2;if(0<=p){var v=t.string.charAt(p);"_"!==v&&v.match(/(\w)/,!1)&&(k=!0)}}if("*"===l||"_"===l&&!k)if(o&&" "===t.peek());else{if(e.strong===l&&t.eat(l)){x.highlightFormatting&&(e.formatting="strong");f=O(e);return e.strong=!1,f}if(!e.strong&&t.eat(l))return e.strong=l,x.highlightFormatting&&(e.formatting="strong"),O(e);if(e.em===l){x.highlightFormatting&&(e.formatting="em");f=O(e);return e.em=!1,f}if(!e.em)return e.em=l,x.highlightFormatting&&(e.formatting="em"),O(e)}else if(" "===l&&(t.eat("*")||t.eat("_"))){if(" "===t.peek())return O(e);t.backUp(1)}if(x.strikethrough)if("~"===l&&t.eatWhile(l)){if(e.strikethrough){x.highlightFormatting&&(e.formatting="strikethrough");f=O(e);return e.strikethrough=!1,f}if(t.match(/^[^\s]/,!1))return e.strikethrough=!0,x.highlightFormatting&&(e.formatting="strikethrough"),O(e)}else if(" "===l&&t.match(/^~~/,!0)){if(" "===t.peek())return O(e);t.backUp(2)}return" "===l&&(t.match(/ +$/,!1)?e.trailingSpace++:e.trailingSpace&&(e.trailingSpaceNewLine=!0)),O(e)}function E(t,e){if(">"===t.next()){e.f=e.inline=j,x.highlightFormatting&&(e.formatting="link");var i=O(e);return i?i+=" ":i="",i+b}return t.match(/^[^>]+/,!0),b}function W(t,e){if(t.eatSpace())return null;var a,i=t.next();return"("===i||"["===i?(e.f=e.inline=(a="("===i?")":"]",function(t,e){var i,n=t.next();if(n===a){e.f=e.inline=j,x.highlightFormatting&&(e.formatting="link-string");var r=O(e);return e.linkHref=!1,r}return t.match((I[i=a]||(i=(i+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),I[i]=new RegExp("^(?:[^\\\\]|\\\\.)*?("+i+")")),I[i]),!0)&&t.backUp(1),e.linkHref=!0,O(e)}),x.highlightFormatting&&(e.formatting="link-string"),e.linkHref=!0,O(e)):"error"}function U(t,e){return t.match(/^[^\]]*\]:/,!1)?(e.f=R,t.next(),x.highlightFormatting&&(e.formatting="link"),e.linkText=!0,O(e)):T(t,e,j)}function R(t,e){if(t.match(/^\]:/,!0)){e.f=e.inline=A,x.highlightFormatting&&(e.formatting="link");var i=O(e);return e.linkText=!1,i}return t.match(/^[^\]]+/,!0),m}function A(t,e){return t.eatSpace()?null:(t.match(/^[^\s]+/,!0),void 0===t.peek()?e.linkTitle=!0:t.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),e.f=e.inline=j,M)}var I=[];var e={startState:function(){return{f:y,prevLineHasContent:!1,thisLineHasContent:!1,block:y,htmlState:null,indentation:0,inline:j,text:t,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,em:!1,strong:!1,header:0,taskList:!1,list:!1,listDepth:0,quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1}},copyState:function(t){return{f:t.f,prevLineHasContent:t.prevLineHasContent,thisLineHasContent:t.thisLineHasContent,block:t.block,htmlState:t.htmlState&&P.copyState(S,t.htmlState),indentation:t.indentation,localMode:t.localMode,localState:t.localMode?P.copyState(t.localMode,t.localState):null,inline:t.inline,text:t.text,formatting:!1,linkTitle:t.linkTitle,em:t.em,strong:t.strong,strikethrough:t.strikethrough,header:t.header,taskList:t.taskList,list:t.list,listDepth:t.listDepth,quote:t.quote,trailingSpace:t.trailingSpace,trailingSpaceNewLine:t.trailingSpaceNewLine,md_inside:t.md_inside}},token:function(t,e){if(e.formatting=!1,t.sol()){var i=!!e.header;if(e.header=0,t.match(/^\s*$/,!0)||i)return e.prevLineHasContent=!1,B(e),i?this.token(t,e):null;e.prevLineHasContent=e.thisLineHasContent,e.thisLineHasContent=!0,e.taskList=!1,e.code=!1,e.trailingSpace=0,e.trailingSpaceNewLine=!1,e.f=e.block;var n=t.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length,r=4*Math.floor((n-e.indentation)/4);4<r&&(r=4);var a=e.indentation+r;if(e.indentationDiff=a-e.indentation,e.indentation=a,0<n)return null}return e.f(t,e)},innerMode:function(t){return t.block==_?{state:t.htmlState,mode:S}:t.localState?{state:t.localState,mode:t.localMode}:{state:t,mode:e}},blankLine:B,getType:O,fold:"markdown"};return e},"xml"),P.defineMIME("text/x-markdown","markdown")});