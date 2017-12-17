import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers = [];
  showEven = true;
  highlightColors = {
    default: 'yellow',
    highlight: 'red'
  };
  value = 30;

  constructor() { }

  ngOnInit() {
    this.allNumbers.forEach(n => {
      if (n % 2 === 0) {
        this.numbers.push(n);
      }
    });
  }

  toggle() {
    this.numbers = [];
    if (this.showEven) {
      this.showEven = false;
      this.allNumbers.forEach(n => {
        if (n % 2 !== 0) {
          this.numbers.push(n);
        }
      });
    } else {
      this.showEven = true;
      this.allNumbers.forEach(n => {
        if (n % 2 === 0) {
          this.numbers.push(n);
        }
      });
    }
  }

}
