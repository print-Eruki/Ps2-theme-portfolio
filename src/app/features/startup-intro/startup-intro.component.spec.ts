import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupIntroComponent } from './startup-intro.component';

describe('StartupIntroComponent', () => {
  let component: StartupIntroComponent;
  let fixture: ComponentFixture<StartupIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartupIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartupIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
