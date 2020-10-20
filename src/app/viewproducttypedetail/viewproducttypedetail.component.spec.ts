import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproducttypedetailComponent } from './viewproducttypedetail.component';

describe('ViewproducttypedetailComponent', () => {
  let component: ViewproducttypedetailComponent;
  let fixture: ComponentFixture<ViewproducttypedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproducttypedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproducttypedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
