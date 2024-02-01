const editor = document.getElementById('editor');

// Загрузка текста из LocalStorage при загрузке страницы
window.addEventListener('load', () => {
    const savedText = localStorage.getItem('text');
    if (savedText) {
        editor.textContent = savedText;
    }
});

// Сохранение текста в LocalStorage при каждом вводе
editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.textContent);
});