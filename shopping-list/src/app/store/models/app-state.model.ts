import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'src/environments/environment.prod';
import { ShoppingReducer, ShoppingState } from '../reducers/shopping.reducer';

export interface AppState {
  shopping: ShoppingState;
}

export const reducers: ActionReducerMap<AppState> = {
  shopping: ShoppingReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];



