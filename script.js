const audio = document.querySelector('[data-audio]');
const audioControl = document.querySelector('[data-audio-control]');
let muteAudio = true;

const hackerAnimElem = document.querySelector('[data-hacker-anim]');

const characters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "#", "$", "%", "&", "?"];

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

audioControl.addEventListener('click', toggleAudio);

let interval = null;

// const hackEffect = (e) => {
//     let iterations = 0;
//     clearInterval(interval);

//     interval = setInterval(() => {
//         e.target.innerText = e.target.innerText.split('')
//         .map((letter, index) => {
//             if (index < iterations) {
//                 return e.target.dataset.word[index];
//             }
//             return characters[Math.floor(Math.random() * 42)];
//         })
//         .join('');

//         if (iterations >= e.target.dataset.word.length) clearInterval(interval);
    
//         iterations += 1 / 6;
//     }, 40);    
// }

// hackerAnimElem.addEventListener('mouseover', hackEffect);

const hackEffect = (e) => {
    let iterations = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        e.innerText = e.innerText.split('')
        .map((letter, index) => {
            if (index < iterations) {
                return e.dataset.word[index];
            }
            return characters[Math.floor(Math.random() * 42)];
        })
        .join('');

        if (iterations >= e.dataset.word.length) clearInterval(interval);
    
        iterations += 1 / 10;
    }, 30);    
}

setInterval(() => {
    hackEffect(hackerAnimElem);
}, 10000);
