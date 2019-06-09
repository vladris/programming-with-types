namespace BinaryTreeOfNumbers {

class NumberBinaryTreeNode {
    value: number;
    left: NumberBinaryTreeNode | undefined;
    right: NumberBinaryTreeNode | undefined;

    constructor(value: number) {
        this.value = value;
    }
}

}