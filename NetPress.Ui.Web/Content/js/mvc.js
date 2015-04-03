


avalon.define({
    $id: "header-warp",
    url: "header",
    name: "页头"

});

avalon.define({
    $id: "footer-warp",
    url: "footer",
    name: "页尾"

});



//index.html
var _temp_object = [
        { img: "/content/images/index-section-14-3.jpg", title: "购买家具建材需谨慎！13人付300万元后经销商消失", url: "http://www.epipe.cn/news/news03.html" },
        { img: "/content/images/index-section-14-4.jpg", title: "慎选给水管材 杜绝饮水污染", url: "http://www.epipe.cn/news/safe6.html" },
        { img: "/content/images/index-section-14-5.jpg", title: "蒙五金卫浴10月31日深圳特惠团购", url: "http://www.epipe.cn/news/wu2.html" }
];

    //JS对象转JSON
var _temp_json = JSON.stringify(_temp_object);
console.log("_temp_json:" + _temp_json);

    //JSON转JS对象
var json_index_news_1 = $.parseJSON(_temp_json);
avalon.define("index-news-1", function (vm) {
    vm.data = json_index_news_1    
})


//index.html end

avalon.scan();