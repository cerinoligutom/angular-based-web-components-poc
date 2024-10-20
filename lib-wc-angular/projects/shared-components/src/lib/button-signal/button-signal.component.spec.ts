import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSignalComponent } from './button-signal.component';

describe('ButtonSignalComponent', () => {
  let component: ButtonSignalComponent;
  let fixture: ComponentFixture<ButtonSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
