namespace Distance {

function distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

}