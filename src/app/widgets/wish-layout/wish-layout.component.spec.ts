import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishLayoutComponent } from './wish-layout.component';

describe('WishLayoutComponent', () => {
  let component: WishLayoutComponent;
  let fixture: ComponentFixture<WishLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
