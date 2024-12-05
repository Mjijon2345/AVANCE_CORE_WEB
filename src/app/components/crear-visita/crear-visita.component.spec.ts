import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVisitaComponent } from './crear-visita.component';

describe('CrearVisitaComponent', () => {
  let component: CrearVisitaComponent;
  let fixture: ComponentFixture<CrearVisitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearVisitaComponent]
    });
    fixture = TestBed.createComponent(CrearVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
