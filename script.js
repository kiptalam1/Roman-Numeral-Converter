const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('output');

const checkInput = () => {
  const num = parseInt(inputNumber.value);

// Reset styles initially
  result.style.borderColor = ''; 
  result.style.color = ''; 
  result.textContent = ''; 

  if (isNaN(num)) {
    result.textContent = "Please enter a valid number";
    result.style.borderColor = '#ff4d4d';
    result.style.color = '#ff4d4d';
  } else if (num < 1) {
    result.textContent = "Please enter a number greater than or equal to 1";
     result.style.borderColor = '#ff4d4d';
    result.style.color = '#ff4d4d';
    
  } else if (num >= 4000) {
    result.textContent = "Please enter a number less than or equal to 3999";
     result.style.borderColor = '#ff4d4d';
    result.style.color = '#ff4d4d';
    return false;
  } else {
  return num;
  }
}


const romanNumeralConverter = (num) => {

  const romanNumerals = [
    {"symbol": "M", "value": 1000},
    {"symbol": "CM", "value": 900},
    {"symbol": "D", "value": 500},
    {"symbol": "CD", "value": 400},
    {"symbol": "C", "value": 100},
    {"symbol": "XC", "value": 90},
    {"symbol": "L", "value": 50},
    {"symbol": "XL", "value": 40},
    {"symbol": "X", "value": 10},
    {"symbol": "IX", "value": 9},
    {"symbol": "V", "value": 5},
    {"symbol": "IV", "value": 4},
    {"symbol": "I", "value": 1}
]

let roman = "";

romanNumerals.forEach((obj) => {
  while (num >= obj.value) {
    roman += obj.symbol;
    num -= obj.value;
  }
});

  return roman;
}

const handleConvert = () => {
  const num = checkInput();
  if (num) {
    result.textContent = romanNumeralConverter(num);
    
  }
  inputNumber.value = '';
}


convertBtn.addEventListener('click', handleConvert);
