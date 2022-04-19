const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});


