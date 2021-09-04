import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any=[];

  constructor(private categoriesService:CategoriesService, private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoriesService.getCategories().then((data:any)=>{
      this.categories=data;
    })
  }
  goDrinks(category: string){
    this.router.navigate(['/drinks'],{queryParams: {category:category}})

  }
}
