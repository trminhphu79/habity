import { Routes } from "@angular/router";

export default [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/onboarding-flow/onboarding-flow.component').then(m => m.OnboardingFlowComponent),
    },
    {
        path: 'account-creation',
        loadComponent: () => import('./features/account-creation/account-creation.component').then(m => m.AccountCreationComponent),
    },
] as Routes;