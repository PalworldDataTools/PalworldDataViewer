import { booleanAttribute, Component, forwardRef, Input, numberAttribute } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-row-control',
  standalone: true,
  styles: [':host { display: contents }'],
  templateUrl: './radio-row-control.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioRowControlComponent),
      multi: true,
    },
  ],
})
export class RadioRowControlComponent implements ControlValueAccessor {
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) values: { label: string; value: any }[] = [];
  @Input({ transform: numberAttribute }) labelCols: number = 1;
  @Input() skin: 'buttons' | 'input-group' = 'buttons';
  @Input({ transform: booleanAttribute }) multiple: boolean = false;

  protected isDisabled: boolean = false;
  protected value: any = undefined!;

  private onChange: (v: any) => void = () => {};
  private onTouched: (v: any) => void = () => {};

  writeValue(obj: any): void {
    this.value = obj;
    this.onChange(this.value);
    this.onTouched(this.value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  protected isChecked(value: any) {
    if (this.multiple) {
      return this.value?.includes(value);
    } else {
      return this.value === value;
    }
  }

  protected check(value: any, checked: boolean) {
    if (this.multiple) {
      if (checked && (!this.value || !this.value.includes(value))) {
        this.value = [...(this.value ?? []), value];
      } else if (!checked && this.value && this.value.includes(value)) {
        const newValue = (this.value as any[]).filter((v) => v != value);
        this.value = newValue.length == 0 ? undefined : newValue;
      }
    } else {
      this.value = checked ? value : undefined;
    }

    this.onChange(this.value);
    this.onTouched(this.value);
  }
}
