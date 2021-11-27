/*jshint esversion: 6 */
const btnCart = document.getElementById('cart');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');
const mainIndex = document.getElementById('index');
const mainRest = document.getElementById('restourant');
const cardsBlockIndex = mainIndex.querySelector('.cards');
const cardsIndex = cardsBlockIndex.querySelectorAll('.card');
const logos = document.querySelectorAll('.link-logo');
let intervalId;
const animateModal = () => {
    let count = 99;
    modal.classList.remove('modal--close');
    modal.style.transform = `translateX(-100%)`;
    const animate = () => {
        count--;
        modal.style.transform = `translateX(-${count}%)`;
        if (count === 0) {
            clearInterval(intervalId);
        }
    };
    intervalId = setInterval(animate, 7);
};
const modalClose = () => {
    modal.classList.add('modal--close');
};
const getToMain = () => {
    mainRest.classList.toggle('not--active');
    mainIndex.classList.toggle('not--active');
};
btnCart.addEventListener('click', animateModal);
btnClose.addEventListener('click', modalClose);
modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modalClose();
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