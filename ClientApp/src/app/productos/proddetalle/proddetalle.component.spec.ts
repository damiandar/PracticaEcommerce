import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProddetalleComponent } from './proddetalle.component';

describe('ProddetalleComponent', () => {
  let component: ProddetalleComponent;
  let fixture: ComponentFixture<ProddetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProddetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProddetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
