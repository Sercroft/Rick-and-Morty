import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationComponentsService {
  private sourceData = new BehaviorSubject<any>({statusComponent: false, data: null});
  data$ = this.sourceData.asObservable();

  constructor(){}

  setData(data: any){
    this.sourceData.next(data);
  }

  getData(){
    return this.data$;
  }

}
