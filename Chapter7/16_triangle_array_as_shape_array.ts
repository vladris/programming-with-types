namespace TriangleArrayAndShapeArray {

class Shape {
    /* Shape members */
}

declare const TriangleType: unique symbol; 
class Triangle extends Shape {
    [TriangleType]: void;
    /* Triangle members */
}

declare function makeTriangles(): Triangle[];
declare function draw(shapes: Shape[]): void;

draw(makeTriangles());

}