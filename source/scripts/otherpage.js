'use strict';
/* ==========================================================================
accordion
========================================================================== */
$(".md-accordion .card-header").click(function(){
  if($(this).find(".icon").hasClass("plus")){
    $(this).find(".icon").html("-");
    $(this).find(".icon").removeClass("plus").addClass("minus");
  }else{
    $(this).find(".icon").html("+");
    $(this).find(".icon").removeClass("minus").addClass("plus");
  }
});

/* ==========================================================================
slimScroll
========================================================================== */
$('.slim-scroll').slimScroll({
    height: '325px'
});
/* ==========================================================================
FreeEandEasy-SearchListing-Grid-List
========================================================================== */
$('#modal-subscription').modal('show');
$('.md-checked').checkbox('check');
