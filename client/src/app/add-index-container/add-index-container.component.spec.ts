import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndexContainerComponent } from './add-index-container.component';

describe('AddIndexContainerComponent', () => {
  let component: AddIndexContainerComponent;
  let fixture: ComponentFixture<AddIndexContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIndexContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIndexContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
