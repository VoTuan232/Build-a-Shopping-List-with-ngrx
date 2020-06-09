import { createReducer, Action } from '@ngrx/store';
import * as AnimalAction from '../actions/animal.action';
import { on } from 'cluster';
import { AnimalItem } from '../models/animal-item.model';

export interface AnimalState {
  lists: AnimalItem[];
  loading: boolean;
  error: Error;
}

export const initialState: AnimalState = {
  lists: [],
  loading: true,
  error: undefined,
};

const animalReducer = createReducer(
  initialState,
  on(AnimalAction.createAnimal, (state, { animal }) => ({
    ...state,
    lists: [...state.lists, animal],
    loading: false,
  }))
);

export function reducer(state: AnimalState | undefined, action: Action) {
  return animalReducer(state, action);
}
