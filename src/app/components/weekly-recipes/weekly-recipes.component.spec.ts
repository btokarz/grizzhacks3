import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyRecipesComponent } from './weekly-recipes.component';

describe('WeeklyRecipesComponent', () => {
  let component: WeeklyRecipesComponent;
  let fixture: ComponentFixture<WeeklyRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
