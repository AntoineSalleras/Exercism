export function decodedResistorValue(colors: string[]): string {
  // Define a lookup table that maps color combinations to resistance values in ohms
    const valueTable: Record<string, number> = {
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

    const [color1, color2, color3] = colors;

     // Check that each input color string exists in the valueTable ( this was used because my outputs were "Nan" problem was due to not including First capital letter to colors in console logs )
   // if (!(color1 in valueTable) || !(color2 in valueTable) || !(color3 in valueTable)) {
        //return "Invalid color";
    //}
  
    // Combine the values of the first two colors to get the base value in ohms
    const baseValue = (valueTable[color1] * 10) + valueTable[color2];
  
    // Calculate the power of ten based on the third color to get the total value in ohms
    const power = 10 ** valueTable[color3];
  
    // Calculate the total resistance value in ohms
    const resistance = baseValue * power;
  
    // Define an array of metric prefixes for larger magnitudes of ohms
    const prefixes = ["", "kilo", "mega", "giga", "tera"];
  
    // Determine the appropriate metric prefix to use based on the magnitude of the resistance value
    let prefixIndex = 0;
    let tempResistance = resistance;
    while (tempResistance >= 1000 && prefixIndex < prefixes.length - 1) {
      tempResistance /= 1000; // Divide the resistance value by 1000 to convert it to the next prefix magnitude
      prefixIndex++; // Increment the prefixIndex to move to the next prefix
    }
  
    // Format the resistance value as a string with the appropriate metric prefix and return it
    return `${tempResistance} ${prefixes[prefixIndex]}ohms`;
}
