import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css']
})
export class ImageSlideComponent {
  @Input() public src: string;
  @Input() public slideNo: number;
  @Input() public isHidden: boolean;

  constructor() {
  }

}
