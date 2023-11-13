import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { Characters } from 'src/app/interfaces/interface';
import { CommunicationComponentsService } from '../../services/communication-components.service';
import { FindCharacterService } from '../../services/find-character.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  charactersDataApi: Characters [] = [];
  order: string = 'asc';
  option: string = 'All';
  filter: string = '';
  status: string = '';
  processedCharacter: any;

  // Config pagination
  labels: any = {
    previousLabel: 'Previous 😮',
    nextLabel: 'Next 🧐',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };
  page: number = 1;
  directionLinks: boolean = true;
  autoHide: boolean = false;
  responsive: boolean = true;

  constructor(private apiSrv: ApiService, private communicationSrv: CommunicationComponentsService, private findCharacterSrv: FindCharacterService){}

  ngOnInit(): void{
    this.loadData();
  }

  async loadData(){
    return this.apiSrv.getDataApi().subscribe({
      next: data => {
        this.charactersDataApi = data;
        console.log(this.charactersDataApi);
      },
      error: error => {
        console.log(`Error en la respuesta de la API: ${error}`);
      }
    });
  }

  changeOrder(event: any){
    console.log(event);
    this.order = event;
  }

  changeOption(event: any){
    console.log(event);
    this.option = event;
  }

  getCharacter(idCharacter: number){
    this.processedCharacter = this.findCharacterSrv.processCharacters(idCharacter, this.charactersDataApi);
    this.openModal();
  }


  openModal(){
    this.communicationSrv.setData({statusComponent: true, data: this.processedCharacter});
  }


}
