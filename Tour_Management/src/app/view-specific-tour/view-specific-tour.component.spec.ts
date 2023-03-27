import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificTourComponent } from './view-specific-tour.component';

describe('ViewSpecificTourComponent', () => {
  let component: ViewSpecificTourComponent;
  let fixture: ComponentFixture<ViewSpecificTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpecificTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSpecificTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
