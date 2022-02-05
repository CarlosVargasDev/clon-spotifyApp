import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TrackModel } from '../../core/models/tracks.interface';



@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<TrackModel> = new EventEmitter<TrackModel>();

  constructor() { }



}
