const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("clear")) {
      expression = "";
      expressionDisplay.textContent = "";
      resultDisplay.textContent = "";
    } 
    else if (button.classList.contains("del")) {
      expression = expression.slice(0, -1);
      expressionDisplay.textContent = expression;
    } 
    else if (button.classList.contains("equal")) {
      try {
        let result = eval(expression);
        resultDisplay.textContent = result;
        expression = result.toString();
      } catch {
        resultDisplay.textContent = "Error";
        expression = "";
      }
    } 
    else {
      expression += value;
      expressionDisplay.textContent = expression;
    }
  });
});