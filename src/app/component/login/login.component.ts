import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Injectable ,NgZone} from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import  auth from 'firebase/app';
import { AuthProvider } from '@angular/fire/auth';
import firebase from 'firebase/app';



@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 
  constructor(public authService: AuthService) {}

  
}
