import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.mode';
import * as fromApp from '../store/app.reducer';
import * as shoppingListActions from '../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  constructor(
    // private shoppingListService: ShoppingListService,
    private loggingService: LoggingService,
    private store: Store<fromApp.AppState>
  ) {}
  private ingredientChanged: Subscription;
  // ingredients: Ingredient[];
  ingredients: Observable<{ ingredients: Ingredient[] }>;

  ngOnInit(): void {
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.ingredientChanged =
    //   this.shoppingListService.ingredientsChanged.subscribe(
    //     (ingredients: Ingredient[]) => (this.ingredients = ingredients)
    //   );
    // this.loggingService.printLog('hello from ShoppingListComponent ngOnInit');
    this.ingredients = this.store.select('shoppingList');
  }
  // ngOnDestroy(): void {
  //   this.ingredientChanged.unsubscribe();
  // }

  onEditItem(index: number) {
    // this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new shoppingListActions.StartEdit(index));
  }
}
