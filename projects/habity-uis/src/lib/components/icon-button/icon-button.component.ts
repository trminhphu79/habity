import { ChangeDetectionStrategy, Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'lib-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent implements OnInit {
  classes = input<string>();
  onClick = output();
  constructor() { }

  ngOnInit() { }

}
