/**
* This function is filters input for numbers, iterates over them, and sums them together before the total sum is returned.
* @author Jasmine Montrichard
*/

function calcNumsInUnfilteredData(input) {
  // Filter for numbers that fall within brackets '()'
  const regex = /\((\d+)\)/g;
  let match;
  let total = 0;

  // Iterate over those numbers
  while ((match = regex.exec(input)) !== null) {
    // Add the number (converted to integer) to the total sum
    total += parseInt(match[1]);
  }

  return total;
}
