import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingtreeComponent } from './walkingtree.component';

describe('WalkingtreeComponent', () => {
  let component: WalkingtreeComponent;
  let fixture: ComponentFixture<WalkingtreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkingtreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
