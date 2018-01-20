import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private router: Router,
    private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
    this.recipesService.recipeAdded
    .subscribe((recipe: Recipe) => {
      this.recipes.push(recipe);
      const index = this.recipes.length - 1;
      this.router.navigate(['recipes', index]);
    });
    this.recipesService.recipesUpdated
    .subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

}
