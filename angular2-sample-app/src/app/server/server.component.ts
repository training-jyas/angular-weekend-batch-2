import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  name: string;
  status: string;

  constructor() {
    this.name = 'server 1';
    this.status = Math.random() >= 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'yellow';
  }

}
