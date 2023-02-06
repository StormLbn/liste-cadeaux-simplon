import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorieComponent } from './favorie.component';

describe('FavorieComponent', () => {
  let component: FavorieComponent;
  let fixture: ComponentFixture<FavorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
