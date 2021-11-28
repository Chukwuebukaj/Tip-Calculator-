const peopleInput = document.querySelector("#people-input");
const zeroAlert = document.querySelector(".zero-alert");
const billInput = document.querySelector("#bill-input");
const displayTotal = document.querySelector("#td");
const displayTipAmount = document.querySelector("#tad");
const customInput = document.querySelector("#custom-input");
const resetBtn = document.getElementById("reset-btn");
const buttons = document.querySelectorAll(".buttons button");

// Event listeners for input fields
peopleInput.addEventListener("input", displayDiv);
peopleInput.addEventListener("input", calculate);
billInput.addEventListener("input", calculate);
billInput.addEventListener("input", limit);

customInput.addEventListener("input", calculate);
resetBtn.addEventListener("click", reset);

// Event listeners for tip buttons
buttons[0].addEventListener("click", firstTipRate);
buttons[1].addEventListener("click", secondTipRate);
buttons[2].addEventListener("click", thirdTipRate);
buttons[3].addEventListener("click", fourthTipRate);
buttons[4].addEventListener("click", fifthTipRate);



// Number of People input field Zero alert
function displayDiv() {
  let inputValue = peopleInput.value;

  if (inputValue <= 0 && inputValue != "") {
    zeroAlert.style.display = "block";
    peopleInput.style.border = "3px solid red";
    peopleInput.value = "";
    calculate();
  } else {
    zeroAlert.style.display = "none";
    peopleInput.style.border = "3px solid hsl(172, 67%, 45%)";
  }
}

function limit(billInput) {
  let max_chars = 12;
  if (billInput.value.length > max_chars) {
    billInput.value = billInput.value.substr(0, max_chars);
    displayTotal.innerHTML = "₦" + billInput.value + ".00"
  }
}

function keepTwelve(customInput) {
  let max_chars = 12;
  if (customInput.value.length > max_chars) {
    customInput.value = customInput.value.substr(0, max_chars);
    displayTipAmount.innerHTML = "₦" + customInput.value + ".00"
  }
}

function shrinkFont() {
  if (displayTipAmount.innerHTML.length > 5 && displayTipAmount.innerHTML.length <= 8) {
    displayTipAmount.style.fontSize = "0.8em";
  } else if (displayTipAmount.innerHTML.length > 8) {
    displayTipAmount.style.fontSize = "0.6em";
  } else {
    displayTipAmount.style.fontSize = "1em";
  }

  if (displayTotal.innerHTML.length > 5 && displayTotal.innerHTML.length <= 8) {
    displayTotal.style.fontSize = "0.8em";
  } else if (displayTotal.innerHTML.length > 8) {
    displayTotal.style.fontSize = "0.6em";
  } else {
    displayTotal.style.fontSize = "1em";
  }
}

// Input fields function
function calculate() {

  if (
    billInput.value > 0 &&
    customInput.value == "" &&
    peopleInput.value == ""
  ) {
    displayTotal.innerHTML = "₦" + billInput.value + ".00";
  } else {
    displayTotal.innerHTML = "₦0.00";
  }

  if (customInput.value > 0 && billInput.value > 0 && peopleInput.value == "") {
    let tipAmount = customInput.value;
    displayTipAmount.innerHTML = "₦" + tipAmount + ".00";
    let total = parseFloat(billInput.value) + parseFloat(tipAmount);
    displayTotal.innerHTML = "₦" + total.toFixed(2);
  }

  if (customInput.value > 0 && billInput.value > 0 && peopleInput.value > 0) {
    let tipAmount = parseFloat(customInput.value);
    let inputValue = parseFloat(peopleInput.value);
    displayTipAmount.innerHTML = "₦" + tipAmount.toFixed(2);
    let total = parseFloat(billInput.value) + tipAmount;
    displayTotal.innerHTML = "₦" + (total / inputValue).toFixed(2);
  }

  if (peopleInput.value > 0 && customInput.value != "") {
    let tipAmount = parseFloat(customInput.value);
    let inputValue = parseFloat(peopleInput.value);
    let billInputValue = parseFloat(billInput.value);
    let billPerPerson = billInputValue / inputValue;
    let tipPerPerson = tipAmount / inputValue;
    let totalPerPerson = billPerPerson + tipPerPerson;
    displayTipAmount.innerHTML = "₦" + tipPerPerson.toFixed(2);
    displayTotal.innerHTML = "₦" + totalPerPerson.toFixed(2);
  }

  if (peopleInput.value > 0 && billInput.value > 0 && customInput.value == "") {
    let inputValue = parseFloat(peopleInput.value);
    let billInputValue = parseFloat(billInput.value);
    let billPerPerson = billInputValue / inputValue;
    displayTotal.innerHTML = "₦" + billPerPerson.toFixed(2);
  }

  if (billInput.value <= 0) {
    reset();
  }
  shrinkFont()
}

// Tip buttons functions
function firstTipRate() {
  let billInputValue = parseFloat(billInput.value);
  let inputValue = parseFloat(peopleInput.value);
  tipAmount = billInputValue * 0.05;
  tipPerPerson = tipAmount / inputValue;
  billPerPerson = billInputValue / inputValue;
  totalPerPerson = billPerPerson + tipPerPerson;

  if (peopleInput.value > 0 && billInput.value > 0 && customInput.value == "") {
    displayTotal.innerHTML = "₦" + totalPerPerson.toFixed(2);
    displayTipAmount.innerHTML = "₦" + tipPerPerson.toFixed(2);
  }

  if (
    peopleInput.value == "" &&
    billInput.value > 0 &&
    customInput.value == ""
  ) {
    displayTotal.innerHTML = "₦" + (tipAmount + billInputValue).toFixed(2);
    displayTipAmount.innerHTML = "₦" + tipAmount.toFixed(2);
  }
  shrinkFont()
}

function secondTipRate() {
  let billInputValue = parseFloat(billInput.value);
  let inputValue = parseFloat(peopleInput.value);
  tipAmount = billInputValue * 0.1;
  tipPerPerson = tipAmount / inputValue;
  billPerPerson = billInputValue / inputValue;
  totalPerPerson = billPerPerson + tipPerPerson;

  if (peopleInput.value > 0 && billInput.value > 0 && customInput.value == "") {
    displayTotal.innerHTML = "₦" + totalPerPerson.toFixed(2);
    displayTipAmount.innerHTML = "₦" + tipPerPerson.toFixed(2);
  }

  if (
    peopleInput.value == "" &&
    billInput.value > 0 &&
    customInput.value == ""
  ) {
    displayTotal.innerHTML = "₦" + (tipAmount + billInputValue).toFixed(2);
    displayTipAmount.innerHTML = "₦" + tipAmount.toFixed(2);
  }
  shrinkFont()
}

function thirdTipRate() {
  let billInputValue = parseFloat(billInput.value);
  let inputValue = parseFloat(peopleInput.value);
  tipAmount = billInputValue * 0.15;
  tipPerPerson = tipAmount / inputValue;
  billPerPerson = billInputValue / inputValue;
  totalPerPerson = billPerPerson + tipPerPerson;

  if (peopleInput.value > 0 && billInput.value > 0 && customInput.value == "") {
    displayTotal.innerHTML = "₦" + totalPerPerson.toFixed(2);
    displayTipAmount.innerHTML = "₦" + tipPerPerson.toFixed(2);
  }

  if (
    peopleInput.value == "" &&
    billInput.value > 0 &&
    customInput.value == ""
  ) {
    displayTotal.innerHTML = "₦" + (tipAmount + billInputValue).toFixed(2);
    displayTipAmount.innerHTML = "₦" + tipAmount.toFixed(2);
  }
  shrinkFont()
}

function fourthTipRate() {
  let billInputValue = parseFloat(billInput.value);
  let inputValue = parseFloat(peopleInput.value);
  tipAmount = billInputValue * 0.25;
  tipPerPerson = tipAmount / inputValue;
  billPerPerson = billInputValue / inputValue;
  totalPerPerson = billPerPerson + tipPerPerson;

  if (peopleInput.value > 0 && billInput.value > 0 && customInput.value == "") {
    displayTotal.innerHTML = "₦" + totalPerPerson.toFixed(2);
    displayTipAmount.innerHTML = "₦" + tipPerPerson.toFixed(2);
  }

  if (
    peopleInput.value == "" &&
    billInput.value > 0 &&
    customInput.value == ""
  ) {
    displayTotal.innerHTML = "₦" + (tipAmount + billInputValue).toFixed(2);
    displayTipAmount.innerHTML = "₦" + tipAmount.toFixed(2);
  }
  shrinkFont()
}

function fifthTipRate() {
  let billInputValue = parseFloat(billInput.value);
  let inputValue = parseFloat(peopleInput.value);
  tipAmount = billInputValue * 0.5;
  tipPerPerson = tipAmount / inputValue;
  billPerPerson = billInputValue / inputValue;
  totalPerPerson = billPerPerson + tipPerPerson;

  if (peopleInput.value > 0 && billInput.value > 0 && customInput.value == "") {
    displayTotal.innerHTML = "₦" + totalPerPerson.toFixed(2);
    displayTipAmount.innerHTML = "₦" + tipPerPerson.toFixed(2);
  }

  if (
    peopleInput.value == "" &&
    billInput.value > 0 &&
    customInput.value == ""
  ) {
    displayTotal.innerHTML = "₦" + (tipAmount + billInputValue).toFixed(2);
    displayTipAmount.innerHTML = "₦" + tipAmount.toFixed(2);
  }
  shrinkFont()
}

// Reset button function
function reset() {
  billInput.value = "";
  customInput.value = "";
  peopleInput.value = "";
  displayTipAmount.innerHTML = "₦0.00"
  displayTotal.innerHTML = "₦0.00"
  zeroAlert.style.display = "none";
  peopleInput.style.border = "none";
  shrinkFont()
  calculate()
}

// Press 'R' on keyboard to reset calculator
document.addEventListener("keydown", function(event) {
	if (event.keyCode === 82) {
    reset() 
}
});
