import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSubventionsComponent } from './gestion-subventions.component';

describe('GestionSubventionsComponent', () => {
  let component: GestionSubventionsComponent;
  let fixture: ComponentFixture<GestionSubventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionSubventionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionSubventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
