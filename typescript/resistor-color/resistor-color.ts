export const colorCode = (color:string): number => {
  //define dictionary to map colors to numbers
  const colorToNumbers: Record<string, number> = {
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

  return colorToNumbers[color];
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

console.log(colorCode("brown"));
console.log(COLORS);