import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCompaniesComponent } from './other-companies.component';

describe('OtherCompaniesComponent', () => {
  let component: OtherCompaniesComponent;
  let fixture: ComponentFixture<OtherCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
