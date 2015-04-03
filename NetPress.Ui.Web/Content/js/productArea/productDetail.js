

    /*---productDetail.js----*/

    $(document).ready(function () {
        $(".rdProperty").each(function () {//radio标签无法刷新
            this.checked = false;
        });

        //$("#btnCart").click(function () { LoadPrice(); });//测试
        LoadPrice();

        $("#btnOrder").click(function () {
            PostOrder();//下单
        });

        $("#btnCart").click(function () {
            PostCart();//添加购物车
        });

        //输入验证
        $("#txtProductNum").keyup(function () {
            var number = $(this).val();
            if (!RegExpHelper.isPositiveInt(number)) {//异常输入 非正整数
                number = 1;
            }
            else if(parseInt(number)<1)
            {
                number = 1;
            }
            $(this).val(number);
        });

        //初始禁用按钮
        IsDisableButton(false);
    });

//加载价格
function LoadPrice() {
    var productId = $("#hdProductId").val();

    $.ajax({
        type: 'post',
        url: "/Product/GetPrice",
        data: { "productId": productId },
        success: function (result) {
            if (result.status == "success") {
                if (result.isExistPrice == "true") {
                    var priceList = result.price;    //json价格列表
                    //alert(priceList[0].Price);
                    //绑定决定价格属性选项
                    BindPropertyPrice(priceList);
                }
            }
            else if (result.status == "error") {
                $("#pErrorValue").html(result.msg);
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#pErrorValue").html("ajaxError");
        }
    });


}

//启禁用按钮
function IsDisableButton(isTrue)
{
    if (isTrue)
    {
        $("#btnOrder").removeAttr("disabled")
        $("#btnCart").removeAttr("disabled");
    }
    else
    {
        $("#btnOrder").attr("disabled", "disabled");
        $("#btnCart").attr("disabled", "disabled");
    }
}



//绑定价格选项
function BindPropertyPrice(pList) {
    //绑定选项价格
    $(".rdProperty").each(function () {
        $(this).click(function () {
            GetPropertyGroupPrice(pList);
        })
    });


    ////初始选项
    //$(".dvPropertyGroupClass").each(function () {
    //    var firstDoc = $(this).find(".rdProperty").first();
    //    firstDoc.click();
    //});
}

//绑定所属价格
function GetPropertyGroupPrice(priceList) {
    var propertyIdArr = ChooseProperty();
    var length = propertyIdArr.length;
    var expadCount = $("#hdExpandCount").val();

    var isExistPrice = false;//是否匹配出价格
    //存在价格
    for (var i = 0; i < priceList.length; i++) {
        var sameIndex = 0;
        for (var n = 0; n < length; n++) {
            var same = $.inArray(propertyIdArr[n], priceList[i].Properties);
            if (same != -1) {
                sameIndex++;
            }
        }

        if (sameIndex == expadCount) {
            var strPrice = parseFloat(priceList[i].Price).toFixed("2");
            $("#dvPrice").html(strPrice);//更新选项价格
            isExistPrice = true;
        }
    }

    if (!isExistPrice && length == expadCount)
    {
        $("#dvPrice").html("该属性组合不存在");
    }

    IsDisableButton(isExistPrice);//启禁用按钮
}

//选择的属性
function ChooseProperty() {
    var propertyIdArr = new Array();
    var index = 0;
    //所选属性
    $(".rdProperty").each(function () {
        var isChecked = this.checked;
        if (isChecked) {
            propertyIdArr[index] = $(this).val();
            index++;
        }
    });
    return propertyIdArr;
}


//提交订单
function PostOrder() {
    var productId = $("#hdProductId").val();
    var productNum = $("#txtProductNum").val();
    var propertyIdArr = ChooseProperty();//获取所选择属性

    //下单页面
    $.ajax({
        type: 'post',
        url: "/ShoppingArea/Order/AddOrder",
        data: { "productId": productId, "propertyArr": propertyIdArr, "productNum": productNum },
        success: function (result) {
            if (result.status == "success") {
                //alert("跳转个人中心订单页url");
                var orderId = result.orderId;
                location.href = "/ShoppingArea/Order/ConfirmOrder/" + orderId;
            }
            else if (result.status == "error") {
                alert(result.msg);
            }
        },
        error: function () {
            alert("post error");
        }
    });
}

//加入购物车
function PostCart() {
    var productId = $("#hdProductId").val();
    var productNum = $("#txtProductNum").val();
    var propertyIdArr = ChooseProperty();//获取所选择属性

    //下单页面
    $.ajax({
        type: 'post',
        url: "/ShoppingArea/Cart/AddCart",
        data: { "productId": productId, "propertyArr": propertyIdArr, "productNum": productNum },
        success: function (result) {
            if (result.status == "success") {
                //alert("跳转个人中心购物车url");
                location.href = "/ShoppingArea/Cart/CustomerCart"
            }
            else if (result.status == "error") {
                alert(result.msg);
            }
        },
        error: function () {
            alert("post error");
        }
    });

}


