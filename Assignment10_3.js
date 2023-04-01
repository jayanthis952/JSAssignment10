// Higher-order function that takes in a callback function
function calculate(num1, num2, operation) {
    return operation(num1, num2);
  }
  
  // Callback function that performs addition
  function add(num1, num2) {
    return num1 + num2;
  }
  
  // Using the higher-order function with the callback function
  const result = calculate(5, 3, add);
  console.log(result); 
  