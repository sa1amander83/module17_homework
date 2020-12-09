function  pageLoaded() {
    const menuBtn = document.querySelector(".menu__button");
    const closeMenuButton = document.querySelector(".menu__mobile-close");
    const menuMobile = document.querySelector(".menu__mobile");
    const ulwrap = document.querySelector(".ulwrap");

    menuBtn.addEventListener("click", menuOpen);

    closeMenuButton.addEventListener("click", menuClose);

    function menuOpen() {
        menuMobile.classList.add("is-active");
        ulwrap.classList.add("is-active");
    }

    function menuClose() {
        menuMobile.classList.remove("is-active");
        ulwrap.classList.remove("is-active");
    }


    const enterBtn = document.querySelector(".login-link");
    const formClose = document.querySelector(".modal__form-close");
    const form = document.querySelector(".modal__form");


    enterBtn.addEventListener("click", openForm);
    formClose.addEventListener("click", closeForm);


    function openForm() {
        form.classList.add("is-active");
        form.classList.remove("is-closed");
    }

    function closeForm() {
        form.classList.remove("is-active");
        form.classList.add("is-closed");
    }
}











document.addEventListener("DOMContentLoaded", pageLoaded);

