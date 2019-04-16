namespace ReturnsTriangleAsReturnsShape {

class Shape {
    /* Shape members */
}

declare const TriangleType: unique symbol; 
class Triangle extends Shape {
    [TriangleType]: void;
    /* Triangle members */
}

declare function makeTriangle(): Triangle;
declare function makeShape(): Shape;

function useFactory(factory: () => Shape): Shape {
    return factory();
}

let shape1: Shape = useFactory(makeShape);
let shape2: Shape = useFactory(makeTriangle);
    
}