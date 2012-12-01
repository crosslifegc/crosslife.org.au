$(window).load(function() {
    var selected = undefined;
    $("div#calls-to-action a").bind("click",function(){
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
        return false;
    });
});
