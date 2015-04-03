function SuitedImage() {
    var screenHeight = $(window).height();
    var distanceToShow = screenHeight + 200;

    $(".SuitedImage").each(function (ind, ele) {
        var parents = $(ele).parents(":hidden");
        $(parents).each(function (pind, pele) {
            $(pele).addClass("SuitedImageParent");
        });
        

        //设定可以取得正确大小的新参数
        $(this).addClass("SuitedImageImg");
        var width = $(ele).width();
        var height = $(ele).height();
        var top = $(this).offset().top;
        $(this).attr("data-img-top",top);//位置信息存入
        var quality = 75;//图片质量控制 默认75
        if ($(this).attr('data-quality') != ""&typeof($(this).attr('data-quality')!="undefined"))
        { quality = $(this).attr('data-quality');}
        //加入未加载标志
        $(this).addClass("unloaded");


        //还原改掉的参数

        $(parents).each(function (pind, pele) {
            $(pele).removeClass("SuitedImageParent");
        });
        $(this).removeClass("SuitedImageImg");

        //生成图片地址
        var src = "/Ashx/Thumbnail.ashx?&cut=" + $(ele).attr("data-src-cut") + "&width=" + width + "&height=" + height + "&quality=" + quality + "&src=" + $(ele).attr("data-src");
        //放到 data-lazy-src 里
        $(this).attr("data-lazy-src", src);

        //加载第一屏
        if (top < distanceToShow)
        {            
            loadSuitedImage($(this));
        }
        


    });

    //滚动加载
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop()+screenHeight;
        $(".SuitedImage.unloaded").each(function (ind, ele) {
            if ($(ele).attr("data-img-top") < scrollTop) {                
                loadSuitedImage($(ele));
            }
        });
    });
}

//加载函数
function loadSuitedImage(obj) {
    var src = $(obj).attr("data-lazy-src");
    if ($(obj).is('img')) {
            $(obj).hide();
            $(obj).attr("src", src);
            $(obj).load(function () { $(obj).fadeIn(1000); });             
            
        }
        else { $(obj).css("background-image", "url('" + src + "')"); }
        $(obj).removeClass("unloaded");
        $(obj).removeAttr("data-lazy-src");
    }