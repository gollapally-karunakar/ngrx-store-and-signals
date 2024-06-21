import { computed } from "@angular/core"
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals"
import { initialCounterState } from "src/app/states/counter/counter.reducer"

export interface CounterStateFromSignals {
    count: number
}

const initialSignalCounterState: CounterStateFromSignals = {
    count: 0
}

export const CounterStoreSignal = signalStore(
    withState(initialCounterState),
    withComputed(({count}) => ({
        doubleCount: computed(() => count() * 2)
    })),
    withMethods(({count, ...store}) => ({
        increment() {
            patchState(store, {count: count() + 1})
        },
        decrement() {
            patchState(store, {count: count() - 1})
        },
        reset() {
            patchState(store, {count: 0})
        },
    }))
)