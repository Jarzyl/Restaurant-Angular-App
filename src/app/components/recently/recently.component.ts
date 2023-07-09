import { Component } from '@angular/core';
import { ScrollRevealService } from 'src/app/services/scrollreveal.service';

@Component({
  selector: 'app-recently',
  templateUrl: './recently.component.html',
  styleUrls: ['./recently.component.scss']
})
export class RecentlyComponent {
  // constructor(private scrollRevealService: ScrollRevealService) {}

  // ngOnInit() {
  //   this.scrollRevealService.reveal('.image-container-recently', {
  //     duration: 2500,
  //     origin: 'right',
  //     distance: '60px',
  //     delay: 400,
  //   });
  //   this.scrollRevealService.reveal('.text-container-recently', {
  //     duration: 2500,
  //     origin: 'left',
  //     distance: '60px',
  //     delay: 400,
  //   });
  // }
}
