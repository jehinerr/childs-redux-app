import { Action, createReducer, on, props } from '@ngrx/store';
import * as actions from './counter.actions';

const initialState = 20;

const _counterReducer = createReducer(
  initialState,
  on(actions.increment, (state) => state + 1),
  on(actions.decrement, (state) => state - 1),
  on(actions.reset, (state) => (state = initialState)),
  on(actions.multiply, (state, { number }) => state * number),
  on(actions.divide, (state, { number }) => state / number)
);

export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}
