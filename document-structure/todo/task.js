"use strict";
let taskInput = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');
let taskForm = document.getElementById('tasks__form');
let addTaskButton = document.getElementById('tasks__add');

// Функция добавления задачи с использованием шаблонных строк
let addTask = function (text) {
    let taskHTML = `
        <div class="task">
            <div class="task__title">
                ${text}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `;

    tasksList.insertAdjacentHTML('afterbegin', taskHTML);
};

// Вешаем обработчик события на форму
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addTask(taskInput.value.trim());
    taskInput.value = '';
});

// Обработчик события клика по кнопке "Добавить"
addTaskButton.addEventListener('click', function (e) {
    e.preventDefault();
    addTask(taskInput.value.trim());
    taskInput.value = '';
});

// Обработчик события клика по кнопке удаления
tasksList.addEventListener('click', function (e) {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
});
