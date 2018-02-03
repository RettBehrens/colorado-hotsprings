import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotspringComponent } from './create-hotspring.component';

describe('CreateHotspringComponent', () => {
  let component: CreateHotspringComponent;
  let fixture: ComponentFixture<CreateHotspringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHotspringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHotspringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
