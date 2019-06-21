namespace RenderAllSketch {

function renderAll<T>(iter: Iterable<T>): void {
    for (const item of iter) {
        // item.render();
        // Uncomment to see compiler error for missing render()
    }
}

}