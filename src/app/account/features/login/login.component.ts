import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IconButtonComponent } from '@habity-uis/components/icon-button/icon-button.component';
import { IonContent, IonHeader, IonSpinner, IonInputPasswordToggle, IonAlert, IonRippleEffect, IonInput, IonItem, IonIcon, IonToolbar, IonTitle, IonButton, IonButtons, IonBackButton } from "@ionic/angular/standalone";
import { Storage } from '@ionic/storage-angular';
import { AppState } from '@shared/state/app-state';
import { timer } from 'rxjs';

@Component({
  selector: 'hbt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonIcon,
    IonToolbar,
    IonItem,
    IonInput,
    IconButtonComponent,
    IonButton,
    IonAlert,
    IonSpinner,
    IonInputPasswordToggle,
    ReactiveFormsModule
  ],
})
export class LoginComponent implements OnInit {

  router = inject(Router);
  storge = inject(Storage);
  appState = inject(AppState);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  showAlert = signal(false);
  pauseSpinner = signal(false);
  alertActions = signal<Array<any>>(['Cancel'])

  ngOnInit() { }

  back() {
    this.router.navigate(['/']);
  }

  forgotPassword() {
    console.log('Forgot Password clicked');
  }

  login() {
    // console.log("storge: ", this.storge
    if (this.loginForm.invalid) {
      this.showAlert.set(true);
      return;
    }

    this.pauseSpinner.set(true);
    timer(2000).subscribe(() => {
      this.pauseSpinner.set(false);
      this.appState.setState({
        authenticated: true,
        userInfo: {
          email: this.loginForm.value.email as string,
          token: 'tokenxxxxxxxxxx',
          avatarUrl: 'https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-1/468216694_3655995141307786_7002799848386776192_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG4oqgBBpJnigiXGabf-EGRb5V4wCtOtR1vlXjAK061HT9wxThrmmWiLWBnZRLB2pB4dh8er3emLTq07bzcKEpf&_nc_ohc=XtX-JeSvHI0Q7kNvwFycpeu&_nc_oc=AdnHwoHjSW3LRiyWJTZBswxOXQFzd5-xLE5iaf6BCXaKYLDIyFbz6fv4fhY39s3DC68&_nc_zt=24&_nc_ht=scontent.fhan4-5.fna&_nc_gid=3waWMaGDI_3opGGLEEvA8g&oh=00_AfWsUcyX-j3Jb4Zh7mbGmWp7rCAJ-SOYQUC5Qgq8b6AZYw&oe=68A75311',
          fullName: 'Lo Uyen Li Lom'
        }
      })
      this.router.navigateByUrl('account/creation-flow')
    })
  }

  create() {
    console.log("Move to create account...")
  }

  onSubmit() {
    console.log("onSubmit...˘")
  }
}
