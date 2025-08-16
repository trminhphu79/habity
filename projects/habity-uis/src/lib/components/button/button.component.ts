import { Component, input, output } from '@angular/core';
import { ButtonSize } from './types';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  label = input<string>('Click Me');
  size = input<ButtonSize>('large');
  disabled = input<boolean>(false)
  classes = input<string>('');
  type = input<string>('primary');

  onClick = output()
}
