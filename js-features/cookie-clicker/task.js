const cookieClicker = function() {
    const counterClicker = document.getElementById("clicker__counter");
    const speedClick = document.getElementById("speed_click");
    let clickerValue = parseInt(counterClicker.textContent);
    const elementClicker = document.getElementById("cookie");
    let lastClickTime = new Date().getTime();

    elementClicker.onclick = function() {
        clickerValue += 1;
        counterClicker.textContent = clickerValue;
        const currentTime = new Date().getTime();
        const timeDiff = (currentTime - lastClickTime) / 1000; // Разница во времени в секундах
        const clickRate = 1 / timeDiff; // Рассчитываем скорость клика
        speedClick.textContent = clickRate.toFixed(2); // Отображаем скорость с двумя знаками после запятой
        lastClickTime = currentTime; // Обновляем время последнего клика
        if (elementClicker.width === 200) {
            elementClicker.width = 250; 
          } else {
            elementClicker.width = 200; 
          };
    };
   
};

cookieClicker();



