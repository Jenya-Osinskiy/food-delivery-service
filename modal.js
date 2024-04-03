let headeropenmenu = document.querySelector('.header-open-menu');
let menumob  = document.querySelector('.menu-mob ');
let mobclosebtn = document.querySelector('.mob-close-btn');

headeropenmenu.addEventListener('click', () => {
    menumob.classList.add('is-open');
})

mobclosebtn .addEventListener('click', (e) => {
    e.preventDefault();
    menumob.classList.remove('is-open');
})

let specialbtnnow = document.querySelector('.special-btn-now');
let enjoybtn = document.querySelector('.enjoy-btn');
let modaloverlay = document.querySelector('.modal-overlay');
let modalclosebut = document.querySelector('.modal-close-but');

specialbtnnow.addEventListener('click', () => {
    modaloverlay.classList.add('is-open');
})

enjoybtn.addEventListener('click', () => {
    modaloverlay.classList.add('is-open');
})

modalclosebut.addEventListener('click', (e) => {
    e.preventDefault();
    modaloverlay.classList.remove('is-open');
})


