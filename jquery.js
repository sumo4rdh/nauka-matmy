$(document).ready(function() {
    
    $(".rozwDzialania" ).slideToggle();
    $( ".rozw" ).click(function() {
        $(".rozwDzialania" ).slideToggle();
    });
    $('.tryb').click(function() {
    	$("#czystka").toggle();
    });
    $('.sprawdzsie').click(function() {
    	$(".sprawdzian").show();
        $(".nauczanie").hide();
        $(".dzialania").hide();
    });
     $('.nauczsie').click(function() {
    	$(".sprawdzian").hide();
        $(".nauczanie").show();
        random();
        $(".dzialania").hide();
    });
     $('.dzialajsie').click(function() {
    	$(".sprawdzian").hide();
        $(".nauczanie").hide();
        $(".dzialania").show();
    });
   $('.zwijacz').click(function() {
    	$(".zwin").slideToggle();
       
    });
    

    
    
});

