import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formpage1Component } from './formpage1.component';

describe('Formpage1Component', () => {
  let component: Formpage1Component;
  let fixture: ComponentFixture<Formpage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formpage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
