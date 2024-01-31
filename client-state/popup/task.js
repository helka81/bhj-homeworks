const modal = document.getElementById('subscribe-modal');

// Проверка, было ли окно закрыто ранее
if (!document.cookie.includes('modal_closed=true')) {
    // Если куки не установлено, отображаем модальное окно
    modal.classList.add('modal_active');
}

window.addEventListener('load', (e) => {
    const closeModal = document.querySelector('.modal__close');

    closeModal.addEventListener('click', (e) => {
        modal.classList.remove('modal_active');

        // Устанавливаем куки, отмечая, что окно было закрыто
        document.cookie = 'modal_closed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    });
});