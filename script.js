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