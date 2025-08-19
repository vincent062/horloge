import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorlogeVille } from './horloge-ville';

describe('HorlogeVille', () => {
  let component: HorlogeVille;
  let fixture: ComponentFixture<HorlogeVille>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorlogeVille]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorlogeVille);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
