import { Injectable } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json';
import { Observable, of } from 'rxjs';
import { TrackModel } from '@mCore/models/tracks.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:Observable<TrackModel[]>=of([]);
  dataTracksNewTrending$  :Observable<TrackModel[]>=of([]);

  constructor() {
    const {data}:any = (dataRaw as any).default;
    
    // Crear observer V1
    this.dataTracksTrending$ = of(data);

    // Crear  observer V2
    this.dataTracksNewTrending$ = new Observable((observer)=>{

      const newTrackExample: TrackModel ={
        _id: 1,
        name: "Perros",
        album: "Album V1",
        cover: "https://grupoenconcreto.com/wp-content/uploads/Cartel-de-Santa.jpg",
        artist: {
            name: "Cartel de Santa",
            nickname: "Babo",
            nationality: "MX"
        },
        duration: {
            start: 0,
            end: 333
        },
        url:"http://localhost:3000/track.mp3"
      }
      setTimeout(()=>observer.next([newTrackExample]), 3000);
    })
  }

  // getAllTracks$(): Observable<any>{
  getAllTracks$(){
    
  }

}
