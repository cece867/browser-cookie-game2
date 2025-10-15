
const button = document.getElementById('button');
const message = document.getElementById('message');
const clicksCounter = document.getElementById('clicksCount');


let clicksCount = 0;
 button.addEventListener('click', () => {
clicksCount++;
clicksCounter.textContent = clicksCount;


// button.addEventListener('click', () => {
   message.textContent = "You Win A Cookie!";

  // console.log(clicksCounter);
  if (clicksCount === 1) {
    message.textContent = "You win 1 cookie!";
  } else {
    message.textContent = `You win ${clicksCount} cookies!`;
  }
  });



// roundButtonElementy.addEventListener(click, message => {
//   console.log('you win a cookie!', message );
// })

// message.addEventListener(click, message => {
//   console.log(click, message);
// })
// const buttonListElement = document.querySelector('ul');

    // clicksCount = clicksCount +;
    // console.log(clicksCount); 



// const roundButton = document.querySelector('.button'); 
// // const style = document.createElement('style');
// style.textContent = 
