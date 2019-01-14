 
$(window).scroll(function(){
   var top = $(window).scrollTop();
   var find_class_small = $.contains('nav', '.black');
 
   if(top > 50 && find_class_small == false) {
    $('nav').addClass('black');  
   }
   else {
    $('nav').removeClass('black'); 
   }
 
});

$('.nav-link').on('click',function() {
  $('.navbar-collapse').collapse('hide');
});
$('.show-info-button').click(function(){
    $('#modalGetFreeNow').modal('show');
})

