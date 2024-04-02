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
