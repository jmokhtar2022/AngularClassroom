import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { FormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';
import { ProductsComponent } from './products/products.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';
@NgModule({
  declarations: [
    AppComponent,
    OffresEmploiComponent,
    ArticlesComponent,
    ProductsComponent,
    TemplateDrivenFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
