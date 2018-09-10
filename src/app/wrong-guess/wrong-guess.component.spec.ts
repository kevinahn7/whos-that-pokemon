import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongGuessComponent } from './wrong-guess.component';

describe('WrongGuessComponent', () => {
  let component: WrongGuessComponent;
  let fixture: ComponentFixture<WrongGuessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongGuessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
