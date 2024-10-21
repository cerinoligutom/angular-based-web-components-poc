import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexTypeCardComponent } from './complex-type-card.component';

describe('ComplexTypeCardComponent', () => {
  let component: ComplexTypeCardComponent;
  let fixture: ComponentFixture<ComplexTypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexTypeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
