import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedsDetailComponent } from './classifieds-detail.component';

describe('ClassifiedsDetailComponent', () => {
  let component: ClassifiedsDetailComponent;
  let fixture: ComponentFixture<ClassifiedsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
