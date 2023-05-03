import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ArticlesComponent } from './articles/articles.component';
import { ProductsComponent } from './products/products.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';

const routes: Routes = [
  {path:"",redirectTo:"emploi",pathMatch:'full'},
  {path:"emploi",component:OffresEmploiComponent},
  {path:"article",component:ArticlesComponent},
  {path:"product",component:ProductsComponent},
  {path:"form",component:TemplateDrivenFormComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
