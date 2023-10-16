export function isPangram(sentence: string): boolean {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let isPangram = true;

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    if (!sentence.toLowerCase().includes(letter)) {
      isPangram = false;
      break;
    }
  }

  return isPangram;
}