import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Enseignant } from "../enseignant";
@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  displayedColumns: string[] = ["nom"];
  data: Enseignant[] = [];
  isLoadingResults = true;
  constructor(private api: ApiService) { }

  getEnseignants(){
    this.api.getEnseignants().subscribe(
      res => {
      this.data = res["lesenseignants"];
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
    this.getEnseignants();
  }

}

