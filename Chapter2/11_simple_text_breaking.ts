namespace SimpleTextBreaking {

function lineBreak(text: string, lineLength: number): string[] {
    let lines: string[] = [];
    
    while (text.length > lineLength) {
        lines.push(text.substr(0, lineLength));
        text = text.substr(lineLength);
    }

    lines.push(text);
    return lines;
}

console.log(lineBreak("Testing, testing", 5));
console.log(lineBreak("..👧🏾", 5));
console.log(lineBreak("...👧🏾", 5));
console.log(lineBreak("....👧🏾", 5));

}