import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexTypeObjectComponent } from './complex-type-object.component';

describe('ComplexTypeObjectComponent', () => {
  let component: ComplexTypeObjectComponent;
  let fixture: ComponentFixture<ComplexTypeObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexTypeObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexTypeObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
