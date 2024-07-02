import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NupreRegistrarDocumentacionComponent } from './nupre-registrar-documentacion.component';

describe('NupreRegistrarDocumentacionComponent', () => {
  let component: NupreRegistrarDocumentacionComponent;
  let fixture: ComponentFixture<NupreRegistrarDocumentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NupreRegistrarDocumentacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NupreRegistrarDocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
