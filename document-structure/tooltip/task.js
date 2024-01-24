"use strict";

let tooltipList = document.querySelectorAll('.has-tooltip');

// Создаем функцию для создания подсказки
let makeElement = function (text) {
  let element = document.createElement('div');
  element.classList.add("tooltip");
  element.textContent = text;

  return element;
};

tooltipList.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    let text = element.title;
    let elem = makeElement(text); 
    elem.classList.add("tooltip_active");

    // Устанавливаем позицию подсказки относительно элемента
    let rect = element.getBoundingClientRect();
    elem.style.top = rect.bottom + 'px';
    elem.style.left = rect.left + 'px';

    document.body.appendChild(elem);
  });
});

