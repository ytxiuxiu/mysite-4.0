!function(){var a=function(e){var s=1;e.fn.referenceLinkDialog=function(){var e,l=this.cm,t=this.lang,a=this.editor,i=this.settings,n=l.getCursor(),r=l.getSelection(),d=t.dialog.referenceLink,o=this.classPrefix,c=o+"reference-link-dialog";if(l.focus(),a.find("."+c).length<1){var u='<div class="'+o+'form"><label>'+d.name+'</label><input type="text" value="['+s+']" data-name /><br/><label>'+d.urlId+'</label><input type="text" data-url-id /><br/><label>'+d.url+'</label><input type="text" value="http://" data-url /><br/><label>'+d.urlTitle+'</label><input type="text" value="'+r+'" data-title /><br/></div>';e=this.createDialog({name:c,title:d.title,width:380,height:296,content:u,mask:i.dialogShowMask,drag:i.dialogDraggable,lockScreen:i.dialogLockScreen,maskStyle:{opacity:i.dialogMaskOpacity,backgroundColor:i.dialogMaskBgColor},buttons:{enter:[t.buttons.enter,function(){var e=this.find("[data-name]").val(),t=this.find("[data-url]").val(),a=this.find("[data-url-id]").val(),i=this.find("[data-title]").val();return""===e?alert(d.nameEmpty):""===a?alert(d.idEmpty):"http://"===t||""===t?alert(d.urlEmpty):(l.replaceSelection("["+e+"]["+a+"]"),""===r&&l.setCursor(n.line,n.ch+1),i=""===i?"":' "'+i+'"',l.setValue(l.getValue()+"\n["+a+"]: "+t+i),this.hide().lockScreen(!1).hideMask()),!1}],cancel:[t.buttons.cancel,function(){return this.hide().lockScreen(!1).hideMask(),!1}]}})}(e=a.find("."+c)).find("[data-name]").val("["+s+"]"),e.find("[data-url-id]").val(""),e.find("[data-url]").val("http://"),e.find("[data-title]").val(r),this.dialogShowMask(e),this.dialogLockScreen(),e.show(),s++}};"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=a:"function"==typeof define?define.amd?define(["editormd"],function(e){a(e)}):define(function(e){var t=e("./../../editormd");a(t)}):a(window.editormd)}();