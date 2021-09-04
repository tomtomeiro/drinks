import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/services/drinks.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drinks: any = [];
  tipo = "";
  error="";

  constructor(private drinksService: DrinksService, private router: ActivatedRoute, private r: Router) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      if (params.category)
        this.getDrinksByCategories(params.category);
      if (params.ingredient)
        this.getDrinksByIngredient(params.ingredient);

    })


  }
  getDrinksByCategories(category: string) {
    this.tipo = "Lista de bebidas de la categoria "+category;
    this.drinksService.getDrinksByCategories(category).then(data => {
      this.drinks = data;
    }).catch(error=>{
      this.error="No hay datos"
    })
  }

  getDrinksByIngredient(ingredient: string) {
    this.tipo = "Lista de bebidas de ingredientes "+ingredient;
    this.drinksService.getDrinksByIngredient(ingredient).then(data => {

      this.drinks = data;
    }).catch(error=>{
      this.error="No hay datos"
    })
  }

  goDetail(id: string) {
    this.r.navigate(["/details"], { queryParams: { id: id } })

  }


}
