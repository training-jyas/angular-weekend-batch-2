import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Recipe } from './recipes/recipe.model';

@Injectable()
export class StorageService {
    constructor(private http: Http) {}

    getAllRecipes() {
        return this.http.get('https://ng-recipe-cart.firebaseio.com/recipes.json')
        .map((response: Response) => {
            const responseJson = response.json();
            const recipes: Recipe[] = [];
            for (const each in responseJson) {
                if (responseJson.hasOwnProperty(each)) {
                    const name = responseJson[each]['name'];
                    const description = responseJson[each]['description'];
                    const imagePath = responseJson[each]['imagePath'];
                    const ingredients = responseJson[each]['ingredients'];
                    const id = each;
                    const eachRecipe = new Recipe(name, description, imagePath, ingredients, id);
                    recipes.push(eachRecipe);
                }
            }
            return recipes;
        });
    }

    addRecipe(recipe: Recipe) {
        return this.http.post('https://ng-recipe-cart.firebaseio.com/recipes.json', recipe);
    }

    updateRecipe(recipe: Recipe, id: string) {
        return this.http.put('https://ng-recipe-cart.firebaseio.com/recipes/' + id + '.json', recipe);
    }

    deleteRecipe(id: string) {
        return this.http.delete('https://ng-recipe-cart.firebaseio.com/recipes/' + id + '.json');
    }
}
