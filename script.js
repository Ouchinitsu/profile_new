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
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
scrollTopBtn.onclick = scrollToTop;
//#endregion