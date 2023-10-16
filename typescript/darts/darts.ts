export function score(x: number, y: number): number {
   // Calculate the distance of the dart's landing position from the origin (0, 0) using the Pythagorean theorem.
  const distance = Math.sqrt(x ** 2 + y ** 2);
  if (distance > 10) {
    return 0;
  } else if (distance > 5) {
    return 1;
  } else if (distance > 1) {
    return 5;
  } else {
    return 10;
  }
}