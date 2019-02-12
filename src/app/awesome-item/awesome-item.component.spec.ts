import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeItemComponent } from './awesome-item.component';

describe('AwesomeItemComponent', () => {
  let component: AwesomeItemComponent;
  let fixture: ComponentFixture<AwesomeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
