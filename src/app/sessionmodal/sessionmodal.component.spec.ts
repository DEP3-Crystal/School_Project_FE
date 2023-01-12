import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SessionmodalComponent} from './sessionmodal.component';

describe('SessionmodalComponent', () => {
  let component: SessionmodalComponent;
  let fixture: ComponentFixture<SessionmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionmodalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SessionmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
