namespace Downcast {

class Shape {
    /* ... */
}

declare const triangleType: unique symbol;

class Triangle extends Shape {    
    [triangleType]: void;
    /* ... */
}

function useShape(shape: Shape, isTriangle: boolean) {
    if (isTriangle) {
        let triangle: Triangle = <Triangle>shape;
        /* ... */
    }    
    /* ... */
}

let myTriangle: Triangle = new Triangle();

useShape(myTriangle, true);

}