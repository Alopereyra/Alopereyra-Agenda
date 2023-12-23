import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoPoloComponent } from './proyecto-polo.component';

describe('ProyectoPoloComponent', () => {
  let component: ProyectoPoloComponent;
  let fixture: ComponentFixture<ProyectoPoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectoPoloComponent]
    });
    fixture = TestBed.createComponent(ProyectoPoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
