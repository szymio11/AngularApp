import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByidRecipeComponent } from './byid-recipe.component';

describe('ByidRecipeComponent', () => {
  let component: ByidRecipeComponent;
  let fixture: ComponentFixture<ByidRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByidRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByidRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
