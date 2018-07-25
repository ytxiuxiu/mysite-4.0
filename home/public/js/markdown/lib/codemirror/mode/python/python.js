!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(k){"use strict";function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var w=n(["and","or","not","is"]),r=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],E=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"],_=["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"],z=["exec","print"],R=["ascii","bytes","exec","print"],S=["nonlocal","False","True","None"];function T(e){return e.scopes[e.scopes.length-1]}k.registerHelper("hintWords","python",r.concat(E)),k.defineMode("python",function(a,o){var l="error",i=o.singleDelimiters||new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),s=o.doubleOperators||new RegExp("^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),c=o.doubleDelimiters||new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),p=o.tripleDelimiters||new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");if(o.version&&3==parseInt(o.version,10))var u=o.singleOperators||new RegExp("^[\\+\\-\\*/%&|\\^~<>!@]"),f=o.identifiers||new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");else u=o.singleOperators||new RegExp("^[\\+\\-\\*/%&|\\^~<>!]"),f=o.identifiers||new RegExp("^[_A-Za-z][_A-Za-z0-9]*");var d=o.hangingIndent||a.indentUnit,e=r,t=E;if(null!=o.extra_keywords&&(e=e.concat(o.extra_keywords)),null!=o.extra_builtins&&(t=t.concat(o.extra_builtins)),o.version&&3==parseInt(o.version,10)){e=e.concat(S),t=t.concat(R);var m=new RegExp("^(([rb]|(br))?('{3}|\"{3}|['\"]))","i")}else{e=e.concat(z),t=t.concat(_);m=new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var h=n(e),y=n(t);function b(e,t){if(e.sol()&&"py"==T(t).type){var n=T(t).offset;if(e.eatSpace()){var r=e.indentation();return n<r?x(e,t,"py"):r<n&&v(e,t)&&(t.errorToken=!0),null}var i=g(e,t);return 0<n&&v(e,t)&&(i+=" "+l),i}return g(e,t)}function g(e,t){if(e.eatSpace())return null;if("#"==e.peek())return e.skipToEnd(),"comment";if(e.match(/^[0-9\.]/,!1)){var n=!1;if(e.match(/^\d*\.\d+(e[\+\-]?\d+)?/i)&&(n=!0),e.match(/^\d+\.\d*/)&&(n=!0),e.match(/^\.\d+/)&&(n=!0),n)return e.eat(/J/i),"number";var r=!1;if(e.match(/^0x[0-9a-f]+/i)&&(r=!0),e.match(/^0b[01]+/i)&&(r=!0),e.match(/^0o[0-7]+/i)&&(r=!0),e.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(e.eat(/J/i),r=!0),e.match(/^0(?![\dx])/i)&&(r=!0),r)return e.eat(/L/i),"number"}return e.match(m)?(t.tokenize=function(n){for(;0<="rub".indexOf(n.charAt(0).toLowerCase());)n=n.substr(1);var r=1==n.length,i="string";function e(e,t){for(;!e.eol();)if(e.eatWhile(/[^'"\\]/),e.eat("\\")){if(e.next(),r&&e.eol())return i}else{if(e.match(n))return t.tokenize=b,i;e.eat(/['"]/)}if(r){if(o.singleLineStringErrors)return l;t.tokenize=b}return i}return e.isString=!0,e}(e.current()),t.tokenize(e,t)):e.match(p)||e.match(c)?null:e.match(s)||e.match(u)||e.match(w)?"operator":e.match(i)?null:e.match(h)?"keyword":e.match(y)?"builtin":e.match(/^(self|cls)\b/)?"variable-2":e.match(f)?"def"==t.lastToken||"class"==t.lastToken?"def":"variable":(e.next(),l)}function x(e,t,n){var r,i=null;if("py"==n)for(;"py"!=T(t).type;)t.scopes.pop();r=T(t).offset+("py"==n?a.indentUnit:d),"py"==n||e.match(/^(\s|#.*)*$/,!1)||(i=e.column()+1),t.scopes.push({offset:r,type:n,align:i})}function v(e,t){for(var n=e.indentation();T(t).offset>n;){if("py"!=T(t).type)return!0;t.scopes.pop()}return T(t).offset!=n}return{startState:function(e){return{tokenize:b,scopes:[{offset:e||0,type:"py",align:null}],lastStyle:null,lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var n=t.errorToken;n&&(t.errorToken=!1);var r=function(e,t){var n=t.tokenize(e,t),r=e.current();if("."==r)return null==(n=e.match(f,!1)?null:l)&&"meta"==t.lastStyle&&(n="meta"),n;if("@"==r)return o.version&&3==parseInt(o.version,10)?e.match(f,!1)?"meta":"operator":e.match(f,!1)?"meta":l;"variable"!=n&&"builtin"!=n||"meta"!=t.lastStyle||(n="meta"),"pass"!=r&&"return"!=r||(t.dedent+=1),"lambda"==r&&(t.lambda=!0),":"!=r||t.lambda||"py"!=T(t).type||x(e,t,"py");var i=1==r.length?"[({".indexOf(r):-1;if(-1!=i&&x(e,t,"])}".slice(i,i+1)),-1!=(i="])}".indexOf(r))){if(T(t).type!=r)return l;t.scopes.pop()}return 0<t.dedent&&e.eol()&&"py"==T(t).type&&(1<t.scopes.length&&t.scopes.pop(),t.dedent-=1),n}(e,t);t.lastStyle=r;var i=e.current();return i&&r&&(t.lastToken=i),e.eol()&&t.lambda&&(t.lambda=!1),n?r+" "+l:r},indent:function(e,t){if(e.tokenize!=b)return e.tokenize.isString?k.Pass:0;var n=T(e),r=t&&t.charAt(0)==n.type;return null!=n.align?n.align-(r?1:0):r&&1<e.scopes.length?e.scopes[e.scopes.length-2].offset:n.offset},lineComment:"#",fold:"indent"}}),k.defineMIME("text/x-python","python");var e;k.defineMIME("text/x-cython",{name:"python",extra_keywords:(e="by cdef cimport cpdef ctypedef enum exceptextern gil include nogil property publicreadonly struct union DEF IF ELIF ELSE",e.split(" "))})});