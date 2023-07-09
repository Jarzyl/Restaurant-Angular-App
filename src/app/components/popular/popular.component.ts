import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ScrollRevealService } from 'src/app/services/scrollreveal.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  cartService: CartService = new CartService;
  popularProducts = [
    {
      id: 1,
      title: 'Onigiri',
      subtitle: 'Japanese Dish',
      price: '$10.99',
      imageSrc: '../../assets/img/popular-onigiri.png'
    },
    {
      id: 2,
      title: 'Spring Rolls',
      subtitle: 'Japanese Dish',
      price: '$15.99',
      imageSrc: '../../assets/img/popular-spring-rols.png'
    },
    {
      id: 3,
      title: 'Sushi Rolls',
      subtitle: 'Japanese Dish',
      price: '$19.99',
      imageSrc: '../../assets/img/popular-sushi-rolls.png'
    }
  ];

  // constructor(private scrollRevealService: ScrollRevealService) {}

  // ngOnInit() {
  //   this.scrollRevealService.reveal('.card', {
  //     duration: 2500,
  //     origin: 'top',
  //     distance: '60px',
  //     delay: 400,
  //     interval: 100,
  //   });
  // }
}
