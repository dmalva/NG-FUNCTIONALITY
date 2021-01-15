import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBComponent } from './master-b.component';

describe('MasterBComponent', () => {
  let component: MasterBComponent;
  let fixture: ComponentFixture<MasterBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
