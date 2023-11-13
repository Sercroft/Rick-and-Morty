import { Component, OnInit } from '@angular/core';
import { CommunicationComponentsService } from './services/communication-components.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  statusModal  : boolean = false;
  title = 'rick_and_morty';
  responseEmit: any;

  constructor(private communicationSrv: CommunicationComponentsService){}

  ngOnInit(): void{
    this.communicationSrv.data$.subscribe((value) => {
      this.statusModal = value.statusComponent;
    });
  }
}
