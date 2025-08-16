import { Component, Type } from "@angular/core";
import { OnboardingStepEnum } from "./enums"

export type OnboardingStep = {
    id: OnboardingStepEnum,
    loadComponent: () => Promise<Type<any>>
}