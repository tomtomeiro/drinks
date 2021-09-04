import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredietsComponent } from './ingrediets.component';

describe('IngredietsComponent', () => {
  let component: IngredietsComponent;
  let fixture: ComponentFixture<IngredietsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredietsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredietsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
