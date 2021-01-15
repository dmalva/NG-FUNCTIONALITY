import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBABComponent } from './master-b-a-b.component';

describe('MasterBABComponent', () => {
  let component: MasterBABComponent;
  let fixture: ComponentFixture<MasterBABComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterBABComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterBABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
