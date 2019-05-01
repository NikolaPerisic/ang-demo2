import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedsListComponent } from './classifieds-list.component';

describe('ClassifiedsListComponent', () => {
  let component: ClassifiedsListComponent;
  let fixture: ComponentFixture<ClassifiedsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
