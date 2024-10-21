import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexTypeArrayComponent } from './complex-type-array.component';

describe('ComplexTypeArrayComponent', () => {
  let component: ComplexTypeArrayComponent;
  let fixture: ComponentFixture<ComplexTypeArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexTypeArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexTypeArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
