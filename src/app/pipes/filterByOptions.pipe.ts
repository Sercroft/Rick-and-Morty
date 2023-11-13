import { Pipe, PipeTransform } from "@angular/core";
import { Characters } from "../interfaces/interface";

@Pipe({
  name: 'filterByOptions'
})

export class FilterByOptions implements PipeTransform{
  transform(characters: Characters[], arg: string): any[]{
    console.log(`arg: ${arg}`);


    if(!Array.isArray(characters) || arg === 'All'){
      return characters;
    }


    return characters.filter(character =>
      character.status.toLowerCase().includes(arg.toLowerCase())
    );
  }
}
