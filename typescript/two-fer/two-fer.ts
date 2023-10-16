/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(person: string): string {
  if (person === undefined) {
    return "One for you, one for me."
  } else {
    return `One for ${person}, one for me.`;
  }
}