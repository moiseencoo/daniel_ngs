
$(document).ready(function(){
    
   
    
});

 $(".header-menu a").on('click', function(){
        
       $('#navigation').animate({left: '0'}, "slow");
     
        $(".header-menu a").hide();
});

 $(".close_menu").on('click', function(){
        
         $('#navigation').animate({left: '-400px'}, "slow");
         $(".header-menu a").show();
});