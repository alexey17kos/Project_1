/*jshint esversion: 6 */
const btnCart = document.getElementById('cart');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');
const mainIndex = document.getElementById('index');
const mainRest = document.getElementById('restourant');
const cardsBlockIndex = mainIndex.querySelector('.cards');
const cardsIndex = cardsBlockIndex.querySelectorAll('.card');
const logos = document.querySelectorAll('.link-logo');
const modalOpen = () => {
    modal.classList.toggle('modal--close');
};
const getToMain = () => {
    mainRest.classList.toggle('not--active');
    mainIndex.classList.toggle('not--active');
};
btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalOpen);
modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modalOpen();
    }
});
cardsIndex.forEach(card => {
    card.addEventListener('click', () => {
        getToMain();
    });
});
logos.forEach(logo => {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        if (mainIndex.classList.contains('not--active')) {
            getToMain();
        }
    });
});