
const countdownTimer = function() {
    const elementTimer = document.getElementById('timer');
    let timerValue = parseInt(elementTimer.textContent);
    if (timerValue === 0) {
        clearInterval(timerInterval);
        alert('Вы победили');
        return;
    };

    timerValue -= 1;
    elementTimer.textContent = timerValue;
};

const timerInterval = setInterval(countdownTimer, 1000);


// const countdownTimer = function() {
//     const elementTimer = document.getElementById('timer');
//     let timerValue = parseInt(elementTimer.textContent);

//     const updateTimer = function() {
//         const hours = Math.floor(timerValue / 3600); 
//         const minutes = Math.floor((timerValue % 3600) / 60);
//         const seconds = timerValue % 60; 

//         const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
//         elementTimer.textContent = formattedTime;

//         if (timerValue === 0) {
//             clearInterval(timerInterval);
//             setTimeout(function() {
//                 alert('Вы победили');
//                 }, 0);
//             };

//         timerValue -= 1;
//     };

//     const padZero = function(value) {
//         return value.toString().padStart(2, '0'); 
//     };

//     updateTimer(); 
//     const timerInterval = setInterval(updateTimer, 1000);
// };

// countdownTimer();