import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHardComponent } from './eliminar-hard.component';

describe('EliminarHardComponent', () => {
  let component: EliminarHardComponent;
  let fixture: ComponentFixture<EliminarHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarHardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
