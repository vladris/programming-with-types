namespace AllAnagrams {

declare function anagram(input: string): string[];

function allAnagrams(inputs: string[]): string[] {
    let result: string[] = [];

    for (const input of inputs) {
        result = result.concat(anagram(input));
    }

    return result;
}

}