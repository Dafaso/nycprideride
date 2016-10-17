$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

$(window).load(function(){
    $(this).scrollTop(0);
    $("#main-photo").css("height",this.innerHeight + "px");
    $("#lower-div").css("height",this.innerHeight + "px");
});


$(window).resize(function(){
    $("#main-photo").css("height",this.innerHeight + "px");
    $("#lower-div").css("height",this.innerHeight + "px");
});

$("#arrows").click(function(){  
    //scroll DOWN    
        var WH = $(window).height();  
        var SH = $('body').prop("scrollHeight");
        $("body").stop().animate({scrollTop: SH-WH}, 880);
                     //.stop() needed!!   
});

$("#arrowsUp").click(function(){
    //scroll UP   
        $("body").stop().animate({scrollTop:0}, 880);
                     //.stop() needed!!
});

$("#nav_lines").on("click", function(){
    $("#mobile_menu").slideToggle(600);
    $(".hamburger").toggleClass("hamburger_toggle");
});


$(window).resize(function(){
    if($(this).width() > 943){
   $("#mobile_menu").slideUp(100); 
    }//close full screen drop menu when pc screen increases.
});

