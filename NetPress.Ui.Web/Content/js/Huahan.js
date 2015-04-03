jQuery.noConflict();
(function ($) {

$(function () {
    $("#index-owl-1").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 100,
        paginationSpeed: 600,
        rewindSpeed: 500,
        singleItem: true,
        navigationText: ["<<", ">>"],
        //Pagination
        pagination: true,
        paginationNumbers: false,
        autoPlay: true,
        responsive: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });


    $("#index-owl-2").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 100,
        paginationSpeed: 600,
        rewindSpeed: 500,
        navigationText: ["<<", ">>"],
        //Pagination
        pagination: false,
        paginationNumbers: false,
        autoPlay: true,
        itemsCustom: [
            [0, 2],
            [450, 4],
            [600, 7],
            [700, 9],
            [1000, 10],
            [1200, 10],
            [1400, 10],
            [1600, 10]
        ],

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });


    $("#products-owl-1").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 100,
        paginationSpeed: 600,
        rewindSpeed: 500,
        singleItem: true,
        //Pagination
        pagination: true,
        paginationNumbers: false,
        autoPlay: true,
        responsive: true



    });

    $("#side-bar-close").click(function () {
        $("#side-bar").fadeOut();
    });



    //过渡动画
    $(".block").addClass("animation");

    $('.block').waypoint(function () {       
        $(this).removeClass("animation");
        $(this).addClass("animation-action");
    }, { offset: '70%' });
    //动画 end

    html5Test();


    //$('#pipe-doll').grumble(
	//{
	//    text: '有问题找管娃！',
	//    angle: 270,
	//    distance: 10,
	//    showAfter: 2000,
	//    hideAfter: 3000,
	//    onShow: function () {
	//        var angle = 270, dir = 1;
	//        interval = setInterval(function () {
	//            (angle > 320 ? (dir = -1, angle--) : (angle < 200 ? (dir = 1, angle++) : angle += dir));
	//            $('#pipe-doll').grumble('adjust', { angle: angle, distance: 10 });
	//        }, 25);
	//    }
	//});


    //$('#qrcode').waypoint(function () {        
    //    $('#qrcode').grumble(
	//{
	//    text: '扫我，带走本页！',
	//    angle: 300,
	//    distance: 60,
	//    showAfter: 2000,
	//    hideAfter: 3000	  
	//});
    //}, { offset: '100%' });

    $(".btn-back").click(function () {        
        window.history.back();

    });

});

function html5Test() {    
    if (!window.applicationCache) {
        $("#browser-detect").removeClass("hidden");
        $("#browser-detect").hide();
        $("#browser-detect").fadeIn();
        $("#browser-detect").oneTime(20000, function () {
            $("#browser-detect").fadeOut(1000);
        });        
    } 
}


})(jQuery);