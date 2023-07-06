import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

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
      title: 'Pizza',
      subtitle: 'Delicious pizza with various toppings',
      price: '$9.99',
      imageSrc: '../../assets/img/popular-onigiri.png'
    },
    {
      id: 2,
      title: 'Burger',
      subtitle: 'Juicy burger with cheese and vegetables',
      price: '$7.99',
      imageSrc: '../../assets/img/popular-spring-rols.png'
    },
    {
      id: 3,
      title: 'Sushi',
      subtitle: 'Fresh and tasty sushi rolls',
      price: '$12.99',
      imageSrc: '../../assets/img/popular-sushi-rolls.png'
    }
  ];
}
