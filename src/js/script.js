function  pageLoaded() {
const menuBtn = document.querySelector(".menu__button");
const closeMenuButton= document.querySelector(".menu__mobile-close");
const menuMobile=document.querySelector(".menu__mobile");
const ulwrap=document.querySelector(".ulwrap");

menuBtn.addEventListener("click", menuOpen );

closeMenuButton.addEventListener("click", menuClose);

function menuOpen() {
    menuMobile.classList.add("is-active");
    ulwrap.classList.add("is-active");
}
function menuClose() {
    menuMobile.classList.remove("is-active");
    ulwrap.classList.remove("is-active");
}


}

document.addEventListener("DOMContentLoaded", pageLoaded);

