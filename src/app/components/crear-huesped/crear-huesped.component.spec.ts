import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHuespedComponent } from './crear-huesped.component';

describe('CrearHuespedComponent', () => {
  let component: CrearHuespedComponent;
  let fixture: ComponentFixture<CrearHuespedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearHuespedComponent]
    });
    fixture = TestBed.createComponent(CrearHuespedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
