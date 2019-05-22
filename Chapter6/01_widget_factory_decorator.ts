namespace WidgetFactoryDecorator {

class Widget { }

interface IWidgetFactory {
    makeWidget(): Widget;
}

class WidgetFactory implements IWidgetFactory {
    public makeWidget(): Widget {
        return new Widget();
    }
}

class SingletonDecorator implements IWidgetFactory {
    private factory: IWidgetFactory;
    private instance: Widget | undefined;

    constructor(factory: IWidgetFactory) {
        this.factory = factory;
    }

    public makeWidget(): Widget {
        if (this.instance == undefined) {
            this.instance = this.factory.makeWidget();
        }

        return this.instance;
    }
}

}