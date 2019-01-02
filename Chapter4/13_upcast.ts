namespace Upcast {

class Shape {
    /* ... */
}

declare const triangleType: unique symbol;

class Triangle extends Shape {
    [triangleType]: void;
    /* ... */
}

function useShape(shape: Shape) {
    /* ... */
}

let myTriangle: Triangle = new Triangle();

useShape(myTriangle);

}