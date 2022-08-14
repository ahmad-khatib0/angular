import { Ingredient } from '../../shared/ingredient.mode';
import * as shoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [new Ingredient('Apple', 4), new Ingredient('tomatoes', 10)],
};

// reducer is the equivalent to the mutations
export function shoppingListReducer(
  state = initialState,
  action: shoppingListActions.AddIngredient
) {
  switch (action.type) {
    case shoppingListActions.ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    default:
      return state;
  }
}
