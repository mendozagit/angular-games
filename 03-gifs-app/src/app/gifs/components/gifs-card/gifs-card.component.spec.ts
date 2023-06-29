import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsCardComponent } from './gifs-card.component';

describe('GifsCardComponent', () => {
  let component: GifsCardComponent;
  let fixture: ComponentFixture<GifsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GifsCardComponent]
    });
    fixture = TestBed.createComponent(GifsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
