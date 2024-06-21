import { Component, Inject, computed, effect, inject, signal } from '@angular/core';
import { CounterStoreSignal } from '../store/counterSignal.store';

@Component({
  selector: 'app-signal-counter',
  templateUrl: './signal-counter.component.html',
  styleUrls: ['./signal-counter.component.scss'],
  providers: [CounterStoreSignal]
})
export class SignalCounterComponent {

  count = signal(0);
  double = computed(() => this.count() * 2);
  counterStoreSignal = inject(CounterStoreSignal);

  constructor() {
    effect(() => {
      console.log("Single Count: " + this.count());
    })
  }


  increment() {
    this.count.update(num => num + 1);
  }

  decrement() {
    this.count.update(num => num - 1);
  }

  reset() {
    this.count.set(0);
  }

}
