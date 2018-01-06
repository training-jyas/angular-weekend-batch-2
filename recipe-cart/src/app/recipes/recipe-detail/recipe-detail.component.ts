import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipesService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(params.id);
    });
  }

  addIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  navigateToEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
