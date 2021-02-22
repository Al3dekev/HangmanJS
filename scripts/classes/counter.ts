export class Counter {
    private counter: number = 0;
    private $counter: HTMLElement;
    private $max: HTMLElement;

    constructor(
        $elem: HTMLElement,
        private maxCounter: number = 10,
    ) {
        this.$counter = $elem.querySelector('[data-counter="counter"]');
        this.$max = $elem.querySelector('[data-counter="max"]');

        this.$max.innerText = this.maxCounter.toString();
    }

    public doIncrement(): void {
        this.counter++;
        this.$counter.innerText = this.counter.toString();
    }

    public isFinished(): boolean {
        return this.counter >= this.maxCounter;
    }
}
