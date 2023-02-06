import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorieCardComponent } from './favorie-card.component';

describe('FavorieCardComponent', () => {
  let component: FavorieCardComponent;
  let fixture: ComponentFixture<FavorieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorieCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavorieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
