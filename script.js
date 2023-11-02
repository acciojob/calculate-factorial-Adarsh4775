function calcFactor(num) {
  if (num === 0) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

let num = parseFloat(prompt("Enter the number"));
if (!isNaN(num) && num >= 0) {
  let result = calcFactor(num);
  alert("The factorial of " + num + " is " + result);
} else {
  alert("Invalid input. Please enter a non-negative number.");
}
