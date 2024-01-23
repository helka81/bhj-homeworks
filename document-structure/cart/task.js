"use strict";

// Получаем общего родителя для всех элементов
let products = document.querySelector('.products');
let cartProducts = document.querySelector('.cart__products');

// Создаем функцию для создания карточек продукта в корзине
let makeElement = function (id, imageSrc, text) {
    let element1 = document.createElement('div')
    element1.classList.add("cart__product");
    element1.dataset.id = id;

    let element2 = document.createElement('img')
    element2.classList.add("cart__product-image");
    element2.src = imageSrc;

    let element3 = document.createElement('div')
    element3.classList.add("cart__product-count");
    element3.textContent = text;

    element1.appendChild(element2);
    element1.appendChild(element3);
    
    return element1;
  };

// Добавляем обработчик событий к родителю
products.addEventListener('click', (event) => {
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
            let newElement = makeElement(id, imageSrc, text);
            cartProducts.appendChild(newElement);
        }
    }
});

