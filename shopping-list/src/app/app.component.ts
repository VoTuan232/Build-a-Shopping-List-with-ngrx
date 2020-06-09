import { Component } from '@angular/core';
import { AppState } from './store/models/app-state.model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';
import {
  AddItemAction,
  DeleteItemAction,
  LoadItemAction,
} from './store/actions/shopping.action';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  shoppingItems: Observable<ShoppingItem[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shoppingItems = this.store.select((store) => store.shopping.lists);
    this.loading$ = this.store.pipe(select((store) => store.shopping.loading));
    // this.store
    //   .pipe(select((store) => store.shopping.loading))
    //   .subscribe((res) => console.log('[res pipe]', res));
    // this.store
    //   .select((store) => store.shopping.loading)
    //   .subscribe((res) => console.log('[res select]', res));
    this.error$ = this.store.select((store) => store.shopping.error);

    this.store.dispatch(new LoadItemAction());
  }

  addItem() {
    // this.newShoppingItem.id = uuid();
    //   this.store.dispatch(new AddItemAction(this.newShoppingItem));
    //   this.newShoppingItem = { id: '', name: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
