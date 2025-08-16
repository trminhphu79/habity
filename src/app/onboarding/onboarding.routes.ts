import { Routes } from "@angular/router";

export default [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/onboarding-flow/onboarding-flow.component').then(m => m.OnboardingFlowComponent),
    },
] as Routes;