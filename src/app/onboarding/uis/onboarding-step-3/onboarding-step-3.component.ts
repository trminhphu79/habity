import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '@shared/animations/slide';

@Component({
  selector: 'hbt-onboarding-step-3',
  template: `
   <section [@slideInOut]>
     <section class="relative w-full pt-8">
    <img src="assets/images/onboarding-step3.png" height="265" />
  </section>
  <section class="mt-8 text-white">
    <span class="text-[40px] font-bold leading-11 ">Stay Together
      <span class="block">
        and Strong
      </span>
    </span>
    <div class="text-lg block  mt-2">Find friends to discuss common topics. Complete challenges together.</div>
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
