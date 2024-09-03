// Dice Simulator

// setInterval & clearInterval

// let x = 10;

// let timer = setInterval(countdown, 1000); // setInterval runs forever until interval is cleared

// function countdown() {
//   console.log(x);
//   x--;

//   if (x == 0) {
//     clearInterval(timer);
//   }
// }

// setTimeout - same as setInterval, but it runs the function a SINGLE time only.
// e.g. setTimeout(animateDice, 2000) will run the animateDice runction once, but after 2 seconds and then never again.


let angle = 0;
let timer = setInterval(animateDice, 200);

// HTML Variables
let selectEl = document.getElementById("dice-menu");
let rollBtn = document.getElementById("roll-btn");
let dice1Img = document.getElementById("dice-1");
let historyBox = document.getElementById("roll-history");

// Event Listener
rollBtn.addEventListener("click", rollDice);

// Event function
function rollDice() {
  //   console.log(selectEl.value);

  // Stop the dice animation
  clearInterval(timer);

  if (selectEl.value == "roll-1") {
    // Create random numbers to represent the dice roll
    let dice1 = Math.random() * 6 + 1; // 1 - 6.999....
    dice1 = Math.floor(dice1); // 1 - 6
    console.log(dice1);

    // display the right images
    dice1Img.src = `images/${dice1}.png`;

    // update the history box
    historyBox.innerHTML += `<span> ${dice1} </span>`;
  }
}

function animateDice() {
  // choose random dice image
  let rand = Math.floor(Math.random() * 6 + 1);
  dice1Img.src = `images/${rand}.png`;

  // rotate image
  angle += 10;
  dice1Img.style.transform = `rotate(${angle}deg)`;
}
