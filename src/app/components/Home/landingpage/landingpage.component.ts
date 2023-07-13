import { Component } from '@angular/core';
import { ScrollRevealService } from 'src/app/services/scrollreveal.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent {
  constructor(private scrollRevealService: ScrollRevealService) {}

  ngOnInit() {
    const elements = [
      {
        selector: '.image-container',
        options: {
          duration: 2500,
          origin: 'top',
          distance: '100px',
          delay: 400,
        },
      },
      {
        selector: '.header',
        options: {
          duration: 2500,
          origin: 'bottom',
          distance: '60px',
          delay: 400,
        },
      },
      {
        selector: '.text-container-about',
        options: {
          duration: 2500,
          origin: 'left',
          distance: '60px',
          delay: 400,
        },
      },
      {
        selector: '.image-container-about',
        options: {
          duration: 2500,
          origin: 'right',
          distance: '60px',
          delay: 400,
        },
      },
      {
        selector: '.image-container-recently',
        options: {
          duration: 2500,
          origin: 'right',
          distance: '60px',
          delay: 400,
        },
      },
      {
        selector: '.text-container-recently',
        options: {
          duration: 2500,
          origin: 'left',
          distance: '60px',
          delay: 400,
        },
      },
      {
        selector: '.newsletter-container',
        options: {
          duration: 2500,
          origin: 'top',
          distance: '60px',
          delay: 400,
        },
      },
      {
        selector: '.footer',
        options: {
          duration: 2500,
          origin: 'top',
          distance: '60px',
          delay: 400,
        },
      },
    ];

    elements.forEach((element) => {
      this.scrollRevealService.reveal(element.selector, element.options);
    });
  }
}
