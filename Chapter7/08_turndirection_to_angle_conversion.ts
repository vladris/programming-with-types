namespace TurnDirectionToAngleConversion {

enum TurnDirection {
    Left,
    Right
}

function turnAngle(turn: TurnDirection): number {
    switch (turn) {
        case TurnDirection.Left: return -90;
        case TurnDirection.Right: return 90;
        default: throw new Error("Unknown TurnDirection");
    }
}

}