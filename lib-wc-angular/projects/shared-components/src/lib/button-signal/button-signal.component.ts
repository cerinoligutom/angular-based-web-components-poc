import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-button-signal',
  standalone: true,
  imports: [],
  templateUrl: './button-signal.component.html',
  styleUrl: './button-signal.component.scss',
})
export class ButtonSignalComponent {
  content = input<string>('');
  customClick = output<any>();

  onClick(event: any) {
    console.log('ButtonSignalComponent.onClick($event)', event);
    this.customClick.emit({
      data: 'ButtonSignalComponent.onClick',
    });
  }
}
