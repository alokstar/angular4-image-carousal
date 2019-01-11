import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarousalComponent} from './carousal.component';
import {ImageSlideComponent} from './image-slide/image-slide.component';
import {ArrowsComponent} from './arrows/arrows.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarousalComponent, ImageSlideComponent, ArrowsComponent],
  exports: [CarousalComponent]
})
export class CarousalModule {
}
