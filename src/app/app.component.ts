import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  partnersArray:any = [
    {
      imgName: "../assets/policy/p1.png"
    },
    {
      imgName: "../assets/policy/p2.png"
    }, {
      imgName: "../assets/policy/p3.png"
    }, {
      imgName: "../assets/policy/pp2.png"
    }, {
      imgName: "../assets/policy/pp4.jpg"
    }, {
      imgName: "../assets/policy/pp5.jpg"
    },
  ]
  
 
  
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
    
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 6
        }
      },
      nav: false
    }
    
    policyOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['<i class="fa fa-caret-right"></i>', '<i class="fa fa-caret-left"></i>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 3
        }
      },
      nav: true
    }
  
  }

