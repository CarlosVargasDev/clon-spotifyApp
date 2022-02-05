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
    this.loadDataTrending();
    this.loadDataRandom();
  }

  loadDataTrending(){
    const obsTracksTrending$ = this.trackService.getAllTracks$()
      .subscribe(( tracks:TrackModel[] )=>{
        this.tracksTrending = [...tracks];
      });
    this.listObserver$.push(obsTracksTrending$);

  }

  loadDataRandom(){
    const obsTracksRandom$ = this.trackService.getAllRandom()
      .subscribe( (tracks:TrackModel[])=> {
        this.tracksRamdom = [...tracks];
      })

    this.listObserver$.push(obsTracksRandom$);
  }


  ngOnDestroy(): void {
      this.listObserver$.forEach( i => i.unsubscribe());
  }

}
