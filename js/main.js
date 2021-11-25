/*jshint esversion: 6 */
// объявление переменных
const btnCart = document.getElementById('cart');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');
const rows = modal.querySelectorAll('.row');
const total = modal.querySelector('.modal-sun');
const mainIndex = document.getElementById('index');
const mainRest = document.getElementById('restourant');
const cardsBlockIndex = mainIndex.querySelector('.cards');
const cardsIndex = cardsBlockIndex.querySelectorAll('.card');
const logos = document.querySelectorAll('.link-logo');
const cardsBlockRest = mainRest.querySelector('.cards');
const cardsRest = cardsBlockRest.querySelectorAll('.card');
// объявление функций
const getProductModal = (nameProduct, priceProduct, index = 0) => {
    let nameProductBlock = rows[index].querySelector('.product-name');
    let priceProductBlock = rows[index].querySelector('.price');
    nameProductBlock.textContent = nameProduct;
    priceProductBlock.textContent = priceProduct;
};
const modalOpen = () => {
    modal.classList.toggle('modal--close');
};
const getFullPrice = () => {
    let fullPrice = 0;
    rows.forEach(row => {
        let priceBlock = row.querySelector('.price');
        let price = +priceBlock.textContent;
        fullPrice += price;
    });
    total.textContent = fullPrice;
};
const getToMain = () => {
    mainRest.classList.toggle('not--active');
    mainIndex.classList.toggle('not--active');
};
// вызов функций
btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalOpen);
modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modalOpen();
    }
});
cardsRest.forEach((card, index) => {
    let nameProductBlock = card.querySelector('.card-title');
    let priceProductBlock = card.querySelector('.product-price');
    let nameProduct = nameProductBlock.textContent;
    let priceProduct = +priceProductBlock.textContent.slice(0, 3);
    getProductModal(nameProduct, priceProduct, index);
});
rows.forEach(row => {
    let newPrice = 0;
    let priceBlock = row.querySelector('.price');
    let price = +priceBlock.textContent;
    let countBlock = row.querySelector('.count');
    let count = countBlock.textContent;
    const btnMinus = row.querySelector('.minus');
    const btnPlus = row.querySelector('.plus');

    const getNewPrice = (count, price) => {
        newPrice = count * price;
        priceBlock.textContent = newPrice;
        getFullPrice();
    };
    btnMinus.addEventListener('click', () => {
        if (count > 0) {
        count--;
        countBlock.textContent = count;
        getNewPrice(count, price);
        }
    });
    btnPlus.addEventListener('click', () => {
        count++;
        countBlock.textContent = count;
        getNewPrice(count, price);
    });
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
getFullPrice();
//логеры