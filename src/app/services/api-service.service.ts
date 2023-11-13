import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Characters, ResponseApi } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = 'https://rickandmortyapi.com/api/character';
  private http = inject(HttpClient);

  getDataApi(): Observable<Characters[]>{
    return this.http.get<ResponseApi>(this.url).pipe(
      map((res: ResponseApi) => res?.results),
      catchError(() => EMPTY)
    );
  }
}
