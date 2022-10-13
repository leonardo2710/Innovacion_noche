import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreguntasGeneralComponent } from './modal-preguntas-general.component';

describe('ModalPreguntasGeneralComponent', () => {
  let component: ModalPreguntasGeneralComponent;
  let fixture: ComponentFixture<ModalPreguntasGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPreguntasGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPreguntasGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
