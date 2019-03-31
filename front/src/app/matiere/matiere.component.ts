import { Component, OnInit } from '@angular/core';
import { Matiere } from '../matiere';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  displayedColumns: string[] = ['matieres','nom'];
  data: Matiere[] = [];
  nomProvisoire: string;
  isLoadingResults = true;
  constructor(private api: ApiService) { }

  getEnseignantDetails(enseignant) {
    this.api.getEnseignant(enseignant.enseignantID).subscribe(enseignantRecupere => {
    enseignant.enseignantNOM = enseignantRecupere.nom;
    console.log("getEnsDetMatComp");
    console.log(enseignantRecupere.nom);
    });
    }

  getMatieres(){
    this.api.getMatieres().subscribe(
      res => {
      this.data = res["lesmatieres"];
      console.log("Longueur data");
      console.log(this.data.length);
      for(let i=0; i<this.data.length; i++){
        this.api.getEnseignant(this.data[i].enseignantID).subscribe(enseignantRecupere => {
          this.data[i].enseignantNOM = enseignantRecupere.nom;
          console.log("getEnsDetMatComp");
          console.log(enseignantRecupere.nom);
          });
      }
      console.log("lol");
      console.log(this.data);
      this.isLoadingResults = false;
      },
      err => {
      console.log(err);
      this.isLoadingResults = false;
      }
      );
  }

  ngOnInit() {
    this.getMatieres();
  }

}
