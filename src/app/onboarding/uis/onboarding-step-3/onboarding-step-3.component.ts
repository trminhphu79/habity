import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '@shared/animations/slide';

@Component({
  selector: 'hbt-onboarding-step-3',
  template: `
   <section [@slideInOut]>
     <section class="relative w-full pt-8">
    <img src="assets/images/onboarding-step3.png" height="265" />
  </section>
  <section class="description">
    <span class="text-[44px] font-bold block">Stay Together</span>
    <span class="text-[44px] font-bold">and Strong</span>
    <span class="text-lg block">Find friends to discuss common topics. Complete challenges together.</span>
  </section>
   </section>
 `,
  styleUrls: ['./onboarding-step-3.component.scss'],
  animations: [slideInAnimation]
})
export class OnboardingStep3Component implements OnInit {

  constructor() { }

  ngOnInit() { }

}
