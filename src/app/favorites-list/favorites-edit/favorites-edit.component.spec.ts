import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesEditComponent } from './favorites-edit.component';

describe('FavoritesEditComponent', () => {
  let component: FavoritesEditComponent;
  let fixture: ComponentFixture<FavoritesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
