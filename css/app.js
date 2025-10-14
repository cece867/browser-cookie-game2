
const button = document.querySelector('round-button');
const message = document.querySelector('message');

let clicksCount = 0;

const buttonElement = document.querySelector('round-button');
roundButton.addEventListener('click', (event) => {
  console.log(event);
})

// const buttonListElement = document.querySelector('ul');
let count = 0;
const Click = () => {
    clicksCount = clicksCount + 1;
    console.log(clicksCount); 
}

const msg = document.getElementById('message');
button.addEventListener('click', function () {
   message.textContent = "You Win A Cookie!";
  if (count ===1) {
    message.textContent = "You win a cookie!";
  } else {
    message.textContent = "You win ${count} cookies!";
  }
  }
   
);


const roundButton = document.querySelector('.button'); 
const style = document.createElement('style');
style.textContent = `
  