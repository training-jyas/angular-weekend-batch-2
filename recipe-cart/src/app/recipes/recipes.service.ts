import {
  EventEmitter,
  Output,
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';

import {
  Recipe
} from './recipe.model';
import {
  Ingredient
} from '../shared/ingredient.model';
import {
  ShoppingListService
} from '../shopping-list/shopping-list.service';
import {
  StorageService
} from '../storage.service';

@Injectable()
export class RecipesService {
  @Output() recipesUpdated = new EventEmitter < Recipe[] > ();

  private recipes: Recipe[] = [];

  constructor(
    private router: Router,
    private storageService: StorageService,
    private slService: ShoppingListService) {}

  getRecipe(id: string) {
    let matchingRecipe = new Recipe('', '', '', [], '');
    this.recipes.forEach(recipe => {
      if (recipe['id'] === id) {
        matchingRecipe = recipe;
      }
    });
    return matchingRecipe;
  }

  getRecipes() {
    return this.storageService.getAllRecipes();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.storageService.addRecipe(recipe)
      .subscribe(response => {
        const responseJson = response.json();
        recipe.id = responseJson['name'];
        this.recipes.push(recipe);
        this.recipesUpdated.emit(this.recipes);
      }, error => {
        console.log('create error', error);
      });
  }

  updateRecipe(recipe: Recipe, id: string) {
    this.storageService.updateRecipe(recipe, id)
      .subscribe(response => {
        const responseJson = response.json();
        console.log(responseJson);
        this.recipes.forEach(item => {
          if (item.id === id) {
            item.id = id;
            item.name = responseJson.name;
            item.description = responseJson.description;
            item.imagePath = responseJson.imagePath;
            item.ingredients = responseJson.ingredients;
          }
        });
        this.recipesUpdated.emit(this.recipes);
      }, error => {
        console.log('update error', error);
      });
  }

  deleteRecipe(id: string) {
    this.storageService.deleteRecipe(id)
      .subscribe(response => {
        console.log('success delete', response.json());
        // rather navigating update the list this.recipes and emit it
        this.router.navigate(['recipes']);
      }, error => {
        console.log('delete error', error);
      });
  }
}
