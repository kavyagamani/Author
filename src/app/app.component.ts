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
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,AboutComponent,BookComponent,ContactComponent,
            NavComponent,FooterComponent,SliderComponent,LandpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular app';
  // baseUrl:string = environment.baseUrl;
  constructor() { }

  // signInWithGoogle() {
  //   this.authService.googleSignIn()
  //     .then(res => {
  //       // Handle successful authentication
  //       console.log('Successfully logged in with Google!', res);
  //     })
  //     .catch(error => {
  //       // Handle authentication failure
  //       console.error('Google authentication failed:', error);
  //     });
  // }

  // signOut() {
  //   this.authService.signOut();
  // }
}
