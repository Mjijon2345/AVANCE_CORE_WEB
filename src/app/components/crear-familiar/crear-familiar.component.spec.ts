import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFamiliarComponent } from './crear-familiar.component';

describe('CrearFamiliarComponent', () => {
  let component: CrearFamiliarComponent;
  let fixture: ComponentFixture<CrearFamiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearFamiliarComponent]
    });
    fixture = TestBed.createComponent(CrearFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
