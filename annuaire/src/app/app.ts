import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarreDeRecherche } from './barre-de-recherche/barre-de-recherche';
import { Footer } from './features/footer/footer';
import { Header } from './header/header';
import { FormulaireDeContact } from './formulaire-de-contact/formulaire-de-contact';
import { CardClient } from './card-client/card-client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarreDeRecherche, Header, CardClient, Footer, FormulaireDeContact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'annuaire';
}
