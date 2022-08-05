import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  
  constructor(){}
  ngOnInit(){}
    
  
    url:string = "../assets/img1.jpg";
    changeImage(event:any){
        this.url = event.target.src;
        console.log();
    }
  
  }

