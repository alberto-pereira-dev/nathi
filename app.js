const audio = document.querySelector('.audio');
const botonPlay = document.querySelector('.play-btn');
const botonCancelar = document.querySelector('.cancel-btn');

botonPlay.addEventListener('click', () => {
    audio.play();
    document.querySelector('.ventana').style.display = 'none';
});

botonCancelar.addEventListener('click', () => {
    document.querySelector('.ventana').style.display = 'none';
});

(function () {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const links = document.querySelectorAll('.nav__links');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });
    });
})();

(function () {
    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();