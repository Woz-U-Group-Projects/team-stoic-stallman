import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-slick',
  templateUrl: './ng-slick.component.html',
  styleUrls: ['./ng-slick.component.scss']
})

export class NgSlickComponent implements OnInit {
  title = 'ngSlick';
    slides = [
      {img: '../../assets/slideshow/slide1.jpg'},
      {img: '../../assets/slideshow/slide2.jfif'},
      {img: '../../assets/slideshow/slide3.jpg'},
      {img: '../../assets/slideshow/slide4.jpg'},
      {img: '../../assets/slideshow/slide5.jpg'},
      {img: '../../assets/slideshow/slide6.png'},
      {img: '../../assets/slideshow/slide7.png'},
      {img: '../../assets/slideshow/slide8.jpg'},
      {img: '../../assets/slideshow/slide9.jpg'},
      {img: '../../assets/slideshow/slide10.jpg'},
      {img: '../../assets/slideshow/slide11.png'},
      {img: '../../assets/slideshow/slide12.jfif'},
      {img: '../../assets/slideshow/slide13.jfif'},
      {img: '../../assets/slideshow/slide14.jfif'},
      {img: '../../assets/slideshow/slide15.jfif'},
      {img: '../../assets/slideshow/slide16.jpg'},
      {img: '../../assets/slideshow/slide17.jpg'},
      {img: '../../assets/slideshow/slide18.jpg'},
      {img: '../../assets/slideshow/slide19.jpg'},
      {img: '../../assets/slideshow/slide20.png'},
      {img: '../../assets/slideshow/slide21.jpg'},
      {img: '../../assets/slideshow/slide22.jpg'}
    ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    dots: true,
    infinite: false
  };
  addSlide() {
    this.slides.push({img: 'http://placehold.it/350x150/777777'});
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  constructor() { }

  ngOnInit() {
  }

}
