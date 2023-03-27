import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
testimonials = [
  {
    name: 'Sophie L.',
    stars: 5,
    comment: 'Je suis très satisfaite de mon expérience avec cette entreprise. Le service est excellent et le personnel est très courtois.'
  },
  {
    name: 'Pierre G.',
    stars: 4,
    comment: 'J\'ai utilisé les services de cette entreprise pour mon service RH. Le service est complet et le prix est raisonnable.'
  },
  {
    name: 'Marie C.',
    stars: 3,
    comment: 'J\'ai eu une expérience mitigée avec cette entreprise. Le service était correct, mais je pense que le prix était un peu élevé.'
  }
]
 ;

  constructor() {}

  getStars(numStars: number): number[] {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(i);
    }
    return stars;
  }
}
