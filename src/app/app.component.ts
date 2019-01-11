import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public imageSources: string[] = [
    'http://i44.tinypic.com/4vpoj5.jpg',
    'http://i50.tinypic.com/15i125j.jpg',
    'http://i44.tinypic.com/rm70n6.jpg'
  ];
}
