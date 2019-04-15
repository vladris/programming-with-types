namespace StateMachineWithSumType {

class TextLineProcessor {
    result: string[];

    constructor(result: string[]) {
        this.result = result;
    }

    process(line: string): TextLineProcessor | MarkerLineProcessor {
        this.result.push(line);

        if (line.startsWith("<!--")) {
            return new MarkerLineProcessor(
                this.result, this.loadCodeSample(line));
        } else {
            return this;
        }
    }

    private loadCodeSample(line: string): string[] {
        /* Load sample based on marker, store in this.codeSample */

        /* Implementation omitted */
        return [];
    }
}

class MarkerLineProcessor {
    result: string[];
    codeSample: string[]

    constructor(result: string[], codeSample: string[]) {
        this.result = result;
        this.codeSample = codeSample;
    }

    process(line: string): MarkerLineProcessor | CodeLineProcessor {
        this.result.push(line);

        if (line.startsWith("```ts")) {
            this.result = this.result.concat(this.codeSample);

            return new CodeLineProcessor(this.result);
        } else {
            return this;
        } 
    }
}

class CodeLineProcessor {
    result: string[];

    constructor(result: string[]) {
        this.result = result;
    }

    process(line: string): CodeLineProcessor | TextLineProcessor {
        if (line.startsWith("```")) {
            this.result.push(line);

            return new TextLineProcessor(this.result);
        } else {
            return this;
        }
    }
}

function processText(lines: string): string[] {
    let processor: TextLineProcessor | MarkerLineProcessor
        | CodeLineProcessor = new TextLineProcessor([]);

    for (let line of lines) {
        processor = processor.process(line);
    }

    return processor.result;
}

}