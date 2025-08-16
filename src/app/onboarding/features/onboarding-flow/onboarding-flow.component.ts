import { NgComponentOutlet } from '@angular/common';
import { Component, DestroyRef, inject, signal, Type } from '@angular/core';
import { LoginProviderEnum, OnboardingStepEnum } from '../../data-access/enums';
import { ONBOARDING_STEPS_METADATA } from '../../data-access/constants';
import { StepDotsComponent } from '@habity-uis/components/step-dots/step-dots.component';
import { skip, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { OnboardingActionsComponent } from '../../uis/onboarding-actions/onboarding-actions.component';
import { Router } from '@angular/router';


@Component({
  selector: 'hbt-onboarding-flow',
  templateUrl: './onboarding-flow.component.html',
  styleUrls: ['./onboarding-flow.component.scss'],
  imports: [NgComponentOutlet,
    StepDotsComponent,
    OnboardingActionsComponent
  ],
})
export class OnboardingFlowComponent {

  readonly loginProvider = LoginProviderEnum;
  readonly onboardingSteps = OnboardingStepEnum;
  readonly componentMapped: Record<OnboardingStepEnum, Type<Component> | null> = {
    [OnboardingStepEnum.First]: null,
    [OnboardingStepEnum.Second]: null,
    [OnboardingStepEnum.Third]: null,
  };

  readonly currentStep = signal<OnboardingStepEnum>(OnboardingStepEnum.First);
  readonly currentComponent = signal<Type<Component> | null>(null);
  readonly onboardingStepMetadata = signal(ONBOARDING_STEPS_METADATA);

  readonly router = inject(Router);
  readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.initlizeSteps();
  }

  ngOnInit() {
    this.autoChangeStep();
  }

  private autoChangeStep() {
    timer(0, 3000)
      .pipe(
        skip(1),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        console.log('Auto changing step...');
        const nextStep = this.currentStep() + 1;
        if (nextStep > OnboardingStepEnum.Third) {
          this.currentStep.set(OnboardingStepEnum.First);
        } else {
          this.currentStep.set(nextStep);
        }
        this.currentComponent.set(this.componentMapped[this.currentStep()]);
      })
  }

  private initlizeSteps() {
    this.onboardingStepMetadata().forEach(step => {
      this.componentMapped[step.id] = null;
      step.loadComponent().then(component => {
        this.componentMapped[step.id] = component;
        if (this.currentStep() === step.id) {
          this.currentComponent.set(component);
        }
      })
    })
  }

  protected stepChanges(index: number) {
    this.currentStep.set(index);
    this.currentComponent.set(this.componentMapped[index as OnboardingStepEnum]);
  }

  protected loginWith(provider: LoginProviderEnum) {
    console.log(`Logging in with ${provider}...`);
    switch (provider) {
      case LoginProviderEnum.Email:
        console.log('Logging in with Email...');
        this.router.navigate(['/account'], { queryParams: { provider: LoginProviderEnum.Email } });
        break;
      case LoginProviderEnum.Google:
        console.log('Logging in with Google...');
        // Implement Google login logic here
        break;
      case LoginProviderEnum.Facebook:
        console.log('Logging in with Facebook...');
        // Implement Facebook login logic here
        break;
      case LoginProviderEnum.Apple:
        console.log('Logging in with Apple...');
        // Implement Apple login logic here
        break;
    }
  }
}
