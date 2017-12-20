/**
 * rem基准计算和限宽
 * @return {[type]} [description]
 */
(function() {
    function refreshRem() {
        document.documentElement.style.fontSize = (document.documentElement.clientWidth > 720 ? 720 : document.documentElement.clientWidth) / 18 + "px"
    }
    var tid = null;
    window.addEventListener("resize", function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 0);
    }, false);
    refreshRem();
    // hack系统改变字体大小后的根字体大小
    document.addEventListener("DOMContentLoaded", function() {
        // 计算规则设置的根字体大小
        var setFs = parseFloat(document.documentElement.style.fontSize);
        // 实际渲染后的根字体大小，受手机系统改变字体大小影响
        var actFs = parseFloat(window.getComputedStyle(document.documentElement, null).fontSize);
        if (setFs !== 0 && actFs !== 0 && actFs / setFs !== 1) {
            var scaleFs = setFs / (actFs / setFs);
            console.log("setFs:" + setFs + ";actFs:" + actFs + ";scaleFs:" + scaleFs);
            // console.log("scale:" + (actFs/setFs));
            document.documentElement.style.fontSize = scaleFs + "px";
        }
    }, false);
})(window);
