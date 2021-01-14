import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeOndemandComponent } from './consume-ondemand.component';

describe('ConsumeOndemandComponent', () => {
  let component: ConsumeOndemandComponent;
  let fixture: ComponentFixture<ConsumeOndemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeOndemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeOndemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
