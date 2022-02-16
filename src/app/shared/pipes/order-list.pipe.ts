import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@mCore/models/tracks.interface';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {


  transform(tracks:TrackModel[],campo:string | null = null, order:string | null = 'asc'  ): TrackModel[] {
    if(!campo || !tracks ){
      return tracks;
    }
    
    // Ordenamos
    const fnOrdenamientoAsc = (trackA:any,trackB:any) =>{
      if (trackA[campo] > trackB[campo]) {
        return 1;
      }
      if (trackA[campo] < trackB[campo]) {
        return -1;
      }
      return 0;
    }

    const  arrayTracks = tracks.sort(fnOrdenamientoAsc);
        
    return (order === 'asc')? arrayTracks: arrayTracks.reverse();
  }
}
