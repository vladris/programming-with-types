namespace FunctionalWidgetFactory {

class Widget { }

type WidgetFactory = () => Widget;

function makeWidget(): Widget {
    return new Widget();
}

function use10Widgets(factory: WidgetFactory) {
    for (let i = 0; i < 10; i++) {
        let widget = factory();
        /* ... */
    }
}

use10Widgets(makeWidget);    

}