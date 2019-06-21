namespace RenderAllWithConstraints {

interface IRenderable {
    render(): void;
}

function renderAll<T extends IRenderable>(iter: Iterable<T>): void {
    for (const item of iter) {
        item.render();
    }
}

}