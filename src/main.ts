import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, withViewTransitions } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideAnimations } from "@angular/platform-browser/animations"
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { importProvidersFrom } from '@angular/core';
import { Drivers } from '@ionic/storage';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'ios', rippleEffect: false, hardwareBackButton: true, statusTap: false }),
    provideRouter(routes, withPreloading(PreloadAllModules), withViewTransitions()),
    provideAnimations(),
    importProvidersFrom([
      IonicStorageModule.forRoot({
        name: "__michaeldude",
        driverOrder: [Drivers.SecureStorage, Drivers.IndexedDB, Drivers.LocalStorage]
      })
    ])
  ],
});
