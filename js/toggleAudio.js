import { audio, audioControl } from "./DOMElems.js";

let muteAudio = true;

const toggleAudio = () => {
    if (muteAudio) {
        muteAudio = !muteAudio;
        audio.play();
        audioControl.querySelector('img').src = './img/sound-off.svg';

    } else {
        muteAudio = !muteAudio;
        audio.pause();
        audioControl.querySelector('img').src = './img/sound-on.svg';
    }
}

export default toggleAudio;