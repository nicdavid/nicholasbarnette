import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconlyComponent } from './iconly.component';

describe('IconlyComponent', () => {
  let component: IconlyComponent;
  let fixture: ComponentFixture<IconlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
