namespace DefaultPluck {

class Widget { }
class AssembledWidget { }

type PluckFunction = (widgets: Widget[]) => Widget[];

function pluckAll(widgets: Widget[]): Widget[] {
    return widgets;
}

function assembleWidgets(
    pluck: PluckFunction = pluckAll): AssembledWidget[] {
    /* ... */
    return [];
}

}