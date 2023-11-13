import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'capitalizedString'
})

export class CapitalizedString implements PipeTransform{
  transform(...args: any[]): any{
    const [string = '']: string[] = args;

    const capitalizedString = string.replace(/\b\w/g, (match) => match.toUpperCase());

    return capitalizedString;
  }

}
