import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackedErrorMessagesComponent } from './backed-error-messages.component';

describe('BackedErrorMessagesComponent', () => {
  let component: BackedErrorMessagesComponent;
  let fixture: ComponentFixture<BackedErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackedErrorMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackedErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
