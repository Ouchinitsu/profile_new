// nav button
//#region
function navMouseOn(event) {
    const container = event.currentTarget;
    //可以获取父元素，然后再提取下层的子元素
    // console.log(container);
    const img = container.querySelector('img');
    const span = container.querySelector('span');
    container.style.width = '250px';
    container.style.borderRadius = '15px';
    span.style.display = 'block';
    img.style.display = 'none';
    // container.style.transition = '';
    container.style.transition = 'width 0.3s ease';
    container.style.borderBottom = '3px groove black';
    container.style.backgroundColor = 'rgba(244, 244, 238, 0.884)';
}

function navMouseOut(event) {
    const container = event.currentTarget;
    //可以获取父元素，然后再提取下层的子元素
    // console.log(container);
    const img = container.querySelector('img');
    const span = container.querySelector('span');
    // console.log(img, span);
    // container.style.width = '250px';
    // container.style.borderRadius = '15px';
    span.style.display = 'none';
    img.style.display = 'block';
    container.style.width = '53.78px';
    container.style.transition = 'width 0.1 ease';
    container.style.borderBottom = '';
    container.style.backgroundColor = 'rgba(244, 244, 238, 0)';
}

let nav_home_icon = document.getElementById('nav_home_icon');
nav_home_icon.onmouseover = navMouseOn;
nav_home_icon.onmouseout = navMouseOut;
let nav_work_icon = document.getElementById('nav_work_icon');
nav_work_icon.onmouseover = navMouseOn;
nav_work_icon.onmouseout = navMouseOut;
let nav_interest_icon = document.getElementById('nav_interest_icon');
nav_interest_icon.onmouseover = navMouseOn;
nav_interest_icon.onmouseout = navMouseOut;
//#endregion

//#region dropdown list

//#endregion

//#region sns qrcode
function snsOnMouseOver(event) {
    const sns_container = event.currentTarget;
    const sns_img = sns_container.querySelector('.header_popup_qrcode');
    sns_img.style.display = 'block';
}

function snsOnMouseOut(event) {
    const sns_container = event.currentTarget;
    const sns_img = sns_container.querySelector('.header_popup_qrcode');
    sns_img.style.display = 'none';
}

let ins_trigger = document.getElementById('ins_trigger');
let twitter_trigger = document.getElementById('twitter_trigger');
let gmail_trigger = document.getElementById('gmail_trigger');
ins_trigger.onmouseover = snsOnMouseOver;
ins_trigger.onmouseout = snsOnMouseOut;
twitter_trigger.onmouseover = snsOnMouseOver;
twitter_trigger.onmouseout = snsOnMouseOut;
gmail_trigger.onmouseover = snsOnMouseOver;
gmail_trigger.onmouseout = snsOnMouseOut;

let sns_icons = document.getElementsByClassName('header_head_container_right_icon');

Array.from(sns_icons).forEach(function (sns_icon) {
    sns_icon.addEventListener('mouseover', function () {
        sns_icon.style.borderBottom = '4px solid black';
    });
    sns_icon.addEventListener('mouseout', function () {
        sns_icon.style.borderBottom = '';
    });
});
//#endregion

//#region pop
window.onscroll = function () { scrollFunction() };
let scrollTopBtn = document.getElementById("top");
let scrollBottomBtn = document.getElementById('bottom');
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollTopBtn.style.display = 'block';
        scrollBottomBtn.style.display = 'none';
        //条件是超过400像素，两个分别是移动距离和元素的移动距离，一般是一起用
    } else {
        setTimeout(() => {
            scrollTopBtn.style.display = "none";
            scrollBottomBtn.style.display = "block";
        }, 100);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
scrollTopBtn.onclick = scrollToTop;

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
scrollBottomBtn.onclick = scrollToBottom;
//#endregion

//#region popdownlist
let list = document.getElementById('popdown_list');
let list_btn = document.getElementById('header_head_container_left_button');
let list_btn_line1 = document.getElementById('btn_line1');
let list_btn_line2 = document.getElementById('btn_line2');
let list_btn_line3 = document.getElementById('btn_line3');
let list_opacity = window.getComputedStyle(list);
list_btn.onclick = popdownFunction;
list_btn_line1.onclick = popdownFunction;
list_btn_line2.onclick = popdownFunction;
list_btn_line3.onclick = popdownFunction;

//memo 无法直接获取在css中设置的值需要用window方法来获取
function popdownFunction() {
    if (list.style.display == 'none') {
        setTimeout(() => {
            list.style.display = 'flex';
            document.addEventListener('click', listEventListener);
            console.log('111');
        }, 100);
    } else {
        list.style.display = 'none';
        console.log('222');
    }

    function listEventListener(event) {
        if (event.target.id != 'header_head_container_left_button' && event.target.classList != 'btn_line') {
            // console.log(event.target.id, '1111', event.target.classList);
            list.style.display = 'none';
            console.log('3333');
            // 移除事件监听器
            document.removeEventListener('click', listEventListener);
        }
    }

    // 只有在 list 显示的时候才添加事件监听器
    if (list.style.display === 'flex') {
        document.addEventListener('click', listEventListener);
    }
}
//#endregion