import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentIdeaComponent } from './present-idea.component';

describe('PresentIdeaComponent', () => {
  let component: PresentIdeaComponent;
  let fixture: ComponentFixture<PresentIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentIdeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
