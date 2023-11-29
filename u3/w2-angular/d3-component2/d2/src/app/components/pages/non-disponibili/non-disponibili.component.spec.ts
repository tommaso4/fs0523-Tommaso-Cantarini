import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDisponibiliComponent } from './non-disponibili.component';

describe('NonDisponibiliComponent', () => {
  let component: NonDisponibiliComponent;
  let fixture: ComponentFixture<NonDisponibiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonDisponibiliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonDisponibiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
