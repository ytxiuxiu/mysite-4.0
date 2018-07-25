!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(j){"use strict";j.defineMIME("text/x-erlang","erlang"),j.defineMode("erlang",function(p){var a=["-type","-spec","-export_type","-opaque"],c=["after","begin","catch","case","cond","end","fun","if","let","of","query","receive","try","when"],s=/[\->,;]/,u=["->",";",","],l=["and","andalso","band","bnot","bor","bsl","bsr","bxor","div","not","or","orelse","rem","xor"],_=/[\+\-\*\/<>=\|:!]/,f=["=","+","-","*","/",">",">=","<","=<","=:=","==","=/=","/=","||","<-","!"],m=/[<\(\[\{]/,d=["<<","(","[","{"],b=/[>\)\]\}]/,g=["}","]",")",">>"],k=["is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_record","is_reference","is_tuple","atom","binary","bitstring","boolean","function","integer","list","number","pid","port","record","reference","tuple"],h=["abs","adler32","adler32_combine","alive","apply","atom_to_binary","atom_to_list","binary_to_atom","binary_to_existing_atom","binary_to_list","binary_to_term","bit_size","bitstring_to_list","byte_size","check_process_code","contact_binary","crc32","crc32_combine","date","decode_packet","delete_module","disconnect_node","element","erase","exit","float","float_to_list","garbage_collect","get","get_keys","group_leader","halt","hd","integer_to_list","internal_bif","iolist_size","iolist_to_binary","is_alive","is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_process_alive","is_record","is_reference","is_tuple","length","link","list_to_atom","list_to_binary","list_to_bitstring","list_to_existing_atom","list_to_float","list_to_integer","list_to_pid","list_to_tuple","load_module","make_ref","module_loaded","monitor_node","node","node_link","node_unlink","nodes","notalive","now","open_port","pid_to_list","port_close","port_command","port_connect","port_control","pre_loaded","process_flag","process_info","processes","purge_module","put","register","registered","round","self","setelement","size","spawn","spawn_link","spawn_monitor","spawn_opt","split_binary","statistics","term_to_binary","time","throw","tl","trunc","tuple_size","tuple_to_list","unlink","unregister","whereis"],y=/[\w@Ø-ÞÀ-Öß-öø-ÿ]/,v=/[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;function w(e,t,r){if(1==e.current().length&&t.test(e.current())){for(e.backUp(1);t.test(e.peek());)if(e.next(),W(e.current(),r))return!0;e.backUp(e.current().length-1)}return!1}function x(e,t,r){if(1==e.current().length&&t.test(e.current())){for(;t.test(e.peek());)e.next();for(;0<e.current().length;){if(W(e.current(),r))return!0;e.backUp(1)}e.next()}return!1}function S(e){return t(e,'"',"\\")}function z(e){return t(e,"'","\\")}function t(e,t,r){for(;!e.eol();){var n=e.next();if(n==t)return!0;n==r&&e.next()}return!1}function W(e,t){return-1<t.indexOf(e)}function U(e,t,r){var n,i,o,a,c,s,u;switch(a=e,s=r,"comment"!=(c=E((u=t).current(),u.column(),u.indentation(),s)).type&&"whitespace"!=c.type&&(a.tokenStack=(n=a.tokenStack,i=c,0<(o=n.length-1)&&"record"===n[o].type&&"dot"===i.type?n.pop():(0<o&&"group"===n[o].type&&n.pop(),n.push(i)),n),a.tokenStack=function(e){var t=e.length-1;if("dot"===e[t].type)return[];if("fun"===e[t].type&&"fun"===e[t-1].token)return e.slice(0,t-1);switch(e[e.length-1].token){case"}":return Z(e,{g:["{"]});case"]":return Z(e,{i:["["]});case")":return Z(e,{i:["("]});case">>":return Z(e,{i:["<<"]});case"end":return Z(e,{i:["begin","case","fun","if","receive","try"]});case",":return Z(e,{e:["begin","try","when","->",",","(","[","{","<<"]});case"->":return Z(e,{r:["when"],m:["try","if","case","receive"]});case";":return Z(e,{E:["case","fun","if","receive","try","when"]});case"catch":return Z(e,{e:["try"]});case"of":return Z(e,{e:["case"]});case"after":return Z(e,{e:["receive","try"]});default:return e}}(a.tokenStack)),r){case"atom":return"atom";case"attribute":return"attribute";case"boolean":return"atom";case"builtin":return"builtin";case"close_paren":case"colon":return null;case"comment":return"comment";case"dot":return null;case"error":return"error";case"fun":return"meta";case"function":return"tag";case"guard":return"property";case"keyword":return"keyword";case"macro":return"variable-2";case"number":return"number";case"open_paren":return null;case"operator":return"operator";case"record":return"bracket";case"separator":return null;case"string":return"string";case"type":return"def";case"variable":return"variable";default:return null}}function E(e,t,r,n){return{token:e,column:t,indent:r,type:n}}function A(e,t){var r=e.tokenStack.length,n=t||1;return!(r<n)&&e.tokenStack[r-n]}function Z(e,t){for(var r in t)for(var n=e.length-1,i=t[r],o=n-1;-1<o;o--)if(W(e[o].token,i)){var a=e.slice(0,o);switch(r){case"m":return a.concat(e[o]).concat(e[n]);case"r":return a.concat(e[n]);case"i":return a;case"g":return a.concat(E(c="group",0,0,c));case"E":case"e":return a.concat(e[o])}}var c;return"E"==r?[]:e}function r(e,t){var r,n,i,o,a,c,s,u=p.indentUnit,l=P(n=t.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/))&&0===n.index?n[0]:"",_=A(e,1),f=A(e,2);return e.in_string||e.in_atom?j.Pass:f?"when"==_.token?_.column+u:"when"===l&&"function"===f.type?f.indent+u:"("===l&&"fun"===_.token?_.column+3:"catch"===l&&(r=M(e,["try"]))?r.column:W(l,["end","after","of"])?(r=M(e,["begin","case","fun","if","receive","try"]))?r.column:j.Pass:W(l,g)?(r=M(e,d))?r.column:j.Pass:W(_.token,[",","|","||"])||W(l,[",","|","||"])?(c=e.tokenStack.slice(0,-1),s=q(c,"type",["open_paren"]),(r=!!P(c[s])&&c[s])?r.column+r.token.length:u):"->"==_.token?W(f.token,["receive","case","if","try"])?f.column+u+u:f.column+u:W(_.token,d)?_.column+_.token.length:(i=e.tokenStack,o=q(i,"type",["open_paren","separator","keyword"]),a=q(i,"type",["operator"]),P(r=P(o)&&P(a)&&o<a?i[o+1]:!!P(o)&&i[o])?r.column+u:0):0}function M(e,t){var r=e.tokenStack,n=q(r,"token",t);return!!P(r[n])&&r[n]}function q(e,t,r){for(var n=e.length-1;-1<n;n--)if(W(e[n][t],r))return n;return!1}function P(e){return!1!==e&&null!=e}return{startState:function(){return{tokenStack:[],in_string:!1,in_atom:!1}},token:function(e,t){return function(e,t){if(t.in_string)return t.in_string=!S(e),U(t,e,"string");if(t.in_atom)return t.in_atom=!z(e),U(t,e,"atom");if(e.eatSpace())return U(t,e,"whitespace");if(!A(t)&&e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/))return W(e.current(),a)?U(t,e,"type"):U(t,e,"attribute");var r,n=e.next();if("%"==n)return e.skipToEnd(),U(t,e,"comment");if(":"==n)return U(t,e,"colon");if("?"==n)return e.eatSpace(),e.eatWhile(y),U(t,e,"macro");if("#"==n)return e.eatSpace(),e.eatWhile(y),U(t,e,"record");if("$"==n)return"\\"!=e.next()||e.match(v)?U(t,e,"number"):U(t,e,"error");if("."==n)return U(t,e,"dot");if("'"==n){if(!(t.in_atom=!z(e))){if(e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),U(t,e,"fun");if(e.match(/\s*\(/,!1)||e.match(/\s*:/,!1))return U(t,e,"function")}return U(t,e,"atom")}if('"'==n)return t.in_string=!S(e),U(t,e,"string");if(/[A-Z_Ø-ÞÀ-Ö]/.test(n))return e.eatWhile(y),U(t,e,"variable");if(/[a-z_ß-öø-ÿ]/.test(n)){if(e.eatWhile(y),e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),U(t,e,"fun");var i=e.current();return W(i,c)?U(t,e,"keyword"):W(i,l)?U(t,e,"operator"):e.match(/\s*\(/,!1)?!W(i,h)||":"==A(t).token&&"erlang"!=A(t,2).token?W(i,k)?U(t,e,"guard"):U(t,e,"function"):U(t,e,"builtin"):W(i,l)?U(t,e,"operator"):":"==((r=e.match(/([\n\s]+|%[^\n]*\n)*(.)/,!1))?r.pop():"")?U(t,e,"erlang"==i?"builtin":"function"):W(i,["true","false"])?U(t,e,"boolean"):W(i,["true","false"])?U(t,e,"boolean"):U(t,e,"atom")}var o=/[0-9]/;return o.test(n)?(e.eatWhile(o),e.eat("#")?e.eatWhile(/[0-9a-zA-Z]/)||e.backUp(1):e.eat(".")&&(e.eatWhile(o)?e.eat(/[eE]/)&&(e.eat(/[-+]/)?e.eatWhile(o)||e.backUp(2):e.eatWhile(o)||e.backUp(1)):e.backUp(1)),U(t,e,"number")):w(e,m,d)?U(t,e,"open_paren"):w(e,b,g)?U(t,e,"close_paren"):x(e,s,u)?U(t,e,"separator"):x(e,_,f)?U(t,e,"operator"):U(t,e,null)}(e,t)},indent:function(e,t){return r(e,t)},lineComment:"%"}})});