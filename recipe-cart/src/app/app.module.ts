import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipesService } from './recipes/recipes.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRouterModule } from './app-routing.module';
import { RecipeDefaultComponent } from './recipes/recipe-default/recipe-default.component';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeDefaultComponent,
    RecipeNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouterModule,
    ReactiveFormsModule
  ],
  providers: [RecipesService, ShoppingListService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
