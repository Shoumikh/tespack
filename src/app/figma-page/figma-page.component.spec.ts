import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaPageComponent } from './figma-page.component';

describe('FigmaPageComponent', () => {
  let component: FigmaPageComponent;
  let fixture: ComponentFixture<FigmaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigmaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigmaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
