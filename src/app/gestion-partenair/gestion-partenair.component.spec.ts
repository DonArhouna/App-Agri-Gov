import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPartenairComponent } from './gestion-partenair.component';

describe('GestionPartenairComponent', () => {
  let component: GestionPartenairComponent;
  let fixture: ComponentFixture<GestionPartenairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPartenairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPartenairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
