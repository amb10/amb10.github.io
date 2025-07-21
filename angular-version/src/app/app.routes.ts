import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Services } from './services/services';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home, title: 'Lauren Keltz Styling' },
  { path: 'about', component: About, title: 'About' },
  { path: 'services', component: Services, title: 'Services' },
  { path: 'contact', component: Contact, title: 'Contact' },
  // { path: '**', component: PageNotFoundComponent },
];
