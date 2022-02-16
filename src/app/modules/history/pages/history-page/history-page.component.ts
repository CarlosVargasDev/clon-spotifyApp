import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@mCore/models/tracks.interface';
import { SearchService } from '../../services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  resultados_busqueda$: Observable<any> = of([]);

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  recivirData(termino: string){
    this.resultados_busqueda$ = this.searchService.searchTracks$(termino);
  }

}
