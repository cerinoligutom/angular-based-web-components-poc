import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './button-rxjs.component.html',
  styleUrl: './button-rxjs.component.scss',
})
export class ButtonRxjsComponent {
  @Input() content!: string;
  @Output() customClick = new EventEmitter<any>();

  onClick(event: any) {
    console.log('ButtonRxjsComponent.onClick($event)', event);
    this.customClick.emit({
      data: 'ButtonRxjsComponent.onClick',
    });
  }
}
