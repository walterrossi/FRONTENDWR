import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHardComponent } from './add-hard.component';

describe('AddHardComponent', () => {
  let component: AddHardComponent;
  let fixture: ComponentFixture<AddHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
