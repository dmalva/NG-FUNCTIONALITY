import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeServicesComponent } from './consume-services.component';

describe('ConsumeServicesComponent', () => {
  let component: ConsumeServicesComponent;
  let fixture: ComponentFixture<ConsumeServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
