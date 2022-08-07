import { Injectable } from '@angular/core';
import { policy } from './policy';
import { seller } from './bestSeller';
@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor() { }
  getseller():seller[]{
    return[
      {
        id:1,
        image1:'./assets/img1.jpg',
        image2:'./assets/img2.jpg',
        image3:'./assets/img3.jpg',
      },
      {
        id:2,
        image1:'./assets/img4.jpg',
        image2:'./assets/img5.jpg',
        image3:'./assets/img3.jpg',
      },
      {
        id:3,
        image1:'./assets/image1.jpg',
        image2:'./assets/img4.jpg',
        image3:'./assets/img3.jpg',
      }
    ]
  }
  getAll():policy[]{
    return[
      {
        id:1,
        title:'this is title',
        imageUrl:'./assets/img2.jpg',
        date_days: 25,
        date_month: "jun",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus mollitia facilis numquam nesciunt odit, voluptatum quae incidunt tempora praesentium deserunt velit? Recusandae in cumque amet optio tempora repellendus atque?",
      },
      {
        id:2,
        title:'this is title',
        imageUrl:'./assets/img1.jpg',
        date_days: 6,
        date_month: "july",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus mollitia facilis numquam nesciunt odit, voluptatum quae incidunt tempora praesentium deserunt velit? Recusandae in cumque amet optio tempora repellendus atque?",
      },
      {
        id:3,
        title:'this is title',
        imageUrl:'./assets/img5.jpg',
        date_days: 18,
        date_month: "may",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus mollitia facilis numquam nesciunt odit, voluptatum quae incidunt tempora praesentium deserunt velit? Recusandae in cumque amet optio tempora repellendus atque?",
      }
      
    ]
  }
}
