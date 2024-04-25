import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSolicitudesComponent } from './detalle-solicitudes.component';

describe('DetalleSolicitudesComponent', () => {
  let component: DetalleSolicitudesComponent;
  let fixture: ComponentFixture<DetalleSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleSolicitudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
