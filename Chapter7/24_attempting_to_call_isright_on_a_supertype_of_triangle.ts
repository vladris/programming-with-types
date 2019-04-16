namespace AttemptingToCallIsRightOnASupertypeOfTriangle {

class Shape {
    /* Shape members */
}

declare const TriangleType: unique symbol; 
class Triangle extends Shape {
    [TriangleType]: void;

    isRight(): boolean {
        let result: boolean = false;

        /* Determine whether it is a right triangle */

        return result;
    } 
 
    /* More Triangle members */
}

function drawTriangle(triangle: Triangle): void {
    console.log(triangle.isRight());
    /* ... */
}

function render(
    shape: Shape,    
    drawFunc: (argument: Shape) => void): void {    
    drawFunc(shape);  
}

// Uncomment below to see compilation error
// render(new Shape(), drawTriangle);

}