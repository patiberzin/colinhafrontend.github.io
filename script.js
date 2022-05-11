function scrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
scrollSuave();

//Accordeon List pg UX/UI

const accordeon = document.querySelector('[data-js="accordeon"]');

accordeon.addEventListener('click', e => {
  const accordeonHeaderId = e.target.dataset.accordeonHeader; 
  const accordeonItemToBeOppened = document.querySelector(`[data-accordeon-body="${accordeonHeaderId}"]`) 
 accordeonItemToBeOppened.classList.toggle('active');  
})


