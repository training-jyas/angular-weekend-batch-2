import { setTimeout } from 'timers';
import { Component } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: []
})
export class ServersComponent {
    isButtonActive: boolean;
    serverName: string;
    isButtonClicked: boolean;
    serverCreateStatus: string;
    servers: string[];

    constructor() {
        this.isButtonActive = false;
        this.isButtonClicked = false;
        this.serverName = 'Server 1';
        this.serverCreateStatus = 'no server created';
        this.servers = ['server 1', 'server 2', 'server 3'];
        setTimeout(() => {
            this.isButtonActive = true;
        }, 2000);
    }

    onInputUpdate(event) {
        console.log('handler called', event);
        this.serverName = event.target.value;
    }

    onButtonClick(event: Event) {
        this.isButtonClicked = true;
        this.serverCreateStatus = ' is created';
    }
}
