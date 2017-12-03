import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  servers = [];

  constructor() { }

  ngOnInit() {
  }

  onServerAdded(server) {
    this.servers.push(server);
  }

}
