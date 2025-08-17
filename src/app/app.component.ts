import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { logoIonic } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  storage = inject(Storage)
  constructor() {
    addIcons({ logoIonic });
  }

  ngOnInit() {
    this.storage.create();
  }
}
