import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/services/drinks.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  drink:any={};

  constructor(private drinksService:DrinksService, private router :ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params=>{
      this.getDetailsById(params.id);
    })
  }
  getDetailsById(id : string){
    this.drinksService.getDrinksById(id).then((data:any)=>{
      console.log(data)
      this.drink=data;
    })
  }

}
