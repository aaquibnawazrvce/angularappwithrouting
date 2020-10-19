import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproducttypeComponent } from './viewproducttype.component';

describe('ViewproducttypeComponent', () => {
  let component: ViewproducttypeComponent;
  let fixture: ComponentFixture<ViewproducttypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproducttypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproducttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
