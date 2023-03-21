import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEncabezadoComponent } from './eliminar-encabezado.component';

describe('EliminarEncabezadoComponent', () => {
  let component: EliminarEncabezadoComponent;
  let fixture: ComponentFixture<EliminarEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEncabezadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
