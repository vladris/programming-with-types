namespace SketchOfIncompatibleComponents {

function disintegrate() { }

function trajectoryCorrection(momentum: number) {
    if (momentum < 2 /* Ns */)  {
        disintegrate();
    }

    /* ... */
}

function provideMomentum() {
    trajectoryCorrection(1.5 /* lbfs */);
}

}