import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryMenuComponent } from './memory-menu.component';

describe('MemoryMenuComponent', () => {
  let component: MemoryMenuComponent;
  let fixture: ComponentFixture<MemoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoryMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
