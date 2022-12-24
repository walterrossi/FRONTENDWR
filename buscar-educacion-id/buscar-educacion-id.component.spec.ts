import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEducacionIdComponent } from './buscar-educacion-id.component';

describe('BuscarEducacionIdComponent', () => {
  let component: BuscarEducacionIdComponent;
  let fixture: ComponentFixture<BuscarEducacionIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEducacionIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarEducacionIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
