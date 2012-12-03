$(window).load(function() {

    // binding call to action clicking
    var selected = undefined;
    $("div#call-to-action a").bind("click",function(){
        if ($(this).attr("href")==selected) {
             $("div#call-to-action-detail").slideToggle();
        } else {
            selected = $(this).attr("href");
            $("div#call-to-action-detail div.cta-detail-content").hide();
            if($("div#call-to-action-detail").is(":visible")) {
                $("div#call-to-action-detail div" + selected).fadeIn();
            } else {
                $("div#call-to-action-detail").slideToggle("fast", function() {
                    $("div#call-to-action-detail div" + selected).fadeIn();
                });
            }
        }

        // scroll to top of cta's
        var theId = "#call-to-action";
        var theScrollTop = ($(theId).offset().top) - 10;
        $('html,body').animate({ scrollTop: theScrollTop }, 'normal');

        return false;
    });
   
    // top nav
    $("div#branding-contact nav a").bind('click', function(){
        var theId = $(this).attr('href');
        var theScrollTop = ($(theId).offset().top) - 10;
        $('html,body').animate({ scrollTop: theScrollTop }, 'normal');
        return false;
    });

    // scroll to top
    $("body").UItoTop({ easingType: 'easeOutQuart' });
});