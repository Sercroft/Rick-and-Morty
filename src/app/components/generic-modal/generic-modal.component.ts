import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Characters } from 'src/app/interfaces/interface';
import { CommunicationComponentsService } from 'src/app/services/communication-components.service';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css']
})
export class GenericModalComponent implements OnInit {

  character: Characters [] = [];
  private subscription!: Subscription;
  colorStatusCharacter: string = '';

  constructor(private communicationSrv: CommunicationComponentsService){}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadData(){
    this.subscription = this.communicationSrv.getData().subscribe((value) => {
      this.character = Object.values(value)
      console.log(this.character);
    });
  }

  closeModal(){
    this.communicationSrv.setData(false);
  }

  getColor(value: string): string{
    const colorMapping = {
      'Alive'   : '#66FF00',
      'Dead'    : '#F32A2A',
      'unknown' : '#E5EE28'
    };

    return colorMapping[value as keyof typeof colorMapping] || 'black';
  }
}
