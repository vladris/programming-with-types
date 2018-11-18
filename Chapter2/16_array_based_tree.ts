namespace ArrayBasedTree {

class Tree {
    nodes: (number | undefined)[] = [];

    left_child_index(index: number): number {
        return index * 2;
    }

    right_child_index(index: number): number {
        return index * 2 + 1;
    }

    add_level() {
        let newNodes: (number | undefined)[] = 
            new Array(this.nodes.length * 2 + 1);

        for (let i = 0; i < this.nodes.length; i++) {
            newNodes[i] = this.nodes[i];
        }
        this.nodes = newNodes;
    }
}

}