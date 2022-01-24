/*=========================================================================================
    File Name: switch.js
    Description: Bootstrap switch and switchery are best switches with many options.
    ----------------------------------------------------------------------------------------
    Item Name: Stack - Responsive Admin Theme
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
(function(window, document, $) {
  "use strict";
  var $html = $("html");
  /*  Toggle Starts   */

  $(".switch:checkbox").each(function (index){
    $(this).checkboxpicker({
      offLabel: $(this).data('offlabel') || 'No',
      onLabel: $(this).data('onlabel') || 'Yes',
    });
  })

  $("#switch12").checkboxpicker({
    html: true,
    offLabel: '<span class="icon-remove">',
    onLabel: '<span class="icon-ok">'
  });
})(window, document, jQuery);
