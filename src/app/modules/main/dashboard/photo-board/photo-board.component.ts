import { Component, OnInit } from '@angular/core';

interface BoardPhoto {
  name: string;
  path: string;
  position: {
    x: number,
    y: number
  };
  transform: number;
}

const PHOTOS_DATA: BoardPhoto[] = [
  {name: 'slide.jpg', path: '/assets/gallery/slide.jpg', position: {x: 309, y: 50}, transform: -8},
  {name: 'slide.jpg', path: '/assets/gallery/slide2.jpg', position: {x: 352, y: 187}, transform: -18},
  {name: 'slide2.jpg', path: '/assets/gallery/slide2.jpg', position: {x: 384, y: 386}, transform: 10},
  {name: 'slide3.jpg', path: '/assets/gallery/slide3.jpg', position: {x: -400, y: 400}, transform: -6},
  {name: 'slide3.jpg', path: '/assets/gallery/slide3.jpg', position: {x: -100, y: 50}, transform: -2},
  {name: 'slide2.jpg', path: '/assets/gallery/slide.jpg', position: {x: -190, y: 200}, transform: 10},
];

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.less']
})
export class PhotoBoardComponent implements OnInit {
  photos: BoardPhoto[] = PHOTOS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
