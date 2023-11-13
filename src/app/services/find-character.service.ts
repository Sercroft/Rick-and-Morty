import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindCharacterService {

  constructor() {}

  processCharacters(idCharacter: number, characters: any){
    const elementoBuscado = characters.find((item: {id: number;}) => item.id === idCharacter);
    //console.log(`ELEMENTO: ${JSON.stringify(elementoBuscado)}`);

    return elementoBuscado;
  }
}
