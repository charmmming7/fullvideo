 $(document).ready(function() {
            

    $('#fullpage').fullpage({
        //Navigation
        //menu: '#menu',
        //anchors: ['home', 'video', 'bella', 'vanish', 'instagram'],
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,

        //paddingTop:'80px',

        //Scrolling 
        css3: true,
        easingcss3: 'cubic-bezier(0.625, 0.025, 0.495, 0.915)',


        //Accessibility
        keyboardScrolling: true,

    });



    $(window).load(function(){
        setTimeout(function(){
            $(".section1").addClass("loaded");    
        }, 500);

       $('#status').fadeOut();
       $('#preloader').delay(350).fadeOut('slow');
       $('body').delay(350).css({'overflow':'visible'});

    });

    //BELLA 마우스오버 
    $('#gnb > li').eq(1).on('mouseover', function(){
        //$(this).addClass('on');
        $('.sub-menu').show();
        $('.depth2-sub-menu').show();
    }).on('mouseleave', function(){
        //$(this).removeClass('on');
        $('.sub-menu').hide(); 
        $('.depth2-sub-menu').hide(); 
    });
     
     
    $('#gnb .sub-menu li:last-child').on('mouseover', function(){
        //$(this).addClass('on');
        $('.depth2-sub-menu').show();
    }).on('mouseleave', function(){
        //$(this).removeClass('on');
       $('.depth2-sub-menu').hide(); 
    });
     
    $('.depth2-sub-menu li').on('mouseover', function(){
        //$(this).addClass('on');
    }).on('mouseleave', function(){
        //$(this).removeClass('on');
    });

 }); //document.ready
