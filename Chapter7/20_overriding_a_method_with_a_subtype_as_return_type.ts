namespace OverridingAMethodWithASubtypeAsReturnType {

class Shape {
    /* Shape members */
}

declare const TriangleType: unique symbol; 
class Triangle extends Shape {
    [TriangleType]: void;
    /* Triangle members */
}

class ShapeMaker {
    make(): Shape {
        return new Shape();
    }
}

class TriangleMaker extends ShapeMaker {
    make(): Triangle {
        return new Triangle();
    }
}

}