import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HabityUis } from './habity-uis.';

describe('HabityUis', () => {
  let component: HabityUis;
  let fixture: ComponentFixture<HabityUis>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HabityUis],
    }).compileComponents();

    fixture = TestBed.createComponent(HabityUis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
