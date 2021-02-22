import {WordManager} from './word-manager';
import {Counter} from './counter';
import {Keyboard} from './keyboard';

export class Engine {
    private found: boolean = false;
    private counter: Counter;
    private keyboard: Keyboard;
    private manager: WordManager;

    constructor(
        $keyboardElement: HTMLElement,
        $wordElement: HTMLElement,
    ) {
        this.counter = new Counter();
        this.keyboard = new Keyboard($keyboardElement, this);
        this.manager = new WordManager($wordElement, this);
    }

    public start(): void {

    }

    public isGameWinAndFinish(): boolean {
        return false;
    }

    public letterPressed(letter: string): boolean {
        if (this.manager.isContain(letter)) {
            this.manager.revelLetter(letter);
            return true;
        }

        return false;
    }
}
