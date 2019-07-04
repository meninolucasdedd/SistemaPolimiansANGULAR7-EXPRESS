import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaDePadroesComponent } from './galeria-de-padroes.component';

describe('GaleriaDePadroesComponent', () => {
  let component: GaleriaDePadroesComponent;
  let fixture: ComponentFixture<GaleriaDePadroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaDePadroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaDePadroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
