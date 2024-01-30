const signin = document.getElementById('signin');
const form = document.getElementById('signin__form'); 

form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            // Обработка успешного ответа
            const jsonResponse = JSON.parse(xhr.responseText);
            const welcome = document.getElementById('welcome');
            
            if(jsonResponse.success) {
                signin.classList.remove('signin_active');
                localStorage.id = jsonResponse.user_id;
                welcome.classList.add('welcome_active');
                const userId = document.getElementById('user_id');
                userId.textContent = localStorage.id; 
            }  else {
                alert('Неверный логин/пароль');
            }


          } catch (error) {
            console.error('Ошибка при разборе JSON:', error);
          }
        } else {
          console.error('Ошибка запроса: ' + xhr.status);
        }
      });
    
      xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

      xhr.addEventListener('error', function () {
        console.error('Сетевая ошибка');
      });
    
      xhr.send(new FormData(form));

});    

