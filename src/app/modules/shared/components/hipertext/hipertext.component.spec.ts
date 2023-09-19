import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipertextComponent } from './hipertext.component';

describe('HipertextComponent', () => {
  let component: HipertextComponent;
  let fixture: ComponentFixture<HipertextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HipertextComponent]
    });
    fixture = TestBed.createComponent(HipertextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
