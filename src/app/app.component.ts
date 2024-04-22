import { LoginComponent } from './component/login/login.component';
import  auth  from 'firebase/app';
import { AboutComponent } from './component/about/about.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { BookComponent } from './component/book/book.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { SliderComponent } from './component/slider/slider.component';
import { LandpageComponent } from './component/landpage/landpage.component';
import { environment } from '../environments/environment';
import { AuthService } from './shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,AboutComponent,BookComponent,ContactComponent,
            NavComponent,FooterComponent,SliderComponent,LandpageComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular app';
  // baseUrl:string = environment.baseUrl;
  constructor() { }

}
