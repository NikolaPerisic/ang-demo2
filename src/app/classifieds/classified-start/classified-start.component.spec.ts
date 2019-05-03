import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifiedStartComponent } from './classified-start.component';

describe('ClassifiedStartComponent', () => {
  let component: ClassifiedStartComponent;
  let fixture: ComponentFixture<ClassifiedStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifiedStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifiedStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
