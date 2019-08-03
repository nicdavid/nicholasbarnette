import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinciComponent } from './vinci.component';

describe('VinciComponent', () => {
  let component: VinciComponent;
  let fixture: ComponentFixture<VinciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
