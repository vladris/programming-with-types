namespace UpdatedDrawAndRenterFunctions {

class Shape {
    /* Shape members */
}

declare const TriangleType: unique symbol; 
class Triangle extends Shape {
    [TriangleType]: void;

    isRightAngled(): boolean {
        let result: boolean = false;

        /* Determine whether it is a right-angled triangle */

        return result;
    } 
 
    /* More Triangle members */
}

declare function drawShape(shape: Shape): void;
declare function drawTriangle(triangle: Triangle): void;

function render(
    shape: Shape,
    drawFunc: (argument: Shape) => void): void {
    drawFunc(shape);
}

}