import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

  // NOTE: This is required to use Custom Elements in Angular
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  content = 'Angular 18';
}
