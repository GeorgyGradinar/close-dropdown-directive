import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appCloseBlock]'
})
export class CloseBlockDirective {
  @Output() closeBlock: EventEmitter<void> = new EventEmitter<void>();
  constructor(private el: ElementRef) { }

  @HostListener('window: click', ['$event']) click($event: PointerEvent){
    let dontTouch = ($event.target as any).parentElement;
    if (dontTouch !== this.el.nativeElement){
      this.closeBlock.emit()
    }
  }
}
