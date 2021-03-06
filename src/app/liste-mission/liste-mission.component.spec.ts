import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMissionComponent } from './liste-mission.component';

describe('ListeMissionComponent', () => {
  let component: ListeMissionComponent;
  let fixture: ComponentFixture<ListeMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
