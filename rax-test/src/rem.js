/**
 * rem布局：以100px为基准，进行换算
 * @param  {[type]} doc [description]
 * @param  {[type]} win [description]
 * @return {[type]}     [description]
 */
(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(clientWidth >= 640){
            docEl.style.fontSize = '100px';
        }else{
            docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
        }
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);