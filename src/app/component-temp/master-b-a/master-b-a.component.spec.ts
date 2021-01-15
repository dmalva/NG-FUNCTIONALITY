import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBAComponent } from './master-b-a.component';

describe('MasterBAComponent', () => {
  let component: MasterBAComponent;
  let fixture: ComponentFixture<MasterBAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterBAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
