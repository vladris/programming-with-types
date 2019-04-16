namespace DecoratorFunction {

class Widget { }

type WidgetFactory = () => Widget;

function singletonDecorator(factory: WidgetFactory): WidgetFactory {
    let instance: Widget | undefined = undefined;

    return (): Widget => {
        if (instance == undefined) {
            instance = factory();
        }

        return instance;
    };
}

}