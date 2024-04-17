import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SliderComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact={
    title:"Reach Us",
    // url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15559585.175487055!2d72.18679423391465!3d22.351114478136188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff3ad069071%3A0xa4271dffd45615b!2sIndia!5e0!3m2!1sen!2sin!4v1618443787974!5m2!1sen!2sin"
    contacttitle:"Contact",
    contacttitle1:"Us",
    contactdescription:"Writing is a struggle against silence",
    Iconcontact:[
      {id:1,text:"Address:",icon:"fa-map-marker-alt",name:"Madras, Tamil Nadu"},
      {id:2,text:"Email:",icon:"fa-envelope",name:"xxxxxxx&#64;gmail.com"},
      {id:3,text:"Phone:",icon:"fa-phone-alt",name:"+1234567890"},
    ]
  
  }


}
