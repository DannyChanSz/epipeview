$(function () {
    
    $("#index-owl-1").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 100,
        paginationSpeed: 600,
        rewindSpeed: 500,
        singleItem: true,
        navigationText: ["<<", ">>"],
        //Pagination
        pagination: false,
        paginationNumbers: false,
        autoPlay:true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    $("#index-owl-2").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        rewindSpeed:500,
        navigationText: ["<<", ">>"],
        //Pagination
        pagination: false,
        paginationNumbers: false,
        items: 4,
        autoPlay:true
       
    });

    $("#index-owl-3").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        navigationText: ["<<", ">>"],
        //Pagination
        pagination: true,
        paginationNumbers: false,
        items: 4,
        autoPlay: true

    });
  
    $("#gallery-owl-1").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        navigationText: ["<<", ">>"],
        //Pagination
        pagination: true,
        paginationNumbers: false,
        items: 1,

    });
   
   
   
    $("#gallery-1").justifiedGallery({
        rowHeight: 200,
        lastRow: 'hide',
        sizeRangeSuffixes : {
            'lt100': '', 
            'lt240': '', 
            'lt320': '', 
            'lt500': '', 
            'lt640': '', 
            'lt1024': ''
        }
    }).on('jg.complete', function () {
        $(this).find('a').colorbox({
            maxWidth: '80%',
            maxHeight: '80%',
            opacity: 0.8,
            transition: 'elastic',
            current: ''
        });
    });
    addSomeImages("gallery-1", 20);

    $("#gallery-1-btn").click(function () {
        addSomeImages("gallery-1",10);        
        $('#gallery-1').justifiedGallery('norewind'); //callback
    });


    $("#gallery-2").justifiedGallery({
        rowHeight: 200,
        lastRow: 'hide',
        sizeRangeSuffixes: {
            'lt100': '',
            'lt240': '',
            'lt320': '',
            'lt500': '',
            'lt640': '',
            'lt1024': ''
        }
    }).on('jg.complete', function () {
        $(this).find('a').colorbox({
            maxWidth: '80%',
            maxHeight: '80%',
            opacity: 0.8,
            transition: 'elastic',
            current: ''
        });
    });
    addSomeImages("gallery-2", 20);

    $("#gallery-2-btn").click(function () {
        addSomeImages("gallery-2", 10);
        $('#gallery-2').justifiedGallery('norewind'); //callback
    });



    $("#gallery-3").justifiedGallery({
        rowHeight: 200,
        lastRow: 'hide',
        sizeRangeSuffixes: {
            'lt100': '',
            'lt240': '',
            'lt320': '',
            'lt500': '',
            'lt640': '',
            'lt1024': ''
        }
    }).on('jg.complete', function () {
        $(this).find('a').colorbox({
            maxWidth: '80%',
            maxHeight: '80%',
            opacity: 0.8,
            transition: 'elastic',
            current: ''
        });
    });
    addSomeImages("gallery-3", 20);

    $("#gallery-3-btn").click(function () {
        addSomeImages("gallery-3", 10);
        $('#gallery-3').justifiedGallery('norewind'); //callback
    });


    $("#gallery-4").justifiedGallery({
        rowHeight: 200,
        lastRow: 'hide',
        sizeRangeSuffixes: {
            'lt100': '',
            'lt240': '',
            'lt320': '',
            'lt500': '',
            'lt640': '',
            'lt1024': ''
        }
    }).on('jg.complete', function () {
        $(this).find('a').colorbox({
            maxWidth: '80%',
            maxHeight: '80%',
            opacity: 0.8,
            transition: 'elastic',
            current: ''
        });
    });
    addSomeImages("gallery-4", 20);

    $("#gallery-4-btn").click(function () {
        addSomeImages("gallery-4", 10);
        $('#gallery-4').justifiedGallery('norewind'); //callback
    });

    CommentEvent();


    //dropdownMenu();
    
    //导航鼠标滑过改点击
    $(".dropdown-toggle").mouseover(function () {
        $(this).click();
    })
    
  
});

function addSomeImages(gallery,limit) {
    for (var i = 0; i < limit; i++) {
        $('#' + gallery).append('<a class="item" title="kief kiedv  oimnw pmdie" href="http://lorempixel.com/640/480/'+i+'">' +
            '<img src="http://lorempixel.com/' +
                Math.ceil(Math.random() * 250 + 150) +
                '/' +
                Math.ceil(Math.random() * 250 + 150) +
                '" />' +
        '</a>');
        $('#' + gallery).justifiedGallery('norewind');
    }
}

function dropdownMenu() {
    $(".header-nav li").hover(
	function () {	    
	    $(this).children("ul").slideDown('fast').show();
	},
	function () {
	    $(this).children("ul").slideUp('slow');
	});
}


//垂直水平都居中
function vhCenter(obj) {
    $(obj).css({
        position: "absolute",
        left: ($(window).width() - $(obj).outerWidth()) / 2,
        top: ($(window).height() - $(obj).outerHeight()) / 2
    });
}

//垂直居中
function vCenter(obj) {    
    $(obj).css({
        position: "absolute",
        top: ($(obj).parent().innerHeight() - $(obj).outerHeight()) / 2
    });
}

//屏幕居中
function sCenter(obj) {
    $(obj).css({
        position: "absolute",        
        top: ($(window).height() - $(obj).outerHeight()) / 2
    });
}

//模态框垂直居中
function modalCenter() {
    $(".modal").on('show.bs.modal', function () {
        $(".modal").find('.modal-content').css({
            'bottom': '1000px'
        });
    });
    $(".modal").on('shown.bs.modal', function () {
        $(this).find('.modal-content').animate({ top: ($(window).height() - $(this).find('.modal-content').height()) / 2 }, 1000);
        });
    
    
}

//scrollTo
function goto(id) {
    $.scrollTo("#" + id, 800);
}

//百度地图
function baiduMap(lat,lng,zoom) {
    var map = new BMap.Map("map-container");          // 创建地图实例  
    var point = new BMap.Point(lat, lng);  // 创建点坐标  
    map.centerAndZoom(point, zoom);                 // 初始化地图，设置中心点坐标和地图级别  
    var opts = { type: BMAP_NAVIGATION_CONTROL_ZOOM }
    map.addControl(new BMap.NavigationControl(opts));

   
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
}




function CommentEvent() {

    $('#commentSubmit').click(function () {
        $.ajax({
            type: "POST",
            url: "/Comment/Add",
            data: { UserName: $("#UserName").val(), Content: $("#Content").val(), DetailsId: $("#DetailsId").val(), Category: $("#Category").val() },
        dataType: "json",
        beforeSend: function () {
            if ($("#Content").val() == "" || $("#UserName").val() == "") {
                $('#commentMsg').text("请填写完整内容！");
                return false;
            }
            $('#commentSubmit').addClass("disabled");
        },
        success: function (data) {
            $('#Content').val("");   //清空resText里面的所有内容
            $('#commentMsg').text(data.msg);                    
        },
        complete: function () {
            $('#commentSubmit').removeClass("disabled");
        }
    });
});
}


