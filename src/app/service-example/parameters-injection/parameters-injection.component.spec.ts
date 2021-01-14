import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersInjectionComponent } from './parameters-injection.component';

describe('ParametersInjectionComponent', () => {
  let component: ParametersInjectionComponent;
  let fixture: ComponentFixture<ParametersInjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametersInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
