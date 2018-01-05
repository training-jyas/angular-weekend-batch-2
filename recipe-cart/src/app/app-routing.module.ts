import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDefaultComponent } from './recipes/recipe-default/recipe-default.component';

const routes: Routes = [{
    path: '', redirectTo: 'recipes', pathMatch: 'full'
}, {
    path: 'recipes', component: RecipesComponent, children: [{
        path: '', component: RecipeDefaultComponent
    }, {
        path: ':id', component: RecipeDetailComponent
    }]
}, {
    path: 'shopping-list', component: ShoppingListComponent
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppRouterModule {

}
