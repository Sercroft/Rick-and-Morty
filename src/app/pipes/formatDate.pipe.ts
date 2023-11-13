import { Pipe, PipeTransform } from "@angular/core";
import { Characters } from "../interfaces/interface";
import { DatePipe } from "@angular/common";

@Pipe({
  name: 'formatDate'
})

export class FormatDate implements PipeTransform{

  transform(value: any): any{
    if (!value){
      return '';
    }

    const datePipe = new DatePipe('en-US');
    value = datePipe.transform(value, 'yyyy-MM-dd HH:mm:ss', 'UTC');

    return value;
  }
}
