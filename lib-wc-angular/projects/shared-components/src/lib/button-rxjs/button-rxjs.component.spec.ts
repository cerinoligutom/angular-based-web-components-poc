import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRxjsComponent } from './button-rxjs.component';

describe('ButtonRxjsComponent', () => {
  let component: ButtonRxjsComponent;
  let fixture: ComponentFixture<ButtonRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
