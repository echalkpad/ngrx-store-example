import { Component, ChangeDetectionStrategy } from 'angular2/core';
import { Observable } from 'rxjs';
import { CounterActions } from '../../actions';

@Component({
    selector: 'counter',
    styles: [require('./counter.component.scss').toString()],
    template: require('./counter.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
    counter: Observable<number>;
    constructor(private counterActions: CounterActions) {
        this.counter = this.counterActions.counter$;
    }

    increase() {
        this.counterActions.increment();
    }

    decrease() {
        this.counterActions.decrement();
    }
}
