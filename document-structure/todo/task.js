//Находим все  нужные элементы на странице
let taskInput = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');
let taskForm = document.getElementById('tasks__form');

//Функция создания элемента задачи
let makeElement = function (text) {
    let element1 = document.createElement('div');
    element1.classList.add("task");

    let element2 = document.createElement('div');
    element2.classList.add("task__title");
    element2.textContent = text;

    let element3 = document.createElement('a');
    element3.href = "#";
    element3.classList.add("task__remove");
    element3.innerHTML = "&times;";

    element1.appendChild(element2);
    element1.appendChild(element3);

    element3.onclick = function(e) {
        e.target.closest('.task').remove();
    };

    return element1;
};

// Функция добавления задачи
let addTask = function () {
    if (taskInput.value.trim() !== '') {
        let text = taskInput.value.trim();
        tasksList.appendChild(makeElement(text));
        taskInput.value = '';
    }
};

// Обработчик события нажатия клавиши Enter
taskForm.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTask();
    }
});


//Вешаем обработчик события на форму,  клавиша enter будет задействована по умолчанию
// taskForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     addTask();
// });

// Обработчик события клика по кнопке "Добавить"
// let addTaskButton = document.getElementById('tasks__add');
// 
// addTaskButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     addTask();
// });