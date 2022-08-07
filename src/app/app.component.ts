import { Component, OnInit } from '@angular/core';
import { policy } from './policy';
import { PolicyService } from './policy.service';
import { seller } from './bestSeller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  policys: policy[] = [];
  policy: any;
  sellers: seller[] =[];
  seller:any;
 
  
  constructor(private ps : PolicyService){}
  ngOnInit(): void {
    this.policys = this.ps.getAll();
    this.sellers = this.ps.getseller();
    
  }
    
  
    url:string = "../assets/img1.jpg";
    changeImage(event:any){
        this.url = event.target.src;
        console.log();
    }
  
  }

