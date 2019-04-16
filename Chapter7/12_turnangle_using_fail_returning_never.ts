namespace TurnAngleUsingFailReturningNever {

enum TurnDirection {
    Left,
    Right
}

function fail(message: string): never {
    console.error(message);
    throw new Error(message);
}

function turnAngle(turn: TurnDirection): number {
    switch (turn) {
        case TurnDirection.Left: return -90;
        case TurnDirection.Right: return 90;
        default: return fail("Unknown TurnDirection");
    }
}

}