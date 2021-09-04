import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  //base_url:string="https://www.thecocktaildb.com/api/json/v1/1";
  HttpOptions = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  
  drinks: any=[];
  constructor(private http:HttpClient) { }

  getDrinksByCategories(category: string){
    return new Promise((resolve, reject)=>{
      this.http.get(environment.base_url_api+"filter.php?c="+category).subscribe((result:any)=>{
        resolve(result.drinks);
      },err=>{
        reject(err);
      })
    })
  }
  getDrinksByIngredient(ingredient: string){
    return new Promise((resolve, reject)=>{
      this.http.get(environment.base_url_api+"filter.php?i="+ingredient).subscribe((result:any)=>{
        if(result)
        resolve(result.drinks);
        else
        reject("No hay datos")
      },err=>{
        reject(err);
      })
    })
  }

  getDrinksById(id : string){
    return new Promise((resolve, reject)=>{
      this.http.get(environment.base_url_api+"lookup.php?i="+id).subscribe((result:any)=>{
        resolve(result.drinks[0]);
      },err=>{
        reject(err);
      })
    })
  }
 


}
