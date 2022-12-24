import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEducacionComponent } from './buscar-educacion.component';

describe('BuscarEducacionComponent', () => {
  let component: BuscarEducacionComponent;
  let fixture: ComponentFixture<BuscarEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
