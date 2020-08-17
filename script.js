'use strict';

const products = [
    { id: 1, title: 'BMW', price: 450000, src:'img/m1.jpg' },
    { id: 2, title: 'Honda', price: 150000, src:'img/m2.jpg' },
    { id: 3, title: 'Kawasaki', price: 300000, src:'img/m3.jpg' },
    { id: 4, title: 'Yamaha', price: 250000, src:'img/m4.jpg' },
    { id: 5, title: 'Suzuki', price: 200000, src:'img/m5.jpg' },
];

const renderProduct = (item) =>
             `<div class="product-item">
                <img src="${item.src}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
};

renderProducts(products);