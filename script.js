const audio = document.querySelector('[data-audio]');
const audioControl = document.querySelector('[data-audio-control]');
let muteAudio = true;

const hackerAnimElem = document.querySelector('[data-hacker-anim]');
// const characters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "#", "$", "%", "&", "?"];
const characters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "#", "$", "%", "&", "?"];

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

const hackEffect = (e) => {
    let iterations = 0;

    const interval = setInterval(() => {
        e.target.innerText = e.target.innerText.split('')
        .map(letter => characters[Math.floor(Math.random() * 42)])
        .join('');

        if (iterations >= 9) clearInterval(interval);
    
        iterations += 1;
    }, 50);

    
}

hackerAnimElem.addEventListener('mouseover', hackEffect);

