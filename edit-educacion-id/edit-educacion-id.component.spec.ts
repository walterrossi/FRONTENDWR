import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducacionIdComponent } from './edit-educacion-id.component';

describe('EditEducacionIdComponent', () => {
  let component: EditEducacionIdComponent;
  let fixture: ComponentFixture<EditEducacionIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducacionIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEducacionIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
