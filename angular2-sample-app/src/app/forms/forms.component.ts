import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('userform') userform: NgForm;
  cities = ['begaluru', 'delhi'];
  user = {
    name: 'default',
    username: 'username',
    city: 'bengaluru'
  };

  constructor() { }

  ngOnInit() {
    console.log(this.userform);
    // this.userform.controls.username.patchValue(this.user.username);
  }

  submitForm(userform: NgForm) {
    console.log('form is submitted');
    console.log(userform);
    console.log(userform.value);
  }

  resetForm() {
    this.userform.reset();
  }

}
