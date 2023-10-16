export class DnDCharacter {
  public strength: number = DnDCharacter.generateAbilityScore();
  public dexterity: number = DnDCharacter.generateAbilityScore();
  public constitution: number = DnDCharacter.generateAbilityScore();
  public intelligence: number = DnDCharacter.generateAbilityScore();
  public wisdom: number = DnDCharacter.generateAbilityScore();
  public charisma: number = DnDCharacter.generateAbilityScore();
  public hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution);

  public static generateAbilityScore(): number {
    const rolls: number[] = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    rolls.sort().reverse(); // Sort the rolls in descending order
    return rolls.slice(0, 3).reduce((sum, roll) => sum + roll, 0); // Sum the largest three rolls
  }

  public static getModifierFor(abilityValue: number): number {
    if (abilityValue < 3 || abilityValue > 18) {
      return NaN;
    }
    return Math.floor((abilityValue - 10) / 2);
  }
}