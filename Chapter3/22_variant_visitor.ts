namespace VariantVisitor {

class Variant<T1, T2, T3> {
    readonly value: T1 | T2 | T3;
    readonly index: number;

    private constructor(value: T1 | T2 | T3, index: number) {
        this.value = value;
        this.index = index;
    }

    static make1<T1, T2, T3>(value: T1): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 0);
    }

    static make2<T1, T2, T3>(value: T2): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 1);
    }

    static make3<T1, T2, T3>(value: T3): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 2);
    }
}

function visit<T1, T2, T3>(
    variant: Variant<T1, T2, T3>,
    func1: (value: T1) => void,
    func2: (value: T2) => void,
    func3: (value: T3) => void
) {
    switch (variant.index) {
        case 0: func1(<T1>variant.value); break;
        case 1: func2(<T2>variant.value); break;
        case 2: func3(<T3>variant.value); break;
        default: throw new Error();
    }
}

class Renderer {
    renderParagraph(paragraph: Paragraph) { /* ... */ }
    renderPicture(picture: Picture) { /* ... */ }
    renderTable(table: Table) { /* ... */ }
}

class ScreenReader {
    readParagraph(paragraph: Paragraph) { /* ... */ }
    readPicture(picture: Picture) { /* ... */ }
    readTable(table: Table) { /* ... */ }
}

class Paragraph {
    /* Paragraph members omitted */
}

class Picture {
    /* Picture members omitted */
}

class Table {
    /* Table members omitted */
}

let doc: Variant<Paragraph, Picture, Table>[] = [
    Variant.make1(new Paragraph()),
    Variant.make3(new Table())
];

let renderer: Renderer = new Renderer();

for (let item of doc) {
    visit(item,
        (paragraph: Paragraph) => renderer.renderParagraph(paragraph),
        (picture: Picture) => renderer.renderPicture(picture),
        (table: Table) => renderer.renderTable(table)
    );
}

}