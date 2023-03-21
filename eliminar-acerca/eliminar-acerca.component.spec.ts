import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAcercaComponent } from './eliminar-acerca.component';

describe('EliminarAcercaComponent', () => {
  let component: EliminarAcercaComponent;
  let fixture: ComponentFixture<EliminarAcercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAcercaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
