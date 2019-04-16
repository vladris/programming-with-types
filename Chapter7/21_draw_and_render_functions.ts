namespace DrawAndRenderFunctions {

class Shape {
    /* Shape members */
}

declare const TriangleType: unique symbol; 
class Triangle extends Shape {
    [TriangleType]: void;
    /* Triangle members */
}

declare function drawShape(shape: Shape): void;
declare function drawTriangle(triangle: Triangle): void;

function render(
    triangle: Triangle,
    drawFunc: (argument: Triangle) => void): void {
    drawFunc(triangle);
}

}