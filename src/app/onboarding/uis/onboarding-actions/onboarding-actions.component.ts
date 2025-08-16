import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { LoginProviderEnum } from '../../data-access/enums';

@Component({
  selector: 'hbt-onboarding-actions',
  templateUrl: './onboarding-actions.component.html',
  styleUrls: ['./onboarding-actions.component.scss'],
  imports: [IonButton, IonIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingActionsComponent {

  actionChanges = output<LoginProviderEnum>();

  protected readonly loginProvider = LoginProviderEnum;
}
