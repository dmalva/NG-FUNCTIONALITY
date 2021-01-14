import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuntionalityComponent } from './funtionality.component';

describe('FuntionalityComponent', () => {
  let component: FuntionalityComponent;
  let fixture: ComponentFixture<FuntionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuntionalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuntionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
