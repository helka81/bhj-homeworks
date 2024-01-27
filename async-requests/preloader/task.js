let loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.addEventListener('load', function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        try {
            const jsonResponse = JSON.parse(xhr.responseText);

            loader.classList.remove('loader_active');

            
            const items = document.getElementById('items');

            for (const valuteKey in jsonResponse.response.Valute) {
                if (jsonResponse.response.Valute.hasOwnProperty(valuteKey)) {
                    const valute = jsonResponse.response.Valute[valuteKey];

                    const newItem = document.createElement('div');
                    newItem.classList.add('item');
                    newItem.innerHTML = `
                        <div class="item__code">
                            ${valute.CharCode}
                        </div>
                        <div class="item__value">
                            ${valute.Value}
                        </div>
                        <div class="item__currency">
                            руб.
                        </div>
                    `;

                    items.appendChild(newItem);
                }
            }

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

