const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', (event) => {
    if (event.lengthComputable) {
      const percentComplete = event.loaded / event.total;
      // Обновление значения элемента <progress>
      progress.value = percentComplete;
        
    }
  });

  xhr.addEventListener('load', function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        // Обработка успешного ответа
        console.log('Успешно:', xhr.responseText);
      } catch (error) {
        console.error('Ошибка при разборе JSON:', error);
      }
    } else {
      console.error('Ошибка запроса: ' + xhr.status);
    }
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  // Создание объекта FormData и добавление данных из формы
  const formData = new FormData(form);

  xhr.addEventListener('error', function () {
    console.error('Сетевая ошибка');
  });

  xhr.send(formData);
});
