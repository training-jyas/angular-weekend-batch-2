import { EventEmitter, Output, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  @Output() recipeAdded = new EventEmitter<Recipe>();
  @Output() recipesUpdated = new EventEmitter<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe(
      'A Tasty Biriyani',
      'This biriyani is awesome!', 'https://i.ndtvimg.com/i/2016-06/biryani_625x350_71466587674.jpg', [
        new Ingredient('Rice', 5),
        new Ingredient('Chicken', 1)
      ]),
    new Recipe(
      'Gulab Jamun',
      'This is yummy!', 'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg', [
        new Ingredient('Sugar', 1),
        new Ingredient('Milk', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {
    console.log(this.slService);
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeAdded.emit(recipe);
  }

  updateRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
    this.recipesUpdated.emit(this.recipes.slice());
  }
}
