import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterBABaComponent } from './master-b-a-ba.component';

describe('MasterBABaComponent', () => {
  let component: MasterBABaComponent;
  let fixture: ComponentFixture<MasterBABaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterBABaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterBABaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
