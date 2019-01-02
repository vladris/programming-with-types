namespace CollectionWithSumType {

class Paragraph {
    /* ... */
}

class Picture {
    /* ... */
}

class Table {
    /* ... */
} 

class MyDocument {
    items: (Paragraph | Picture | Table)[];

    constructor() {
        this.items = [];
    }

    /* ... */
}

}