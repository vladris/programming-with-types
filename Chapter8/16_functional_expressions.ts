namespace FunctionalExpressions {

type Expression = () => number;

function makeSumExpression(a: number, b: number): Expression {
    return () => a + b;
}

function makeMulExpression(a: number, b: number): Expression {
    return () => a * b;
}

}