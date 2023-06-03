import { audio, audioControl } from "./DOMElems.js";

let muteAudio = true;

const toggleAudio = () => {
    if (muteAudio) {
        muteAudio = !muteAudio;
        audio.play();
        // audioControl.style.filter = "brightness(50%)";
        audioControl.querySelector('img').src = './img/sound-off.svg';

    } else {
        muteAudio = !muteAudio;
        audio.pause();
        // audioControl.style.filter = "brightness(100%)";
        audioControl.querySelector('img').src = './img/sound-on.svg';
    }
}

export default toggleAudio;