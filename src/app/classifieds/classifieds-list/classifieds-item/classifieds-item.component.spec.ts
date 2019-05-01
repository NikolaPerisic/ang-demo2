import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedsItemComponent } from './classifieds-item.component';

describe('ClassifiedsItemComponent', () => {
  let component: ClassifiedsItemComponent;
  let fixture: ComponentFixture<ClassifiedsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
