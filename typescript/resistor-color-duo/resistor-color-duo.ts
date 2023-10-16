export function decodedValue(bandColors: string[]): number {
 //Define dictionnary to map colors to numbers
  const colorToNumber: Record<string, number> = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9
  };

  //look up first two colors' number
  const firstColor = bandColors[0];
  const secondColor = bandColors[1];
  const firstNumber = colorToNumber[firstColor];
  const secondNumber = colorToNumber[secondColor];

  //Combine previous result to get double digits
  const result = firstNumber * 10 + secondNumber;

  return result;
}

console.log(decodedValue(["brown", "green"]));
console.log(decodedValue(["brown", "green", "violet"]));
