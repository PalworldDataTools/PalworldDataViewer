import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-row-control',
  standalone: true,
  styles: [':host { display: contents }'],
  templateUrl: './radio-row-control.component.html',
})
export class RadioRowControlComponent {
  @Input({ required: true }) formControl: FormControl = null!;
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) values: { label: string; value: any }[] = [];
  @Input() labelCols: number = 1;
  @Input() skin: 'buttons' | 'input-group' = 'buttons';
}
