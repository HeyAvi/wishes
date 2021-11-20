import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishSectionComponent } from './wish-section.component';

describe('WishSectionComponent', () => {
  let component: WishSectionComponent;
  let fixture: ComponentFixture<WishSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
