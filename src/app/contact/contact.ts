import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faThreads,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [MatIconModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faInstagram, faThreads);
  }
}
