import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { AppComponent } from './app.component';
import { GestionSubventionsModule  } from './gestion-subventions/gestion-subventions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GestionSubventionsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }