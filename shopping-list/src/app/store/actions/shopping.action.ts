import { ShoppingItem } from '../models/shopping-item.model';
import { Action } from '@ngrx/store';

export enum ShoppingActionsTypes {
  LOAD_ITEM = '[Shopping] Load Item',
  LOAD_ITEM_SUCCESS = '[Shopping] Load Item Success',
  LOAD_ITEM_FAILURE = '[Shopping] Load Item Failure',
  ADD_ITEM = '[Shopping] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  DELETE_ITEM = '[Shopping] Delete Item',
}

export class LoadItemAction implements Action {
  readonly type = ShoppingActionsTypes.LOAD_ITEM;
}

export class LoadItemSuccessAction implements Action {
  readonly type = ShoppingActionsTypes.LOAD_ITEM_SUCCESS;

  constructor(public payload: Array<ShoppingItem>) {}
}

export class LoadItemFailureAction implements Action {
  readonly type = ShoppingActionsTypes.LOAD_ITEM_FAILURE;

  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionsTypes.ADD_ITEM;

  constructor(public payload: Array<ShoppingItem>) {}
}

export class AddItemSuccessAction implements Action {
  readonly type = ShoppingActionsTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: ShoppingItem) {}
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionsTypes.DELETE_ITEM;

  constructor(public payload: string) {}
}

export type ShoppingAction =
  | LoadItemAction
  | LoadItemSuccessAction
  | LoadItemFailureAction
  | AddItemSuccessAction
  | AddItemAction
  | DeleteItemAction;
