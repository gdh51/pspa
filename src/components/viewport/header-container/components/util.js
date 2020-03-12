export function toggleFade(el, cls, time) {
    let display = el.style.display
    let originDisplay = display === 'none' || !display ? 'block' : display;

    return function (isShow, direct) {
        if (isShow) {
            //display:none特殊情况
            //添加类要实现动画，必须添加setTime
            el.style.display = originDisplay;
            setTimeout(() => {
                el.style.opacity = 1;
                el.classList.add(cls);
            }, 0);
        } else {

            //去掉类时要先留过渡时间执行完动画
            el.classList.remove(cls);
            el.style.opacity = 0;

            // 有时候我们需要直接的关闭，不需要动画
            if (direct) {
               return el.style.display = 'none';
            }

            setTimeout(() => {
                el.style.display = 'none';
            }, time * 1000);
        }
    }
}
