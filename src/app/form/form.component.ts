import { Component, OnInit } from '@angular/core';

import { FormsFields }    from '../forms-fields';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {




  constructor() { }

  ngOnInit() {
  }



cars = ["volvo","saab","mercedes","audi"];
genre = ["male","female"];

//formsField = new  FormsFields()
 formsField = new FormsFields('vita','Lname',new Date(),'saab','str2',123123,'asdasd');

   submitted = false;

   onSubmit() { this.submitted = true; }

   newForm() {
     //console.log ('A')
      //this.formsField = new FormsFields('Vitali','','','','',,'');

   }

   // Remove this when we're done
   //get diagnostic() { return JSON.stringify(this.formsField); }

}
