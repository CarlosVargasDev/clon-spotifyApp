import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@mCore/models/tracks.interface';

import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  campo:"name" | "album"= "name";
  ordenacion = "asc";


  @Input() tracks: TrackModel[] = []
  constructor() { }

  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default;
    this.tracks = data;

  }

  cambiarOrden(campo:"name"| "album"){
    (this.ordenacion === 'asc') ? this.ordenacion="desc": this.ordenacion="asc";
  }
  

}
