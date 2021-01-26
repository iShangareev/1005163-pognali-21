var menuOn = document.querySelector(".navbar__menu-button");
var menu = document.querySelector(".menu-box");
var menuOff = menu.querySelector(".navbar-menu__close");
var noJs = document.querySelector(".menu-box_no-js");

//mobile menu no js

noJs.classList.remove("menu-box_no-js");

// mobile-menu

menuOn.onclick = function () {
  menu.classList.add("menu-box_open");
};

menuOff.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("menu-box_open");
});
