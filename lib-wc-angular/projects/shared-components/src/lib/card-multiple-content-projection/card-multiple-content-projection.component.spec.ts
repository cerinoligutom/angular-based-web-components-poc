import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMultipleContentProjectionComponent } from './card-multiple-content-projection.component';

describe('CardMultipleContentProjectionComponent', () => {
  let component: CardMultipleContentProjectionComponent;
  let fixture: ComponentFixture<CardMultipleContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMultipleContentProjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMultipleContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
