import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPacientesComponent } from './info-pacientes.component';

describe('InfoPacientesComponent', () => {
  let component: InfoPacientesComponent;
  let fixture: ComponentFixture<InfoPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPacientesComponent]
    });
    fixture = TestBed.createComponent(InfoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
