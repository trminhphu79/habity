import { Component, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'lib-step-dots',
  templateUrl: './step-dots.component.html',
  styleUrls: ['./step-dots.component.scss'],
})
export class StepDotsComponent {

  index = input<number>(0);
  total = input<number>(3);
  classes = input<string>('flex items-center justify-center');
  itemClass = input<string>('w-[10px] h-[10px]');

  onChange = output<number>();

  selected = linkedSignal(() => {
    return this.index() >= 0 ? this.index() : 0;
  });

  totalDots = linkedSignal(() => {
    return Array.from({ length: this.total() }, (_, i) => i);
  });

  clicked(index: number) {
    this.selected.set(index);
    this.onChange.emit(index)
  }
}
