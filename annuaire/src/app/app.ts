import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarreDeRecherche } from './barre-de-recherche/barre-de-recherche';
import { Header } from './header/header';
import { CardClient } from './card-client/card-client';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarreDeRecherche, Header, CardClient],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'annuaire';
}
