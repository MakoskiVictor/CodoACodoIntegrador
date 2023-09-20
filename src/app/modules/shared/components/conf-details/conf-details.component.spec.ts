import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfDetailsComponent } from './conf-details.component';

describe('ConfDetailsComponent', () => {
  let component: ConfDetailsComponent;
  let fixture: ComponentFixture<ConfDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfDetailsComponent]
    });
    fixture = TestBed.createComponent(ConfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
