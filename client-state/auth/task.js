document.addEventListener('DOMContentLoaded', () => {
  const signin = document.getElementById('signin');
  const form = document.getElementById('signin__form');
  const welcome = document.getElementById('welcome');
  const userIdElement = document.getElementById('user_id');

  const userId = localStorage.id;

  if (userId) {
      // Пользователь авторизован, отображаем форму приветствия
      signin.classList.remove('signin_active');
      welcome.classList.add('welcome_active');
      userIdElement.textContent = userId;
  } else {
      // Пользователь не авторизован, отображаем форму авторизации
      signin.classList.add('signin_active');
      welcome.classList.remove('welcome_active');
  }

  // Добавляем обработчик события для формы авторизации
  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
          const jsonResponse = xhr.response;

          if (jsonResponse.success) {
              // Авторизация успешна
              signin.classList.remove('signin_active');
              localStorage.id = jsonResponse.user_id;
              welcome.classList.add('welcome_active');
              userIdElement.textContent = localStorage.id;

              // Сброс формы после успешной авторизации
              form.reset();
          } else {
              alert('Неверный логин/пароль');
          }
      });

      xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
      xhr.addEventListener('error', function () {
          console.error('Сетевая ошибка');
      });

      // Отправка данных формы в запросе
      xhr.send(new FormData(form));
  });
});