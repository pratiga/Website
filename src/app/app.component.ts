import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { policy } from './policy';
import { PolicyService } from './policy.service';
import { seller } from './bestSeller';
import { footer } from './footer';
import { testimonial } from './testimonial';


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
  footers: footer[] =[];
  testimonials: testimonial[] = []
 
  
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
    this.footers = this.ps.getfooter();
    this.testimonials = this.ps.getTestimonial();
   
  }
    id:any;
    drop(param:any){
      if(this.id == param){
        this.id = "";
      }
      else{
      this.id = param;
      }
    }
    
  
    url:string = "../assets/img1.jpg";
    changeImage(event:any){
        this.url = event.target.src;
        console.log();
    }
    BannerOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }
      },
      nav: true
    }
    
    
    TestimonialOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
        940: {
          items: 1
        }
      },
      nav: true
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
      navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
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
    days:any = 194;
    hours:number = 22;
    mins:number = 14;
     secs:number = 4;
   x =  setInterval(()=>{
      var futureDate = new Date("jan 4, 2022 15:34:24").getTime();
      var today = new Date().getTime();
      var distance = futureDate - today;
      this.days = Math.floor(distance / (1000 * 60 *60 *24));
      this.hours = Math.floor((distance % (1000 *60 *60 *24))/ (1000 * 60 * 60));
      this.mins = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));
      this.secs = Math.floor((distance % (1000 * 60)) / (1000));
      if(distance < 0){
        clearInterval(this.x);
        this.days = "Offer Is Expired";
      }
    }, 1000)
  }

