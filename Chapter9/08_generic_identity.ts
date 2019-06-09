namespace GenericIdentity {

function identity<T>(value: T): T {
    return value;
}

type TransformFunction = (value: number) => number;

function getNumbers(
    transform: TransformFunction = identity): number[] {
    /* ... */
    throw Error("Not implemented");
}

class Widget { }
class AssembledWidget { }

type PluckFunction = (widgets: Widget[]) => Widget[];

function assembleWidgets(
    pluck: PluckFunction = identity): AssembledWidget[] {
    /* ... */
    throw Error("Not implemented");
}

}