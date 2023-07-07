const rotatorParent = document.querySelector('.card');
const rotatorСases = rotatorParent.querySelectorAll('.rotator__case');
let currentIndex = 0;

const myRotatorСases = function() {
    rotatorСases.forEach(function(item, index) {
        if (index === currentIndex) {
            const textColor = item.dataset.color;
            const slideSpeed = parseInt(item.dataset.speed);
            item.style.color = textColor;
            item.style.speed = slideSpeed;
            item.classList.add('rotator__case_active');
        } else {
            item.classList.remove('rotator__case_active');
        }
    });
    currentIndex = (currentIndex + 1) % rotatorСases.length;
  };
  
  setInterval(function() {
    myRotatorСases();
  }, 1000);

 