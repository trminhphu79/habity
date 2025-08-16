import { OnboardingStep1Component } from "../uis/onboarding-step-1/onboarding-step-1.component"
import { OnboardingStep3Component } from "../uis/onboarding-step-3/onboarding-step-3.component"
import { OnboardingStepEnum } from "./enums"
import { OnboardingStep } from "./types"

export const ONBOADRING_STEPS = {
    FIRST: 'step1',
    SECOND: 'step2',
    THIRD: 'step3',
}


export const ONBOARDING_STEPS_METADATA: OnboardingStep[] = [
    {
        id: OnboardingStepEnum.First,
        loadComponent: async () => {
            const component = await import('../uis/onboarding-step-1/onboarding-step-1.component');
            return component.OnboardingStep1Component;
        }
    },
    {
        id: OnboardingStepEnum.Second,
        loadComponent: async () => {
            const component = await import('../uis/onboarding-step-2/onboarding-step-2.component');
            return component.OnboardingStep2Component;
        }
    },
    {
        id: OnboardingStepEnum.Third,
        loadComponent: async () => {
            const component = await import('../uis/onboarding-step-3/onboarding-step-3.component');
            return component.OnboardingStep3Component;
        }
    }
]