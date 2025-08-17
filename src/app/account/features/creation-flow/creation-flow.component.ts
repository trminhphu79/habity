import { Component, inject, linkedSignal, OnInit, signal } from '@angular/core';
import { AppState } from '@shared/state/app-state';
import { IonContent, IonHeader, IonFooter, IonInputPasswordToggle, IonAlert, IonInput, IonItem, IonIcon, IonToolbar, IonTitle, IonButton, IonButtons, IonBackButton } from "@ionic/angular/standalone";
import { IconButtonComponent } from '@habity-uis/components/icon-button/icon-button.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { slideInAnimation } from '@shared/animations/slide';
import { CardMetadata } from '../../data-access/types';
import { HABITS_METADATA } from '../../data-access/constants';

@Component({
  selector: 'hbt-creation-flow',
  templateUrl: './creation-flow.component.html',
  styleUrls: ['./creation-flow.component.scss'],
  imports: [
    IonHeader,
    IonContent,
    IonIcon,
    IonToolbar,
    IonItem,
    IonInput,
    IonButton,
    IonFooter,
    NgTemplateOutlet,
    IconButtonComponent,
    ReactiveFormsModule,
  ],
  animations: [slideInAnimation]
})
export class CreationFlowComponent implements OnInit {
  readonly router = inject(Router);
  readonly appState = inject(AppState);

  readonly creationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    gender: new FormControl(0),
  })

  readonly habitsMetadata = signal<Array<CardMetadata>>(HABITS_METADATA)
  readonly currentStep = signal(0);
  constructor() { }

  ngOnInit() { }

  back() {
    this.router.navigateByUrl('/onboarding');
  }

  nextStep() {
    if (this.currentStep() == 2) {
      console.log("can Submit....")
      return;
    }
    console.log("nextStep....")
    this.currentStep.set(this.currentStep() + 1);
  }
}
