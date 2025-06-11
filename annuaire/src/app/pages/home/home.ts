import { Component } from '@angular/core';
import { GeorgeC } from '../../george-c/george-c';
import { CardClient } from '../../card-client/card-client';
import { CarteFournisseurs } from '../../carte-fournisseurs/carte-fournisseurs';
import { BarreDeRecherche } from '../../barre-de-recherche/barre-de-recherche';
import { JeanC } from '../../jean-c/jean-c';
import { RobertC } from '../../robert-c/robert-c';
import { LolaC } from '../../lola-c/lola-c';
import { ClaraC } from '../../clara-c/clara-c';
import { MarcF } from '../../marc-f/marc-f';
import { PierreF } from '../../pierre-f/pierre-f';


@Component({
  selector: 'app-home',
  imports: [GeorgeC,CardClient, CarteFournisseurs, BarreDeRecherche, JeanC, RobertC,LolaC,ClaraC, MarcF, PierreF
   ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
