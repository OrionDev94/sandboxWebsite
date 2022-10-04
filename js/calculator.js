( function () {

    let numberBtn = document.querySelector(".numbers"),
    clearBtn = document.querySelector("#clear"),
    operatorBtns = document.querySelector(".operators"),
    result = "",
    equal = document.querySelector("#equal"),
    digitOne,
    digitTwo;
  
  // Object with data for calculation
  var calculationValue = {
    numberOne: [],
    numberTwo: [],
    operator: null,
    reset: function () {
      this.numberOne = [];
      this.numberTwo = [];
      this.operator = null;
    },
  };
  
  // Display start
  var outputField = document.getElementById("outputField");
  outputField.innerHTML = 0;
  
  // Select all Buttons and add value to object
  document.querySelectorAll(".numbers").forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
      if (calculationValue.operator !== null) {
        calculationValue.numberTwo.push(numberBtn.value);
        digitTwo = calculationValue.numberTwo.join("");
        outputField.innerHTML = calculationValue.numberTwo;
        showDigit(digitTwo);
      } else {
        calculationValue.numberOne.push(numberBtn.value);
        digitOne = calculationValue.numberOne.join("");
        showDigit(digitOne);
      }
    });
  });
  
  // Press operator button
  document.querySelectorAll(".operators").forEach((operator) => {
    operator.addEventListener("click", () => {
      if (calculationValue.numberOne !== []) {
        calculationValue.operator = operator.value;
        showDigit(calculationValue.operator);
      }
    });
  });
  
  // Clear all
  clearBtn.addEventListener("click", () => {
    calculationValue.reset();
    outputField.classList.remove("upperOutput");
    outputField.innerHTML = 0;
    console.log(calculationValue);
  });
  
  // Shows the digit array in outputfield
  function showDigit(calculation) {
    outputField.innerHTML = calculation;
  }
  
  // Show result
  equal.addEventListener("click", () => {
    if (calculationValue.operator === "+") {
      // Unary plus operator to convert them to numbers first
      result = +digitOne + +digitTwo;
    } else if (calculationValue.operator === "-") {
      result = digitOne - digitTwo;
    } else if (calculationValue.operator === "*") {
      result = digitOne * digitTwo;
    } else if (calculationValue.operator === "/") {
      result = digitOne / digitTwo;
    } else if (calculationValue.operator === "%") {
      result = (digitOne %= digitTwo);
    }
    calculationValue.reset();
    outputField.className = "upperOutput";
    // If decimal number more than 4 decimal places 
    if (result.toString().indexOf('.') !== -1) {
      result = result.toFixed(4);
    }
    outputField.innerHTML = result;
  });
  
  // Keydown event
  // document.addEventListener("keydown", (evt) => {
  //   if (evt.key === "1") {
  //     showDigit(1);
  //   }
  // });

})();
