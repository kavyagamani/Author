import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { BookComponent } from './component/book/book.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
   { path: "about", component: AboutComponent },
   { path: "book", component: BookComponent },
   { path: "contact", component: ContactComponent },
   { path: "nav", component: NavComponent },
   { path: "footer", component: FooterComponent },
   {path:"login",component:LoginComponent}
   
];
