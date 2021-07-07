import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotWorkingComponent } from './page-not-working.component';

describe('PageNotWorkingComponent', () => {
  let component: PageNotWorkingComponent;
  let fixture: ComponentFixture<PageNotWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotWorkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
