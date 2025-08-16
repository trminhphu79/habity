import { Component } from '@angular/core';
import { slideInAnimation } from '@shared/animations/slide';

@Component({
  selector: 'hbt-onboarding-step-1',
  template: `
  <section [@slideInOut]>
   <section class="relative w-full pt-8">
    <img src="assets/images/onboarding-dots.png" width="87" height="89" class="absolute left-[64px]" />
    <section class="w-full flex justify-center items-center">
      <img src="assets/images/onboarding-step1.png" width="340" height="337" />
    </section>
  </section>
  <section class="description">
    <span class="text-[44px] font-bold block">Create</span>
    <span class="text-[44px] font-bold">Good Habits</span>
    <span class="text-lg block">Change your life by slowly adding new health habits and sticking to them.</span>
  </section></section>`,
  styleUrls: ['./onboarding-step-1.component.scss'],
  animations: [slideInAnimation],
})
export class OnboardingStep1Component {

}
