export function toRna(dna: string) {
    //define object that maps DNA nucleotides to RNA
    const rnaMap: {[key: string]: string} = {
        "G": "C",
        "C": "G",
        "T": "A",
        "A": "U",
    };

    let rna = "";

    //iterate over each nucleotide in the DNA sequence
    for (let i = 0; i < dna.length; i++) {
        const nucleotide = dna[i];//assign value to of current character in dna string
        //if current nucleotide is not in rnaMap throw error
        if (!(nucleotide in rnaMap)) {
            throw new Error("Invalid input DNA.");
        }
        rna += rnaMap[nucleotide];// or rna = `${rna}${rnaMap[nucleotide]}`;
    }

    return rna;
}
