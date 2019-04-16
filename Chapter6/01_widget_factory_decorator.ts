namespace WidgetFactoryDecorator {

class Widget { }

interface IWidgetFactory {
    makeWidget(): Widget;
}

class WidgetFactory implements IWidgetFactory {
    makeWidget(): Widget {
        return new Widget();
    }
}

class SingletonDecorator implements IWidgetFactory {
    factory: IWidgetFactory;
    instance: Widget | undefined;

    constructor(factory: IWidgetFactory) {
        this.factory = factory;
    }

    makeWidget(): Widget {
        if (this.instance == undefined) {
            this.instance = this.factory.makeWidget();
        }

        return this.instance;
    }
}

}