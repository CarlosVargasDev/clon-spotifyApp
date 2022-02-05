import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { TrackModel } from '@mCore/models/tracks.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api;

  dataTracksTrending$:Observable<TrackModel[]>=of([]);
  dataTracksNewTrending$  :Observable<TrackModel[]>=of([]);

  constructor(private httpClient:HttpClient) {
  }

  errorHandler(error:any, msg:string){
    console.log(msg);
    console.log(error);
    return of([])
  }

  
  getAllTracks$():Observable<TrackModel[]>{
    const urlTracks = `${this.URL}/tracks`;
    return this.httpClient.get(urlTracks)
              .pipe(
                map(({data}:any) =>data),
                catchError(error => this.errorHandler(error,`No se pudo obtener la data de ${urlTracks}`))
              );
    }


  getAllRandom(): Observable<TrackModel[]>{
    const urlTracks = `${this.URL}/tracks`;
    return this.httpClient.get(urlTracks)
              .pipe(
                map(({data}:any) => data.reverse()),
                catchError(error => this.errorHandler(error,`No se pudo obtener la data de ${urlTracks}`))
              )
  }

}
