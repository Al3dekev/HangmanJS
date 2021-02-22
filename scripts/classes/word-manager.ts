import {Engine} from './engine';

export class WordManager {
    private words: Array<string> = [
        'bonjour',
        'javascript',
        'git',
        'foobar',
    ];
    private wordToFind: string|null = null;

    constructor(
        private $elem: HTMLElement,
        private engine: Engine,
        words: Array<string> = [],
    ) {
        if (words.length > 0) {
            this.words = words;
        }

        this.chooseWord();
    }

    public chooseWord(): void {
        const index = Math.floor(Math.random() * this.words.length);
        this.wordToFind = this.words[index].toUpperCase();

        this.updateWordContainerLetters();
    }

    public isContain(letter: string): boolean {
        return this.wordToFind.indexOf(letter.toUpperCase()) !== -1;
    }

    public revelLetter(letter: string): void {
        letter = letter.toUpperCase();
        for (let i = 0; i < this.wordToFind.length; i++) {
            if (letter === this.wordToFind[i]) {
                // incrementCounterLetters();
                this.$elem.querySelector<HTMLElement>('[data-index="' + i + '"]').innerText = letter;
            }
        }
    }

    private updateWordContainerLetters(): void {
        this.$elem.innerHTML = '';

        for (let i = 0; i < this.wordToFind.length; i++) {
            const $letter = document.createElement('span');
            $letter.classList.add('letter');
            $letter.setAttribute('data-index', i.toString());
            this.$elem.appendChild($letter);
        }
    }
}
