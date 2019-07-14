$(document).ready(function() {

    

    $('select').niceSelect();

    // $(".nice-select .list").perfectScrollbar();
    
    //script for showing alert and message updated content
    //remove this code to customize the content
    $(window).ready(function(){
        // js for alert
        setInterval(function(){ 
            $('.site-alert, .site-wrapper, .dash-header').addClass("show-alert")
        }, 1000);
        setInterval(function(){ 
            $('.site-alert, .site-wrapper, .dash-header').addClass("hide-alert")
        }, 4000);
        // js for updated message
        setInterval(function(){ 
            $('.update-message, .site-wrapper, .dash-header').addClass("show-alert")
        }, 2000);
        setInterval(function(){ 
            $('.update-message, .site-wrapper, .dash-header').addClass("hide-alert")
        }, 4000);
    });

    // close-btn
    $('.close-btn').on('click', function(){
        $('.off-canvas-wrapper').toggleClass('active');
    });

    // Scroll Top Smooth Animation
    $('#scroll').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    

    //script for showing alert and message updated content 2
    $(".update-alert-trigger").click(function(){

        // $(".update-message-2").addClass("alert-show");

        setTimeout(function(){ 
            $(".update-message-2").css({
                // "opacity": 1,
                "top": "40px",
                "transition": "top 0.4s"
            });
        }, 0);

        setTimeout(function(){ 
            $(".update-message-2").css({
                "opacity": 0,
                "transition": "opacity 0.4s"
            });
        }, 1600);

        setTimeout(function(){ 
            $(".update-message-2").css({
                "opacity": 1,
                "top": "-200px"
            });
        }, 2000);

    });
    

    $(".update-alert-close").click(function(){
        setTimeout(function(){ 
            $(".update-message-2").css({
                "opacity": 0,
                "transition": "opacity 0.4s"
            });
        }, 0);

        setTimeout(function(){ 
            $(".update-message-2").css({
                "opacity": 1,
                "top": "-200px"
            });
        }, 200);
    });

    // $(".off-canvas-toggler").on('click', function () {
    // 	$(".site-wrapper").removeClass('sidebar-full');
    // });



    /*-----------------------
      --> Off Canvas Menu
      -------------------------*/
    /*-----------------------
		--> Off Canvas Menu
		-------------------------*/
    /*Variables*/
    var $offCanvasNav = $('.off-canvas-nav'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().append('<span class="menu-expand"><i class="mdi mdi-chevron-down"></i></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu|menu-item)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });

    // Off Canvas Open close
    $(".off-canvas-toggler").on('click', function() {
        $(".site-wrapper").toggleClass('sidebar-full');
        if ($('.site-wrapper').hasClass('sidebar-full')) {
            $('.off-activation').removeClass('off-canvas-nav').addClass('icon-nav');
        } else {
            $('.off-activation').removeClass('icon-nav').addClass('off-canvas-nav');
        }
    });

});

jQuery(window).load(function(){


    $(".nice-select ul").perfectScrollbar();



});