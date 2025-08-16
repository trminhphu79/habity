import { LocationStrategy } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconButtonComponent } from '@habity-uis/components/icon-button/icon-button.component';
import { IonContent, IonHeader, IonIcon, IonToolbar, IonTitle, IonButton, IonButtons, IonBackButton } from "@ionic/angular/standalone";

@Component({
  selector: 'hbt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonIcon,
    IonToolbar,
    IconButtonComponent
  ],
})
export class LoginComponent implements OnInit {

  location = inject(LocationStrategy);
  router = inject(Router);
  ngOnInit() { }

  back() {
    this.router.navigate(['/onboarding']);
  }
}
