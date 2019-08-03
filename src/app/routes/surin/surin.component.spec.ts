import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurinComponent } from './surin.component';

describe('SurinComponent', () => {
  let component: SurinComponent;
  let fixture: ComponentFixture<SurinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
