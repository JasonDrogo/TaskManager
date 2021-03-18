import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbasedonpriortyComponent } from './taskbasedonpriorty.component';

describe('TaskbasedonpriortyComponent', () => {
  let component: TaskbasedonpriortyComponent;
  let fixture: ComponentFixture<TaskbasedonpriortyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskbasedonpriortyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskbasedonpriortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
