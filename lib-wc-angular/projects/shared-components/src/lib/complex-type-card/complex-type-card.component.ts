import { Component, model, output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'lib-complex-type-card',
  standalone: true,
  imports: [BrowserModule],
  templateUrl: './complex-type-card.component.html',
  styleUrl: './complex-type-card.component.css',
})
export class ComplexTypeCardComponent {
  data = model<any>();
  itemClicked = output<any>();

  ngOnInit() {
    console.log('ComplexTypeCardComponent ngOnInit', {
      data: this.data(),
      typeof: typeof this.data(),
    });
  }

  onItemClicked(item: any) {
    console.log('ComplexTypeCardComponent onItemClicked', item);
    item.name = `${item.name} - Clicked`;
    this.itemClicked.emit(item);
  }
}
