import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionNoEdiComponent } from './educacion-no-edi.component';

describe('EducacionNoEdiComponent', () => {
  let component: EducacionNoEdiComponent;
  let fixture: ComponentFixture<EducacionNoEdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionNoEdiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionNoEdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
