import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  users = [{
    name: 'ambuj',
    doj: new Date(),
    role: 'Software Developer'
  }, {
    name: 'shridhar',
    doj: new Date(),
    role: 'Automation Testing'
  }, {
    name: 'saurav',
    doj: new Date(),
    role: 'Developer'
  }, {
    name: 'ravi',
    doj: new Date(),
    role: 'Does lot of stuff'
  }];

  greeting: Promise < string > | null = null;
  arrived = false;

  private resolve: Function | null = null;

  constructor() {
    this.reset();
  }

  reset() {
    this.arrived = false;
    this.greeting = new Promise < string > ((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  ngOnInit() {}

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve('hi there!');
      this.arrived = true;
    }
  }

}
