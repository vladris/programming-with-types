import GraphemeSplitter = require("grapheme-splitter");

namespace LibraryTextBreaking {

const splitter = new GraphemeSplitter();

function lineBreak(text: string, lineLength: number) {
    let graphemes: string[] = splitter.splitGraphemes(text);
    let lines: string[] = [];

    for (let i = 0; i < graphemes.length; i += lineLength) {
        lines.push(graphemes.slice(i, i + lineLength).join(""));
    }

    return lines;
}

console.log(lineBreak("Testing, testing", 5));
console.log(lineBreak("...👮‍♀️", 5));
console.log(lineBreak("....👮‍♀️", 5));
console.log(lineBreak(".....👮‍♀️", 5));

}