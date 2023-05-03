import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent {
  Save(F: NgForm){
    console.log(F);
    
      }
}
