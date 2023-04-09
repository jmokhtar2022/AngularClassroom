import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {path:"",redirectTo:"emploi",pathMatch:'full'},
  {path:"emploi",component:OffresEmploiComponent},
  {path:"article",component:ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
