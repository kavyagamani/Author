import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { SliderComponent } from '../slider/slider.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-landpage',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NavComponent,SliderComponent,FooterComponent],
  templateUrl: './landpage.component.html',
  styleUrl: './landpage.component.scss'
})
export class LandpageComponent {
  landpage={
    title:"Our",
    title1:"Books",
    description:"A writer’s business is to affect the reader’s imagination.",
    Innerbook:[
      {id:1, image:"../assets/images/malgudi-days.jpg", title:"Malgudi Days", name:" Read More"},
      {id:2, image:"../assets/images/themaneater.jpg", title:"The Man Eater Of Malgudi", name:" Read More"},
      {id:3, image:"../assets/images/thevendor.jpg", title:"The Vendor Of Sweets", name:" Read More"},
      {id:4, image:"../assets/images/talkative-man.png", title:"Talkative Man", name:" Read More"},
    ],
    abouttitle:"About",
    abouttitle1:"Us",
    aboutdescription:"The writer should be not only a visionary but a seer who can see the past in one eye, the present in another, and the future in a third.",
   description2:`Rasipuram Krishnaswami Narayanaswami, better known as R.K. Narayan, was one of India's most celebrated and beloved authors of the 20th century. Born on October 10, 1906, in Chennai, Tamil Nadu, Narayan's literary contributions have left an indelible mark on Indian literature.

   Narayan's writing often revolved around the fictional town of Malgudi, which served as the backdrop for many of his stories. His works are characterized by their simple yet profound narratives, insightful observations of Indian society, and humorous portrayals of everyday life.
   
   One of his most famous works is the novel "Swami and Friends" (1935), which marked the beginning of his illustrious career. This novel, along with others like "The Bachelor of Arts" (1937) and "The Guide" (1958), captures the essence of Indian life, exploring themes such as tradition, modernity, and the individual's quest for identity.`,
  aboutread:"Read More",
  abouturl:"",
  abouimage:"../assets/images/narayan.jpg",
  contacttitle:"Contact",
  contacttitle1:"Us",
  contactdescription:"Writing is a struggle against silence",
  Iconcontact:[
    {id:1,text:"Address:",icon:"fa-map-marker-alt",name:"Madras, Tamil Nadu"},
    {id:2,text:"Email:",icon:"fa-envelope",name:"xxxxxxx&#64;gmail.com"},
    {id:3,text:"Phone:",icon:"fa-phone-alt",name:"+1234567890"},


  ]

 
  }
  constructor(private router: Router){}
  onModal()
  {
    this.router.navigate(['book']);
  }

}
