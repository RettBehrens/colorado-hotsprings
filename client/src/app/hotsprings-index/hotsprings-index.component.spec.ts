import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspringsIndexComponent } from './hotsprings-index.component';

describe('HotspringsIndexComponent', () => {
  let component: HotspringsIndexComponent;
  let fixture: ComponentFixture<HotspringsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspringsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspringsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
