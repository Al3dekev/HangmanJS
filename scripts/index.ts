import {Engine} from './classes/engine';

const engine = new Engine(
    document.querySelector('#letter-buttons-container'),
    document.querySelector('#word-container'),
    document.querySelector('#error-counter-display'),
);
