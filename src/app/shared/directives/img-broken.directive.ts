import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError():void{
    const elNative = this.host.nativeElement;
    elNative.src = '../../../assets/images/img-broken.jpg';  
    // console.log("Esta imagen revento: ", this.host);
    
  }

  constructor(private host: ElementRef) { }

}
