const keyElements = document.querySelectorAll('.key');

function playSound() {
    console.log('eseguo suono');
    const audioElement = new Audio(); 
    audioElement.src = 'sounds/01-do.mp3'; 
    audioElement.play(); 
}

keyElements.forEach(function(keyElement) {
    keyElement.addEventListener('click', function() { 
        playSound();
    })
  
    keyElement.addEventListener('touchend', function() { 
        playSound();
    })
});

const num1 = 1;
const num2 = 2;

function miaFunzione(num1, num2) {
    return num1 + num2 ;
}

const result = miaFunzione(1, 2)

