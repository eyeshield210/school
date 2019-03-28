import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EnseignantAddComponent } from './enseignant-add/enseignant-add.component';
import { EnseignantEditComponent } from './enseignant-edit/enseignant-edit.component';
import { EnseignantRemoveComponent } from './enseignant-remove/enseignant-remove.component';
import { EnseignantDetailComponent } from './enseignant-detail/enseignant-detail.component';
import { MatiereComponent } from './matiere/matiere.component';
import { MatiereRemoveComponent } from './matiere-remove/matiere-remove.component';
import { MatiereEditComponent } from './matiere-edit/matiere-edit.component';
import { MatiereAddComponent } from './matiere-add/matiere-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EnseignantComponent,
    EnseignantAddComponent,
    EnseignantEditComponent,
    EnseignantRemoveComponent,
    EnseignantDetailComponent,
    MatiereComponent,
    MatiereRemoveComponent,
    MatiereEditComponent,
    MatiereAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);