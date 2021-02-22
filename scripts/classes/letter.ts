import {Keyboard} from './keyboard';

export class Letter {
    private internalSelected: boolean = false;
    private internalValid: boolean = false;

    constructor(
        private $elem: HTMLButtonElement,
        private letter: string,
        private keyboard: Keyboard,
    ) {
        this.$elem.addEventListener('click', () => {
            if (!this.selected) {
                this.selected = true;
                this.valid = this.keyboard.pressLetter(this.letter);
            }
        });
    }

    private set selected(value: boolean) {
        this.internalSelected = value;

        if (this.internalSelected) {
            this.$elem.classList.remove('btn-light');
            this.$elem.disabled = true;
        } else {
            this.$elem.classList.add('btn-light');
            this.$elem.disabled = false;
        }
    }

    private get selected(): boolean {
        return this.internalSelected;
    }

    private set valid(value: boolean) {
        if (this.selected) {
            this.internalValid = value;

            if (this.internalValid) {
                this.$elem.classList.add('btn-success');
            } else {
                this.$elem.classList.add('btn-danger');
            }
        } else {
            this.$elem.classList.remove('btn-success');
            this.$elem.classList.remove('btn-danger');
        }
    }

    private get valid(): boolean {
        return this.internalValid;
    }
}
