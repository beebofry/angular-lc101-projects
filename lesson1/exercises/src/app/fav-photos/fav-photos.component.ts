import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos!';
  image1 = 'https://live.staticflickr.com/1896/30802094948_2767c6db5d_m.jpg';
  image2 = 'https://live.staticflickr.com/5464/8960691111_6bae8ae117_m.jpg';
  image3 = 'https://live.staticflickr.com/8442/7801846634_9511fb9d8d_m.jpg';

  constructor() { }

  ngOnInit() {
  }

}