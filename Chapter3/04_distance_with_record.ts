namespace DistanceWithRecord {

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

function distance(point1: Point, point2: Point): number {
    return Math.sqrt(
        (point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
}

}