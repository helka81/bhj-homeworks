const editor = document.getElementById('editor');

     // Загрузка текста из LocalStorage при загрузке страницы
    window.addEventListener('load', () => {
        editor.textContent = localStorage.getItem('text');
    });

    // Сохранение текста в LocalStorage при каждом вводе
    editor.addEventListener('input', () => {
        localStorage.setItem('text', editor.textContent);
    });