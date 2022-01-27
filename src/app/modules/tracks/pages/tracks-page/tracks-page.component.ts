import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@mCore/models/tracks.interface';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  data_model:Array<TrackModel>=[];

  constructor() { }

  ngOnInit(): void {
    const data:any = (dataRaw as any).default;
    this.data_model = data.data
  }

}
