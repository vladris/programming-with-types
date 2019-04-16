namespace TriangleSquareCircleAsTriangleSquare {

declare const TriangleType: unique symbol; 
class Triangle {
    [TriangleType]: void;
    /* Triangle members */
}

declare const SquareType: unique symbol;
class Square {
    [SquareType]: void;
    /* Square members */
}

declare const CircleType: unique symbol;
class Circle {
    [CircleType]: void;
    /* Circle members */
}

declare function makeShape(): Triangle | Square | Circle;
declare function draw(shape: Triangle | Square): void;

// Uncomment to see compilation error
// draw(makeShape());    

}