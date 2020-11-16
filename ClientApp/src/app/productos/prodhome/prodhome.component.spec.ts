import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdhomeComponent } from './prodhome.component';

describe('ProdhomeComponent', () => {
  let component: ProdhomeComponent;
  let fixture: ComponentFixture<ProdhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
