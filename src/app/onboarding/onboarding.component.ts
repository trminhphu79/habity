import { Component, OnInit } from '@angular/core';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'hbt-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  imports: [IonContent],
})
export class OnboardingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
