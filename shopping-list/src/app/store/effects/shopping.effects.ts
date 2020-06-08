import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { of } from 'rxjs';
import { ShoppingService } from 'src/app/services/shopping.service';
import {
  ShoppingAction,
  ShoppingActionsTypes,
  LoadItemSuccessAction,
  LoadItemFailureAction,
} from '../actions/shopping.action';

@Injectable()
export class ShoppingEffects {
  @Effect() loadShopping$ = this.actions$.pipe(
    ofType<ShoppingAction>(ShoppingActionsTypes.LOAD_ITEM),
    mergeMap(() =>
      this.shoppingService.getShoppingItems().pipe(
        map((data) => {
          return new LoadItemSuccessAction(data);
        }),
        catchError((error) => of(new LoadItemFailureAction(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
