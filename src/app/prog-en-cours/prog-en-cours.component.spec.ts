import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgEnCoursComponent } from './prog-en-cours.component';

describe('ProgEnCoursComponent', () => {
  let component: ProgEnCoursComponent;
  let fixture: ComponentFixture<ProgEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgEnCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
