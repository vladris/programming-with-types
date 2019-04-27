namespace VisitorWithOOP {

interface IVisitor {
    visitPanel(panel: Panel): void;
    visitLabel(label: Label): void;
    visitButton(button: Button): void;
}

class Renderer implements IVisitor {
    visitPanel(panel: Panel) { /* ... */ }
    visitLabel(label: Label) { /* ... */ }
    visitButton(button: Button) { /* ... */ }
}

class XmlSerializer implements IVisitor {
    visitPanel(panel: Panel) { /* ... */ }
    visitLabel(label: Label) { /* ... */ }
    visitButton(button: Button) { /* ... */ }
}

interface IUIWidget {
    accept(visitor: IVisitor): void;
}

class Panel implements IUIWidget {
    /* Panel members omitted */
    accept(visitor: IVisitor) {
        visitor.visitPanel(this);
    }
}

class Label implements IUIWidget {
    /* Label members omitted */
    accept(visitor: IVisitor) {
        visitor.visitLabel(this);
    }
}

class Button implements IUIWidget {
    /* Button members omitted */
    accept(visitor: IVisitor) {
        visitor.visitButton(this);
    }
}

}