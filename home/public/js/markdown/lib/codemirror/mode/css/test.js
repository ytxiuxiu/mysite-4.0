!function(){var o=CodeMirror.getMode({indentUnit:2},"css");function r(r){test.mode(r,o,Array.prototype.slice.call(arguments,1))}r("atMediaUnknownType","[def @media] [attribute screen] [keyword and] [error foobarhello] { }"),r("atMediaUnknownProperty","[def @media] [attribute screen] [keyword and] ([error foobarhello]) { }"),r("atMediaMaxWidthNested","[def @media] [attribute screen] [keyword and] ([property max-width]: [number 25px]) { [tag foo] { } }"),r("tagSelector","[tag foo] { }"),r("classSelector","[qualifier .foo-bar_hello] { }"),r("idSelector","[builtin #foo] { [error #foo] }"),r("tagSelectorUnclosed","[tag foo] { [property margin]: [number 0] } [tag bar] { }"),r("tagStringNoQuotes","[tag foo] { [property font-family]: [variable hello] [variable world]; }"),r("tagStringDouble",'[tag foo] { [property font-family]: [string "hello world"]; }'),r("tagStringSingle","[tag foo] { [property font-family]: [string 'hello world']; }"),r("tagColorKeyword","[tag foo] {","  [property color]: [keyword black];","  [property color]: [keyword navy];","  [property color]: [keyword yellow];","}"),r("tagColorHex3","[tag foo] { [property background]: [atom #fff]; }"),r("tagColorHex6","[tag foo] { [property background]: [atom #ffffff]; }"),r("tagColorHex4","[tag foo] { [property background]: [atom&error #ffff]; }"),r("tagColorHexInvalid","[tag foo] { [property background]: [atom&error #ffg]; }"),r("tagNegativeNumber","[tag foo] { [property margin]: [number -5px]; }"),r("tagPositiveNumber","[tag foo] { [property padding]: [number 5px]; }"),r("tagVendor","[tag foo] { [meta -foo-][property box-sizing]: [meta -foo-][atom border-box]; }"),r("tagBogusProperty","[tag foo] { [property&error barhelloworld]: [number 0]; }"),r("tagTwoProperties","[tag foo] { [property margin]: [number 0]; [property padding]: [number 0]; }"),r("tagTwoPropertiesURL","[tag foo] { [property background]: [atom url]([string //example.com/foo.png]); [property padding]: [number 0]; }"),r("commentSGML","[comment \x3c!--comment--\x3e]"),r("commentSGML2","[comment \x3c!--comment]","[comment --\x3e] [tag div] {}"),r("indent_tagSelector","[tag strong], [tag em] {","  [property background]: [atom rgba](","    [number 255], [number 255], [number 0], [number .2]","  );","}"),r("indent_atMedia","[def @media] {","  [tag foo] {","    [property color]:","      [keyword yellow];","  }","}"),r("indent_comma","[tag foo] {","  [property font-family]: [variable verdana],","    [atom sans-serif];","}"),r("indent_parentheses","[tag foo]:[variable-3 before] {","  [property background]: [atom url](","[string     blahblah]","[string     etc]","[string   ]) [keyword !important];","}"),r("font_face","[def @font-face] {","  [property font-family]: [string 'myfont'];","  [error nonsense]: [string 'abc'];","  [property src]: [atom url]([string http://blah]),","    [atom url]([string http://foo]);","}"),r("empty_url","[def @import] [tag url]() [tag screen];"),r("parens","[qualifier .foo] {","  [property background-image]: [variable fade]([atom #000], [number 20%]);","  [property border-image]: [atom linear-gradient](","    [atom to] [atom bottom],","    [variable fade]([atom #000], [number 20%]) [number 0%],","    [variable fade]([atom #000], [number 20%]) [number 100%]","  );","}"),r("css_variable",":[variable-3 root] {","  [variable-2 --main-color]: [atom #06c];","}","[tag h1][builtin #foo] {","  [property color]: [atom var]([variable-2 --main-color]);","}"),r("supports","[def @supports] ([keyword not] (([property text-align-last]: [atom justify]) [keyword or] ([meta -moz-][property text-align-last]: [atom justify])) {","  [property text-align-last]: [atom justify];","}"),r("document","[def @document] [tag url]([string http://blah]),","  [tag url-prefix]([string https://]),","  [tag domain]([string blah.com]),",'  [tag regexp]([string ".*blah.+"]) {',"    [builtin #id] {","      [property background-color]: [keyword white];","    }","    [tag foo] {","      [property font-family]: [variable Verdana], [atom sans-serif];","    }","  }"),r("document_url","[def @document] [tag url]([string http://blah]) { [qualifier .class] { } }"),r("document_urlPrefix","[def @document] [tag url-prefix]([string https://]) { [builtin #id] { } }"),r("document_domain","[def @document] [tag domain]([string blah.com]) { [tag foo] { } }"),r("document_regexp",'[def @document] [tag regexp]([string ".*blah.+"]) { [builtin #id] { } }'),r("counter-style","[def @counter-style] [variable binary] {","  [property system]: [atom numeric];","  [property symbols]: [number 0] [number 1];",'  [property suffix]: [string "."];',"  [property range]: [atom infinite];","  [property speak-as]: [atom numeric];","}"),r("counter-style-additive-symbols","[def @counter-style] [variable simple-roman] {","  [property system]: [atom additive];","  [property additive-symbols]: [number 10] [variable X], [number 5] [variable V], [number 1] [variable I];","  [property range]: [number 1] [number 49];","}"),r("counter-style-use","[tag ol][qualifier .roman] { [property list-style]: [variable simple-roman]; }"),r("counter-style-symbols",'[tag ol] { [property list-style]: [atom symbols]([atom cyclic] [string "*"] [string "\\2020"] [string "\\2021"] [string "\\A7"]); }')}();