namespace StateMachineImplementation {

enum TextProcessingMode {
    Text,
    Marker,
    Code,
}

class TextProcessor {
    private mode: TextProcessingMode = TextProcessingMode.Text;
    private result: string[] = [];
    private codeSample: string[] = [];

    processText(lines: string[]): string[] {
        this.result = [];
        this.mode = TextProcessingMode.Text;

        for (let line of lines) {
            this.processLine(line);
        }

        return this.result;
    }

    private processLine(line: string): void {
        switch (this.mode) {
            case TextProcessingMode.Text:
                this.processTextLine(line);
                break;
            case TextProcessingMode.Marker:
                this.processMarkerLine(line);
                break;
            case TextProcessingMode.Code:
                this.processCodeLine(line);
                break;
        }
    }

    private processTextLine(line: string): void {
        this.result.push(line);

        if (line.startsWith("<!--")) {
            this.loadCodeSample(line);

            this.mode = TextProcessingMode.Marker;
        }
    }

    private processMarkerLine(line: string): void {
        this.result.push(line);

        if (line.startsWith("```ts")) {
            this.result = this.result.concat(this.codeSample);

            this.mode = TextProcessingMode.Code;
        }
    }

    private processCodeLine(line: string): void {
        if (line.startsWith("```")) {
            this.result.push(line);

            this.mode = TextProcessingMode.Text;
        }
    }

    private loadCodeSample(line: string) {
        /* Load sample based on marker, store in this.codeSample  */
    }
}

}