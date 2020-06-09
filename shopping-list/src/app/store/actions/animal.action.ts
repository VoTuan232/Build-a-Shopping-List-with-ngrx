import { createAction, props } from '@ngrx/store';
import { AnimalItem } from '../models/animal-item.model';

export enum AnimalActionTypes {
  ADD_ITEM = '[Animal] Add Animal',
}

export const createAnimal = createAction(
  AnimalActionTypes.ADD_ITEM,
  props<{ animal: AnimalItem }>()
);
