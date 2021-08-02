import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamilyMembersComponent } from './add-family-members.component';

describe('AddFamilyMembersComponent', () => {
  let component: AddFamilyMembersComponent;
  let fixture: ComponentFixture<AddFamilyMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFamilyMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFamilyMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
