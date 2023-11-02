import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsActsComponent } from './events-acts.component';

describe('EventsActsComponent', () => {
  let component: EventsActsComponent;
  let fixture: ComponentFixture<EventsActsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsActsComponent]
    });
    fixture = TestBed.createComponent(EventsActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
