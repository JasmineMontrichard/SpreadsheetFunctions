/**
* This function is filters input for numbers enclosed in brackets, iterates over them, and sums them together before the total sum is returned. In addition,
* this function evaluates arithmetic expressions for multiple numbers enclosed in brackets.
*
* @author Jasmine Montrichard
*/

function calcBracketedNumsInUnfilteredData(input) {
  // Filter for numbers that fall within brackets '()'
  const regex = /\(([\d+\-*/\s]+)\)/g;
  
  let match;
  let total = 0;

  // Filters out letters from input
  input = input.replace(/[a-zA-Z ]+\)/g, ")");

  // If the input contains an expression that ends with an operator, it replaces it with +0) to avoid errors
  input = input.replace(/[+\-*\/]\s*\)/g, "+0)");

  // Iterates over those numbers
  while ((match = regex.exec(input)) !== null) {
    // Evaluates the arithmetic expression enclosed in brackets
    let expression = match[1];
    let result = eval(expression);

    // Returns the result
    if (!isNaN(result)) {
      total += result;
    }
  }

  return total;
}
