export function isLeap(year: number): boolean {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100 but not by 400
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        } else {
            return true;
        }

    }
  // If the year is not divisible by 4, it is not a leap year
  return false;
}