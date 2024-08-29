import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionSubventionsComponent } from './gestion-subventions.component';

@NgModule({
  declarations: [GestionSubventionsComponent],
  imports: [
    CommonModule,
    FormsModule // Ajouter FormsModule ici
  ]
})
export class GestionSubventionsModule { }
