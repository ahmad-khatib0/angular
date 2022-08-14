import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  constructor(
    private shoppingListService: ShoppingListService,
    private loggingService: LoggingService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
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

  onEditItem(id: number) {
    this.shoppingListService.startedEditing.next(id);
  }
}
