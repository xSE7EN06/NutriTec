import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBelowComponent } from './buttons-below.component';

describe('ButtonsBelowComponent', () => {
  let component: ButtonsBelowComponent;
  let fixture: ComponentFixture<ButtonsBelowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsBelowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
