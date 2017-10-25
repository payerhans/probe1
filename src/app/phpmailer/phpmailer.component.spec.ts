import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpmailerComponent } from './phpmailer.component';

describe('PhpmailerComponent', () => {
  let component: PhpmailerComponent;
  let fixture: ComponentFixture<PhpmailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpmailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpmailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
