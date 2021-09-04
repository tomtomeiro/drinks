import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {HttpClientModule} from'@angular/common/http';
import { IngredietsComponent } from './components/ingrediets/ingrediets.component';
import { DetailsComponent } from './components/details/details.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    DrinksComponent,
    IngredietsComponent,
    DetailsComponent,
    IngredientsComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
