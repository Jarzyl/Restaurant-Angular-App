import ScrollReveal from 'scrollreveal';

export class ScrollRevealService {
  private sr: any;

  constructor() {
    this.sr = ScrollReveal();
  }

  reveal(selector: string, options: any) {
    this.sr.reveal(selector, options);
  }
}
