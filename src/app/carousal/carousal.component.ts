import {Component, OnDestroy, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit, OnDestroy {

  @Input() private sources: string[];
  @Input() private config: any;
  private autoplayIntervalId;
  public loadedImages: string[];
  public galleryLength: number;
  public currentSlide = 0;


  ngOnInit() {
    this.initData();
    this.startAutoplay(5000);
  }

  public initData() {
    this.galleryLength = this.sources.length;

    this.loadedImages = this.sources;

    if (this.galleryLength < 2) {
      return;
    }
  }

  public onChangeSlide(direction: string): void {
    if (direction === 'prev') {
      this.currentSlide = this.currentSlide === 0 ? this.loadedImages.length - 1 : --this.currentSlide;
    } else {
      this.currentSlide = this.currentSlide === this.loadedImages.length - 1 ? 0 : ++this.currentSlide;
    }
  }

  public onChangeSlideArrow(direction: string) {

    if (this.autoplayIntervalId) {
      clearInterval(this.autoplayIntervalId);
    }
    this.onChangeSlide(direction);
    this.startAutoplay(5000);
  }

  private startAutoplay(delay: number): void {
    this.autoplayIntervalId = setInterval(() => {
      this.onChangeSlide('next');
    }, delay);
  }

  ngOnDestroy() {
    if (this.autoplayIntervalId) {
      clearInterval(this.autoplayIntervalId);
    }
  }


}
