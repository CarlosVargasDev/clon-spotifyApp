import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@mCore/models/tracks.interface';
import { Subscription } from 'rxjs';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  // mockCover= {
  //   cover: "data:image/png;base64,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",
  //   album:'album 1',
  //   name:'a lala lon',
  //   url: "http://localhost/track.mp3",
  //   _id:1
  // }

  @ViewChild("progressBar") progressBar!: ElementRef;
  public mockCover!:TrackModel;
  public timeMusic!:string;
  public remainningMusic!:string;
  public playerStatus:string="paused";
  public percentageProgressBar:number=0;

  listObservers$:Subscription[] =[];


  constructor(public multimediaService:MultimediaService) { }

  ngOnInit(): void {
    // Tracks
    const observerTrack$ = this.multimediaService.trackInfo$.subscribe(
      track => this.mockCover = track);
    this.listObservers$.push(observerTrack$);

    // CurrentTime
    const observerCurrentTime$ = this.multimediaService.timeElapsed$.subscribe(
      time=> {
        this.percentageProgressBar = 0;
        this.timeMusic = time;
      })
    this.listObservers$.push(observerCurrentTime$);

    // RemainingTime
    const observerRemainingTime$ = this.multimediaService.timeRemaining$.subscribe(
      time=> this.remainningMusic = time);
    this.listObservers$.push(observerRemainingTime$);

    // Player status
    const observerPlayerStatus$ = this.multimediaService.playerStatus$.subscribe(
      status=> this.playerStatus=status);
    this.listObservers$.push(observerPlayerStatus$);

    // Player Progress 
    const observerPlayerProgressBar$ = this.multimediaService.playerProgressBar$.subscribe(
      progress => {
        this.percentageProgressBar= progress+0;
        // console.log(progress);
        
      });
    this.listObservers$.push(observerPlayerProgressBar$);
  }

  ngOnDestroy(): void {    
    this.listObservers$.forEach( u => u.unsubscribe());    
    this.multimediaService.audio.load();
  }

  setProgress(event:any){
    // Obtengo el contennedor del progress
    const divProgress:HTMLElement = this.progressBar.nativeElement;
    const {x, width}= divProgress.getBoundingClientRect();    
    
    // Obtengo la cordenada
    const {clientX } = event;

    // Obtengo el porcentaje
    // const startProgress= 0;
    const endProgress= width;
    const position = clientX - x;
    const percentage =  (position*100) / endProgress;

    // console.log(startProgress,"-",endProgress);
    // console.log(position);
    
    // console.log("---------------");
    this.multimediaService.setTimeAudio(percentage);




  }


}
