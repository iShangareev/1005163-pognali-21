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

// scroll-menu
