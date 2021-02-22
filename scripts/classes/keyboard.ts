import {Engine} from './engine';
import {Letter} from './letter';

export class Keyboard {
    private letters: Array<Letter> = [];

    constructor(
        private $elem: HTMLElement,
        private engine: Engine,
    ) {
        for (const $letter of this.$elem.querySelectorAll<HTMLButtonElement>('button[data-letter]')) {
            const letter = $letter.getAttribute('data-letter');

            this.letters.push(new Letter($letter, letter, this));
        }
    }

    public updateWordContainerLetters(): void {

    }

    public clear(): void {

    }

    public pressLetter(letter: string): boolean {
        return this.engine.letterPressed(letter);
    }

    public toggleButtonLetter(): void {

    }
}
