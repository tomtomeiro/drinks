import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  //base_url: string ="https://www.thecocktaildb.com/api/json/v1/1"
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http:HttpClient) { }

  getCategories(){
    return new Promise((resolve, reject)=>{
      this.http.get(environment.base_url_api+"list.php?c=list").subscribe((result:any)=>{
        resolve(result.drinks);
      },err=>{
        reject(err);
      })
    })
  }


}
