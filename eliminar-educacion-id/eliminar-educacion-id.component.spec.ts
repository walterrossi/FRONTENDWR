import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEducacionIdComponent } from './eliminar-educacion-id.component';

describe('EliminarEducacionIdComponent', () => {
  let component: EliminarEducacionIdComponent;
  let fixture: ComponentFixture<EliminarEducacionIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEducacionIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEducacionIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
