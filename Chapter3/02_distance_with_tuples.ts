namespace DistanceWithTuples {

type Point = [number, number];

function distance(point1: Point, point2: Point): number {
    return Math.sqrt(
        (point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2);
}

}