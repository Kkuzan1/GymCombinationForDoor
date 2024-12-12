const combination = document.querySelector('#combination');
const combinationsLeft = document.querySelector('#combinationsLeft');
const failedCombinations = document.querySelector('#failedCombinations');
const form = document.querySelector('.form');
const numbersInput = document.querySelector('.numbersInput');

let allNumbers = [];
let comb1;
let comb2;
let comb3;
let comb4;
let result = 0;

let combinations = numbersInput.value**numbersInput.value;
combinationsLeft.innerHTML = `Combinations left: ${combinations}`;
failedCombinations.textContent = `Combinations tried: ${allNumbers.length}`;

if(!combinations-1) {
  numbersInput.addEventListener('input', () => {
    combinations = numbersInput.value**4;
  
    combinationsLeft.innerHTML = `Combinations left: ${combinations}`;
  });
}

const getRandomNumbers = function() {
  comb1 = Math.floor(Math.random()*numbersInput.value) + 1;
  comb2 = Math.floor(Math.random()*numbersInput.value) + 1;
  comb3 = Math.floor(Math.random()*numbersInput.value) + 1;
  comb4 = Math.floor(Math.random()*numbersInput.value) + 1;

  result = `${comb1}${comb2}${comb3}${comb4}`;
}

combination.textContent = `Combination: ${result}`;
getRandomNumbers();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(!allNumbers.includes(result)) {
    allNumbers.push(result);
    combination.textContent = `Combination: ${result}`;
  }

  while(allNumbers.includes(result) && combinations > 1) {
    getRandomNumbers();
  }

  if(combinations > 0) {
    combinations -= 1;
    combinationsLeft.innerHTML = `Combinations left: ${combinations}`;
  }

  // localStorage.setItem('allNumbers', allNumbers);
  // console.log(localStorage.getItem('allNumbers'));
  // console.log(allNumbers.length);

  failedCombinations.textContent = `Combinations tried: ${allNumbers.length}`;
});