import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedNewComponent } from './classified-new.component';

describe('ClassifiedNewComponent', () => {
  let component: ClassifiedNewComponent;
  let fixture: ComponentFixture<ClassifiedNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
