// import  auth from 'firebase/app';
import * as auth from 'firebase/auth';
import { Firestore } from '@angular/fire/firestore';
import { Injectable ,NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import{AngularFirestore,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { error } from 'console';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData:any;//saved log in user data

  constructor(
    public afs:AngularFirestore,//inject firestore service
    public afauth:AngularFireAuth,//inject firebase auth service
    public router:Router,
    public ngzone:NgZone
  ) {
    this.afauth.authState.subscribe(user=>
    {
      if(user)
        {
          this.userData =user;
          localStorage.setItem('user',JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);

        }
        else{
          localStorage.setItem('user','null');
          JSON.parse(localStorage.getItem('user')!);
        }
    })
   }

   //sign in with google
  //  GoogleAuth()
  //  {
  //   return this.AuthLogin(new GoogleAuthProvider()).then((res:any)=>
  //   {
  //     this.router.navigate(['dashboard']);
  //   });
  //  }
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['dashboard']);
    });
  }
  
//auth logic to run provider
   AuthLogin(provider:any)
   {
    return this.afauth.signInWithPopup(provider)
       .then((result)=>
      {
        this.router.navigate(['dashboard']);

        this.SetUserData(result.user);

      })
      .catch((error)=>
      {
        window.alert(error)
      })

   }

   //setting userdata
   SetUserData(user:any)
   {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const userData: User = {
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      photoURL:user.photoURL,
      emailVerified:user.emailVerified,
    };
    return userRef.set(userData,
      {
        merge:true,
      });
   }

  

}


