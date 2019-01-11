import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.css']
})
export class ArrowsComponent {

  @Output() changeSlide: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  public onChangeSlide(direction: string): void {
    this.changeSlide.emit(direction);
  }

}
