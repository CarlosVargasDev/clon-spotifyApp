import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@mCore/models/tracks.interface';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() track!:TrackModel;
  @Input() mode: 'small' | 'big' = 'small';

  
  constructor() { }

  ngOnInit(): void {
    console.log(this.track);
    
  }

}
