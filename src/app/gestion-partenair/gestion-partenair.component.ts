import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importer FormsModule


@Component({
  selector: 'app-gestion-partenair',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestion-partenair.component.html',
  styleUrl: './gestion-partenair.component.scss'
})
export class GestionPartenairComponent {
  ajout = {
    type: '',
    nom: '',
    adresse: ''
  };

  onSubmit(): void {
    console.log('Form submitted:', this.ajout);
  }
}
