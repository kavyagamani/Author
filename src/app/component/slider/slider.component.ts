import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  slider={
  
      title:"You become writer by writing.",title1:"It is a yoga.!", description:"Life is about making right things",description1:"and going on..",img:"../assets/images/lib.png",
      title2:"You become writer by writing.",title3:"It is a yoga.!", description2:"It seems to me that",description3:"we generally do not have  a correct measure of our own wisdom.",img1:"../assets/images/book1.jpg",
      title4:"You become writer by writing.",title5:"It is a yoga.!", description4:"Past is gone, present is going,",description5:"and tomorrow is day after tomorrow’s yesterday.So why worry about anything? God is in all this...", img2:"../assets/images/lib1.jpg",
      prev:"Previous",
      next:"Next"
    
  }

}
