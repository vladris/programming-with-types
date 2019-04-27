namespace CircleAdapter {

class Shape {
    id: string;

    constructor(id: string) {
        this.id = id;
    }
}

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Circle extends Shape {
    center: Point;
    radius: number;

    constructor(id: string, center: Point, radius: number) {
        super(id);
        this.center = center;
        this.radius = radius;
    }
}

namespace GeometryLibrary {

    export interface ICircle {
        getCenterX(): number;
        getCenterY(): number;
        getDiameter(): number; 
    }

    /* Operations on ICircle omitted */
}

class CircleAdapter implements GeometryLibrary.ICircle {
    private circle: Circle;

    constructor(circle: Circle) {
        this.circle = circle
    }

    getCenterX(): number {
        return this.circle.center.x;
    }

    getCenterY(): number {
        return this.circle.center.y;
    }

    getDiameter(): number {
        return this.circle.radius * 2;
    }
}

}