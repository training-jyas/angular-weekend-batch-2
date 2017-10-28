import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector: '.app-root',
  // selector: '[app-root]',
  templateUrl: './app.component.html',
  // template: `
  //   <div>abrakadabra !!!!</div>
  // `,
  styleUrls: ['./app.component.css']
  // styles: [`
  //   .red {
  //     color: red;
  //   }
  // `]
})
export class AppComponent {
  title = 'Demo App';
}
