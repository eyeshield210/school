import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnseignantComponent } from './enseignant/enseignant.component';
import { EnseignantAddComponent } from './enseignant-add/enseignant-add.component';
import { EnseignantEditComponent } from './enseignant-edit/enseignant-edit.component';
import { EnseignantRemoveComponent } from './enseignant-remove/enseignant-remove.component';
import { EnseignantDetailComponent } from './enseignant-detail/enseignant-detail.component';
import { MatiereComponent } from './matiere/matiere.component';
import { MatiereRemoveComponent } from './matiere-remove/matiere-remove.component';
import { MatiereEditComponent } from './matiere-edit/matiere-edit.component';
import { MatiereAddComponent } from './matiere-add/matiere-add.component';

const routes: Routes = [
  { path: 'enseignant', component: EnseignantComponent },
  { path: 'enseignant/detail/:id', component: EnseignantDetailComponent },
  { path: 'enseignant/edit/:id', component: EnseignantEditComponent },
  { path: 'enseignant/add', component: EnseignantAddComponent },
  { path: 'enseignant/remove', component: EnseignantRemoveComponent },
  { path: 'matiere', component: MatiereComponent },
  { path: 'matiere/edit/:id', component: MatiereEditComponent },
  { path: 'matiere/add', component: MatiereAddComponent },
  { path: 'matiere/remove', component: MatiereRemoveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
