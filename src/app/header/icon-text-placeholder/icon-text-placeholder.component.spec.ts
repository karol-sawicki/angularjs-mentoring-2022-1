import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTextPlaceholderComponent } from './icon-text-placeholder.component';

describe('IconTextPlaceholderComponent', () => {
  let component: IconTextPlaceholderComponent;
  let fixture: ComponentFixture<IconTextPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTextPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTextPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
