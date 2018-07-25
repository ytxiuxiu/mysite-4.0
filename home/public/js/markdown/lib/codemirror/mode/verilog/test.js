!function(){var r=CodeMirror.getMode({indentUnit:4},"verilog");function e(e){test.mode(e,r,Array.prototype.slice.call(arguments,1))}e("binary_literals","[number 1'b0]","[number 1'b1]","[number 1'bx]","[number 1'bz]","[number 1'bX]","[number 1'bZ]","[number 1'B0]","[number 1'B1]","[number 1'Bx]","[number 1'Bz]","[number 1'BX]","[number 1'BZ]","[number 1'b0]","[number 1'b1]","[number 2'b01]","[number 2'bxz]","[number 2'b11]","[number 2'b10]","[number 2'b1Z]","[number 12'b0101_0101_0101]","[number 1'b 0]","[number 'b0101]"),e("octal_literals","[number 3'o7]","[number 3'O7]","[number 3'so7]","[number 3'SO7]"),e("decimal_literals","[number 0]","[number 1]","[number 7]","[number 123_456]","[number 'd33]","[number 8'd255]","[number 8'D255]","[number 8'sd255]","[number 8'SD255]","[number 32'd123]","[number 32 'd123]","[number 32 'd 123]"),e("hex_literals","[number 4'h0]","[number 4'ha]","[number 4'hF]","[number 4'hx]","[number 4'hz]","[number 4'hX]","[number 4'hZ]","[number 32'hdc78]","[number 32'hDC78]","[number 32 'hDC78]","[number 32'h DC78]","[number 32 'h DC78]","[number 32'h44x7]","[number 32'hFFF?]"),e("real_number_literals","[number 1.2]","[number 0.1]","[number 2394.26331]","[number 1.2E12]","[number 1.2e12]","[number 1.30e-2]","[number 0.1e-0]","[number 23E10]","[number 29E-2]","[number 236.123_763_e-12]"),e("operators","[meta ^]"),e("keywords","[keyword logic]","[keyword logic] [variable foo]","[keyword reg] [variable abc]"),e("variables","[variable _leading_underscore]","[variable _if]","[number 12] [variable foo]","[variable foo] [number 14]"),e("tick_defines","[def `FOO]","[def `foo]","[def `FOO_bar]"),e("system_calls","[meta $display]","[meta $vpi_printf]"),e("line_comment","[comment // Hello world]"),e("align_port_map_style1","[variable mod] [variable mod][bracket (].[variable a][bracket (][variable a][bracket )],","        .[variable b][bracket (][variable b][bracket )]","       [bracket )];",""),e("align_port_map_style2","[variable mod] [variable mod][bracket (]","    .[variable a][bracket (][variable a][bracket )],","    .[variable b][bracket (][variable b][bracket )]","[bracket )];",""),e("indent_single_statement_if","[keyword if] [bracket (][variable foo][bracket )]","    [keyword break];",""),e("no_indent_after_single_line_if","[keyword if] [bracket (][variable foo][bracket )] [keyword break];",""),e("indent_after_if_begin_same_line","[keyword if] [bracket (][variable foo][bracket )] [keyword begin]","    [keyword break];","    [keyword break];","[keyword end]",""),e("indent_after_if_begin_next_line","[keyword if] [bracket (][variable foo][bracket )]","    [keyword begin]","        [keyword break];","        [keyword break];","    [keyword end]",""),e("indent_single_statement_if_else","[keyword if] [bracket (][variable foo][bracket )]","    [keyword break];","[keyword else]","    [keyword break];",""),e("indent_if_else_begin_same_line","[keyword if] [bracket (][variable foo][bracket )] [keyword begin]","    [keyword break];","    [keyword break];","[keyword end] [keyword else] [keyword begin]","    [keyword break];","    [keyword break];","[keyword end]",""),e("indent_if_else_begin_next_line","[keyword if] [bracket (][variable foo][bracket )]","    [keyword begin]","        [keyword break];","        [keyword break];","    [keyword end]","[keyword else]","    [keyword begin]","        [keyword break];","        [keyword break];","    [keyword end]",""),e("indent_if_nested_without_begin","[keyword if] [bracket (][variable foo][bracket )]","    [keyword if] [bracket (][variable foo][bracket )]","        [keyword if] [bracket (][variable foo][bracket )]","            [keyword break];",""),e("indent_case","[keyword case] [bracket (][variable state][bracket )]","    [variable FOO]:","        [keyword break];","    [variable BAR]:","        [keyword break];","[keyword endcase]",""),e("unindent_after_end_with_preceding_text","[keyword begin]","    [keyword break]; [keyword end]",""),e("export_function_one_line_does_not_indent",'[keyword export] [string "DPI-C"] [keyword function] [variable helloFromSV];',""),e("export_task_one_line_does_not_indent",'[keyword export] [string "DPI-C"] [keyword task] [variable helloFromSV];',""),e("export_function_two_lines_indents_properly","[keyword export]",'    [string "DPI-C"] [keyword function] [variable helloFromSV];',""),e("export_task_two_lines_indents_properly","[keyword export]",'    [string "DPI-C"] [keyword task] [variable helloFromSV];',""),e("import_function_one_line_does_not_indent",'[keyword import] [string "DPI-C"] [keyword function] [variable helloFromC];',""),e("import_task_one_line_does_not_indent",'[keyword import] [string "DPI-C"] [keyword task] [variable helloFromC];',""),e("import_package_single_line_does_not_indent","[keyword import] [variable p]::[variable x];","[keyword import] [variable p]::[variable y];",""),e("covergoup_with_function_indents_properly","[keyword covergroup] [variable cg] [keyword with] [keyword function] [variable sample][bracket (][keyword bit] [variable b][bracket )];","    [variable c] : [keyword coverpoint] [variable c];","[keyword endgroup]: [variable cg]","")}();