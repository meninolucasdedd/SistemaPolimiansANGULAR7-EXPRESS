import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopInscritoComponent } from './workshop-inscrito.component';

describe('WorkshopInscritoComponent', () => {
  let component: WorkshopInscritoComponent;
  let fixture: ComponentFixture<WorkshopInscritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopInscritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopInscritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
