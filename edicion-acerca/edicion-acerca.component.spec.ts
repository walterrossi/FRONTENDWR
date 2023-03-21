import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionAcercaComponent } from './edicion-acerca.component';

describe('EdicionAcercaComponent', () => {
  let component: EdicionAcercaComponent;
  let fixture: ComponentFixture<EdicionAcercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionAcercaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionAcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
