/*
评星控件
by DannyChan
2014-11-27

调用方法： $(".dannystar").dannyStar({toinput:".star-value"});
toinput:接收星级值的input控件

*/

(function ($) {

    $.fn.dannyStar = function (options) {
      
        var container = $(this);
        var input = options.toinput;

        $(function () {            
            container.append("<ul><li></li><li></li><li></li><li></li><li></li></ul>");
             
            var target = container.find("li");

            target.hover(function () {
                var index = $(this).index();
                for (i = 0; i < index + 1; i++) {
                    target.eq(i).addClass("active");
                }

                //$(this).addClass("active");
            }, function () {
                target.removeClass("active");
            });

            target.click(function () {
                var index = $(this).index();
                for (i = 0; i < 5; i++) {
                    if (i < index + 1) {
                        target.eq(i).addClass("selected");
                    }
                    else {
                        target.eq(i).removeClass("selected");
                    }
                }

                $(input).val(index + 1);
            });
        });


    }
})(jQuery);