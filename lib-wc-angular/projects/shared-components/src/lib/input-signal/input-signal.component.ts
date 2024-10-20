import { Component, forwardRef, input, model, output } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'lib-input-signal',
  standalone: true,
  imports: [BrowserModule, FormsModule],
  templateUrl: './input-signal.component.html',
  styleUrl: './input-signal.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSignalComponent),
      multi: true,
    },
  ],
})
export class InputSignalComponent implements ControlValueAccessor {
  placeholder = model('');
  label = model('');
  disabled = model(false);

  value = model('');
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value.set(value || '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value.set(input.value);
    this.onChange(this.value());
  }

  onBlur(): void {
    this.onTouched();
  }
}
