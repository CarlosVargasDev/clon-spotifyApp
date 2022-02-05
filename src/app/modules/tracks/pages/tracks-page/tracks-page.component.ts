import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@mCore/models/tracks.interface';
import { TrackService } from '@mModules/tracks/services/track.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  
  // List observer
  listObserver$:Subscription[] = [];

  // data_model:Array<TrackModel>=[];
  tracksTrending:TrackModel[]=[];
  tracksRamdom:TrackModel[]=[];

  constructor(private trackService:TrackService) { }

  ngOnInit(): void {
    const obsTrending$ = this.trackService.dataTracksTrending$
        .subscribe(tracks =>{
          console.log("Canciones trending");
          this.tracksTrending = [...tracks];
          this.tracksRamdom   = [...tracks];
        });

    const newTrendings$ = this.trackService.dataTracksNewTrending$
          .subscribe(tracks =>{
            console.log("CAncion ramdom entrando");
            this.tracksTrending.push( ...tracks);
          })


    
    // Agregamos a nuestra lista de observer
    this.listObserver$.push(obsTrending$);  
    this.listObserver$.push(newTrendings$);
  }

  ngOnDestroy(): void {
      this.listObserver$.forEach( i => i.unsubscribe());
  }

}
