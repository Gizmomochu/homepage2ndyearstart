{
    const welcome = () => {
        console.log("Witam wszystkich dewsów :P. Wiem że bez szału ale starałem się przećwiczyć chwytanie i podmianę elementu aby była robiona dobrze. Wiem że dużo linijek kodu jak na taką stronę ale z czasem mam nadzieję że będzie lepiej :p. Powoli ale skrupulatnie do przodu. Dodatkowo zmodyfikowałem trochę powitanie i starałem się commitować każdą zmianę. Proszę o konstruktywną krytykę i z góry wszystkim dziękuję. ");

    }
    
    const changeTheme = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", () => {
            const day = document.querySelector(".js-day");
            const text = document.querySelector(".js-button--text");
    
            day.classList.toggle("night");
            text.innerText = day.classList.contains("night") ? "Jasne" : "Ciemne"
        });
    }
    
    const init = () => {
        welcome();
        changeTheme();
    }

    init();
}