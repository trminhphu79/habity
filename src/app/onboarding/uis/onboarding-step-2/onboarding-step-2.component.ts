import { Component, OnInit } from '@angular/core';
import { CardActionComponent } from '@habity-uis/components/card-action/card-action.component';
import { slideInAnimation } from '@shared/animations/slide';

@Component({
  selector: 'hbt-onboarding-step-2',
  template: `
  <section [@slideInOut]>
    <section  class="relative w-full h-[355px]  pt-8" >
    <section class="w-full mt-2 px-4 text-white">
      <div class="mb-1">
        <label>Challenges</label>
      </div>
      <lib-card-action>
        <section left>
          heh
        </section>
      </lib-card-action>
    <div class="mt-1">
      <label>Habits</label>
    </div>
       <section class="flex flex-col gap-2">
        <lib-card-action>
        <section left>
        </section>
      </lib-card-action>
       <lib-card-action>
        <section left>
        </section>
      </lib-card-action>
          <lib-card-action>
        <section left>
        </section>
      </lib-card-action>
       </section>
    </section>
  </section>
  <section class="text-white mt-4">
    <span class="text-[40px] font-bold leading-11 ">Track
     <span class="block"> 
       Your Progress
     </span>
    </span>
    <div class="text-lg block  mt-2">Everyday you become one step closer to your goal. Don’t give up!</div>
  </section>
  </section>
`,
  styleUrls: ['./onboarding-step-2.component.scss'],
  imports: [CardActionComponent],
  animations: [slideInAnimation],
})
export class OnboardingStep2Component implements OnInit {

  constructor() { }

  ngOnInit() { }

}
