import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }


  searchTracks$(termino: string): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks?src=${termino}`)
               .pipe(  map( ({data}:any) => data ) );
  }
}
