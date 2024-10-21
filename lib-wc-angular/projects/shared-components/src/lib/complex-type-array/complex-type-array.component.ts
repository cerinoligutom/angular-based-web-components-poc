import { Component, model, output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComplexTypeCardComponent } from '../complex-type-card/complex-type-card.component';

@Component({
  selector: 'lib-complex-type-array',
  standalone: true,
  imports: [BrowserModule, ComplexTypeCardComponent],
  templateUrl: './complex-type-array.component.html',
  styleUrl: './complex-type-array.component.css',
})
export class ComplexTypeArrayComponent {
  data = model<any[]>([]);
  itemClicked = output<any>();

  ngOnInit() {
    console.log('ComplexTypeArrayComponent ngOnInit', {
      data: this.data(),
      typeof: typeof this.data(),
    });
  }

  onItemClicked(item: any) {
    console.log('ComplexTypeArrayComponent onItemClicked', item);
    this.itemClicked.emit(item);
  }
}
