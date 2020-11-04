import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server Created';
  serverName = '';
  serverCreated = false;
  servers = ['TestServer1','TestServer2'];

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Server Name is: ' + this.serverName;
  }

  onUpdateServerName($event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
