import { audioControl, hackerAnimElem } from "./DOMElems.js";

import toggleAudio from "./toggleAudio.js";
import hackEffect from './hackEffect.js';

audioControl.addEventListener('click', toggleAudio);

// hack effect
setInterval(() => {
    hackEffect(hackerAnimElem);
}, 10000);