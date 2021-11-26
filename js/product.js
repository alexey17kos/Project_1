/*jshint esversion: 6 */
const cardsBlock = document.querySelector('#restourant .cards');
const cards = cardsBlock.querySelectorAll('.card');
const total = modal.querySelector('.modal-sun');
const rowsBlock = modal.querySelector('.modal-main');
let rows = rowsBlock.querySelectorAll('.row');
let nameArr = [];
const fullPrice = () => {
    let fullPrice = 0;
    rows.forEach((row, index) => {
        if (index !== 0) {
            const price = +row.querySelector('.price').textContent;
            let count = +row.querySelector('.count').textContent;
            pricePosition = count * price;
            fullPrice += pricePosition;
        }
    });
    total.textContent = fullPrice;
};
const getNowRow = () => {
    rows = rowsBlock.querySelectorAll('.row');
    rows.forEach((row, index) => {
        if (index !== 0) {
            const name = row.querySelector('.product-name').textContent;
            const price = row.querySelector('.price').textContent;
            const btnMinus = row.querySelector('.minus');
            const btnPlus = row.querySelector('.plus');
            let count = +row.querySelector('.count').textContent;
            btnMinus.addEventListener('click', () => {
                if (count > 0) {
                    count--;
                    row.querySelector('.count').textContent = count;
                    fullPrice();
                }
            });
            btnPlus.addEventListener('click', () => {
                count++;
                row.querySelector('.count').textContent = count;
                fullPrice();
            });
        }
    });
    fullPrice();
};
const getProductModal = (productName, productPrice) => {
    const newRow = rows[0].cloneNode(true);
    const productNameBlock = newRow.querySelector('.product-name');
    const productPriceBlock = newRow.querySelector('.price');
    productNameBlock.textContent = productName;
    productPriceBlock.textContent = productPrice;
    newRow.classList.remove('not--active');
    if (!nameArr.includes(productName)) {
        rowsBlock.append(newRow);
        nameArr.push(productName);
    } else {
        newRow.remove();
        rows = rowsBlock.querySelectorAll('.row');
        rows.forEach(row => {
            const name = row.querySelector('.product-name').textContent;
            let counter = +row.querySelector('.count').textContent;
            if (name === productName) {
                counter++;
                row.querySelector('.count').textContent = counter;
            }
        });
    }
    getNowRow();
};
const infoFromCard = () => {
    cards.forEach(card => {
        const productNameBlock = card.querySelector('.card-title');
        const productPriceBlock = card.querySelector('.product-price');
        const productName = productNameBlock.textContent;
        const productPrice = +productPriceBlock.textContent.slice(0, 3);
        const btnCard = card.querySelector('.button');
        btnCard.addEventListener('click', () => {
            getProductModal(productName, productPrice);
        });
    });
};
infoFromCard();