import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from '../components/categories/categories.component';
import { DrinksComponent } from '../components/drinks/drinks.component';
import { DetailsComponent } from '../components/details/details.component';
import { IngredientsComponent } from '../components/ingredients/ingredients.component';



const routes :Routes=[
  {path:"categories",component:CategoriesComponent},
  {path:"drinks", component:DrinksComponent},
  {path:"details",component:DetailsComponent},
  {path:"ingredients",component:IngredientsComponent}
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
