import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
    animate('600ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('600ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
  ])
]);