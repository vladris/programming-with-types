namespace SketchOfFunctorInterface {

interface Functor<T> {
    map<U>(func: (value: T) => U): Functor<U>;
}

}