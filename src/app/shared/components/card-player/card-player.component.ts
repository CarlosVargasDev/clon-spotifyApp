import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@mCore/models/tracks.interface';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() track!:TrackModel;
  @Input() mode: 'small' | 'big' = 'small';

  
  constructor(private multimediaService:MultimediaService) { }

  ngOnInit(): void {
  }

  sendToPlay(track:TrackModel){
    // console.log("Enviando al reproductor", track);
    this.multimediaService.callback.emit(track);
  }
}
