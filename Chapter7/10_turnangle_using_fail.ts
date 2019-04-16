namespace TurnAngleUsingFail {

enum TurnDirection {
    Left,
    Right
}

function fail(message: string): never {
    console.error(message);
    throw new Error(message);
}

// Uncomment below to see compiler error

/*
function turnAngle(turn: TurnDirection): number {
    switch (turn) {
        case TurnDirection.Left: return -90;
        case TurnDirection.Right: return 90;
        default: fail("Unknown TurnDirection");
    }
}
*/

}