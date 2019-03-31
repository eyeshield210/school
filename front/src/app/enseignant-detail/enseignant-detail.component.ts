import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { ApiService } from "../api.service";
import { Enseignant } from "../enseignant";

@Component({
  selector: 'app-enseignant-detail',
  templateUrl: './enseignant-detail.component.html',
  styleUrls: ['./enseignant-detail.component.css']
})
export class EnseignantDetailComponent implements OnInit {

  enseignant: Enseignant;
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) { }

  getEnseignantDetails(id) {
    this.api.getEnseignant(id).subscribe(data => {
    this.enseignant = data;
    console.log(this.enseignant);
    this.isLoadingResults = false;
    });
    }
   deleteEnseignant(id) {
    this.isLoadingResults = true;
    this.api.deleteEnseignant(id).subscribe(
    res => {
    this.isLoadingResults = false;
    this.router.navigate(["/enseignant"]);
    },
    err => {
    console.log(err);
    this.isLoadingResults = false;
    }
    );
   }

  ngOnInit() {
    this.getEnseignantDetails(this.route.snapshot.params["id"]);
  }

}
