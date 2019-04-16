namespace EquilateralTriangleDeclaration {

declare const TriangleType: unique symbol; 
class Triangle {
    [TriangleType]: void;
    /* Triangle members */
}

declare const EquilateralTriangleType: unique symbol; 
class EquilateralTriangle extends Triangle {
    [EquilateralTriangleType]: void;
    /* EquilateralTriangle members */
}

}