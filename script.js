'use strict';

//navbar toggle in mobile

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

const $header = document.querySelector("[data-header]");

const $loginBtn = document.querySelector(".login-form-button");

window.addEventListener("scroll", e => {

    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

//add to favourite button toggle

const $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {

    $toggleBtn.addEventListener("click", () => {

        $toggleBtn.classList.toggle("active");

    });

});

$loginBtn.addEventListener("click", () => {

    alert("You are logged in");

});


