$(window).load(function() {

    // // binding call to action clicking
    // var selected = undefined;
    // $("div#call-to-action a").bind("click",function(){
    //     if ($(this).attr("href")==selected) {
    //          $("div#call-to-action-detail").slideToggle();
    //     } else {
    //         selected = $(this).attr("href");
    //         $("div#call-to-action-detail div.cta-detail-content").hide();
    //         if($("div#call-to-action-detail").is(":visible")) {
    //             $("div#call-to-action-detail div" + selected).fadeIn();
    //         } else {
    //             $("div#call-to-action-detail").slideToggle("fast", function() {
    //                 $("div#call-to-action-detail div" + selected).fadeIn();
    //             });
    //         }

    //         // set the currently selected item.
    //         $("div#call-to-action-detail").attr('data-selected-cta', selected.replace("#", ""));
    //     }

    //     // scroll to top of cta's
    //     var theId = "#call-to-action";
    //     var theScrollTop = ($(theId).offset().top) - 10;
    //     $('html,body').animate({ scrollTop: theScrollTop }, 'normal');

    //     return false;
    // });
   
    // top nav
    // $("div#branding-contact nav a").bind('click', function(){
    //     var theId = $(this).attr('href');
    //     var theScrollTop = ($(theId).offset().top) - 10;
    //     $('html,body').animate({ scrollTop: theScrollTop }, 'normal');
    //     return false;
    // });

    // scroll to top
    //$("body").UItoTop({ easingType: 'easeOutQuart' });

    $('#main').waypoint(function(direction) {
        if (direction == "up")
        {
            $("nav#main_nav").removeClass("dark");
        }
        else if (direction == "down")
        {
            $("nav#main_nav").addClass("dark");
        }
    });

    // setup the mobile menu
    setupMobileMenu();

});

// setup the mobile menu to display at appropriate mobile sizes
function setupMobileMenu()
{
  // setup the jpanel menu
  var jPM = $.jPanelMenu({
    menu: 'header nav',
    direction: 'right'
  });

  // create the jrespond breakpoints
  var jRes = jRespond([
    {
      label: 'small',
      enter: 0,
      exit: 767
    },{
      label: 'large',
      enter: 768,
      exit: 10000
    }
  ]);

  // bind the jrespond functionality
  jRes.addFunc({
    breakpoint: 'small',
    enter: function() {
      jPM.on(); // turn on the jrespond menu when ready
    },
    exit: function() {
      jPM.off();
    }
  });
}