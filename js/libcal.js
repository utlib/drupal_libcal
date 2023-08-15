(function ($, Drupal) {
    $(".libcal-list a").click(function(){
        $(".libcal-cal").show();
        $(".libcal-list").hide();
        $(".workshops").hide();
    });

    $(".libcal-cal-list a").click(function(){
        $(".libcal-cal").hide();
        $(".libcal-list").show();
        $(".workshops").show();

    });
})(jQuery, Drupal);
