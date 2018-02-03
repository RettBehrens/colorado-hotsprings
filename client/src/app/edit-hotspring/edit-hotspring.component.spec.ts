import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHotspringComponent } from './edit-hotspring.component';

describe('EditHotspringComponent', () => {
  let component: EditHotspringComponent;
  let fixture: ComponentFixture<EditHotspringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHotspringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHotspringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
