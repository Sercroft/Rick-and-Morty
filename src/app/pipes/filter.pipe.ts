import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filterCharacters'
})

export class FilterCharacters implements PipeTransform{
  transform(value: any[], arg: any): any{
    const result = value.filter(item =>
      item.name.toLowerCase().includes(arg.toLowerCase())
    );

    return result;
  }

}
