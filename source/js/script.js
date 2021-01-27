// tariff-rates popup

var tariffOn = document.querySelector(".rate-tariff__company-show");
var tariffPopup = document.querySelector(".business-rates");
var tariffOff = tariffPopup.querySelector(".business-rates__close");

tariffOn.addEventListener("click", function (evt) {
  evt.preventDefault();
  tariffPopup.classList.add("business-rates_open");
});

tariffOff.addEventListener("click", function (evt) {
  evt.preventDefault();
  tariffPopup.classList.remove("business-rates_open");
});

//mobile menu no js

var noJs = document.querySelector(".menu-box_no-js");
noJs.classList.remove("menu-box_no-js");

// mobile-menu

var menuOn = document.querySelector(".navbar__menu-button");
var menu = document.querySelector(".menu-box");
var menuOff = menu.querySelector(".navbar-menu__close");

menuOn.onclick = function () {
  menu.classList.add("menu-box_open");
};

menuOff.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("menu-box_open");
});
