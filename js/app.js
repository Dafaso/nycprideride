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
    $("#mobile_menu").slideToggle(400);
    $(".hamburger").toggleClass("hamburger_toggle");
});

$(".mobilephotos").on("click", function(e){
    e.preventDefault();
    $("#photo_mobilesubmenu").slideToggle(400);
});


$(window).resize(function(){
    if($(this).width() > 943){
   $("#mobile_menu").slideUp(100);
   $(".hamburger").removeClass("hamburger_toggle");        
    }//close full screen drop menu when pc screen increases and hamburger turns black.
});

$(".photomenu").click(function(e){
    e.preventDefault()
});

$(".photomenu, #photo_submenu").mouseenter(function(e){
    $("#photo_submenu").css("display","block")
});

$(".photomenu, #photo_submenu").mouseleave(function(e){
    $("#photo_submenu").css("display","none")
});


