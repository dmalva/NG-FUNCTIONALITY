import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeSingletonComponent } from './consume-singleton.component';

describe('ConsumeSingletonComponent', () => {
  let component: ConsumeSingletonComponent;
  let fixture: ComponentFixture<ConsumeSingletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeSingletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeSingletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
