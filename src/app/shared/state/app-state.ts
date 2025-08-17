import { Injectable, linkedSignal, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IAppState } from "./app-state.models";
import { toSignal } from "@angular/core/rxjs-interop";


const APP_STATE_BLANK: IAppState = {
    authenticated: false,
    userInfo: {
        email: '',
        token: '',
        avatarUrl: '',
        fullName: ''
    }
}

@Injectable({ providedIn: 'root' })
export class AppState {
    readonly #state = new BehaviorSubject<Partial<IAppState>>(APP_STATE_BLANK)

    readonly state = toSignal(this.#state, { initialValue: APP_STATE_BLANK })

    get onChanges() {
        return this.#state.asObservable();
    }

    setState(newValue: Partial<IAppState>) {
        this.#state.next({
            ...this.state(),
            ...newValue
        })
    }

    updatePartial(key: keyof IAppState, value: unknown) {
        this.#state.next({
            ...this.state(),
            [key]: value
        })
    }
}