!function(){var o=function(e){var g=jQuery,c="goto-line-dialog",h={"zh-cn":{toolbar:{"goto-line":"跳转到行"},dialog:{"goto-line":{title:"跳转到行",label:"请输入行号",error:"错误："}}},"zh-tw":{toolbar:{"goto-line":"跳轉到行"},dialog:{"goto-line":{title:"跳轉到行",label:"請輸入行號",error:"錯誤："}}},en:{toolbar:{"goto-line":"Goto line"},dialog:{"goto-line":{title:"Goto line",label:"Enter a line number, range ",error:"Error: "}}}};e.fn.gotoLineDialog=function(){var e,t=this,o=this.cm,i=this.editor,n=this.settings,l=(n.pluginPath,this.classPrefix+c);g.extend(!0,this.lang,h[this.lang.name]),this.setToolbar();var a=this.lang,r=a.dialog["goto-line"],d=o.lineCount();if(r.error+=r.label+" 1-"+d,i.find("."+l).length<1){var s=['<div class="editormd-form" style="padding: 10px 0;">','<p style="margin: 0;">'+r.label+" 1-"+d+'&nbsp;&nbsp;&nbsp;<input type="number" class="number-input" style="width: 60px;" value="1" max="'+d+'" min="1" data-line-number /></p>',"</div>"].join("\n");e=this.createDialog({name:l,title:r.title,width:400,height:180,mask:n.dialogShowMask,drag:n.dialogDraggable,content:s,lockScreen:n.dialogLockScreen,maskStyle:{opacity:n.dialogMaskOpacity,backgroundColor:n.dialogMaskBgColor},buttons:{enter:[a.buttons.enter,function(){var e=parseInt(this.find("[data-line-number]").val());return e<1||d<e?alert(r.error):(t.gotoLine(e),this.hide().lockScreen(!1).hideMask()),!1}],cancel:[a.buttons.cancel,function(){return this.hide().lockScreen(!1).hideMask(),!1}]}})}e=i.find("."+l),this.dialogShowMask(e),this.dialogLockScreen(),e.show()}};"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=o:"function"==typeof define?define.amd?define(["editormd"],function(e){o(e)}):define(function(e){var t=e("./../../editormd");o(t)}):o(window.editormd)}();