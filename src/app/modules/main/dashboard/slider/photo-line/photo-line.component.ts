import {AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-photo-line',
  templateUrl: './photo-line.component.html',
  styleUrls: ['./photo-line.component.less']
})
export class PhotoLineComponent implements OnInit, AfterViewInit {
  offsetInterval = interval(10);
  @ViewChild('slider') slider: ElementRef | undefined;
  @ViewChildren('slide') slides: QueryList<ElementRef> | undefined;
  @Input() position: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    const slides = this.slides?.toArray();

    /*this.offsetInterval.subscribe(() => {
      if (this.slider?.nativeElement){
        //console.log(this.slider)
        this.slider.nativeElement.scrollLeft = this.slider?.nativeElement.scrollLeft + 1;
      }
    });*/
    let parentScrollWidth = 0;
    let parentWidth = 0;
    if (this.slider){
      parentScrollWidth = this.slider!.nativeElement.scrollWidth;
      parentWidth = this.slider!.nativeElement.offsetWidth;
    }
    slides?.map((item: ElementRef) => {
      this.offsetInterval.subscribe(() => {
        if (item.nativeElement.classList.contains('top')){

          item.nativeElement.style.left = item.nativeElement.offsetLeft - 1 + 'px';
          setTimeout(() => item.nativeElement.style.position = 'absolute');
          const parent = item.nativeElement.parentElement;

          // console.log('top', parent.scrollWidth);

          if (item.nativeElement.offsetLeft < 0 && Math.abs(item.nativeElement.offsetLeft) > item.nativeElement.offsetWidth) {
            item.nativeElement.style.opacity = '0';
            item.nativeElement.style.left = parent.scrollWidth + 40 + 'px';
            item.nativeElement.style.opacity = '1';
          }

        } else {
          item.nativeElement.style.right = parentWidth - item.nativeElement.offsetWidth - item.nativeElement.offsetLeft - 1 + 'px';
          setTimeout(() => item.nativeElement.style.position = 'absolute');

          const right = parseInt(item.nativeElement.style.right, 10);
          if (right < 0 && Math.abs(right) > item.nativeElement.offsetWidth){
            item.nativeElement.style.opacity = '0';
            item.nativeElement.style.right = parentScrollWidth - item.nativeElement.offsetWidth + 40 + 'px';
            item.nativeElement.style.opacity = '1';
          }

          if (right < 0 && Math.abs(right) > item.nativeElement.offsetWidth + 1){
            item.nativeElement.style.opacity = '0';
            let r = Math.trunc(Math.abs(right) / (item.nativeElement.offsetWidth + 40));
            item.nativeElement.style.right = parentWidth + r * (item.nativeElement.offsetWidth + 40) - item.nativeElement.offsetWidth + 'px';
            item.nativeElement.style.opacity = '1';
          }
        }
      });
    });
  }

}
