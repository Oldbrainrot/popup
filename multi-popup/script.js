// Lista popupów do pokazania
const popups = [
    { text: "Cześć! To pierwszy popup", delay: 1000 },
    { text: "Hej! To drugi popup po 3 sekundach", delay: 3000 },
    { text: "Ostatni popup po przewinięciu strony", scrollTrigger: true }
];

// Funkcja tworząca i pokazująca popup
function showPopup(content) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <p>${content}</p>
        <button>Zamknij</button>
    `;
    document.body.appendChild(popup);

    popup.querySelector('button').addEventListener('click', () => {
        popup.remove();
    });

    popup.classList.add('show');
}

// Wyświetlanie popupów po czasie
popups.forEach(p => {
    if (p.scrollTrigger) {
        // popup wyzwalany po przewinięciu strony
        window.addEventListener('scroll', function onScroll() {
            if (window.scrollY > 100) { // np. 100px
                showPopup("Popup po przewinięciu strony!");
                window.removeEventListener('scroll', onScroll);
            }
        });
    } else {
        setTimeout(() => {
            showPopup(p.text);
        }, p.delay);
    }
});

