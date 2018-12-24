namespace VariantShapes {

class Variant<T1, T2, T3> {
    readonly value: T1 | T2 | T3;
    readonly index: number;

    private constructor(value: T1 | T2 | T3, index: number) {
        this.value = value;
        this.index = index;
    }

    static make1<T1, T2, T3>(value: T1): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 0);
    }

    static make2<T1, T2, T3>(value: T2): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 1);
    }

    static make3<T1, T2, T3>(value: T3): Variant<T1, T2, T3> {
        return new Variant<T1, T2, T3>(value, 2);
    }
}

class Point {
    x: number = 0;
    y: number = 0;
}

class Circle {
    x: number = 0;
    y: number = 0;
    radius: number = 0;
}

class Rectangle {
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
}

type Shape = Variant<Point, Circle, Rectangle>;

let shapes: Shape[] = [
    Variant.make2(new Circle()),
    Variant.make3(new Rectangle())
];

for (let shape of shapes) {
    switch (shape.index) {
        case 0:
            let point: Point = <Point>shape.value;
            console.log(`Point ${JSON.stringify(point)}`);
            break;
        case 1:
            let circle: Circle = <Circle>shape.value;
            console.log(`Circle ${JSON.stringify(circle)}`);
            break;
        case 2:
            let rectangle: Rectangle = <Rectangle>shape.value;
            console.log(`Rectangle ${JSON.stringify(rectangle)}`);
            break;
        default:
            throw new Error();
    }
}

}