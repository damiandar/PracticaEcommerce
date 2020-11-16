import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraBotonComponent } from './compra-boton.component';

describe('CompraBotonComponent', () => {
  let component: CompraBotonComponent;
  let fixture: ComponentFixture<CompraBotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraBotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
