/* ---------------------------------------------------------------------------------------------
* myPass v1.0 - jQuery password-hiding iPhone-Style
*
* Copyright (c) 2009 Oliver Storm, Stefan Huissel( http://www.mysrc.de )
*				Feel free to redistribute the script/modify it, as
*			   	long as you leave my infos at the top.
*
*
* Date Thu, 30 Jun 2009
*
* Defaults: 	charReplace -> Unicode for the symbol that will be displayed
*	          	instead of the character. You can find a good overview here:
*			  	http://www.fileformat.info/format/w3c/entitytest.htm?sort=Unicode+Character
*
*			  	charDuration -> Duration how long the last character will be shown when no
*			  	further input is made.
*
---------------------------------------------------------------------------------------------- */

(function($){$.fn.myPass=function(options){var defaults={charReplace:'%u25CF',charDuration:1000}
var opts=$.extend(defaults,options);var aktiv=null;$(this).each(function(){tempField=$(this).attr('name');$(this).attr('name','tmp_'+tempField);$(this).parent().append('<input name="'+tempField+'" id="'+tempField+'" type="hidden" value="" />');});$(this).bind("keypress",function(evt){clearTimeout(aktiv);var hiddenPass='';if($(this).val().length>0){if(evt.which==8){deleteLast(this);}else{currentValue=currentValue+$(this).val().slice($(this).val().length-1);for(i=0;i<=$(this).val().length-1;++i){hiddenPass=hiddenPass+unescape(opts.charReplace);}
lastLetter=$(this).val().charAt($(this).val().length-1);if(lastLetter!=unescape(opts.charReplace)){saveString(lastLetter,this);}
$(this).val(hiddenPass);aktiv=setTimeout("hideAll('"+$(this).attr('name')+"')",opts.charDuration);}}else{currentValue=$(this).val();var tempField=$(this).attr('name');var hiddenID=tempField.substr(tempField.indexOf('_')+1);$('#'+hiddenID).val('');}});hideAll=function(el){lastLetter=$('input[name='+el+']').val().charAt($('input[name='+el+']').val().length-1);var hiddenID=el.substr(el.indexOf('_')+1);var tmpstr=$('#'+hiddenID).val();$('#'+hiddenID).val(tmpstr+lastLetter);var hiddenPass='';for(i=0;i<=$('input[name='+el+']').val().length-1;++i){hiddenPass=hiddenPass+unescape(opts.charReplace);}
$('input[name='+el+']').val(hiddenPass);}
saveString=function(str,el){var tempField=$(el).attr('name');var hiddenID=tempField.substr(tempField.indexOf('_')+1);var tmpstr=$('#'+hiddenID).val();$('#'+hiddenID).val(tmpstr+str);}
deleteLast=function(el){var tempField=$(el).attr('name');var hiddenID=tempField.substr(tempField.indexOf('_')+1);var tmpstr=$('#'+hiddenID).val();var length=$('#'+hiddenID).val().length;$('#'+hiddenID).val(tmpstr.substring(0,length-1));}};})(jQuery);