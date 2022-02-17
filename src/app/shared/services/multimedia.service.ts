import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TrackModel } from '../../core/models/tracks.interface';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  // callback: EventEmitter<TrackModel> = new EventEmitter<TrackModel>();
  
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement; 
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
  public playerProgressBar$: BehaviorSubject<number> = new BehaviorSubject(0);

  
  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(track=>{
      this.setAudio(track);
    });
    this.escucharEventos();
  }

  public setAudio(track: TrackModel): void{    
    const urlAudio = `http://${track.url}`;
    this.audio.src= urlAudio;
    this.audio.play();  
  }
  

  public setTimeAudio(percentage: number){
    const {duration}  = this.audio; 
    const percentageToSeconds = (percentage*duration) / 100;    
    this.audio.currentTime = percentageToSeconds;
    
  }


  // ---------------------------------------
  // Metodo para manejar eventos
  // ---------------------------------------
  private escucharEventos(){
    this.audio.addEventListener('timeupdate', ()=>this.calculateTime(), false);
    this.audio.addEventListener('playing', (state:any)=>this.setPlayerStatus(state), false);
    this.audio.addEventListener('play', (state:any)=>this.setPlayerStatus(state), false);
    this.audio.addEventListener('pause', (state:any)=>this.setPlayerStatus(state), false);
    this.audio.addEventListener('ended', (state:any)=>this.setPlayerStatus(state), false);
  }
  // ---------------------------------------
  // Metodos Para calcular el tiempo
  // ---------------------------------------
  private calculateTime():void{
    const {currentTime, duration} = this.audio;
    this.setCurrentTime(currentTime);
    this.setRemainingTime(currentTime, duration);
    this.setPlayerProgress(currentTime, duration);
  }

  private setCurrentTime(currentTime:number):void{
    let segundos = Math.floor(currentTime%60);
    let minutos =  Math.floor( (currentTime/60)%60);
    const mostrarSegundos = (segundos < 10)? `0${segundos}`: segundos;
    const mostrarMinutos = (minutos < 10)? `0${minutos}`: minutos;
    const formato =  `${mostrarMinutos}:${mostrarSegundos}`;
    this.timeElapsed$.next(formato);
  }

  private setRemainingTime(currentTime:number, duration:number):void{
    let remainnig = duration - currentTime;
    let segundos = Math.floor(remainnig%60);
    let minutos =  Math.floor( (remainnig/60)%60);
    const mostrarSegundos = (segundos < 10)? `0${segundos}`: segundos;
    const mostrarMinutos = (minutos < 10)? `0${minutos}`: minutos;
    const formato =  `-${mostrarMinutos}:${mostrarSegundos}`;
    this.timeRemaining$.next(formato);
  }

  // ---------------------------------------
  // Metodos Play / Pausa
  // ---------------------------------------
  private setPlayerStatus(state:any){
    switch(state.type){
      case 'play':
        this.playerStatus$.next("play");
        break;
      case 'playing':
        this.playerStatus$.next("playing");
        break;
      case 'ended':
        this.playerStatus$.next("ended");
        break;
      default: 
        this.playerStatus$.next("paused");
        break;
    } 
  }

  togglePlayer():void{
    (this.audio.paused)? this.audio.play():this.audio.pause();
    
  }


  // Metodos ProgressBar
  private setPlayerProgress(currentTime:number, duration:number){
    let progress =   (currentTime*100) / duration;
    this.playerProgressBar$.next(progress);
  }

}
