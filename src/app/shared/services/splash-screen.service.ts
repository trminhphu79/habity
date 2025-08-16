import { Injectable, } from "@angular/core";
import { SplashScreen } from '@capacitor/splash-screen';
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SplashScreenService {
    private readonly isDisplaySplash = new Subject<boolean>();

    get displaySplash$() {
        return this.isDisplaySplash.asObservable();
    }

    async show(options: { showDuration?: number, autoHide?: boolean } = {}) {
        this.isDisplaySplash.next(true);
        await SplashScreen.show({
            showDuration: 2000,
            autoHide: true,
            ...options
        });
        this.isDisplaySplash.next(false);
    }

    async hide() {
        this.isDisplaySplash.next(false);
        await SplashScreen.hide();
    }
}