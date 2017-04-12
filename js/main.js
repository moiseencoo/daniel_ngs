
$(document).ready(function(){
    
   
    
});

 $(".header-menu a").on('click', function(){
        
       $('#navigation').animate({left: '0'}, "0");
     
        $(".header-menu a").hide();
});

 $(".close_menu").on('click', function(){
        
         $('#navigation').animate({left: '-400px'}, "0");
         $(".header-menu a").show();
});