$(document).ready(function(){

/***************************   Preloader ******************************/
    $(window).on("load", function() {
        $('.preloader').fadeOut(1000);
    });
/***************************   Return To Top ******************************/
     $('#return-to-top').click(function() {      
        $('body,html').animate({
            scrollTop : 0                     
        }, 1000);
    });
/***************************   Change Styles When Resize ******************************/
    $(window).resize(function(){
        if ($(window).width() <= 991) {
            $('.menu-icon').removeClass('active');
            $('.main-menu').removeClass('activeTop');
            $(".BG-nav .main-menu a").css('color',"white");
            $(".BG-nav .link-color").css("color","#f95d80");
            $(".BG-nav a").hover(function() {
                $(this).css("color","#f95d80")}, function() {
                $(this).css("color","white")
            });
            $(".BG-nav .link-color").hover(function() {
                $(this).css("color","#f95d80")}, function() {
                $(this).css("color","#f95d80")
            });  
        }
        else{
            $('.menu-icon').removeClass('active-res');
            $(".main-menu").removeClass('right');
            if( $(".BG-nav").css('background-color') == "rgb(255, 255, 255)"){
                $(".BG-nav .main-menu a").css('color',"black");
                $(".BG-nav .link-color").css("color","#f95d80");
                $(".BG-nav a").hover(function() {
                    $(this).css("color","#f95d80")}, function() {
                    $(this).css("color","black")
                });
            }
            else{
                $(".BG-nav .main-menu a").css('color',"white");
                $(".BG-nav .link-color").css("color","#f95d80");
                $(".BG-nav a").hover(function() {
                    $(this).css("color","#f95d80")}, function() {
                    $(this).css("color","white")
                });
            }
           
            $(".BG-nav .link-color").hover(function() {
                $(this).css("color","#f95d80")}, function() {
                $(this).css("color","#f95d80")
            });  
        }
    });
/***************************   Menu Icon Click And Action  ******************************/
    $('.menu-icon').click(function(){
        if ($(window).width() <= 991) {
            $(".main-menu").toggleClass('right');
            $('.menu-icon').toggleClass('active-res');
        }
        else{  
            $('.main-menu').toggleClass('activeTop');
            $('.menu-icon').toggleClass('active');
        }
    });
 /***************************   Change Styles When Scroll  ******************************/
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 100){
            $(".BG-nav").addClass("nav-scroll");
            $(".BG-nav span").css('background-color',"black");
            $(".BG-nav img").attr('src',"dist/Pic/logo-black.png");
            if ($(window).width() <= 991) {
                $(".BG-nav .main-menu a").css('color',"white");
                $(".BG-nav .link-color").css("color","#f95d80");
                $(".BG-nav a").hover(function() {
                    $(this).css("color","#f95d80")}, function() {
                    $(this).css("color","white")
                });
                $(".BG-nav .link-color").hover(function() {
                    $(this).css("color","#f95d80")}, function() {
                    $(this).css("color","#f95d80")
                });      
            }
            else{
                $(".BG-nav .main-menu a").css('color',"black");  
                $(".BG-nav .link-color").css("color","#f95d80"); 
                $(".BG-nav a").hover(function() {
                    $(this).css("color","#f95d80")}, function() {
                    $(this).css("color","black")
                });
                $(".BG-nav .link-color").hover(function() {
                    $(this).css("color","#f95d80")}, function() {
                    $(this).css("color","#f95d80")
                }); 
            }
        }
        else{
            $(".BG-nav").removeClass("nav-scroll");
            $(".BG-nav span").css('background-color',"white");
            $(".BG-nav img").attr('src',"dist/Pic/logo-white.png");
            $(".BG-nav a").hover(function() {
                $(this).css("color","#f95d80")}, function() {
                $(this).css("color","white")
            });
            $(".BG-nav .link-color").hover(function() {
                $(this).css("color","#f95d80")}, function() {
                $(this).css("color","#f95d80")
            });  
            if ($(window).width() <= 991) {         
                $(".BG-nav .main-menu a").css('color',"white"); 
                $(".BG-nav .link-color").css("color","#f95d80");                   
            } 
            else {
                $(".BG-nav .main-menu a").css('color',"white");
                $(".BG-nav .link-color").css("color","#f95d80");
            }
        }
     });
 /***************************   Change Link Color For Each Section  ******************************/
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        $('ul li a').each(function(){
            var sectionOffset = $(this.hash).offset().top - 40;
            if (scroll >= sectionOffset){
                $('ul li a').removeClass('link-color');
                $(this).addClass('link-color');
            }
        })
    });
 /***************************    Move To Each Section  ******************************/
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1200);  
        if ($(window).width() <= 991) {
            setTimeout(function(){
                $(".main-menu").removeClass('right');
                $('.menu-icon').removeClass('active-res');
            }, 1500)   
        }
    });
/***************************   Change Link Color For Each Gallery  ******************************/
    $('ul li').click(function() {
        $('ul li').removeClass('active-color');
        $(this).addClass('active-color');
    });
/***************************   Init Typed Plugin  ******************************/
    var typed = new Typed('.typing', {
        strings: [" ", "design studio.", "design lab."],
        typeSpeed: 60,
        backSpeed: 60,
        startDelay: 200,
        backDelay: 1000,     
        loop: true,
        showCursor: true
    });
/***************************   Init Counter Up Plugin  ******************************/
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
/***************************   Init Mix Plugin  ******************************/
    var mixer = mixitup('.gallery');
    var mixer = mixitup('.gallery', {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });
/***************************   Init Popup Plugin  ******************************/
    $('.video-link').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
        fixedContentPos: false,
        midClick: true 
	});
/***************************   Init Slick Slider ******************************/
    $('.col-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        responsive: [
            { 
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            { 
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }          
        ]
    });
});






