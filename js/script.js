console.log("Witam wszystkich dewsów :P. Wiem że bez szału ale starałem się przećwiczyć chwytanie i podmianę elementu aby była robiona dobrze. Wiem że dużo linijek kodu jak na taką stronę ale z czasem mam nadzieję że będzie lepiej :p. Powoli ale skrupulatnie do przodu. Proszę o konstruktywną krytykę i z góry wszystkim dziękuję.");

let button = document.querySelector(".button");
let bigBoxOn = document.querySelector(".bigBoxOn");
let mainTitleOn = document.querySelector(".mainTitleOn");
let allOn = document.querySelector(".allOn");
let aimOn = document.querySelector(".aimOn");
let importantOn = document.querySelector(".importantOn")
let day = document.querySelector(".Day");


button.addEventListener("click", () => {

    allOn.classList.toggle("allOff");
    bigBoxOn.classList.toggle("bigBoxOff");
    mainTitleOn.classList.toggle("mainTitleOff");
    aimOn.classList.toggle("aimOff");
    importantOn.classList.toggle("importantOff");

});