"use strict";

let cartProducts = document.querySelector('.cart__products');

let addProductToCart = function (id, imageSrc, text) {
    // Поиск продукта в корзине по id
    const existingProduct = [...cartProducts.children].find(product => product.dataset.id === id);

    if (existingProduct) {
        // Продукт уже есть в корзине, увеличиваем количество
        let quantityElement = existingProduct.querySelector('.cart__product-count');
        let currentQuantity = +(quantityElement.textContent);
        quantityElement.textContent = currentQuantity + +text; // Используем значение text как число
    } else {
        // Продукта нет в корзине, добавляем новый элемент продукта
        let productHTML = `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${imageSrc}" alt="Product Image">
                <div class="cart__product-count">
                    ${text}
                </div>
            </div>
        `;

        cartProducts.insertAdjacentHTML('beforeend', productHTML);
    }
};

// Добавляем обработчик событий
document.addEventListener('click', (event) => {
    // Проверяем, произошло ли событие на элементе с классом '.product__quantity-control_dec'
    if (event.target.classList.contains('product__quantity-control_dec')) {
        // Находим соответствующий элемент '.product__quantity-value'
        let quantityValueElement = event.target.nextElementSibling;
        let currentValue = +(quantityValueElement.textContent);

        if (currentValue > 1) {
            quantityValueElement.textContent = currentValue - 1;
        }
    }

    // Проверяем, произошло ли событие на элементе с классом '.product__quantity-control_inc'
    if (event.target.classList.contains('product__quantity-control_inc')) {
        // Находим соответствующий элемент '.product__quantity-value'
        let quantityValueElement = event.target.previousElementSibling;
        let currentValue = +(quantityValueElement.textContent);

        quantityValueElement.textContent = currentValue + 1;
    }

    // Проверяем, произошло ли событие на элементе с классом '.product__add'
    if (event.target.classList.contains('product__add')) {
        let productElement = event.target.closest('.product');
        if (productElement) {
            let id = productElement.dataset.id;
            let imageSrc = productElement.querySelector('.product__image').src;
            let text = productElement.querySelector('.product__quantity-value').textContent;
            addProductToCart(id, imageSrc, text);
        }
    }
});
