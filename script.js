// nav button
//#region

function navMouseOn(event) {
    const container = event.currentTarget;
    event.target.style.width = '300px';
    event.target.style.borderRadius = '15px';
    event.target.style.display = 'none';
}

let nav_home_icon = document.getElementById('nav_home_icon');
nav_home_icon.onmouseover = navMouseOn;



//#endregion