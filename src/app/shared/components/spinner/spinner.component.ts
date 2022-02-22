import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements AfterViewInit {
  @ViewChild("spinner") spinner!: ElementRef;
  @Input() size: string="small";
  // #spinner
  
  constructor(private renderer: Renderer2) { }


  ngAfterViewInit(){
    this.setSizeSpiner();
  }

  setSizeSpiner(){
    const divSpinner = this.spinner.nativeElement;
    switch (this.size) {
      case "small":
          this.renderer.addClass(divSpinner,"spinner-small")  
        break;
      case "medium":
          this.renderer.addClass(divSpinner,"spinner-medium")  
        break;
      case "large":
          this.renderer.addClass(divSpinner,"spinner-large")  
        break;
      case "extra-large":
          this.renderer.addClass(divSpinner,"spinner-extra-large")  
        break;
    
      default:
        break;
    }

    


  }

}
