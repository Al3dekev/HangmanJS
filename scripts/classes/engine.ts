import {WordManager} from './word-manager';
import {Counter} from './counter';
import {Keyboard} from './keyboard';

export class Engine {
    private found: boolean = false;
    Wordtry: HTMLElement;
    private counter: Counter;
    private keyboard: Keyboard;
    private manager: WordManager;

    constructor(
        $keyboardElement: HTMLElement,
        $wordElement: HTMLElement,
        $counterElement: HTMLElement,
        $InputWordTry: HTMLElement
    ) {
        this.Wordtry = $InputWordTry
        this.counter = new Counter($counterElement);
        this.keyboard = new Keyboard($keyboardElement, this);
        this.manager = new WordManager($wordElement, this);
    }

    public start(): void {
        this.counter.reset();
        this.keyboard.reset();
        this.manager.chooseWord();
    }

    public letterPressed(letter: string): boolean {
        if (this.manager.isContain(letter)) {
            this.manager.revelLetter(letter);

            if (this.checkWin()) {
                alert('You win!');
                this.start();
            }

            return true;
        }

        this.counter.doIncrement();

        if (this.checkLoose()) {
            alert('You have lost.');
            this.start();
        }

        return false;
    }

    private checkLoose(): boolean {
        return this.counter.isFinished();
    }

    private checkWin(): boolean {
        return this.manager.isFinished();
    }
}
