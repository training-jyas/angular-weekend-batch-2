import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {
  @ViewChild('recipeForm') recipeForm: NgForm;
  constructor(private route: ActivatedRoute,
    private recipeService: RecipesService) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        if (params.id) {
          console.log('edit recipe logic');
        } else {
          console.log('new recipe logic');
        }
      });
  }

  addRecipe() {
    console.log(this.recipeForm.value);
    this.recipeService.addRecipe(<Recipe>this.recipeForm.value);
  }
}
