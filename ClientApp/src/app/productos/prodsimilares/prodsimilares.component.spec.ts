import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdsimilaresComponent } from './prodsimilares.component';

describe('ProdsimilaresComponent', () => {
  let component: ProdsimilaresComponent;
  let fixture: ComponentFixture<ProdsimilaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdsimilaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdsimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
