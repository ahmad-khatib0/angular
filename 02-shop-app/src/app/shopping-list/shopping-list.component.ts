import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(
    private shoppingListService: ShoppingListService,
    private loggingService: LoggingService
  ) {}
  private ingredientChanged: Subscription;

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChanged =
      this.shoppingListService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => (this.ingredients = ingredients)
      );

    this.loggingService.printLog('hello from ShoppingListComponent ngOnInit');
  }
  ngOnDestroy(): void {
    this.ingredientChanged.unsubscribe();
  }
  ingredients: Ingredient[];

  onEditItem(id: number) {
    this.shoppingListService.startedEditing.next(id);
  }
}
