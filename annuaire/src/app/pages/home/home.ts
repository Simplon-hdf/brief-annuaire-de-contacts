import { Component } from '@angular/core';
import { GeorgeC } from '../../george-c/george-c';
import { CardClient } from '../../card-client/card-client';
import { CarteFournisseurs } from '../../carte-fournisseurs/carte-fournisseurs';
import { BarreDeRecherche } from '../../barre-de-recherche/barre-de-recherche';
import { JeanC } from '../../jean-c/jean-c';
import { RobertC } from '../../robert-c/robert-c';
import { LolaC } from '../../lola-c/lola-c';
import { ClaraC } from '../../clara-c/clara-c';
import { AichaF } from "../../aicha-f/aicha-f";
import { LouiseF } from "../../louise-f/louise-f";
import { ThomasF } from "../../thomas-f/thomas-f";

@Component({
  selector: 'app-home',
  imports: [GeorgeC, CardClient, CarteFournisseurs, BarreDeRecherche, JeanC, RobertC, LolaC, ClaraC, AichaF, LouiseF, ThomasF],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
