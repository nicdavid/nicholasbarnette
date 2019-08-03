import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinlyComponent } from './coinly.component';

describe('CoinlyComponent', () => {
  let component: CoinlyComponent;
  let fixture: ComponentFixture<CoinlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
