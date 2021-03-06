import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import {
  Router
} from '@angular/router';

import {
  Recipe
} from '../recipe.model';
import {
  RecipesService
} from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private router: Router,
    private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.getRecipes()
      .subscribe(
        (response: Recipe[]) => {
          this.recipes = response;
        }, (error) => {
          console.log('fetch error', error);
        });
    this.recipesService.recipesUpdated
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
        console.log(this.recipes);
        this.router.navigate(['recipes']);
      });
  }

}
