namespace AlternativeStateMachineImplementation {

class TextProcessor {
    private result: string[] = [];
    private processLine: (line: string) => void = this.processTextLine;
    private codeSample: string[] = [];

    processText(lines: string[]): string[] {
        this.result = [];
        this.processLine = this.processTextLine;

        for (let line of lines) {
            this.processLine(line);
        }

        return this.result;
    }

    private processTextLine(line: string): void {
        this.result.push(line);

        if (line.startsWith("<!--")) {
            this.loadCodeSample(line);
            
            this.processLine = this.processMarkerLine;
        }
    }

    private processMarkerLine(line: string): void {
        this.result.push(line);

        if (line.startsWith("```ts")) {
            this.result = this.result.concat(this.codeSample);

            this.processLine = this.processCodeLine;
        }
    }

    private processCodeLine(line: string): void {
        if (line.startsWith("```")) {
            this.result.push(line);

            this.processLine = this.processTextLine;
        }        
    }

    private loadCodeSample(line: string) {
        /* Load sample based on marker, store in this.codeSample  */
    }
}

}