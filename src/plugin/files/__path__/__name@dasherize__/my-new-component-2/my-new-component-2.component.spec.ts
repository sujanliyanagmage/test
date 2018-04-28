import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewComponent2Component } from './my-new-component-2.component';

describe('MyNewComponent2Component', () => {
  let component: MyNewComponent2Component;
  let fixture: ComponentFixture<MyNewComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
