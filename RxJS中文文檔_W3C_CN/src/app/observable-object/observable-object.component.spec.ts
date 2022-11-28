import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableObjectComponent } from './observable-object.component';

describe('ObservableObjectComponent', () => {
  let component: ObservableObjectComponent;
  let fixture: ComponentFixture<ObservableObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
