import { Component, ElementRef, OnInit, Input, ContentChild} from '@angular/core';

@Component({

  
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srv') server: any;
  @ContentChild('paragraph') paragraph: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log('paragraph', this.paragraph);
  }

}
