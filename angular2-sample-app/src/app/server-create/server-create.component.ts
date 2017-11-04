import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.css']
})
export class ServerCreateComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output('srvAdded') serverAdded = new EventEmitter < {
    name: String,
    content: String,
    type: String
  } > ();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(serverNameInput);
    console.log(this.serverContentInput);
    const server = {
      type: 'server',
      // name: this.newServerName,
      name: serverNameInput.value,
      // content: this.newServerContent
      content: this.serverContentInput.nativeElement.value
    };
    this.serverAdded.emit(server);
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    const server = {
      type: 'blueprint',
      // name: this.newServerName,
      name: serverNameInput.value,
      // content: this.newServerContent
      content: this.serverContentInput.nativeElement.value
    };
    this.serverAdded.emit(server);
  }
}
