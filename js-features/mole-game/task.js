const getHole = (index) => document.getElementById(`hole${index}`);
const moleDead = document.getElementById("dead");
let counterDead = parseInt(moleDead.textContent);
const lostHole = document.getElementById("lost");
let counterLost = parseInt(lostHole.textContent);

const moleGame = function () {
  for (let i = 1; i <= 9; i += 1) {
    const hole = getHole(i);
    hole.onclick = () => {
      if (hole.classList.contains('hole_has-mole')) {
        counterDead += 1;
        moleDead.textContent = counterDead;
      } else {
        counterLost += 1;
        lostHole.textContent = counterLost;
      }
      
      if (counterDead === 10) {
        alert('Вы победили!');
        stop();
        resetCounters();
      } else if (counterLost === 5) {
        alert('Вы проиграли!');
        stop();
        resetCounters();
      }
    };
  }
};


const resetCounters = () => {
  counterDead = 0;
  counterLost = 0;
  moleDead.textContent = counterDead;
  lostHole.textContent = counterLost;
};

moleGame();