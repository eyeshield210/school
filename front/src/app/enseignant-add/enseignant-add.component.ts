import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
import { Enseignant } from "../enseignant"
import {
  FormControl,
FormGroupDirective,
FormBuilder,
FormGroup,
NgForm,
Validators
} from "@angular/forms";


@Component({
  selector: 'app-enseignant-add',
  templateUrl: './enseignant-add.component.html',
  styleUrls: ['./enseignant-add.component.css']
})
export class EnseignantAddComponent implements OnInit {
  enseignantForm: FormGroup;
  nom: string = "";
  isLoadingResults = false;

  constructor(private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.enseignantForm = this.formBuilder.group({
      nom: [null, Validators.required],
      });
  }
  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addEnseignant(form).subscribe(
    res => {
    let id = res["id"];
    this.isLoadingResults = false;
    this.router.navigate(["/enseignant"]);
    },
    err => {
    console.log(err);
    this.isLoadingResults = false;
    }
    );
    }

}