import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsMessageComponent } from './cms-message.component';

describe('CmsMessageComponent', () => {
  let component: CmsMessageComponent;
  let fixture: ComponentFixture<CmsMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
