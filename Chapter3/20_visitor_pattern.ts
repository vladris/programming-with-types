namespace VisitorPattern {

interface IVisitor {
    visitParagraph(paragraph: Paragraph): void;
    visitPicture(picture: Picture): void;
    visitTable(table: Table): void;
}

class Renderer implements IVisitor {
    visitParagraph(paragraph: Paragraph) { /* ... */ }
    visitPicture(picture: Picture) { /* ... */ }
    visitTable(table: Table) { /* ... */ }
}

class ScreenReader implements IVisitor {
    visitParagraph(paragraph: Paragraph) { /* ... */ }
    visitPicture(picture: Picture) { /* ... */ }
    visitTable(table: Table) { /* ... */ }
}

interface IDocumentItem {
    accept(visitor: IVisitor): void;
}

class Paragraph implements IDocumentItem {
    /* Paragraph members omitted */
    accept(visitor: IVisitor) {
        visitor.visitParagraph(this);
    }
}

class Picture implements IDocumentItem {
    /* Picture members omitted */
    accept(visitor: IVisitor) {
        visitor.visitPicture(this);
    }
}

class Table implements IDocumentItem {
    /* Table members omitted */
    accept(visitor: IVisitor) {
        visitor.visitTable(this);
    }
}

let doc: IDocumentItem[] = [new Paragraph(), new Table()];
let renderer: IVisitor = new Renderer();

for (let item of doc) {
    item.accept(renderer);
}

}