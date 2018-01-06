import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  // @ViewChild('userform') userform: NgForm;

  constructor() { }

  ngOnInit() {
  }

  submitForm(userform: NgForm) {
    console.log('form is submitted');
    console.log(userform);
  }

}
