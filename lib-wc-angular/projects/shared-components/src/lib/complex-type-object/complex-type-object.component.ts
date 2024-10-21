import { Component, model, output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComplexTypeCardComponent } from '../complex-type-card/complex-type-card.component';

@Component({
  selector: 'lib-complex-type-object',
  standalone: true,
  imports: [BrowserModule, ComplexTypeCardComponent],
  templateUrl: './complex-type-object.component.html',
  styleUrl: './complex-type-object.component.css',
})
export class ComplexTypeObjectComponent {
  data = model<any>({});
  itemClicked = output<any>();

  ngOnInit() {
    console.log('ComplexTypeObjectComponent ngOnInit', {
      data: this.data(),
      typeof: typeof this.data(),
    });
  }

  onItemClicked(item: any) {
    console.log('ComplexTypeObjectComponent onItemClicked', item);
    this.itemClicked.emit(item);
  }
}
