namespace CombiningInterfaces {

interface ISpeaker {
    playSound(/* ... */): void;
}

interface IVolumeControl {
    volumeUp(): void;
    volumeDown(): void;
}

interface ISpeakerWithVolumeControl extends ISpeaker, IVolumeControl {
}

class MySpeaker implements ISpeakerWithVolumeControl {
    playSound(/* ... */): void {
        // Concrete implementation
    }

    volumeUp(): void {
        // Concrete implementation
    }

    volumeDown(): void {
        // Concrete implementation
    }
}

class MusicPlayer {
    speaker: ISpeakerWithVolumeControl;

    constructor(speaker: ISpeakerWithVolumeControl) {
        this.speaker = speaker;
    }
}

}