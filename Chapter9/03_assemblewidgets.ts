namespace AssembleWidgets {

class Widget { }
class AssembledWidget { }

type PluckFunction = (widgets: Widget[]) => Widget[];

function assembleWidgets(
    pluck: PluckFunction): AssembledWidget[] {
    /* ... */
    throw Error("Not implemented");
}

}