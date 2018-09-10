import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationButtonsComponent } from './generation-buttons.component';

describe('GenerationButtonsComponent', () => {
  let component: GenerationButtonsComponent;
  let fixture: ComponentFixture<GenerationButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerationButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
