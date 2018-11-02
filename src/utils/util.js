/**
 * 功能： 截取小数位
 * @param money  金额
 * @param num    保留的小数位数
 * @param hasDot 是否有逗号
 * @returns {string}  处理后金额
 */
function fmoney(money, num, hasDot) {
    var _money = money;
    num = typeof num === "undefined" ? 2 : num;
    hasDot = typeof hasDot === "undefined" ? true : hasDot;
    if (isNaN(_money)) {//不是数字 直接返回
        console.log("is not a num");
        return _money;
    }
    _money += "";// 转化为字符串
    hasDot = hasDot && _money.replace(/\.\d*/, '').length > 3;//判断是否要自动加千分位
    var index = _money.indexOf("."),//找到小数点
        i = 0;
    if (index === -1) {
        index = _money.length;
        _money += '.';
    }
    while (i++ < num) _money += "0";//补零
    _money = _money.substring(0, index) + _money.substr(index, num + 1);//此时包含小数点
    _money = num === 0 ? +_money : _money;//得到截取后的字符串
    return hasDot ? addDot(_money) : _money;
}

/** 格式化日期
 *
 * @param inputTime （需要格式化的日期）
 * @param time  （是否具体到时分秒）
 * @returns {string}
 */
function formatDateTime(inputTime, time) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    if (time === false) {
        return y + '-' + m + '-' + d;
    } else {
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    }
}

/**
 * 为金额添加逗号；功能:1000->1,000
 * @param money
 * @returns {string}
 */
function addDot(money) {
    //先找到小数点
    var start = money.indexOf(".");
    var result = "", j = 0;
    for (var i = money.length - 1; i >= 0; i--) {
        if (i >= start) {
            result = money[i] + result;
        }
        else {
            if (j >= 3) {
                result = money[i] + result;
                j = 1;
            }
            else {
                result = money[i] + result;
                j++;
            }
        }
    }
    return result;
}

export {fmoney, formatDateTime};