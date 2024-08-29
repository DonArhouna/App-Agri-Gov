import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importer FormsModule

@Component({
  selector: 'app-gestion-subventions',
  standalone: true,
  imports: [FormsModule], // Ajouter FormsModule ici
  templateUrl: './gestion-subventions.component.html',
  styleUrls: ['./gestion-subventions.component.scss']
})
export class GestionSubventionsComponent {
  demande = {
    nom: '',
    montant: 0
  };

  onSubmit(): void {
    console.log('Form submitted:', this.demande);
  }
}

// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms'; // Importer FormsModule
// import { SubventionsService } from '../Services/subventions.service';


// @Component({
//   selector: 'app-gestion-subventions',
//   standalone: true,
//   imports: [FormsModule], // Ajouter FormsModule ici
//   templateUrl: './gestion-subventions.component.html',
//   styleUrls: ['./gestion-subventions.component.scss']
// })
// export class GestionSubventionsComponent {
//   demande = {
//     nom: '',
//     montant: 0
//   };

//   constructor(private subventionsService: SubventionsService) { }
//   onSubmit(): void {
//         this.subventionsService.createSubvention(this.demande).subscribe(response => {
//           console.log('Subvention created:', response);
//           this.demande = { nom: '', montant: 0 };
//         });
//   }
// }


