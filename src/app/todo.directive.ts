import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTodo]'
})
export class TodoDirective {

  constructor(private element:ElementRef) {

   }

   @HostListener('mouseenter') onMouseEnter()
   //quand je mets le pointeur sur qq chose
   { this.setShadow('5px 5px 10px 2px rgba(0,0,0,.5);')

   }


   @HostListener('mouseenter') onMouseLeave()
   { this.setShadow('none') }

   setShadow(shadow:string){
    this.element.nativeElement.setAttribute('style',`box-shadows:${shadow}`)
    //element est un api cest un element à referencer (elementRef)
    //type ou style cest attribute


   }

}
