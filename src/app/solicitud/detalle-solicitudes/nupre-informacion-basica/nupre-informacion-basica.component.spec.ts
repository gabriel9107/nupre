import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NupreInformacionBasicaComponent } from './nupre-informacion-basica.component';

describe('NupreInformacionBasicaComponent', () => {
  let component: NupreInformacionBasicaComponent;
  let fixture: ComponentFixture<NupreInformacionBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NupreInformacionBasicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NupreInformacionBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
