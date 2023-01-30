import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistTaskListComponent } from './tasklist-task-list.component';

describe('TasklistTaskListComponent', () => {
  let component: TasklistTaskListComponent;
  let fixture: ComponentFixture<TasklistTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasklistTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasklistTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
