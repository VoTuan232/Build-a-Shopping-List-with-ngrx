import { ShoppingAction, ShoppingActionsTypes } from '../actions/shopping.action';
import { ShoppingItem } from '../models/shopping-item.model';

export interface ShoppingState {
  lists: ShoppingItem[];
  loading: boolean;
  error: Error;
}

const initialState: ShoppingState = {
  lists: [],
  loading: false,
  error: undefined,
};

export function ShoppingReducer(
  state: ShoppingState = initialState,
  action: ShoppingAction
): ShoppingState {
  switch (action.type) {
    case ShoppingActionsTypes.LOAD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ShoppingActionsTypes.LOAD_ITEM_SUCCESS:
      return {
        ...state,
        lists: action.payload,
        loading: false,
        error: undefined,
      };
    case ShoppingActionsTypes.ADD_ITEM_SUCCESS:
      return { ...state, lists: [...state.lists, action.payload], loading: false };
    // case ShoppingActionsTypes.DELETE_ITEM:
    //   return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
