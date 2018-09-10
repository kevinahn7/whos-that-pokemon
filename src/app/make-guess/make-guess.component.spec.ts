import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeGuessComponent } from './make-guess.component';

describe('MakeGuessComponent', () => {
  let component: MakeGuessComponent;
  let fixture: ComponentFixture<MakeGuessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeGuessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
