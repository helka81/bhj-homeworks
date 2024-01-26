
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.addEventListener('load', function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        try {
            const jsonResponse = JSON.parse(xhr.responseText);

            const titleElement = document.getElementById('poll__title');
            const pollAnswersElement = document.getElementById('poll__answers');

            titleElement.textContent = jsonResponse.data.title;

            jsonResponse.data.answers.forEach(answer => {
                const btn = document.createElement('button');
                btn.classList.add('poll__answer');
                btn.textContent = answer;

                btn.addEventListener('click', function () {
                    alert('Спасибо, ваш голос засчитан!');
                });

                pollAnswersElement.appendChild(btn);
            });
        } catch (error) {
            console.error('Ошибка при разборе JSON:', error);
        }
    } else {
        console.error('Ошибка запроса: ' + xhr.status);
    }
});

xhr.addEventListener('error', function () {
    console.error('Сетевая ошибка');
});

xhr.send();
