import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PS2DotsComponentComponent } from './ps2-dots-component.component';

describe('PS2DotsComponentComponent', () => {
  let component: PS2DotsComponentComponent;
  let fixture: ComponentFixture<PS2DotsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PS2DotsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PS2DotsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
