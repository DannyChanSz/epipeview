
var regexEnum =
{
    //正整数
    positiveInt: "^[0-9]*[1-9][0-9]*$",

    //金额
    money: "^[0-9]+([\.]{0,1}[0-9]{1,2})?$"

    ////折扣
    //discount: "^[0-9]+([\.]{0,1}[0-9]{1})?$"
};



//正则
function RegExpHelper() {}


RegExpHelper.trim = function (s) {
    s += "";
    return s.replace(/^\s+|\s+$/g, '');
};

//正整数
RegExpHelper.isPositiveInt = function (s) {
   
    return new RegExp(/^(0|[1-9][0-9]*)$/).test(this.trim(s));
}

//钱
RegExpHelper.isMoney = function (s) {

    return new RegExp(regexEnum.money).test(this.trim(s));
}

////折扣
//RegExpHelper.isDiscount = function (s) {

//    return new RegExp(regexEnum.discount).test(this.trim(s));
//}