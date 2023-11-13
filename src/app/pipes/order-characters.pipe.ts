import { Pipe, PipeTransform } from "@angular/core";
import { Characters } from "../interfaces/interface";

@Pipe({
  name: 'orderCharacters'
})

export class OrderCharacters implements PipeTransform{

  transform(value: Characters[], ...args: string[]): Characters[]{
    const [order = 'desc']: string[] = args;

    if(!Array.isArray(value)){
      return value;
    }

    return value.sort((a, b) => {
      const compare = a.name.localeCompare(b.name);
      return (order === 'asc' )? compare : -compare;
    });
  }
}
