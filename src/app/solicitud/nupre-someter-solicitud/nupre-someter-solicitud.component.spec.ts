import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NupreSometerSolicitudComponent } from './nupre-someter-solicitud.component';

describe('NupreSometerSolicitudComponent', () => {
  let component: NupreSometerSolicitudComponent;
  let fixture: ComponentFixture<NupreSometerSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NupreSometerSolicitudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NupreSometerSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
