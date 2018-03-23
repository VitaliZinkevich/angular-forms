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

 /*formsField = new FormsFields('Name','Lname','13-02-1986','str1','str2',123123,'asdasd');*/

   submitted = false;

   onSubmit() { this.submitted = true; }

   // Remove this when we're done
   get diagnostic() { return JSON.stringify(this.formsField); }

}
