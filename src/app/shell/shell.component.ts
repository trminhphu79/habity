import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTERS } from '@shared/constants/router.constant';
import { SplashScreenService } from '@shared/services/splash-screen.service';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'hbt-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  imports: [IonContent],
})
export class ShellComponent implements OnInit {

  private router = inject(Router);
  private splashScreenService = inject(SplashScreenService);
  constructor() { }

  ngOnInit() {
    // this.splashScreenService.show({ showDuration: 2000, autoHide: true });
    setTimeout(() => {
      console.log('Splash screen should be hidden now');
      // this.splashScreenService.hide();
      this.router.navigate([ROUTERS.ONBOARDING]);
    }, 2000); // Simulate a delay for splash scree n
  }
}
