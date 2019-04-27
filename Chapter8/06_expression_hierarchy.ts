namespace ExpressionHierarchy {

interface IExpression {
    eval(): number;
}

abstract class BinaryExpression implements IExpression {
    readonly a: number;
    readonly b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    abstract eval(): number;
}

class SumExpression extends BinaryExpression {
    eval(): number {
        return this.a + this.b;
    }
}

class MulExpression extends BinaryExpression {
    eval(): number {
        return this.a * this.b;
    }
}

}