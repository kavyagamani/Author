import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  nav={
    title : "Novauth",
    nav1:"Home",
    nav2:"About us",
    nav3:"Our Books",
    nav4:"Contact Us",
    sign:"Sign Up"
  }
}
