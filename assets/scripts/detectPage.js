document.addEventListener("DOMContentLoaded", function(){
    let pagePathArr = document.location.pathname.split('/');
    let pageName = pagePathArr[pagePathArr.length - 1].replace('.html', '');
    let pageNavItem = document.getElementById(pageName);
    pageNavItem.classList.add("active");
});