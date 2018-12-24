namespace NaiveVisitor {

class Renderer { /* Rendering methods */ }
class ScreenReader { /* Screen reading methods */ }

interface IDocumentItem {
    render(renderer: Renderer): void;
    read(screenReader: ScreenReader): void;
}

class Paragraph implements IDocumentItem {
    /* Paragraph members omitted */
    render(renderer: Renderer) {
        /* Uses renderer to draw itself on screen */
    }

    read(screenReader: ScreenReader) {
        /* Uses screenReader to read itself */
    }
}

class Picture implements IDocumentItem {
    /* Picture members omitted */
    render(renderer: Renderer) {
        /* Uses renderer to draw itself on screen */
    }

    read(screenReader: ScreenReader) {
        /* Uses screenReader to read itself */
    }
}

class Table implements IDocumentItem {
    /* Table members omitted */
    render(renderer: Renderer) {
        /* Uses renderer to draw itself on screen */
    }

    read(screenReader: ScreenReader) {
        /* Uses screenReader to read itself */
    }
}

let doc: IDocumentItem[] = [new Paragraph(), new Table()];
let renderer: Renderer = new Renderer();

for (let item of doc) {
    item.render(renderer);
}

}