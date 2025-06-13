import { Component } from '@angular/core';

@Component({
  selector: 'app-robert-c',
  imports: [],
  templateUrl: './robert-c.html',
  styleUrl: './robert-c.css'
})
export class RobertC {
  nom: string = 'Robert Delattre';
  poste: string = 'Chef de Projet';
  description: string = 'Client actif depuis 2023, à la recherche de solutions innovantes pour ses équipes terrain.';
  email: string = 'robert.delattre@example.com';
  telephone: string = '06 78 90 12 34';
  photoUrl: string = 'robert.jpg';
  
}
