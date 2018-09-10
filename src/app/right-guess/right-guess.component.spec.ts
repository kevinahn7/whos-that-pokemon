import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightGuessComponent } from './right-guess.component';

describe('RightGuessComponent', () => {
  let component: RightGuessComponent;
  let fixture: ComponentFixture<RightGuessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightGuessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
