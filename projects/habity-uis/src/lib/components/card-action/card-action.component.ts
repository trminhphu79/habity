import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card-action',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.scss'],
})
export class CardActionComponent implements OnInit {
  classes = input<string>('');
  constructor() { }

  ngOnInit() { }

}
