import { Injectable ,NgZone} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from 'express';
import {GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from '@angular/fire/auth';
import{AngularFirestore,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userdata:any;

  constructor(
    public afs:AngularFirestore,
    public afauth:AngularFireAuth,
    public router:Router,
    public ngzone:NgZone
  ) {
    this.afauth.authState.subscribe((user) =>
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
    });
   }

   //sign in with google
   GoogleAuth()
   {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res:any)=>
    {
      this.router.navigate(['dashboard']);
    });
   }
//auth logic to run provider
   AuthLogin(provider:any)
   {
    return this.afauth
      .signInWithPopup(provider)
       .then((result)=>
      {
        this.router.navigate(['dashboard']);

        this.SetUserData(result.user);

      })
      .catch((error)=>
      {
        window.alert(error);
      });

   }

   //setting userdata
   SetUserData(user:any)
   {
    const UserRef:AngularFirestoreDocument<any>= this.afs.doc{
      users/$(user.uid)
    };
    const UserData:User ={
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      photoURL:user.photoURL,
      emailVerified:user.emailVerified,
    };
    return UserRef.set(userdata,
      {
        merge:true,
      });
   }

  

}


