document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('[data-audio]');
    const audioControl = document.querySelector('[data-audio-control]');
    let muteAudio = true;

    const toggleAudio = () => {
        if (muteAudio) {
            muteAudio = !muteAudio;
            audio.play();
            audioControl.style.filter = "brightness(50%)";
        } else {
            muteAudio = !muteAudio;
            audio.pause();
            audioControl.style.filter = "brightness(100%)";
        }
    }
    
    audioControl.addEventListener('click', toggleAudio);
});

