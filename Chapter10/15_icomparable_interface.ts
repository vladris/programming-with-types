namespace IComparableInterface {

enum ComparisonResult {
    LessThan,
    Equal,
    GreaterThan
}

interface IComparable<T> {
    compareTo(value: T): ComparisonResult;
}

}